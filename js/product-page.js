/* ============================================================
   PRODUCT-PAGE.JS — Tallas y colores dinámicos
   CON SOPORTE PARA COLORES COMBINADOS (hex con coma)
   ============================================================ */

function isRealImage(str) {
  if (!str) return false;
  return (
    str.startsWith("http") ||
    str.startsWith("/") ||
    str.startsWith(".") ||
    str.endsWith(".jpg") ||
    str.endsWith(".png") ||
    str.endsWith(".webp") ||
    str.endsWith(".jpeg")
  );
}

function resolvePlaceholder(str) {
  if (isRealImage(str)) {
    return { grad: "real", emoji: "🖼️", url: str, isReal: true };
  }
  try {
    const parts = str.split(":");
    return {
      grad: parts[1] || "g1",
      emoji: parts[2] || "👗",
      isReal: false,
      url: null,
    };
  } catch (e) {
    return { grad: "g1", emoji: "👗", isReal: false };
  }
}

function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function switchTab(id, btn) {
  document
    .querySelectorAll(".tab-btn")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelectorAll(".tab-panel")
    .forEach((p) => p.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("tab-" + id).classList.add("active");
}

function pushRecentlyViewed(id) {
  let list = JSON.parse(localStorage.getItem("mariekids_recent") || "[]");
  list = list.filter((x) => x !== id);
  list.unshift(id);
  list = list.slice(0, 6);
  localStorage.setItem("mariekids_recent", JSON.stringify(list));
}

let pdpState = { product: null, size: null, color: null, qty: 1, imgIndex: 0 };

// ============================================================
// GENERAR COLORES - SOPORTE PARA DOS COLORES (hex separados por coma)
// ============================================================

function generateColorHTML(colors) {
  if (!colors || colors.length === 0) {
    return `<span style="font-size:13px;color:var(--ink-soft);">Sin colores</span>`;
  }

  return colors
    .map((c, i) => {
      let style = "";
      let extraClass = "";

      // Verificar si tiene dos colores (hex con coma)
      if (c.hex && c.hex.includes(",")) {
        const colorParts = c.hex.split(",");
        const color1 = colorParts[0].trim();
        const color2 = colorParts[1].trim();
        style = `background: linear-gradient(135deg, ${color1} 50%, ${color2} 50%);`;
        extraClass = "split-color";
      } else {
        // Color único
        style = `background: ${c.hex || "#CCCCCC"};`;
      }

      return `<button class="opt-color ${extraClass} ${i === 0 ? "selected" : ""}" style="${style}" title="${c.name}" onclick="pdpSelectColor('${c.name}', this)"></button>`;
    })
    .join("");
}

function renderPDP() {
  const slug = getParam("slug") || PRODUCTS[0].slug;
  const p = PRODUCTS.find((x) => x.slug === slug) || PRODUCTS[0];
  pdpState.product = p;

  // ✅ Detectar si el producto tiene estructura DINÁMICA (tallas con colors)
  const hasDynamicSizes =
    p.sizes &&
    Array.isArray(p.sizes) &&
    p.sizes.length > 0 &&
    typeof p.sizes[0] === "object" &&
    p.sizes[0].colors;

  // Inicializar según estructura
  if (hasDynamicSizes) {
    pdpState.size = p.sizes[0].name;
    pdpState.color = p.sizes[0].colors[0].name;
  } else {
    pdpState.size = p.sizes[0] || "Única";
    pdpState.color = p.colors ? p.colors[0].name : "Único";
  }

  // ===== SEO =====
  document.title = `${p.name} · Marie Kids`;
  const pageTitle = document.getElementById("pageTitle");
  if (pageTitle) pageTitle.textContent = `${p.name} · Marie Kids`;

  const pageDesc = document.getElementById("pageDesc");
  if (pageDesc) pageDesc.setAttribute("content", p.description.slice(0, 155));

  const pageCanonical = document.getElementById("pageCanonical");
  if (pageCanonical)
    pageCanonical.setAttribute(
      "href",
      `https://mariekids.pe/producto.html?slug=${p.slug}`,
    );

  const bcCat = document.getElementById("bcCat");
  if (bcCat) {
    bcCat.textContent = categoryName(p.category);
    bcCat.href = `tienda.html?cat=${p.category}`;
  }

  const bcName = document.getElementById("bcName");
  if (bcName) bcName.textContent = p.name;

  // ===== Schema.org =====
  const productSchema = document.getElementById("productSchema");
  if (productSchema) {
    productSchema.textContent = JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "Product",
      name: p.name,
      description: p.description,
      sku: p.id,
      offers: {
        "@type": "Offer",
        priceCurrency: "PEN",
        price: p.price,
        availability:
          p.stock > 0
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: p.rating || 0,
        reviewCount: p.reviews || 0,
      },
    });
  }

  // ===== Datos del producto =====
  const discount = p.oldPrice
    ? Math.round(100 - (p.price / p.oldPrice) * 100)
    : null;
  const stars =
    "★".repeat(Math.round(p.rating || 0)) +
    "☆".repeat(5 - Math.round(p.rating || 0));
  const mainPh = resolvePlaceholder(p.images[0]);
  const mainImgHTML = mainPh.isReal
    ? `<img src="${mainPh.url}" id="pdpMainImgTag" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">`
    : `<span style="font-size:140px;">${mainPh.emoji}</span>`;

  // ===== Generar HTML de TALLAS =====
  let sizesHTML = "";
  if (hasDynamicSizes) {
    sizesHTML = p.sizes
      .map(
        (s, i) =>
          `<button class="opt-pill ${i === 0 ? "selected" : ""}" onclick="pdpSelectSize('${s.name}', this)">${s.name}</button>`,
      )
      .join("");
  } else {
    const sizeNames = Array.isArray(p.sizes) ? p.sizes : ["Única"];
    sizesHTML = sizeNames
      .map(
        (s, i) =>
          `<button class="opt-pill ${i === 0 ? "selected" : ""}" onclick="pdpSelectSizeLegacy('${s}', this)">${s}</button>`,
      )
      .join("");
  }

  // ===== Generar HTML de COLORES (usando generateColorHTML) =====
  let colorsHTML = "";
  if (hasDynamicSizes) {
    const currentSize = p.sizes.find((s) => s.name === pdpState.size);
    const currentColors = currentSize ? currentSize.colors : p.sizes[0].colors;
    colorsHTML = generateColorHTML(currentColors);
  } else {
    const colorList = p.colors || [{ name: "Único", hex: "#CCCCCC" }];
    colorsHTML = generateColorHTML(colorList);
  }

  // ===== Renderizar HTML =====
  const pdpContent = document.getElementById("pdpContent");
  if (pdpContent) {
    pdpContent.innerHTML = `
      <div class="pdp-gallery">
        <div class="pdp-main-img ${mainPh.isReal ? "" : "ph-" + mainPh.grad}" id="pdpMainImg" onclick="this.classList.toggle('zoomed')">
          ${mainImgHTML}
          <span class="zoom-hint">🔍 Click para zoom</span>
        </div>
        <div class="pdp-thumbs" id="pdpThumbs">
          ${p.images
            .map((img, i) => {
              const ph = resolvePlaceholder(img);
              const inner = ph.isReal
                ? `<img src="${ph.url}" style="width:100%;height:100%;object-fit:cover;border-radius:6px;">`
                : `<span>${ph.emoji}</span>`;
              return `<div class="pdp-thumb ${ph.isReal ? "" : "ph-" + ph.grad} ${i === 0 ? "active" : ""}" onclick="setMainImage(${i})">${inner}</div>`;
            })
            .join("")}
        </div>
        <div class="pdp-video">▶ Video del producto (-)</div>
      </div>

      <div class="pdp-info">
        <span class="cat">${categoryName(p.category)}</span>
        <h1>${p.name}</h1>
        <div class="rating"><span class="stars">${stars}</span> ${p.rating || 0} · ${p.reviews || 0} opiniones</div>

        <div class="pdp-price-row">
          <span class="pdp-price">S/ ${p.price.toFixed(2)}</span>
          ${p.oldPrice ? `<span class="pdp-old">S/ ${p.oldPrice.toFixed(2)}</span><span class="pdp-discount">-${discount}% OFF</span>` : ""}
        </div>

        <div class="stock-row">
          <span class="stock-dot ${p.stock <= 5 ? "low" : ""}"></span>
          ${p.stock <= 5 ? `¡Solo quedan ${p.stock} unidades!` : "En stock"}
          <span style="color:var(--ink-soft);">· 👀 ${Math.floor(Math.random() * 12) + 3} personas viendo esto</span>
        </div>

        <!-- ============ TALLAS DINÁMICAS ============ -->
        <div class="option-row">
          <label>Talla</label>
          <div class="opt-pills" id="pdpSizes">
            ${sizesHTML}
          </div>
        </div>

        <!-- ============ COLORES DINÁMICOS ============ -->
        <div class="option-row">
          <label>Color</label>
          <div class="opt-pills" id="pdpColors">
            ${colorsHTML}
          </div>
        </div>

        <div class="qty-row">
          <label style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--ink-soft);">Cantidad</label>
          <div class="qty-stepper" style="background:var(--mist);">
            <button onclick="pdpQty(-1)" aria-label="Restar">−</button>
            <span id="pdpQty">1</span>
            <button onclick="pdpQty(1)" aria-label="Sumar">+</button>
          </div>
        </div>

        <div class="pdp-actions">
          <button class="btn btn-outline" onclick="pdpAddToCart()">Agregar al carrito</button>
          <button class="btn btn-primary" onclick="pdpAddToCart(); Cart.openDrawer();">Comprar ahora</button>
        </div>
        <a class="btn cta-wa" id="pdpWaLink" style="width:100%;justify-content:center;margin-top:10px;" target="_blank" rel="noopener">💬 Comprar por WhatsApp</a>

        <div class="trust-row">
          <span class="trust-item">🚚 Envío a todo el Perú</span>
          <span class="trust-item">🔒 Pago 100% seguro</span>
          <span class="trust-item">↩️ Cambios fáciles hasta 7 días</span>
          <span class="trust-item">✅ Garantía de calidad</span>
        </div>
      </div>
    `;
  }

  // ===== Descripción, Material y Cuidados =====
  const descText = document.getElementById("descText");
  const materialText = document.getElementById("materialText");
  const careText = document.getElementById("careText");

  if (descText) descText.textContent = p.description;
  if (materialText) materialText.textContent = p.material;
  if (careText) careText.textContent = p.cuidados;

  updatePdpWaLink();
  renderRelated(p);
  renderRecentlyViewed(p);
  pushRecentlyViewed(p.id);
}

