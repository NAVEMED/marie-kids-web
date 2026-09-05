/* ============================================================
   TIENDA.JS — Filtros inteligentes y render de productos
   ============================================================ */

const state = {
  category: getParam2("cat") || "all",
  groupFilter: getParam2("catgroup") || null,
  sizes: [],
  colors: [],
  seasons: [],
  maxPrice: 80,
  onlyStock: false,
  sort: "relevance",
  special: getParam2("filter") || null,
};

function getParam2(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function buildFilterUI() {
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
      state.groupFilter === group.slug ||
      (state.category !== "all" && group.subs.includes(state.category));

    const subsHTML = group.subs
      .map((slug) => {
        const c = CATEGORIES.find((x) => x.slug === slug);
        if (!c) return "";
        const label = c.name.replace(group.name, "").trim() || c.name;
        const isChecked = state.category === c.slug && !state.groupFilter;
        return `<label class="filter-opt"><input type="radio" name="cat" ${isChecked ? "checked" : ""} onchange="setCategory('${c.slug}')"> ${label}</label>`;
      })
      .join("");

    return `
      <div class="filter-group${isOpen ? " open" : ""}">
        <button type="button" class="filter-group-toggle" onclick="this.parentElement.classList.toggle('open')">
          <span>${group.emoji} ${group.name}</span>
          <span class="filter-group-arrow">›</span>
        </button>
        <div class="filter-group-body">
          <label class="filter-opt"><input type="radio" name="cat" ${state.groupFilter === group.slug ? "checked" : ""} onchange="setGroupFilter('${group.slug}')"> Todas (${group.name})</label>
          ${subsHTML}
        </div>
      </div>`;
  }).join("");

  catWrap.innerHTML =
    `<label class="filter-opt"><input type="radio" name="cat" ${state.category === "all" && !state.groupFilter ? "checked" : ""} onchange="setCategory('all')"> Todas las categorías</label>` +
    groupsHTML;

  const availableSizes = getAvailableSizes();
  document.getElementById("fSize").innerHTML = availableSizes
    .map(
      (s) =>
        `<label class="filter-opt"><input type="checkbox" value="${s}" ${state.sizes.includes(s) ? "checked" : ""} onchange="toggleArrFilter('sizes','${s}',this)"> ${s}</label>`,
    )
    .join("");

  const availableColors = getAvailableColors();
  document.getElementById("fColor").innerHTML = availableColors
    .map(
      (c) =>
        `<button class="swatch-btn ${state.colors.includes(c.name) ? "active" : ""}" style="background:${c.hex}" title="${c.name}" onclick="toggleArrFilter('colors','${c.name}',this,true)"></button>`,
    )
    .join("");

  const availableSeasons = getAvailableSeasons();
  document.getElementById("fSeason").innerHTML = availableSeasons
    .map(
      (s) =>
        `<label class="filter-opt"><input type="checkbox" value="${s}" ${state.seasons.includes(s) ? "checked" : ""} onchange="toggleArrFilter('seasons','${s}',this)"> ${s.replace("-", " ")}</label>`,
    )
    .join("");

  const priceInput = document.getElementById("fPrice");
  if (priceInput) {
    priceInput.addEventListener("input", (e) => {
      state.maxPrice = Number(e.target.value);
      document.getElementById("priceLabel").textContent =
        `S/ ${state.maxPrice}`;
      applyFilters();
    });
  }

  const stockCheckbox = document.getElementById("fStock");
  if (stockCheckbox) {
    stockCheckbox.addEventListener("change", (e) => {
      state.onlyStock = e.target.checked;
      applyFilters();
    });
  }
}

function getFilteredProductList() {
  let list = PRODUCTS.slice();
  if (state.groupFilter) {
    const group = CATEGORY_GROUPS.find((g) => g.slug === state.groupFilter);
    if (group) {
      list = list.filter((p) => group.subs.includes(p.category));
    }
  } else if (state.category !== "all") {
    list = list.filter((p) => p.category === state.category);
  }
  return list;
}

