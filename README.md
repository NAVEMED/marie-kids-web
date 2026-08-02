# Marie Kids — Proyecto Web

Este es un **prototipo frontend completo y funcional** (sin backend real) de la tienda
online de Marie Kids. Todo lo que ves funciona de verdad en el navegador: menú, carrito,
búsqueda, filtros, quick view, WhatsApp — pero usa datos de ejemplo en vez de una base de
datos real, y el checkout es visual (no procesa pagos).

## 📁 Estructura del proyecto

```
marie-web-v2/
├── index.html          → Página de inicio
├── tienda.html          → Catálogo con filtros
├── producto.html         → Ficha de producto (?slug=...)
├── checkout.html         → Checkout (visual, demo)
├── robots.txt
├── sitemap.xml           → Ejemplo estático (ver nota abajo)
├── css/
│   └── styles.css        → Todo el diseño (variables + componentes)
├── js/
│   ├── data.js            → Catálogo de productos (reemplazar por API real)
│   ├── cart.js             → Lógica del carrito (localStorage)
│   ├── main.js              → Menú, slider, búsqueda, animaciones
│   ├── product-page.js       → Lógica de la ficha de producto
│   └── tienda.js              → Lógica de filtros y orden
└── README.md (este archivo)
```

## ✅ Qué funciona de verdad ahora mismo

- **Menú** con mega menú por categorías, buscador con autocompletado en vivo, menú móvil.
- **Hero** con slider automático (3 slides), flechas, indicadores, parallax suave y contador de oferta con cuenta regresiva real (persiste en localStorage).
- **Tarjetas de producto**: imagen secundaria al hover, badges (Nuevo/Oferta/Más vendido), rating, tallas, colores, "últimas unidades", favoritos, vista rápida (quick view), botones Comprar/Agregar/WhatsApp.
- **Carrito**: se guarda en `localStorage`, persiste al recargar, calcula subtotal/envío/total, barra de progreso de envío gratis.
- **Página de producto**: galería con zoom, miniaturas, selector de talla/color, cantidad, tabs (descripción, guía de tallas, opiniones, FAQ), productos relacionados, vistos recientemente (localStorage).
- **Tienda**: filtros por categoría, talla, color, temporada, precio (slider), stock; orden por precio/rating/nuevos; chips de filtros activos.
- **WhatsApp**: el botón arma automáticamente el mensaje con nombre, precio, talla, color, cantidad y link del producto.
- **SEO básico**: meta title/description, Open Graph, Twitter Card, Schema.org (`Product`, `ClothingStore`), URLs limpias, `robots.txt`, sitemap de ejemplo.
- **Accesibilidad básica**: `aria-label` en botones de ícono, `:focus-visible`, navegación por teclado en enlaces/botones nativos, `prefers-reduced-motion` respetado.
- **Rendimiento**: sin frameworks pesados (vanilla JS), fuentes con `preconnect`, CSS y JS separados y cacheables, animaciones con CSS (no JS) donde es posible.

## 🚧 Qué es solo "arquitectura preparada" (NO conectado)

Esto es lo que pediste dejar listo pero no conectar todavía:

### Base de datos (Supabase / PostgreSQL)

`data.js` está diseñado para que cada producto tenga exactamente la forma de una fila de
base de datos. Esquema sugerido para Supabase:

```sql
-- Tabla de productos
create table products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  category text references categories(slug),
  age_group text[],
  season text,
  price numeric not null,
  old_price numeric,
  badge text, -- 'nuevo' | 'oferta' | 'más-vendido' | null
  rating numeric default 0,
  reviews_count int default 0,
  stock int default 0,
  colors jsonb, -- [{name, hex}]
  sizes text[],
  images text[], -- URLs a Supabase Storage
  description text,
  material text,
  care text,
  created_at timestamptz default now()
);

create table categories (
  slug text primary key,
  name text not null,
  emoji text
);

create table orders (
  id uuid primary key default gen_random_uuid(),
  customer_name text, customer_email text, customer_phone text,
  items jsonb, subtotal numeric, shipping numeric, total numeric,
  payment_method text, status text default 'pending',
  created_at timestamptz default now()
);

create table reviews (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references products(id),
  customer_name text, rating int, comment text, verified boolean default false,
  created_at timestamptz default now()
);
```

