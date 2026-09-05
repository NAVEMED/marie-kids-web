/* ============================================================
   MAIN.JS — Interacciones del sitio
   ============================================================ */

const WHATSAPP_NUMBER = "51930419029";

function buildWhatsAppLink(product, size, color, qty = 1) {
  const msg =
    `¡Hola Marie Kids! 👋 Quiero comprar:\n\n` +
    `🧸 *${product.name}*\n` +
    `💰 Precio: S/ ${product.price.toFixed(2)}\n` +
    `📏 Talla: ${size}\n` +
    `🎨 Color: ${color}\n` +
    `🔢 Cantidad: ${qty}\n` +
    `🔗 ${window.location.origin}${window.location.pathname.replace(/[^/]+$/, "")}producto.html?slug=${product.slug}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function categoryName(slug) {
  const c = CATEGORIES.find((x) => x.slug === slug);
  return c ? c.name : slug;
}

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
    return { grad: parts[1] || "g1", emoji: parts[2] || "👗", isReal: false };
  } catch (e) {
    return { grad: "g1", emoji: "👗", isReal: false };
  }
}

function phLayer(str, extraClass = "") {
  if (!str) return "";
  if (isRealImage(str)) {
    return `<img class="layer ${extraClass} real-img" src="${str}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;">`;
  }
  const { grad, emoji } = resolvePlaceholder(str);
  return `<div class="layer ${extraClass} ph-${grad}"><span>${emoji}</span></div>`;
}

// ============================================================
// FUNCIÓN PARA OBTENER EL PRIMER COLOR DE UN PRODUCTO
// (Compatible con estructura nueva y antigua)
// ============================================================

function getFirstColor(product) {
  // Estructura DINÁMICA: tallas con colors
  if (
    product.sizes &&
    Array.isArray(product.sizes) &&
    product.sizes.length > 0 &&
    typeof product.sizes[0] === "object" &&
    product.sizes[0].colors
  ) {
    return product.sizes[0].colors[0]?.name || "Sin color";
  }
  // Estructura ANTIGUA: colors array
  if (product.colors && product.colors.length > 0) {
    return product.colors[0].name;
  }
  return "Único";
}

function getFirstSize(product) {
  // Estructura DINÁMICA: tallas con colors
  if (
    product.sizes &&
    Array.isArray(product.sizes) &&
    product.sizes.length > 0 &&
    typeof product.sizes[0] === "object" &&
    product.sizes[0].colors
  ) {
    return product.sizes[0].name;
  }
  // Estructura ANTIGUA: array de strings
  if (product.sizes && product.sizes.length > 0) {
    return product.sizes[0];
  }
  return "Única";
}

// ============================================================
// TARJETA DE PRODUCTO (Compatibilidad con nueva estructura)
// ============================================================

function pcardHTML(p) {
  const discount = p.oldPrice
    ? Math.round(100 - (p.price / p.oldPrice) * 100)
    : null;
  const stars =
    "★".repeat(Math.round(p.rating || 0)) +
    "☆".repeat(5 - Math.round(p.rating || 0));
  const firstColor = getFirstColor(p);
  const firstSize = getFirstSize(p);

  // Obtener tallas para mostrar (compatible con ambos formatos)
  let sizeDisplay = [];
  if (p.sizes && Array.isArray(p.sizes)) {
    if (typeof p.sizes[0] === "object" && p.sizes[0].colors) {
      // Estructura DINÁMICA
      sizeDisplay = p.sizes.map((s) => s.name);
    } else {
      // Estructura ANTIGUA
      sizeDisplay = p.sizes;
    }
  }

  return `
    <div class="pcard" data-id="${p.id}">
      <div class="ph">
        <a href="producto.html?slug=${p.slug}" aria-label="Ver ${p.name}" style="position:absolute; inset:0; z-index:1;">
          ${phLayer(p.images[0], "primary")}
          ${phLayer(p.images[1] || p.images[0], "secondary")}
        </a>
        ${p.badge ? `<span class="tag ${p.badge}">${badgeDisplay(p.badge)}</span>` : ""}
        ${p.stock <= 5 ? `<span class="low-stock">¡Últimas ${p.stock} unidades!</span>` : ""}
        <button class="wish" aria-label="Agregar a favoritos" onclick="toggleWishlist(event,'${p.id}')">♡</button>
        <button class="quick-view" onclick="openQuickView('${p.id}')">Vista rápida</button>
      </div>
      <div class="info">
        <span class="cat">${categoryName(p.category)}</span>
        <h4 style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;word-break:normal;min-height:2.6em;"><a href="producto.html?slug=${p.slug}" title="${p.name}">${p.name}</a></h4>
        <div class="rating"><span class="stars">${stars}</span> ${p.rating || 0} (${p.reviews || 0})</div>
        <div class="price-row">
          <span class="price">S/ ${p.price.toFixed(2)}</span>
          ${p.oldPrice ? `<span class="price-old">S/ ${p.oldPrice.toFixed(2)}</span><span class="discount-pill">-${discount}%</span>` : ""}
        </div>
        <div class="sizes">${sizeDisplay
          .slice(0, 3)
          .map((s) => `<span>${s}</span>`)
          .join(
            "",
          )}${sizeDisplay.length > 3 ? `<span>+${sizeDisplay.length - 3}</span>` : ""}</div>
        <div class="cta-row">
          <button class="btn btn-primary" onclick="Cart.add(PRODUCTS.find(x=>x.id==='${p.id}'), '${firstSize}', '${firstColor}')">Agregar</button>
          <a class="btn cta-wa" target="_blank" rel="noopener" href="${buildWhatsAppLink(p, firstSize, firstColor)}" aria-label="Comprar por WhatsApp">💬</a>
        </div>
      </div>
    </div>`;
}

function renderGrid(containerId, list) {
  const el = document.getElementById(containerId);
  if (el) el.innerHTML = list.map(pcardHTML).join("");
}

function getWishlist() {
  return JSON.parse(localStorage.getItem("mariekids_wishlist") || "[]");
}

function toggleWishlist(evt, id) {
  evt.preventDefault();
  let list = getWishlist();
  const btn = evt.currentTarget;
  if (list.includes(id)) {
    list = list.filter((i) => i !== id);
    btn.classList.remove("active");
    btn.textContent = "♡";
  } else {
    list.push(id);
    btn.classList.add("active");
    btn.textContent = "♥";
  }
  localStorage.setItem("mariekids_wishlist", JSON.stringify(list));
  const badge = document.getElementById("wishCount");
  if (badge) {
    badge.textContent = list.length;
    badge.style.display = list.length > 0 ? "grid" : "none";
  }
}

// ============================================================
// QUICK VIEW (Compatibilidad con nueva estructura)
// ============================================================

let qvState = { product: null, size: null, color: null };

function openQuickView(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return;

  const firstSize = getFirstSize(p);
  const firstColor = getFirstColor(p);

  qvState = { product: p, size: firstSize, color: firstColor };

  // Obtener colores para mostrar (compatible)
  let colorOptions = [];
  const hasDynamicSizes =
    p.sizes &&
    Array.isArray(p.sizes) &&
    p.sizes.length > 0 &&
    typeof p.sizes[0] === "object" &&
    p.sizes[0].colors;

  if (hasDynamicSizes) {
    // Estructura DINÁMICA: tomar colores de la primera talla
    colorOptions = p.sizes[0].colors || [];
  } else {
    // Estructura ANTIGUA
    colorOptions = p.colors || [{ name: "Único", hex: "#CCCCCC" }];
  }

  // Obtener tallas para mostrar
  let sizeOptions = [];
  if (hasDynamicSizes) {
    sizeOptions = p.sizes.map((s) => s.name);
  } else {
    sizeOptions = p.sizes || ["Única"];
  }

  const ph = resolvePlaceholder(p.images[0]);
  const qvImgInner = ph.isReal
    ? `<img src="${ph.url}" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">`
    : `<span>${ph.emoji}</span>`;

  document.getElementById("qvContent").innerHTML = `
    <div class="qv-img ${ph.isReal ? "" : "ph-" + ph.grad}">${qvImgInner}</div>
    <div class="qv-info">
      <span class="cat">${categoryName(p.category)}</span>
      <h3>${p.name}</h3>
      <div class="rating"><span class="stars">${"★".repeat(Math.round(p.rating || 0))}</span> ${p.rating || 0} (${p.reviews || 0} opiniones)</div>
      <div class="pdp-price-row" style="margin:12px 0;">
        <span class="pdp-price" style="font-size:22px;">S/ ${p.price.toFixed(2)}</span>
        ${p.oldPrice ? `<span class="pdp-old">S/ ${p.oldPrice.toFixed(2)}</span>` : ""}
      </div>
      <p style="font-size:13.5px;color:var(--ink-soft);line-height:1.6;">${p.description}</p>
      <div class="option-row">
        <label>Talla</label>
        <div class="opt-pills" id="qvSizes">
          ${sizeOptions.map((s, i) => `<button class="opt-pill ${i === 0 ? "selected" : ""}" onclick="qvSelect('size','${s}',this)">${s}</button>`).join("")}
        </div>
      </div>
      <div class="option-row">
        <label>Color</label>
        <div class="opt-pills" id="qvColors">
          ${colorOptions.map((c, i) => `<button class="opt-color ${i === 0 ? "selected" : ""}" style="background:${c.hex}" title="${c.name}" onclick="qvSelect('color','${c.name}',this)"></button>`).join("")}
        </div>
      </div>
      <div class="qv-actions">
        <button class="btn btn-primary btn-block" onclick="qvAddToCart()">Agregar al carrito</button>
      </div>
      <a class="btn cta-wa" style="width:100%;justify-content:center;margin-top:10px;" target="_blank" rel="noopener" id="qvWaLink">💬 Comprar por WhatsApp</a>
    </div>`;
  updateQvWaLink();
  document.getElementById("qvOverlay").classList.add("show");
}

