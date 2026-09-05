/* ============================================================
   CART.JS — Carrito de compras (estado real, persistente)
   ============================================================ */

const SHIPPING_FLAT = 0;
const FREE_SHIPPING_FROM = 150;
const STORAGE_KEY = "mariekids_cart";

const Cart = {
  items: [],

  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      this.items = raw ? JSON.parse(raw) : [];
    } catch (e) {
      this.items = [];
    }
  },

  save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
    this.render();
  },

  add(product, size, color, qty = 1) {
    const key = `${product.id}-${size}-${color}`;
    const existing = this.items.find((i) => i.key === key);
    if (existing) {
      existing.qty += qty;
    } else {
      this.items.push({
        key,
        id: product.id,
        name: product.name,
        price: product.price,
        size,
        color,
        qty,
        image: product.images[0],
      });
    }
    this.save();
    this.openDrawer();
    this.pulseIcon();
  },

  remove(key) {
    this.items = this.items.filter((i) => i.key !== key);
    this.save();
  },

  updateQty(key, qty) {
    const item = this.items.find((i) => i.key === key);
    if (!item) return;
    item.qty = Math.max(1, qty);
    this.save();
  },

  subtotal() {
    return this.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  },

  shipping() {
    if (this.items.length === 0) return 0;
    return this.subtotal() >= FREE_SHIPPING_FROM ? 0 : SHIPPING_FLAT;
  },

  total() {
    return this.subtotal() + this.shipping();
  },

  count() {
    return this.items.reduce((sum, i) => sum + i.qty, 0);
  },

  openDrawer() {
    const drawer = document.getElementById("cartDrawer");
    const overlay = document.getElementById("cartOverlay");
    if (drawer) drawer.classList.add("open");
    if (overlay) overlay.classList.add("show");
  },

  closeDrawer() {
    const drawer = document.getElementById("cartDrawer");
    const overlay = document.getElementById("cartOverlay");
    if (drawer) drawer.classList.remove("open");
    if (overlay) overlay.classList.remove("show");
  },

  pulseIcon() {
    const badge = document.getElementById("cartCount");
    if (!badge) return;
    badge.classList.remove("pulse");
    void badge.offsetWidth;
    badge.classList.add("pulse");
  },

  render() {
    const badge = document.getElementById("cartCount");
    if (badge) {
      badge.textContent = this.count();
      badge.style.display = this.count() > 0 ? "grid" : "none";
    }

    const body = document.getElementById("cartBody");
    if (!body) return;

    if (this.items.length === 0) {
      body.innerHTML = `
        <div class="cart-empty">
          <div class="cart-empty-ic">🛍️</div>
          <p>Tu carrito está vacío</p>
          <a href="tienda.html" class="btn btn-primary">Ir a la tienda</a>
        </div>`;
    } else {
      body.innerHTML = this.items
        .map((i) => {
          const ph = resolvePlaceholder(i.image);
          const imgInner = ph.isReal
            ? `<img src="${ph.url}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;">`
            : `<span>${ph.emoji}</span>`;
          return `
          <div class="cart-item">
            <div class="cart-item-img ${ph.isReal ? "" : "ph-" + ph.grad}">${imgInner}</div>
            <div class="cart-item-info">
              <h5>${i.name}</h5>
              <span class="cart-item-meta">Talla ${i.size} · ${i.color}</span>
              <div class="cart-item-row">
                <div class="qty-stepper">
                  <button aria-label="Restar" onclick="Cart.updateQty('${i.key}', ${i.qty - 1})">−</button>
                  <span>${i.qty}</span>
                  <button aria-label="Sumar" onclick="Cart.updateQty('${i.key}', ${i.qty + 1})">+</button>
                </div>
                <b>S/ ${(i.price * i.qty).toFixed(2)}</b>
              </div>
            </div>
            <button class="cart-item-remove" aria-label="Quitar producto" onclick="Cart.remove('${i.key}')">✕</button>
          </div>`;
        })
        .join("");
    }

    const sub = this.subtotal();
    const ship = this.shipping();
    const cartSubtotal = document.getElementById("cartSubtotal");
    const cartShipping = document.getElementById("cartShipping");
    const cartTotal = document.getElementById("cartTotal");
    
    if (cartSubtotal) cartSubtotal.textContent = `S/ ${sub.toFixed(2)}`;
    if (cartShipping) cartShipping.textContent = ship === 0 ? "Gratis" : `S/ ${ship.toFixed(2)}`;
    if (cartTotal) cartTotal.textContent = `S/ ${this.total().toFixed(2)}`;

    const barPct = Math.min(100, (sub / FREE_SHIPPING_FROM) * 100);
    const bar = document.getElementById("shipBar");
    if (bar) {
      bar.style.width = `${barPct}%`;
      const note = document.getElementById("shipNote");
      if (note) {
        if (sub >= FREE_SHIPPING_FROM) {
          note.textContent = "🎉 ¡Tienes envío gratis!";
        } else {
          note.textContent = `Te faltan S/ ${(FREE_SHIPPING_FROM - sub).toFixed(2)} para envío gratis`;
        }
      }
    }
  },

  init() {
    this.load();
    this.render();
  },
};

document.addEventListener("DOMContentLoaded", () => Cart.init());