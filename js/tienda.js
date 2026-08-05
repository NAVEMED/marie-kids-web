/* ============================================================
   TIENDA.JS — Filtros, orden y render de la grilla de productos
   ============================================================ */

const state = {
  category: getParam2("cat") || "all",
  sizes: [],
  colors: [],
  seasons: [],
  maxPrice: 80,
  onlyStock: false,
  sort: "relevance",
  special: getParam2("filter") || null, // "nuevos" | "liquidacion"
  openGroup: getParam2("catgroup") || null, // abre el acordeón sin filtrar
};

function getParam2(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function buildFilterUI() {
  // Inyecta el CSS del acordeón una sola vez
  if (!document.getElementById("catAccordionStyle")) {
    const style = document.createElement("style");
    style.id = "catAccordionStyle";
    style.textContent = `
      .filter-group{border-top:1px solid rgba(0,0,0,.08);}
      .filter-group-toggle{display:flex;align-items:center;justify-content:space-between;width:100%;background:none;border:none;padding:8px 0;cursor:pointer;font-size:14px;text-align:left;color:inherit;}
      .filter-group-arrow{transition:transform .15s ease;display:inline-block;}
      .filter-group.open .filter-group-arrow{transform:rotate(90deg);}
      .filter-group-body{display:none;flex-direction:column;padding:0 0 8px 20px;}
      .filter-group.open .filter-group-body{display:flex;}
    `;
    document.head.appendChild(style);
  }

  const catWrap = document.getElementById("fCategory");

  const groupsHTML = CATEGORY_GROUPS.map((group) => {
    const isOpen =
      group.subs.includes(state.category) || group.slug === state.openGroup;
    const subsHTML = group.subs
      .map((slug) => {
        const c = CATEGORIES.find((x) => x.slug === slug);
        if (!c) return "";
        const label = c.name.replace(group.name, "").trim() || c.name;
        return `<label class="filter-opt"><input type="radio" name="cat" ${state.category === c.slug ? "checked" : ""} onchange="setCategory('${c.slug}')"> ${label}</label>`;
      })
      .join("");
    return `
      <div class="filter-group${isOpen ? " open" : ""}">
        <button type="button" class="filter-group-toggle" onclick="this.parentElement.classList.toggle('open')">
          <span>${group.emoji} ${group.name}</span>
          <span class="filter-group-arrow">›</span>
        </button>
        <div class="filter-group-body">${subsHTML}</div>
      </div>`;
  }).join("");

  catWrap.innerHTML =
    `<label class="filter-opt"><input type="radio" name="cat" ${state.category === "all" ? "checked" : ""} onchange="setCategory('all')"> Todas</label>` +
    groupsHTML;

  // El filtro de tallas siempre muestra exactamente estas 9 tallas, en este
  // orden fijo, sin duplicados — sin importar qué tallas tenga cada producto.
  document.getElementById("fSize").innerHTML = AVAILABLE_SIZES
    .map((s) => `<label class="filter-opt"><input type="checkbox" value="${s}" onchange="toggleArrFilter('sizes','${s}',this)"> ${s}</label>`)
    .join("");

  const allColors = [...new Map(PRODUCTS.flatMap((p) => p.colors).map((c) => [c.name, c])).values()];
  document.getElementById("fColor").innerHTML = allColors
    .map((c) => `<button class="swatch-btn" style="background:${c.hex}" title="${c.name}" onclick="toggleArrFilter('colors','${c.name}',this,true)"></button>`)
    .join("");

  const allSeasons = [...new Set(PRODUCTS.map((p) => p.season))];
  document.getElementById("fSeason").innerHTML = allSeasons
    .map((s) => `<label class="filter-opt"><input type="checkbox" value="${s}" onchange="toggleArrFilter('seasons','${s}',this)"> ${s.replace("-", " ")}</label>`)
    .join("");

  document.getElementById("fPrice").addEventListener("input", (e) => {
    state.maxPrice = Number(e.target.value);
    document.getElementById("priceLabel").textContent = `S/ ${state.maxPrice}`;
    applyFilters();
  });
  document.getElementById("fStock").addEventListener("change", (e) => {
    state.onlyStock = e.target.checked;
    applyFilters();
  });
}

function setCategory(cat) {
  state.category = cat;
  applyFilters();
}
function toggleArrFilter(key, value, el, isButton = false) {
  const arr = state[key];
  const idx = arr.indexOf(value);
  if (idx > -1) arr.splice(idx, 1);
  else arr.push(value);
  if (isButton) el.classList.toggle("active");
  applyFilters();
}
function clearFilters() {
  state.category = "all";
  state.sizes = [];
  state.colors = [];
  state.seasons = [];
  state.maxPrice = 80;
  state.onlyStock = false;
  state.special = null;
  history.replaceState(null, "", "tienda.html");
  buildFilterUI();
  document.getElementById("fPrice").value = 80;
  document.getElementById("priceLabel").textContent = "S/ 80";
  applyFilters();
}

function applyFilters() {
  state.sort = document.getElementById("sortSelect").value;
  let list = PRODUCTS.slice();

  if (state.category !== "all") list = list.filter((p) => p.category === state.category);
  if (state.sizes.length) list = list.filter((p) => p.sizes.some((s) => state.sizes.includes(s)));
  if (state.colors.length) list = list.filter((p) => p.colors.some((c) => state.colors.includes(c.name)));
  if (state.seasons.length) list = list.filter((p) => state.seasons.includes(p.season));
  list = list.filter((p) => p.price <= state.maxPrice);
  if (state.onlyStock) list = list.filter((p) => p.stock > 0);
  if (state.special === "nuevos") list = list.filter((p) => p.badge === "nuevo");
  if (state.special === "liquidacion") list = list.filter((p) => p.oldPrice);

  switch (state.sort) {
    case "price-asc": list.sort((a, b) => a.price - b.price); break;
    case "price-desc": list.sort((a, b) => b.price - a.price); break;
    case "rating": list.sort((a, b) => b.rating - a.rating); break;
    case "newest": list.sort((a, b) => (b.badge === "nuevo") - (a.badge === "nuevo")); break;
  }

  document.getElementById("resultCount").textContent = `${list.length} producto${list.length !== 1 ? "s" : ""}`;
  document.getElementById("shopGrid").style.display = list.length ? "grid" : "none";
  document.getElementById("noResults").style.display = list.length ? "none" : "block";
  renderGrid("shopGrid", list);
  renderActiveChips();

  const title = state.category !== "all" ? CATEGORIES.find((c) => c.slug === state.category)?.name : state.special === "nuevos" ? "Nuevos ingresos" : state.special === "liquidacion" ? "Liquidación" : "Tienda";
  document.getElementById("bcTitle").textContent = title || "Tienda";
  document.title = `${title || "Tienda"} · Marie Kids`;
}

function renderActiveChips() {
  const chips = [];
  if (state.category !== "all") chips.push(["Categoría: " + state.category, () => setCategory("all")]);
  state.sizes.forEach((s) => chips.push(["Talla " + s, () => toggleArrFilter("sizes", s)]));
  state.colors.forEach((c) => chips.push(["Color " + c, () => toggleArrFilter("colors", c)]));
  if (state.maxPrice < 80) chips.push(["Hasta S/ " + state.maxPrice, () => { state.maxPrice = 80; document.getElementById("fPrice").value = 80; applyFilters(); }]);
  const wrap = document.getElementById("activeFilters");
  if (!chips.length) { wrap.innerHTML = ""; return; }
  window.__chipActions = chips.map((c) => c[1]);
  wrap.innerHTML = chips.map((c, i) => `<span class="chip-removable">${c[0]} <button onclick="__chipActions[${i}]()">✕</button></span>`).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  buildFilterUI();
  document.getElementById("sortSelect").value = state.sort;
  applyFilters();
});