function qvSelect(type, value, btn) {
  qvState[type] = value;
  btn.parentElement
    .querySelectorAll(".opt-pill,.opt-color")
    .forEach((b) => b.classList.remove("selected"));
  btn.classList.add("selected");
  updateQvWaLink();
}

function updateQvWaLink() {
  const link = document.getElementById("qvWaLink");
  if (link)
    link.href = buildWhatsAppLink(qvState.product, qvState.size, qvState.color);
}

function qvAddToCart() {
  Cart.add(qvState.product, qvState.size, qvState.color);
  closeQuickView();
}

function closeQuickView() {
  document.getElementById("qvOverlay").classList.remove("show");
}

// ============================================================
// HERO SLIDER
// ============================================================

const HeroSlider = {
  index: 0,
  slides: [],
  timer: null,
  init() {
    this.slides = Array.from(document.querySelectorAll(".slide"));
    if (this.slides.length === 0) return;
    this.dotsWrap = document.getElementById("slideDots");
    this.dotsWrap.innerHTML = this.slides
      .map(
        (_, i) =>
          `<button aria-label="Ir a la diapositiva ${i + 1}" onclick="HeroSlider.go(${i})"></button>`,
      )
      .join("");
    this.dots = Array.from(this.dotsWrap.children);
    this.show(0);
    this.play();
    document
      .querySelector(".hero-slider")
      ?.addEventListener("mouseenter", () => this.pause());
    document
      .querySelector(".hero-slider")
      ?.addEventListener("mouseleave", () => this.play());
  },
  show(i) {
    this.slides.forEach((s, idx) => s.classList.toggle("active", idx === i));
    this.dots.forEach((d, idx) => d.classList.toggle("active", idx === i));
    this.index = i;
  },
  next() {
    this.show((this.index + 1) % this.slides.length);
  },
  prev() {
    this.show((this.index - 1 + this.slides.length) % this.slides.length);
  },
  go(i) {
    this.show(i);
    this.restart();
  },
  play() {
    this.timer = setInterval(() => this.next(), 5500);
  },
  pause() {
    clearInterval(this.timer);
  },
  restart() {
    this.pause();
    this.play();
  },
};