function getAvailableSizes() {
  const list = getFilteredProductList();
  const sizes = [];

  list.forEach((p) => {
    if (
      p.sizes &&
      Array.isArray(p.sizes) &&
      p.sizes.length > 0 &&
      typeof p.sizes[0] === "object" &&
      p.sizes[0].colors
    ) {
      p.sizes.forEach((s) => {
        if (s.name && !sizes.includes(s.name)) {
          sizes.push(s.name);
        }
      });
    } else if (p.sizes && Array.isArray(p.sizes)) {
      p.sizes.forEach((s) => {
        if (typeof s === "string" && !sizes.includes(s)) {
          sizes.push(s);
        }
      });
    }
  });

  const order = [
    "12-18 Meses",
    "18-24 Meses",
    "1-2 Años",
    "2-3 Años",
    "3-4 Años",
    "2 Años",
    "3 Años",
    "4 Años",
    "5 Años",
    "6 Años",
    "7 Años",
    "8 Años",
    "9 Años",
  ];

  return sizes.sort((a, b) => {
    const ia = order.indexOf(a);
    const ib = order.indexOf(b);
    if (ia === -1) return 1;
    if (ib === -1) return -1;
    return ia - ib;
  });
}

function getAvailableColors() {
  const list = getFilteredProductList();
  const colorMap = new Map();

  list.forEach((p) => {
    if (
      p.sizes &&
      Array.isArray(p.sizes) &&
      p.sizes.length > 0 &&
      typeof p.sizes[0] === "object" &&
      p.sizes[0].colors
    ) {
      p.sizes.forEach((size) => {
        size.colors.forEach((c) => {
          if (!colorMap.has(c.name)) {
            colorMap.set(c.name, c);
          }
        });
      });
    } else if (p.colors && Array.isArray(p.colors)) {
      p.colors.forEach((c) => {
        if (!colorMap.has(c.name)) {
          colorMap.set(c.name, c);
        }
      });
    }
  });

  return [...colorMap.values()];
}

function getAvailableSeasons() {
  const list = getFilteredProductList();
  return [...new Set(list.map((p) => p.season))];
}

function setCategory(cat) {
  state.category = cat;
  state.groupFilter = null;
  applyFilters();
  buildFilterUI();
}

function setGroupFilter(groupSlug) {
  state.groupFilter = groupSlug;
  state.category = "all";
  applyFilters();
  buildFilterUI();
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
  state.groupFilter = null;
  state.sizes = [];
  state.colors = [];
  state.seasons = [];
  state.maxPrice = 80;
  state.onlyStock = false;
  state.special = null;
  history.replaceState(null, "", "tienda.html");
  buildFilterUI();
  const priceInput = document.getElementById("fPrice");
  if (priceInput) priceInput.value = 80;
  document.getElementById("priceLabel").textContent = "S/ 80";
  applyFilters();
}

// ============================================================
// APPLY FILTERS - CORREGIDO
// ============================================================

function applyFilters() {
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) state.sort = sortSelect.value;

  let list = PRODUCTS.slice();

  // 1. Filtro de categoría
  if (state.groupFilter) {
    const group = CATEGORY_GROUPS.find((g) => g.slug === state.groupFilter);
    if (group) {
      list = list.filter((p) => group.subs.includes(p.category));
    }
  } else if (state.category !== "all") {
    list = list.filter((p) => p.category === state.category);
  }

  // 2. Filtro de tallas - CORREGIDO
  if (state.sizes.length) {
    list = list.filter((p) => {
      if (
        p.sizes &&
        Array.isArray(p.sizes) &&
        p.sizes.length > 0 &&
        typeof p.sizes[0] === "object" &&
        p.sizes[0].colors
      ) {
        return p.sizes.some((s) => state.sizes.includes(s.name));
      }
      return p.sizes.some((s) => state.sizes.includes(s));
    });
  }

  // 3. Filtro de colores - CORREGIDO
  if (state.colors.length) {
    list = list.filter((p) => {
      if (
        p.sizes &&
        Array.isArray(p.sizes) &&
        p.sizes.length > 0 &&
        typeof p.sizes[0] === "object" &&
        p.sizes[0].colors
      ) {
        let hasColor = false;
        p.sizes.forEach((size) => {
          size.colors.forEach((c) => {
            if (state.colors.includes(c.name)) hasColor = true;
          });
        });
        return hasColor;
      }
      return p.colors.some((c) => state.colors.includes(c.name));
    });
  }

  // 4. Filtro de temporada
  if (state.seasons.length) {
    list = list.filter((p) => state.seasons.includes(p.season));
  }

  // 5. Filtro de precio
  list = list.filter((p) => p.price <= state.maxPrice);

  // 6. Filtro de stock
  if (state.onlyStock) {
    list = list.filter((p) => p.stock > 0);
  }

  // 7. Filtros especiales
  if (state.special === "nuevos") {
    list = list.filter((p) => p.badge === "nuevo");
  }
  if (state.special === "liquidacion") {
    list = list.filter((p) => p.oldPrice);
  }

  // 8. Orden
  switch (state.sort) {
    case "price-asc":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      list.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      break;
    case "newest":
      list.sort((a, b) => (b.badge === "nuevo") - (a.badge === "nuevo"));
      break;
  }

  // 9. Renderizar resultados
  const resultCount = document.getElementById("resultCount");
  if (resultCount) {
    resultCount.textContent = `${list.length} producto${list.length !== 1 ? "s" : ""}`;
  }

  const shopGrid = document.getElementById("shopGrid");
  const noResults = document.getElementById("noResults");

  if (shopGrid) {
    shopGrid.style.display = list.length ? "grid" : "none";
  }
  if (noResults) {
    noResults.style.display = list.length ? "none" : "block";
  }

  renderGrid("shopGrid", list);
  renderActiveChips();

  const title = getCategoryTitle();
  const bcTitle = document.getElementById("bcTitle");
  if (bcTitle) bcTitle.textContent = title;
  document.title = `${title} · Marie Kids`;
}

