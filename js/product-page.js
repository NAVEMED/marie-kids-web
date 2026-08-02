function isRealImage(str){
  if(!str) return false;
  return str.startsWith('http') || str.startsWith('/') || str.startsWith('img/') || str.endsWith('.jpg') || str.endsWith('.png') || str.endsWith('.webp');
}
function resolvePlaceholder(str){
  if(isRealImage(str)){
    return { grad: 'real', emoji: '🖼️', url: str, isReal: true };
  }
  try{
    const parts = str.split(':');
    return { grad: parts[1]||'g1', emoji: parts[2]||'👗', isReal:false, url: null };
  }catch(e){
    return { grad: 'g1', emoji: '👗', isReal:false };
  }
}

/* ============================================================
   PRODUCT-PAGE.JS — Lógica específica de producto.html
   ============================================================ */

function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function switchTab(id, btn) {
  document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
  document.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("tab-" + id).classList.add("active");
}

/* ---------- Vistos recientemente (localStorage) ---------- */
function pushRecentlyViewed(id) {
  let list = JSON.parse(localStorage.getItem("mariekids_recent") || "[]");
  list = list.filter((x) => x !== id);
  list.unshift(id);
  list = list.slice(0, 6);
  localStorage.setItem("mariekids_recent", JSON.stringify(list));
}

let pdpState = { product: null, size: null, color: null, qty: 1, imgIndex: 0 };