function initCountdown() {
  const el = document.getElementById("countdown");
  if (!el) return;
  let target = localStorage.getItem("mariekids_promo_end");
  if (!target || Number(target) < Date.now()) {
    target = Date.now() + 1000 * 60 * 60 * 24;
    localStorage.setItem("mariekids_promo_end", target);
  }
  function tick() {
    const diff = Math.max(0, target - Date.now());
    const h = String(Math.floor(diff / 3600000)).padStart(2, "0");
    const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
    const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");
    el.innerHTML = `<span>${h}</span>:<span>${m}</span>:<span>${s}</span>`;
  }
  tick();
  setInterval(tick, 1000);
}

function initParallax() {
  const els = document.querySelectorAll("[data-parallax]");
  if (!els.length) return;
  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY;
      els.forEach((el) => {
        const speed = Number(el.dataset.parallax) || 0.15;
        el.style.transform = `translateY(${y * speed}px)`;
      });
    },
    { passive: true },
  );
}

function initSearch() {
  const input = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");
  if (!input) return;
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (!q) {
      results.classList.remove("show");
      return;
    }
    const matches = PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        categoryName(p.category).toLowerCase().includes(q),
    ).slice(0, 6);
    results.innerHTML = matches.length
      ? matches
          .map((p) => {
            const ph = resolvePlaceholder(p.images[0]);
            const srImg = ph.isReal
              ? `<img src="${ph.url}" style="width:100%;height:100%;object-fit:cover;">`
              : `<span>${ph.emoji}</span>`;
            return `<a class="sr-item" href="producto.html?slug=${p.slug}">
            <div class="sr-img ${ph.isReal ? "" : "ph-" + ph.grad}">${srImg}</div>
            <div><div class="sr-name">${p.name}</div><div class="sr-price">S/ ${p.price.toFixed(2)}</div></div>
          </a>`;
          })
          .join("")
      : `<div class="sr-empty">No encontramos "${q}". Prueba con otra palabra.</div>`;
    results.classList.add("show");
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-pill")) results.classList.remove("show");
  });
}