function getCategoryTitle() {
  if (state.groupFilter) {
    const group = CATEGORY_GROUPS.find((g) => g.slug === state.groupFilter);
    return group ? group.name : "Tienda";
  }
  if (state.category !== "all") {
    const cat = CATEGORIES.find((c) => c.slug === state.category);
    return cat ? cat.name : "Tienda";
  }
  if (state.special === "nuevos") return "Nuevos Ingresos";
  if (state.special === "liquidacion") return "Liquidación";
  return "Tienda";
}

function renderActiveChips() {
  const chips = [];

  if (state.groupFilter) {
    const group = CATEGORY_GROUPS.find((g) => g.slug === state.groupFilter);
    chips.push([
      `Categoría: ${group ? group.name : state.groupFilter}`,
      () => setGroupFilter(null),
    ]);
  } else if (state.category !== "all") {
    const cat = CATEGORIES.find((c) => c.slug === state.category);
    chips.push([
      `Categoría: ${cat ? cat.name : state.category}`,
      () => setCategory("all"),
    ]);
  }

  state.sizes.forEach((s) =>
    chips.push([
      "Talla " + s,
      () => {
        state.sizes = state.sizes.filter((x) => x !== s);
        applyFilters();
        buildFilterUI();
      },
    ]),
  );

  state.colors.forEach((c) =>
    chips.push([
      "Color " + c,
      () => {
        state.colors = state.colors.filter((x) => x !== c);
        applyFilters();
        buildFilterUI();
      },
    ]),
  );

  if (state.maxPrice < 80) {
    chips.push([
      "Hasta S/ " + state.maxPrice,
      () => {
        state.maxPrice = 80;
        const priceInput = document.getElementById("fPrice");
        if (priceInput) priceInput.value = 80;
        applyFilters();
        buildFilterUI();
      },
    ]);
  }

  if (state.onlyStock) {
    chips.push([
      "Solo en stock",
      () => {
        state.onlyStock = false;
        const stockCheckbox = document.getElementById("fStock");
        if (stockCheckbox) stockCheckbox.checked = false;
        applyFilters();
        buildFilterUI();
      },
    ]);
  }

  const wrap = document.getElementById("activeFilters");
  if (!wrap) return;

  if (!chips.length) {
    wrap.innerHTML = "";
    return;
  }

  window.__chipActions = chips.map((c) => c[1]);
  wrap.innerHTML = chips
    .map(
      (c, i) =>
        `<span class="chip-removable">${c[0]} <button onclick="__chipActions[${i}]()">✕</button></span>`,
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  if (state.special === "nuevos" || state.special === "liquidacion") {
    state.category = "all";
    state.groupFilter = null;
  }

  buildFilterUI();
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) sortSelect.value = state.sort;
  applyFilters();
});
