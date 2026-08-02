/* ============================================================
   CART.JS — Carrito de compras (estado real, persistente)
   ------------------------------------------------------------
   Usa localStorage como base de datos temporal del carrito.
   Cuando conectes Supabase, reemplaza save()/load() por llamadas
   a la tabla `cart_items` (o guarda el carrito en la sesión del
   usuario autenticado). La interfaz (drawer, badge, totales)
   no necesita cambiar.
   ============================================================ */

const SHIPPING_FLAT = 12;
const FREE_SHIPPING_FROM = 150;
const STORAGE_KEY = "mariekids_cart";

const Cart = {
  items: [], // [{id, name, price, size, color, qty, image}]

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
    document.getElementById("cartDrawer")?.classList.add("open");
    document.getElementById("cartOverlay")?.classList.add("show");
  },

  closeDrawer() {
    document.getElementById("cartDrawer")?.classList.remove("open");
    document.getElementById("cartOverlay")?.classList.remove("show");
  },

  pulseIcon() {
    const badge = document.getElementById("cartCount");
    if (!badge) return;
    badge.classList.remove("pulse");
    void badge.offsetWidth; // reinicia la animación
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
          return `
          <div class="cart-item">
            <div class="cart-item-img ph-${ph.grad}"><span>${ph.emoji}</span></div>
            <div class="cart-item-info">
              <h5>${i.name}</h5>
              <span class="cart-item-meta">Talla ${i.size} · ${i.color}</span>
              <div class="cart-item-row">
                <div class="qty-stepper">
                  <button aria-label="Restar" onclick="Cart.updateQty('${i.key}', ${i.qty - 1})">−</button>
                  <span>${i.qty}</span>
                  <button aria-label="Sumar" onclick="Cart.updateQty('${i.key}', ${i.qty + 1})">+</button>
                </div>
                <b>S/ ${(i.price * i.qty).toFixed(0)}</b>
              </div>
            </div>
            <button class="cart-item-remove" aria-label="Quitar producto" onclick="Cart.remove('${i.key}')">✕</button>
          </div>`;
        })
        .join("");
    }

    const sub = this.subtotal();
    const ship = this.shipping();
    document.getElementById("cartSubtotal").textContent = `S/ ${sub.toFixed(0)}`;
    document.getElementById("cartShipping").textContent =
      ship === 0 ? "Gratis" : `S/ ${ship.toFixed(0)}`;
    document.getElementById("cartTotal").textContent = `S/ ${this.total().toFixed(0)}`;

    const barPct = Math.min(100, (sub / FREE_SHIPPING_FROM) * 100);
    const bar = document.getElementById("shipBar");
    if (bar) {
      bar.style.width = `${barPct}%`;
      const note = document.getElementById("shipNote");
      if (sub >= FREE_SHIPPING_FROM) {
        note.textContent = "🎉 ¡Tienes envío gratis!";
      } else {
        note.textContent = `Te faltan S/ ${(FREE_SHIPPING_FROM - sub).toFixed(0)} para envío gratis`;
      }
    }
  },

  init() {
    this.load();
    this.render();
  },
};

document.addEventListener("DOMContentLoaded", () => Cart.init());
