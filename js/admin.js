/* ============================================================
   ADMIN.JS — Panel de administración de producto
   ============================================================ */

const adminState = {
  category: "all",
  search: "",
};

function adminManagedProducts() {
  return PRODUCTS.filter((p) => ADMIN_MANAGED_CATEGORIES.includes(p.category));
}

function adminCategoryName(slug) {
  const c = CATEGORIES.find((c) => c.slug === slug);
  return c ? c.name : slug;
}

function buildAdminTabs() {
  const cats = ADMIN_MANAGED_CATEGORIES;
  const tabsHTML =
    `<button class="admin-tab ${adminState.category === "all" ? "active" : ""}" onclick="adminSetCategory('all')">Todas (${adminManagedProducts().length})</button>` +
    cats
      .map((slug) => {
        const n = PRODUCTS.filter((p) => p.category === slug).length;
        return `<button class="admin-tab ${adminState.category === slug ? "active" : ""}" onclick="adminSetCategory('${slug}')">${adminCategoryName(slug)} (${n})</button>`;
      })
      .join("");
  document.getElementById("adminTabs").innerHTML = tabsHTML;
}

function adminSetCategory(slug) {
  adminState.category = slug;
  buildAdminTabs();
  renderAdminTable();
}

function adminFilteredProducts() {
  let list = adminManagedProducts();
  if (adminState.category !== "all") list = list.filter((p) => p.category === adminState.category);
  if (adminState.search) {
    const q = adminState.search.toLowerCase();
    list = list.filter((p) => p.name.toLowerCase().includes(q) || p.id.toLowerCase().includes(q));
  }
  return list;
}

function computeDiscountPct(price, oldPrice) {
  if (!oldPrice || oldPrice <= price) return null;
  return Math.round(100 - (price / oldPrice) * 100);
}

function adminRowHTML(p) {
  const pct = computeDiscountPct(p.price, p.oldPrice);
  const normalValue = p.oldPrice || p.price;
  const offerValue = p.oldPrice ? p.price : "";
  const badgeOptions = [
    ["", "Ninguno"],
    ["nuevo", "🆕 Nuevo Ingreso"],
    ["tendencia", "🔥 Tendencia"],
    ["liquidacion", "🏷 Liquidación"],
  ];
  return `
    <div class="admin-row" data-id="${p.id}">
      <div class="name">${p.name}<small>${p.id} · ${adminCategoryName(p.category)}</small></div>

      <div class="admin-field">
        <label>Precio normal</label>
        <input type="number" min="0" step="1" value="${normalValue}" data-role="normal" onchange="adminUpdatePricing('${p.id}')">
      </div>

      <div class="admin-field">
        <label>Precio de oferta</label>
        <input type="number" min="0" step="1" placeholder="Sin oferta" value="${offerValue}" data-role="offer" onchange="adminUpdatePricing('${p.id}')">
      </div>

      <div class="admin-discount" id="disc-${p.id}">${pct ? `<span class="pct">-${pct}%</span> dscto.` : "Sin descuento"}</div>

      <div class="admin-field">
        <label>Tallas disponibles</label>
        <div class="admin-sizes">
          ${AVAILABLE_SIZES.map(
            (s) => `<span class="admin-size-chip ${p.sizes.includes(s) ? "on" : ""}" onclick="adminToggleSize('${p.id}','${s}',this)">${s}</span>`
          ).join("")}
        </div>
      </div>

      <div>
        <div class="admin-field">
          <label>Estado</label>
          <select onchange="adminUpdateBadge('${p.id}',this.value)">
            ${badgeOptions.map(([v, l]) => `<option value="${v}" ${p.badge === v ? "selected" : ""}>${l}</option>`).join("")}
          </select>
        </div>
        <div class="admin-save-state" id="saved-${p.id}">Guardado ✓</div>
      </div>
    </div>`;
}

function renderAdminTable() {
  const list = adminFilteredProducts();
  const table = document.getElementById("adminTable");
  const empty = document.getElementById("adminEmpty");
  
  if (table) table.innerHTML = list.map(adminRowHTML).join("");
  if (empty) empty.style.display = list.length ? "none" : "block";
}

function adminFindProduct(id) {
  return PRODUCTS.find((p) => p.id === id);
}

function flashSaved(id) {
  const el = document.getElementById(`saved-${id}`);
  if (!el) return;
  el.classList.add("show");
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove("show"), 1200);
}

function refreshDiscountLabel(p) {
  const el = document.getElementById(`disc-${p.id}`);
  if (!el) return;
  const pct = computeDiscountPct(p.price, p.oldPrice);
  el.innerHTML = pct ? `<span class="pct">-${pct}%</span> dscto.` : "Sin descuento";
}

function adminUpdatePricing(id) {
  const p = adminFindProduct(id);
  if (!p) return;
  const row = document.querySelector(`.admin-row[data-id="${id}"]`);
  if (!row) return;
  const normal = Number(row.querySelector('[data-role="normal"]').value) || 0;
  const offerRaw = row.querySelector('[data-role="offer"]').value;
  const offer = Number(offerRaw);

  let patch;
  if (offerRaw && offer > 0 && offer < normal) {
    patch = { price: offer, oldPrice: normal };
  } else {
    patch = { price: normal, oldPrice: null };
    row.querySelector('[data-role="offer"]').value = "";
  }
  Object.assign(p, patch);
  saveAdminOverride(id, patch);
  refreshDiscountLabel(p);
  flashSaved(id);
}

function adminToggleSize(id, size, chip) {
  const p = adminFindProduct(id);
  if (!p) return;
  const has = p.sizes.includes(size);
  p.sizes = has ? p.sizes.filter((s) => s !== size) : [...p.sizes, size];
  p.ageGroup = p.sizes;
  chip.classList.toggle("on", !has);
  saveAdminOverride(id, { sizes: p.sizes });
  flashSaved(id);
}

function adminUpdateBadge(id, value) {
  const p = adminFindProduct(id);
  if (!p) return;
  p.badge = value;
  saveAdminOverride(id, { badge: value });
  flashSaved(id);
}

document.addEventListener("DOMContentLoaded", () => {
  buildAdminTabs();
  renderAdminTable();
  const searchInput = document.getElementById("adminSearch");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      adminState.search = e.target.value.trim();
      renderAdminTable();
    });
  }
});