// ============================================================
// FUNCIONES PARA SELECCIÓN DINÁMICA (NUEVA ESTRUCTURA)
// ============================================================

function pdpSelectSize(sizeName, btn) {
  const p = pdpState.product;

  // Verificar si es estructura nueva
  const hasDynamicSizes =
    p.sizes && Array.isArray(p.sizes) && p.sizes[0] && p.sizes[0].colors;
  if (!hasDynamicSizes) {
    pdpSelectSizeLegacy(sizeName, btn);
    return;
  }

  pdpState.size = sizeName;

  btn.parentElement
    .querySelectorAll(".opt-pill")
    .forEach((b) => b.classList.remove("selected"));
  btn.classList.add("selected");

  const selectedSize = p.sizes.find((s) => s.name === sizeName);
  if (!selectedSize) return;

  const colorContainer = document.getElementById("pdpColors");
  if (colorContainer) {
    // ✅ USAR generateColorHTML para los colores de la talla seleccionada
    colorContainer.innerHTML = generateColorHTML(selectedSize.colors);

    if (selectedSize.colors.length > 0) {
      pdpState.color = selectedSize.colors[0].name;
    }
  }

  updatePdpWaLink();
}

function pdpSelectColor(colorName, btn) {
  pdpState.color = colorName;
  btn.parentElement
    .querySelectorAll(".opt-color")
    .forEach((b) => b.classList.remove("selected"));
  btn.classList.add("selected");
  updatePdpWaLink();
}