function openMobilePanel() {
  document.getElementById("mobilePanel").classList.add("open");
  document.getElementById("scrim").classList.add("show");
}

function closeMobilePanel() {
  document.getElementById("mobilePanel").classList.remove("open");
  document.getElementById("scrim").classList.remove("show");
}

function initReveal() {
  const obs = new IntersectionObserver(
    (entries) =>
      entries.forEach(
        (e) => e.isIntersecting && e.target.classList.add("show"),
      ),
    { threshold: 0.12 },
  );
  document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
}

function scrollRail(id, dir) {
  document.getElementById(id).scrollBy({ left: dir * 300, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  HeroSlider.init();
  initCountdown();
  initParallax();
  initSearch();
  initReveal();

  const wishBadge = document.getElementById("wishCount");
  if (wishBadge) {
    const n = getWishlist().length;
    wishBadge.textContent = n;
    wishBadge.style.display = n > 0 ? "grid" : "none";
  }

  if (document.getElementById("rail-new")) renderGrid("rail-new", PRODUCTS);
  if (document.getElementById("grid-best"))
    renderGrid("grid-best", [...PRODUCTS].reverse().slice(0, 8));

  const megaEl = document.getElementById("megaMenu");
  if (megaEl) {
    megaEl.innerHTML =
      `<div class="mega-cats">` +
      CATEGORY_GROUPS.map(
        (
          g,
        ) => `<a href="tienda.html?catgroup=${g.slug}" class="cat-circle cat-circle-sm">
        <div class="cat-circle-img"><img src="${g.photo}" alt="${g.name}" loading="lazy"></div>
        <span>${g.name}</span>
      </a>`,
      ).join("") +
      `</div>` +
      `<div class="mega-promo"><b>🎉 20% OFF en tu primera compra</b><a href="tienda.html" class="btn btn-sm btn-primary">Comprar</a></div>`;
  }

  const catGridEl = document.getElementById("catGrid");
  if (catGridEl) {
    catGridEl.innerHTML = CATEGORY_GROUPS.map(
      (g) =>
        `<a href="tienda.html?catgroup=${g.slug}" class="cat-circle">
        <div class="cat-circle-img"><img src="${g.photo}" alt="${g.name}" loading="lazy"></div>
        <span>${g.name}</span>
      </a>`,
    ).join("");
  }
});