Cuando conectes Supabase, el único cambio real de código es reemplazar el array
`PRODUCTS` en `data.js` por:
```js
const { data: PRODUCTS } = await supabase.from('products').select('*');
```
El resto del sitio (render, carrito, filtros, búsqueda) no necesita cambiar porque ya
consume `PRODUCTS` como una lista de objetos con esa forma.

### Pagos reales (Visa/Mastercard/Mercado Pago)

`checkout.html` es una pantalla **visual**. Nunca proceses número de tarjeta directo en
el frontend — para producción necesitas:
1. Una pasarela certificada en Perú (ej. **Izipay**, **Culqi**, o **Mercado Pago Checkout Pro**).
2. Un backend (puede ser una Edge Function de Supabase) que reciba el token de la
   pasarela y confirme el pago antes de crear la orden en la tabla `orders`.
3. Yape/Plin/Transferencia: normalmente se validan mostrando un QR/número y confirmando
   manualmente, o mediante el webhook del banco si tienen esa integración.

### Panel administrativo

No está construido (sería una aplicación aparte, típicamente con autenticación de
Supabase y RLS por rol `admin`). La tabla `orders`, `products`, `reviews` de arriba ya
están pensadas para que un panel Next.js/Supabase las consuma directo.

### Autenticación de clientes

Registro/login/historial de pedidos/direcciones: usar **Supabase Auth** (email+password
o magic link) y relacionar `orders` con `auth.users` mediante `user_id`.

## 🖼️ Reemplazar los emojis por fotos reales

Cada producto en `data.js` tiene un campo `images: ["placeholder:g1:👗", ...]`. Esto es
un formato temporal (`placeholder:<gradiente>:<emoji>`) que uso mientras no hay fotos.

Para poner tus fotos reales, solo cambia esas rutas por URLs de imagen normales, por ejemplo:
```js
images: ["img/vestidos/vestido-fiesta-1.jpg", "img/vestidos/vestido-fiesta-2.jpg"],
```
y en `main.js`/`product-page.js`, cambia la función `phLayer()` (y los lugares que usan
`resolvePlaceholder`) para que rendericen un `<img src="${url}" loading="lazy">` en vez
del emoji. Te puedo ayudar a hacer ese cambio en cuanto tengas las fotos listas — dime
y lo hacemos juntos.

## ⚡ Rendimiento (Lighthouse)

No puedo "medir" un puntaje real de Lighthouse desde aquí (necesita hosting real y
Chrome DevTools), pero el código ya sigue las prácticas que más pesan en el puntaje:
- Sin frameworks pesados, JS vanilla mínimo.
- CSS/JS en archivos separados y cacheables (no todo en un solo HTML).
- `loading="lazy"` listo para usar en cuanto pongas `<img>` reales.
- Fuentes con `preconnect` para reducir latencia.
- Sin layout shifts grandes (tarjetas con `aspect-ratio` fijo).

Una vez subas fotos reales y lo despliegues en Vercel/Netlify, corre Lighthouse ahí
para tener el número real y seguimos optimizando según lo que marque.

## 🔜 Próximos pasos sugeridos

1. Reemplazar productos de ejemplo por tu catálogo real (o conectar Supabase).
2. Subir fotos reales y actualizar `images` en `data.js`.
3. Elegir pasarela de pago y conectar `checkout.html` a un backend real.
4. Desplegar en Vercel (arrastra la carpeta o conecta el repo de GitHub).
5. Configurar dominio propio y actualizar las URLs de `robots.txt`, `sitemap.xml` y los
   `<meta>` de cada página (ahora mismo apuntan a `mariekids.pe` como ejemplo).