// ============================================================
// FUNCIONES PARA COMPATIBILIDAD (ESTRUCTURA ANTIGUA)
// ============================================================

function pdpSelectSizeLegacy(sizeName, btn) {
  pdpState.size = sizeName;
  btn.parentElement
    .querySelectorAll(".opt-pill")
    .forEach((b) => b.classList.remove("selected"));
  btn.classList.add("selected");
  updatePdpWaLink();
}

function pdpSelectColorLegacy(colorName, btn) {
  pdpState.color = colorName;
  btn.parentElement
    .querySelectorAll(".opt-color")
    .forEach((b) => b.classList.remove("selected"));
  btn.classList.add("selected");
  updatePdpWaLink();
}

// ============================================================
// FUNCIONES DE UTILIDAD
// ============================================================

function setMainImage(i) {
  const p = pdpState.product;
  const ph = resolvePlaceholder(p.images[i]);
  const main = document.getElementById("pdpMainImg");
  if (!main) return;
  main.className = `pdp-main-img ${ph.isReal ? "" : "ph-" + ph.grad}`;
  if (ph.isReal) {
    main.innerHTML = `<img src="${ph.url}" style="width:100%;height:100%;object-fit:cover;border-radius:12px;"><span class="zoom-hint">🔍 Click para zoom</span>`;
  } else {
    main.innerHTML = `<span style="font-size:140px;">${ph.emoji}</span><span class="zoom-hint">🔍 Click para zoom</span>`;
  }
  document
    .querySelectorAll(".pdp-thumb")
    .forEach((t, idx) => t.classList.toggle("active", idx === i));
}

function pdpQty(delta) {
  pdpState.qty = Math.max(1, pdpState.qty + delta);
  const pdpQtyEl = document.getElementById("pdpQty");
  if (pdpQtyEl) pdpQtyEl.textContent = pdpState.qty;
  updatePdpWaLink();
}

function updatePdpWaLink() {
  const link = document.getElementById("pdpWaLink");
  if (link) {
    link.href = buildWhatsAppLink(
      pdpState.product,
      pdpState.size,
      pdpState.color,
      pdpState.qty,
    );
  }
}

function pdpAddToCart() {
  const p = pdpState.product;
  Cart.add(p, pdpState.size, pdpState.color, pdpState.qty);
}

function renderRelated(p) {
  let related = PRODUCTS.filter(
    (x) => x.category === p.category && x.id !== p.id,
  ).slice(0, 4);
  if (!related.length) {
    related = PRODUCTS.filter((x) => x.id !== p.id).slice(0, 4);
  }
  renderGrid("relatedGrid", related);
}

function renderRecentlyViewed(current) {
  const ids = JSON.parse(
    localStorage.getItem("mariekids_recent") || "[]",
  ).filter((id) => id !== current.id);
  if (!ids.length) return;
  const list = ids
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean);
  if (!list.length) return;
  const recentSection = document.getElementById("recentSection");
  if (recentSection) recentSection.style.display = "block";
  renderGrid("recentGrid", list);
}

document.addEventListener("DOMContentLoaded", () => {
  renderPDP();
});