function renderPDP() {
  const slug = getParam("slug") || PRODUCTS[0].slug;
  const p = PRODUCTS.find((x) => x.slug === slug) || PRODUCTS[0];
  pdpState.product = p;
  pdpState.size = p.sizes[0];
  pdpState.color = p.colors[0].name;

  document.title = `${p.name} · Marie Kids`;
  document.getElementById("pageTitle").textContent = `${p.name} · Marie Kids`;
  document.getElementById("pageDesc").setAttribute("content", p.description.slice(0, 155));
  document.getElementById("pageCanonical").setAttribute("href", `https://mariekids.pe/producto.html?slug=${p.slug}`);
  document.getElementById("bcCat").textContent = p.category;
  document.getElementById("bcCat").href = `tienda.html?cat=${p.category}`;
  document.getElementById("bcName").textContent = p.name;

  // Schema.org Product
  document.getElementById("productSchema").textContent = JSON.stringify({
    "@context": "https://schema.org/",
    "@type": "Product",
    name: p.name,
    description: p.description,
    sku: p.id,
    offers: {
      "@type": "Offer",
      priceCurrency: "PEN",
      price: p.price,
      availability: p.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: p.rating,
      reviewCount: p.reviews,
    },
  });

  const discount = p.oldPrice ? Math.round(100 - (p.price / p.oldPrice) * 100) : null;
  const stars = "★".repeat(Math.round(p.rating)) + "☆".repeat(5 - Math.round(p.rating));
  const mainPh = resolvePlaceholder(p.images[0]);
  const mainImgHTML = mainPh.isReal ? `<img src="${mainPh.url}" id="pdpMainImgTag" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">` : `<span style="font-size:140px;">${mainPh.emoji}</span>`;

  document.getElementById("pdpContent").innerHTML = `
    <div class="pdp-gallery">
      <div class="pdp-main-img ${mainPh.isReal?'':'ph-'+mainPh.grad}" id="pdpMainImg" onclick="this.classList.toggle('zoomed')">
        ${mainImgHTML}
        <span class="zoom-hint">🔍 Click para zoom</span>
      </div>
      <div class="pdp-thumbs" id="pdpThumbs">
        ${p.images.map((img, i) => {
          const ph = resolvePlaceholder(img);
          const inner = ph.isReal ? `<img src="${ph.url}" style="width:100%;height:100%;object-fit:cover;border-radius:6px;">` : `<span>${ph.emoji}</span>`;
          return `<div class="pdp-thumb ${ph.isReal?'':'ph-'+ph.grad} ${i === 0 ? "active" : ""}" onclick="setMainImage(${i})">${inner}</div>`;
        }).join("")}
      </div>
      <div class="pdp-video">▶ Video del producto (demo — reemplaza por tu video real embebido aquí)</div>
    </div>

    <div class="pdp-info">
      <span class="cat">${p.category}</span>
      <h1>${p.name}</h1>
      <div class="rating"><span class="stars">${stars}</span> ${p.rating} · ${p.reviews} opiniones</div>

      <div class="pdp-price-row">
        <span class="pdp-price">S/ ${p.price}</span>
        ${p.oldPrice ? `<span class="pdp-old">S/ ${p.oldPrice}</span><span class="pdp-discount">-${discount}% OFF</span>` : ""}
      </div>

      <div class="stock-row">
        <span class="stock-dot ${p.stock <= 5 ? "low" : ""}"></span>
        ${p.stock <= 5 ? `¡Solo quedan ${p.stock} unidades!` : "En stock"}
        <span style="color:var(--ink-soft);">· 👀 ${Math.floor(Math.random() * 12) + 3} personas viendo esto</span>
      </div>

      <div class="option-row">
        <label>Talla</label>
        <div class="opt-pills" id="pdpSizes">
          ${p.sizes.map((s, i) => `<button class="opt-pill ${i === 0 ? "selected" : ""}" onclick="pdpSelect('size','${s}',this)">${s}</button>`).join("")}
        </div>
      </div>

      <div class="option-row">
        <label>Color</label>
        <div class="opt-pills" id="pdpColors">
          ${p.colors.map((c, i) => `<button class="opt-color ${i === 0 ? "selected" : ""}" style="background:${c.hex}" title="${c.name}" onclick="pdpSelect('color','${c.name}',this)"></button>`).join("")}
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

  document.getElementById("descText").textContent = p.description;
  document.getElementById("materialText").textContent = p.material;
  document.getElementById("careText").textContent = p.care;

  updatePdpWaLink();
  renderRelated(p);
  renderRecentlyViewed(p);
  pushRecentlyViewed(p.id);
}

function setMainImage(i) {
  const p = pdpState.product;
  const ph = resolvePlaceholder(p.images[i]);
  const main = document.getElementById("pdpMainImg");
  main.className = `pdp-main-img ${ph.isReal?'':'ph-'+ph.grad}`;
  if(ph.isReal){
    main.innerHTML = `<img src="${ph.url}" style="width:100%;height:100%;object-fit:cover;border-radius:12px;"><span class="zoom-hint">🔍 Click para zoom</span>`;
  } else {
    main.innerHTML = `<span style="font-size:140px;">${ph.emoji}</span><span class="zoom-hint">🔍 Click para zoom</span>`;
  }
  document.querySelectorAll(".pdp-thumb").forEach((t, idx) => t.classList.toggle("active", idx === i));
}

function pdpSelect(type, value, btn) {
  pdpState[type] = value;
  btn.parentElement.querySelectorAll(".opt-pill,.opt-color").forEach((b) => b.classList.remove("selected"));
  btn.classList.add("selected");
  updatePdpWaLink();
}

function pdpQty(delta) {
  pdpState.qty = Math.max(1, pdpState.qty + delta);
  document.getElementById("pdpQty").textContent = pdpState.qty;
  updatePdpWaLink();
}

function updatePdpWaLink() {
  const link = document.getElementById("pdpWaLink");
  if (link) link.href = buildWhatsAppLink(pdpState.product, pdpState.size, pdpState.color, pdpState.qty);
}

function pdpAddToCart() {
  Cart.add(pdpState.product, pdpState.size, pdpState.color, pdpState.qty);
}

function renderRelated(p) {
  const related = PRODUCTS.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 4);
  const fallback = related.length ? related : PRODUCTS.filter((x) => x.id !== p.id).slice(0, 4);
  renderGrid("relatedGrid", fallback);
}

function renderRecentlyViewed(current) {
  const ids = JSON.parse(localStorage.getItem("mariekids_recent") || "[]").filter((id) => id !== current.id);
  if (!ids.length) return;
  const list = ids.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);
  if (!list.length) return;
  document.getElementById("recentSection").style.display = "block";
  renderGrid("recentGrid", list);
}

document.addEventListener("DOMContentLoaded", () => {
  renderPDP();
});
