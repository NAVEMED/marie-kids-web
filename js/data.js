// ============================================================
// MARIE KIDS - DATA.JS (VERSIÓN DINÁMICA)
// Tallas con colores vinculados para mejor experiencia
// ============================================================

const CATEGORIES = [
  { slug: "cardigans-nina", name: "Cardigans Niña", emoji: "🧶" },
  { slug: "cardigans-nino", name: "Cardigans Niño", emoji: "🧒" },
  { slug: "casacas-nina", name: "Casacas Niña", emoji: "🧥" },
  { slug: "casacas-nino", name: "Casacas Niño", emoji: "🧥" },
  {
    slug: "conjuntos-invierno-nina",
    name: "Conjuntos Invierno Niña",
    emoji: "❄️",
  },
  {
    slug: "conjuntos-invierno-nino",
    name: "Conjuntos Invierno Niño",
    emoji: "❄️",
  },
  { slug: "jeans-nina", name: "Jeans Niña", emoji: "👖" },
  { slug: "jeans-nino", name: "Jeans Niño", emoji: "👖" },
  { slug: "vestidos-nina", name: "Vestidos Niña", emoji: "👗" },
];

const CATEGORY_GROUPS = [
  {
    name: "Cardigans",
    slug: "cardigans",
    emoji: "🧶",
    photo:
      "./public/img/cardigans-nina/c-rdigan-punto-estampado-de-fresas-120-4A.jpg",
    subs: ["cardigans-nina", "cardigans-nino"],
  },
  {
    name: "Casacas",
    slug: "casacas",
    emoji: "🧥",
    photo: "./public/img/casacas-nino/gopenni-amarillo-100-2A.jpg",
    subs: ["casacas-nina", "casacas-nino"],
  },
  {
    name: "Conjuntos Invierno",
    slug: "conjuntos-invierno",
    emoji: "❄️",
    photo:
      "./public/img/conjuntos-invierno-nino/3-set-abrigador-beb-3-pzs-100-2A.jpg",
    subs: ["conjuntos-invierno-nina", "conjuntos-invierno-nino"],
  },
  {
    name: "Jeans",
    slug: "jeans",
    emoji: "👖",
    photo:
      "./public/img/jeans-nina/cod-200-blusa-mangalarga-cereza-pack-130-5A.jpg",
    subs: ["jeans-nina", "jeans-nino"],
  },
  {
    name: "Vestidos",
    slug: "vestidos",
    emoji: "👗",
    photo: "./public/img/vestidos-nina/vestido-princesa-flores-rosa-cod100.jpg",
    subs: ["vestidos-nina"],
  },
];

// ============================================================
// PRODUCTOS - CONVERTIDOS A FORMATO DINÁMICO
// ============================================================

const PRODUCTS = [
  // ============================================================
  // CARDIGANS - FORMATO DINÁMICO (Tallas con Colores Vinculados)
  // ============================================================

  // ============================================================
  // CARDIGANS NIÑA
  // ============================================================

  // ---- TALLA 18-24 MESES ----
  {
    id: "mk-cardigan-nina-fresa-18-24",
    slug: "cardigan-nina-fresa-18-24",
    name: "Cardigan de Punto con Fresas para Niña",
    category: "cardigans-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "12-18 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
      {
        name: "6 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/cardigans-nina/cardigan-fresa-90-18-24M.jpg",
      "./public/img/cardigans-nina/cardigan-fresa-110-3A.jpg",
      "./public/img/cardigans-nina/cardigan-fresa-140-6A.jpg",
    ],
    realImage: "./public/img/cardigans-nina/cardigan-fresa-90-18-24M.jpg",
    description:
      "Cardigan de punto suave con diseño de fresas. Cuello en V y botones frontales. Suave, abrigador y no pica. Ideal para colegio y salidas.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta. Planchar a baja temperatura del revés.",
  },

  // ---- TALLA 2 AÑOS ----
  {
    id: "mk-cardigan-nina-corazones-acuarela-2",
    slug: "cardigan-nina-corazones-acuarela-2",
    name: "Cardigan de Punto con Corazones Acuarela para Niña",
    category: "cardigans-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
      {
        name: "6 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/cardigans-nina/cardigan-corazones-acuarela-100-2A.jpg",
      "./public/img/cardigans-nina/c-rdigan-rosa-con-corazones-140-6A.jpg",
    ],
    realImage:
      "./public/img/cardigans-nina/cardigan-corazones-acuarela-100-2A.jpg",
    description:
      "Cardigan de punto suave con diseño de corazones acuarela. Cuello en V y botones frontales. Suave, abrigador y no pica. Ideal para colegio y salidas.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-cardigan-nina-corazones-cuadros-2",
    slug: "cardigan-nina-corazones-cuadros-2",
    name: "Cardigan de Punto con Corazones y Cuadros para Niña",
    category: "cardigans-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/cardigans-nina/cardigan-corazones-cuadros-100-2A.jpg",
    ],
    realImage:
      "./public/img/cardigans-nina/cardigan-corazones-cuadros-100-2A.jpg",
    description:
      "Cardigan de punto suave con diseño de corazones y cuadros. Cuello en V y botones frontales. Suave, abrigador y no pica.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-cardigan-nina-diamantes-conejitos-2",
    slug: "cardigan-nina-diamantes-conejitos-2",
    name: "Cardigan de Punto con Conejitos y Diamantes para Niña",
    category: "cardigans-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
      {
        name: "6 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/cardigans-nina/cardigan-diamantes-conejitos-100-2A.jpg",
      "./public/img/cardigans-nina/c-rdigan-diamantes-y-conejitos-110-3A.jpg",
    ],
    realImage:
      "./public/img/cardigans-nina/cardigan-diamantes-conejitos-100-2A.jpg",
    description:
      "Cardigan de punto suave con diseño de conejitos y diamantes. Cuello en V y botones frontales. Suave, abrigador y no pica.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-cardigan-nina-flamencos-2",
    slug: "cardigan-nina-flamencos-2",
    name: "Cardigan de Punto con Flamencos para Niña",
    category: "cardigans-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/cardigans-nina/cardigan-flamencos-100-2A.jpg"],
    realImage: "./public/img/cardigans-nina/cardigan-flamencos-100-2A.jpg",
    description:
      "Cardigan de punto suave con diseño de flamencos. Cuello en V y botones frontales. Suave, abrigador y no pica. Ideal para colegio y salidas.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-cardigan-nina-monos-rayas-2",
    slug: "cardigan-nina-monos-rayas-2",
    name: "Cardigan de Punto con Monos y Rayas para Niña",
    category: "cardigans-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/cardigans-nina/cardigan-monos-rayas-100-2A.jpg"],
    realImage: "./public/img/cardigans-nina/cardigan-monos-rayas-100-2A.jpg",
    description:
      "Cardigan de punto suave con diseño de monos y rayas. Cuello en V y botones frontales. Suave, abrigador y no pica.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-cardigan-nina-flores-margaritas-2",
    slug: "cardigan-nina-flores-margaritas-2",
    name: "Cardigan de Punto con Flores Margaritas para Niña",
    category: "cardigans-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/cardigans-nina/chompa-flores-margaritas-100-2A.jpg"],
    realImage:
      "./public/img/cardigans-nina/chompa-flores-margaritas-100-2A.jpg",
    description:
      "Cardigan de punto suave con diseño de flores margaritas. Cuello en V y botones frontales. Suave, abrigador y no pica.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-cardigan-nina-sweater-corazones-2",
    slug: "cardigan-nina-sweater-corazones-2",
    name: "Cardigan de Punto Crema con Corazones para Niña",
    category: "cardigans-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Beige Claro", hex: "#FFF8E1" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/cardigans-nina/sweater-corazones-crema-100-2A.jpg"],
    realImage: "./public/img/cardigans-nina/sweater-corazones-crema-100-2A.jpg",
    description:
      "Cardigan de punto suave con diseño de corazones en crema. Cuello en V y botones frontales. Suave, abrigador y no pica. ¡Última unidad!",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 3 AÑOS ----

  {
    id: "mk-cardigan-nina-nuevo-floral-2-3",
    slug: "cardigan-nina-nuevo-floral-2-3",
    name: "Cardigan de Punto Floral para Niña",
    category: "cardigans-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/cardigans-nina/nuevo-floral-110-3A.jpg"],
    realImage: "./public/img/cardigans-nina/nuevo-floral-110-3A.jpg",
    description:
      "Cardigan de punto suave con diseño floral. Cuello en V y botones frontales. Suave, abrigador y no pica.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-cardigan-nina-osito-azul-2-3",
    slug: "cardigan-nina-osito-azul-2-3",
    name: "Cardigan de Punto con Osito Azul para Niña",
    category: "cardigans-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Azul", hex: "#64B5F6" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/cardigans-nina/osito-azul-110-3A.jpg"],
    realImage: "./public/img/cardigans-nina/osito-azul-110-3A.jpg",
    description:
      "Cardigan de punto suave con diseño de osito azul. Cuello en V y botones frontales. Suave, abrigador y no pica.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-cardigan-nina-corazones-2-3",
    slug: "cardigan-nina-corazones-2-3",
    name: "Cardigan de Punto con Corazones para Niña",
    category: "cardigans-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/cardigans-nina/rosa-con-estampado-de-corazones-110-3A.jpg",
    ],
    realImage:
      "./public/img/cardigans-nina/rosa-con-estampado-de-corazones-110-3A.jpg",
    description:
      "Cardigan de punto suave con diseño de corazones. Cuello en V y botones frontales. Suave, abrigador y no pica.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 3-4 AÑOS ----

  // ---- TALLA 4-5 AÑOS ----
  {
    id: "mk-cardigan-nina-fresa-4-5",
    slug: "cardigan-nina-fresa-4-5",
    name: "Cardigan de Punto con Fresas para Niña",
    category: "cardigans-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Beige", hex: "#F5F5DC" }],
      },
      {
        name: "7 Años",
        colors: [{ name: "Beige", hex: "#F5F5DC" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/cardigans-nina/c-rdigan-punto-estampado-de-fresas-120-4A.jpg",
    ],
    realImage:
      "./public/img/cardigans-nina/c-rdigan-punto-estampado-de-fresas-120-4A.jpg",
    description:
      "Cardigan de punto suave con diseño de fresas. Cuello en V y botones frontales. Suave, abrigador y no pica. Stock limitado.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-cardigan-nina-jacquard-floral-4",
    slug: "cardigan-nina-jacquard-floral-4",
    name: "Cardigan de Punto Jacquard Floral para Niña",
    category: "cardigans-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/cardigans-nina/chompa-de-punto-jacquard-floral-120-4A.jpg",
    ],
    realImage:
      "./public/img/cardigans-nina/chompa-de-punto-jacquard-floral-120-4A.jpg",
    description:
      "Cardigan de punto suave con diseño jacquard floral. Cuello en V y botones frontales. Suave, abrigador y no pica.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 5-6 AÑOS ----
  {
    id: "mk-cardigan-nina-fresas-corazones-5",
    slug: "cardigan-nina-fresas-corazones-5",
    name: "Cardigan de Punto con Fresas y Corazones para Niña",
    category: "cardigans-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/cardigans-nina/cardigan-fresas-y-corazones-en-tonos-ros-130-5A.jpg",
    ],
    realImage:
      "./public/img/cardigans-nina/cardigan-fresas-y-corazones-en-tonos-ros-130-5A.jpg",
    description:
      "Cardigan de punto suave con diseño de fresas y corazones. Cuello en V y botones frontales. Suave, abrigador y no pica.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-cardigan-nina-vacas-5",
    slug: "cardigan-nina-vacas-5",
    name: "Cardigan de Punto con Vacas para Niña",
    category: "cardigans-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/cardigans-nina/estampado-con-figuras-de-vacas-130-5A.jpg",
    ],
    realImage:
      "./public/img/cardigans-nina/estampado-con-figuras-de-vacas-130-5A.jpg",
    description:
      "Cardigan de punto suave con diseño de vacas. Cuello en V y botones frontales. Suave, abrigador y no pica. Divertido y original.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-cardigan-nina-corazones-5",
    slug: "cardigan-nina-corazones-5",
    name: "Cardigan de Punto con Corazones para Niña",
    category: "cardigans-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/cardigans-nina/estampado-de-corazones-130-5A.jpg"],
    realImage: "./public/img/cardigans-nina/estampado-de-corazones-130-5A.jpg",
    description:
      "Cardigan de punto suave con diseño de corazones. Cuello en V y botones frontales. Suave, abrigador y no pica.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-cardigan-nina-corazones-marrones-5",
    slug: "cardigan-nina-corazones-marrones-5",
    name: "Cardigan de Punto con Corazones Marrones para Niña",
    category: "cardigans-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Marrón", hex: "#A1887F" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/cardigans-nina/estampado-de-corazones-marrones-130-5A.jpg",
    ],
    realImage:
      "./public/img/cardigans-nina/estampado-de-corazones-marrones-130-5A.jpg",
    description:
      "Cardigan de punto suave con diseño de corazones marrones. Cuello en V y botones frontales. Suave, abrigador y no pica.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-cardigan-nina-tulipanes-5",
    slug: "cardigan-nina-tulipanes-5",
    name: "Cardigan de Punto con Tulipanes Naranjas para Niña",
    category: "cardigans-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Naranja", hex: "#FFB74D" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/cardigans-nina/estampado-de-tulipanes-en-tonos-naranja-130-5A.jpg",
    ],
    realImage:
      "./public/img/cardigans-nina/estampado-de-tulipanes-en-tonos-naranja-130-5A.jpg",
    description:
      "Cardigan de punto suave con diseño de tulipanes naranjas. Cuello en V y botones frontales. Suave, abrigador y no pica.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-cardigan-nina-leopardo-5",
    slug: "cardigan-nina-leopardo-5",
    name: "Cardigan de Punto con Estampado Leopardo para Niña",
    category: "cardigans-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/cardigans-nina/estampado-leopardo-130-5A.jpg"],
    realImage: "./public/img/cardigans-nina/estampado-leopardo-130-5A.jpg",
    description:
      "Cardigan de punto suave con estampado leopardo. Cuello en V y botones frontales. Suave, abrigador y no pica. Trendy.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-cardigan-nina-detalles-fresas-5",
    slug: "cardigan-nina-detalles-fresas-5",
    name: "Cardigan de Punto con Detalles de Fresas para Niña",
    category: "cardigans-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/cardigans-nina/tejida-con-detalles-de-fresas-130-5A.jpg",
    ],
    realImage:
      "./public/img/cardigans-nina/tejida-con-detalles-de-fresas-130-5A.jpg",
    description:
      "Cardigan de punto suave con detalles de fresas. Cuello en V y botones frontales. Suave, abrigador y no pica.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 6-7 AÑOS ----

  {
    id: "mk-cardigan-nina-rojo-elegante-6",
    slug: "cardigan-nina-rojo-elegante-6",
    name: "Cardigan de Punto Rojo Elegante para Niña",
    category: "cardigans-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "6 Años",
        colors: [{ name: "Rojo", hex: "#EF5350" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/cardigans-nina/chompa-colecci-n-rojo-140-6A.jpg"],
    realImage: "./public/img/cardigans-nina/chompa-colecci-n-rojo-140-6A.jpg",
    description:
      "Cardigan de punto suave en rojo elegante. Cuello en V y botones frontales. Suave, abrigador y no pica.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-cardigan-nina-fresas-flores-6",
    slug: "cardigan-nina-fresas-flores-6",
    name: "Cardigan de Punto con Fresas y Flores para Niña",
    category: "cardigans-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "6 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/cardigans-nina/estampado-de-fresas-y-flores-140-6A.jpg",
    ],
    realImage:
      "./public/img/cardigans-nina/estampado-de-fresas-y-flores-140-6A.jpg",
    description:
      "Cardigan de punto suave con diseño de fresas y flores. Cuello en V y botones frontales.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-cardigan-nina-ositos-fresas-6",
    slug: "cardigan-nina-ositos-fresas-6",
    name: "Cardigan de Punto con Ositos y Fresas Animados para Niña",
    category: "cardigans-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "6 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/cardigans-nina/ositos-y-fresas-de-dibujos-animados-140-6A.jpg",
    ],
    realImage:
      "./public/img/cardigans-nina/ositos-y-fresas-de-dibujos-animados-140-6A.jpg",
    description:
      "Cardigan de punto suave con diseño de ositos y fresas animados. Cuello en V y botones frontales.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 7-8 AÑOS ----

  {
    id: "mk-cardigan-nina-fresas-corazones-7",
    slug: "cardigan-nina-fresas-corazones-7",
    name: "Cardigan de Punto con Fresas y Corazones para Niña",
    category: "cardigans-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "7 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/cardigans-nina/c-rdigan-punto-estampado-de-fresas-con-c-150-7A.jpg",
    ],
    realImage:
      "./public/img/cardigans-nina/c-rdigan-punto-estampado-de-fresas-con-c-150-7A.jpg",
    description:
      "Cardigan de punto suave con diseño de fresas y corazones. Cuello en V y botones frontales.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ============================================================
  // CARDIGANS NIÑO
  // ============================================================

  // ---- TALLA 18-24 MESES ----
  {
    id: "mk-cardigan-nino-dino-18-24",
    slug: "cardigan-nino-dino-18-24",
    name: "Cardigan de Punto con Dinosaurio para Niño",
    category: "cardigans-nino",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "12-18 Meses",
        colors: [{ name: "celeste", hex: "#05f1fd" }],
      },
      {
        name: "4 Años",
        colors: [{ name: "celeste", hex: "#05f1fd" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/cardigans-nino/chompa-dino-90-18-24M.jpg"],
    realImage: "./public/img/cardigans-nino/chompa-dino-90-18-24M.jpg",
    description:
      "Cardigan de punto suave con diseño de dinosaurio. Cuello en V y botones frontales. Suave, abrigador y no pica.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-cardigan-nino-monstruos-18-24",
    slug: "cardigan-nino-monstruos-18-24",
    name: "Cardigan de Punto con Monstruos para Niño",
    category: "cardigans-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "12-18 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
      {
        name: "6 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/cardigans-nino/chompa-monstruos-90-18-24M.jpg"],
    realImage: "./public/img/cardigans-nino/chompa-monstruos-90-18-24M.jpg",
    description:
      "Cardigan de punto suave con diseño de monstruos. Cuello en V y botones frontales. Suave, abrigador y no pica.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-cardigan-nino-rayas-18-24",
    slug: "cardigan-nino-rayas-18-24",
    name: "Cardigan de Punto con Rayas para Niño",
    category: "cardigans-nino",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "12-18 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/cardigans-nino/chompa-rayas-90-18-24M.jpg"],
    realImage: "./public/img/cardigans-nino/chompa-rayas-90-18-24M.jpg",
    description:
      "Cardigan de punto suave con diseño de rayas. Cuello en V y botones frontales. Suave, abrigador y no pica.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 2 AÑOS ----
  {
    id: "mk-cardigan-nino-dino-pastel-2",
    slug: "cardigan-nino-dino-pastel-2",
    name: "Cardigan de Punto con Dinosaurio Pastel para Niño",
    category: "cardigans-nino",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Beige", hex: "#F5F5DC" }],
      },
      {
        name: "6 Años",
        colors: [{ name: "Beige", hex: "#F5F5DC" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/cardigans-nino/chompa-dino-pastel-100-2A.jpg"],
    realImage: "./public/img/cardigans-nino/chompa-dino-pastel-100-2A.jpg",
    description:
      "Cardigan de punto suave con dinosaurio pastel. Cuello en V y botones frontales. Suave, abrigador y no pica.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-cardigan-nino-chompitos-2",
    slug: "cardigan-nino-chompitos-2",
    name: "Cardigan de Punto Amarillo con Chompitos para Niño",
    category: "cardigans-nino",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Amarillo", hex: "#FFF176" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/cardigans-nino/chompitos-amarillo-100-2A.jpg"],
    realImage: "./public/img/cardigans-nino/chompitos-amarillo-100-2A.jpg",
    description:
      "Cardigan de punto suave en amarillo con chompitos. Cuello en V y botones frontales. Suave, abrigador y no pica.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 3 AÑOS ----
  {
    id: "mk-cardigan-nino-aventuras-2-3",
    slug: "cardigan-nino-aventuras-2-3",
    name: "Cardigan de Punto con Aventuras sobre Ruedas para Niño",
    category: "cardigans-nino",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/cardigans-nino/aventuras-sobre-ruedas-110-3A.jpg"],
    realImage: "./public/img/cardigans-nino/aventuras-sobre-ruedas-110-3A.jpg",
    description:
      "Cardigan de punto suave con diseño de aventuras sobre ruedas. Cuello en V y botones frontales.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-cardigan-nino-granja-2-3",
    slug: "cardigan-nino-granja-2-3",
    name: "Cardigan de Punto con Granja Encantada para Niño",
    category: "cardigans-nino",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/cardigans-nino/granja-encantada-110-3A.jpg"],
    realImage: "./public/img/cardigans-nino/granja-encantada-110-3A.jpg",
    description:
      "Cardigan de punto suave con diseño de granja encantada. Cuello en V y botones frontales.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-cardigan-nino-osito-love-2-3",
    slug: "cardigan-nino-osito-love-2-3",
    name: "Cardigan de Punto Blanco con Osito Love para Niño",
    category: "cardigans-nino",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/cardigans-nino/osito-love-blanca-110-3A.jpg"],
    realImage: "./public/img/cardigans-nino/osito-love-blanca-110-3A.jpg",
    description:
      "Cardigan de punto suave blanco con osito Love. Cuello en V y botones frontales. Suave, abrigador y no pica.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-cardigan-nino-zigzag-2-3",
    slug: "cardigan-nino-zigzag-2-3",
    name: "Cardigan de Punto con Zigzag para Niño",
    category: "cardigans-nino",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/cardigans-nino/chompa-zigzag-110-3A.jpg"],
    realImage: "./public/img/cardigans-nino/chompa-zigzag-110-3A.jpg",
    description:
      "Cardigan de punto suave con diseño zigzag. Cuello en V y botones frontales. Suave, abrigador y no pica.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 4 AÑOS ----
  {
    id: "mk-cardigan-nino-azul-rayas-3-4",
    slug: "cardigan-nino-azul-rayas-3-4",
    name: "Cardigan de Punto Azul con Rayas Beige para Niño",
    category: "cardigans-nino",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Beige", hex: "#F5F5DC" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/cardigans-nino/azul-rayas-beige-120-4A.jpg"],
    realImage: "./public/img/cardigans-nino/azul-rayas-beige-120-4A.jpg",
    description:
      "Cardigan de punto suave azul con rayas beige. Cuello en V y botones frontales. Suave, abrigador y no pica.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-cardigan-nino-camellos-3-4",
    slug: "cardigan-nino-camellos-3-4",
    name: "Cardigan de Punto con Camellos para Niño",
    category: "cardigans-nino",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Camel", hex: "#D7CCC8" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/cardigans-nino/cardigan-estampado-de-camellos-01-120-4A.jpg",
    ],
    realImage:
      "./public/img/cardigans-nino/cardigan-estampado-de-camellos-01-120-4A.jpg",
    description:
      "Cardigan de punto suave con diseño de camellos. Cuello en V y botones frontales. Suave, abrigador y no pica.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  {
    id: "mk-cardigan-nino-camellos-02-3-4",
    slug: "cardigan-nino-camellos-02-3-4",
    name: "Cardigan de Punto con Camellos para Niño",
    category: "cardigans-nino",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Camel", hex: "#D7CCC8" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/cardigans-nino/estampado-camellos-02-120-4A.jpg"],
    realImage: "./public/img/cardigans-nino/estampado-camellos-02-120-4A.jpg",
    description:
      "Cardigan de punto suave con diseño de camellos. Cuello en V y botones frontales. Suave, abrigador y no pica.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 5 AÑOS ----
  {
    id: "mk-cardigan-nino-franjas-4-5",
    slug: "cardigan-nino-franjas-4-5",
    name: "Cardigan de Punto con Franjas Azules y Cremas para Niño",
    category: "cardigans-nino",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Azul", hex: "#64B5F6" }],
      },
      {
        name: "6 Años",
        colors: [{ name: "Azul", hex: "#64B5F6" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/cardigans-nino/franjas-horizontales-tonos-de-azul-y-cre-130-5A.jpg",
    ],
    realImage:
      "./public/img/cardigans-nino/franjas-horizontales-tonos-de-azul-y-cre-130-5A.jpg",
    description:
      "Cardigan de punto suave con franjas horizontales azules y cremas. Cuello en V y botones frontales.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 6-7 AÑOS ----
  {
    id: "mk-cardigan-nino-ositos-beige-6",
    slug: "cardigan-nino-ositos-beige-6",
    name: "Cardigan de Punto Beige con Ositos para Niño",
    category: "cardigans-nino",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "6 Años",
        colors: [{ name: "Beige", hex: "#F5F5DC" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/cardigans-nino/chompa-de-ositos-beige-140-6A.jpg"],
    realImage: "./public/img/cardigans-nino/chompa-de-ositos-beige-140-6A.jpg",
    description:
      "Cardigan de punto suave beige con ositos. Cuello en V y botones frontales. Suave, abrigador y no pica.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ============================================================
  // CASACAS - FORMATO DINÁMICO (Tallas con Colores Vinculados)
  // ============================================================

  // ---- CASACA CONEJO ----
  {
    id: "mk-casaca-conejo",
    slug: "casaca-conejo",
    name: "Casaca de Invierno con Conejo para Niña",
    category: "casacas-nina",
    price: 45.1,
    oldPrice: 55,
    badge: "oferta",
    rating: 0,
    reviews: 0,
    stock: 10,
    sizes: [
      {
        name: "1-2 Años",
        colors: [
          { name: "Rosa", hex: "#F8BBD0" },
          { name: "Guinda", hex: "#7D1935" },
        ],
      },
      {
        name: "2-3 Años",
        colors: [
          { name: "Azul Marino", hex: "#1E3A5F" },
          { name: "Rosa Viejo", hex: "#E8A8B8" },
          { name: "Rojo Cereza", hex: "#8B1A1A" },
          { name: "Verde Cemento", hex: "#8D9A8E" },
        ],
      },
      {
        name: "3-4 Años",
        colors: [
          { name: "Rosa Viejo", hex: "#E8A8B8" },
          { name: "Rojo Cereza", hex: "#8B1A1A" },
          { name: "Verde Cemento", hex: "#8D9A8E" },
        ],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/casacas-nina/soft_pink_puffer_coat.jpg",
      "./public/img/casacas-nina/cherry_red_puffer_coat.jpg",
      "./public/img/casacas-nina/navy_puffer_jacket.jpg",
      "./public/img/casacas-nina/mint_green_puffer_coat.jpg",
      "./public/img/casacas-nina/dusty_rose_puffer_coat.jpg",
      "./public/img/casacas-nina/burgundy_puffer_coat_bunny_bag.jpg",
    ],
    realImage: "./public/img/casacas-nina/navy_puffer_jacket.jpg",
    description:
      "Adorable casaca de invierno con diseño de conejito. Con forro polar interior súper calentito, perfecta para los días más fríos. Ideal para niñas de 1 a 4 años. ¡Disponible en varios colores según talla!",
    material:
      "Exterior: 100% Poliéster impermeable. Interior: Forro polar 100% Poliéster.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta. Planchar a baja temperatura del revés.",
  },

  // ---- CASACA CORAZÓN ----
  {
    id: "mk-casaca-corazon",
    slug: "casaca-corazon",
    name: "Casaca de Invierno con Corazón para Niña",
    category: "casacas-nina",
    price: 45.1,
    oldPrice: 55,
    badge: "oferta",
    rating: 0,
    reviews: 0,
    stock: 10,
    sizes: [
      {
        name: "1-2 Años",
        colors: [
          { name: "Lila", hex: "#C5A3D9" },
          { name: "Caqui", hex: "#CBB99A" },
          { name: "Rosa", hex: "#F8BBD0" },
          { name: "Guinda", hex: "#7D1935" },
        ],
      },
      {
        name: "2-3 Años",
        colors: [
          { name: "Lila", hex: "#C5A3D9" },
          { name: "Caqui", hex: "#CBB99A" },
          { name: "Guinda", hex: "#7D1935" },
        ],
      },
      {
        name: "3-4 Años",
        colors: [
          { name: "Negro", hex: "#000000" },
          { name: "Caqui", hex: "#CBB99A" },
          { name: "Lila", hex: "#C5A3D9" },
          { name: "Rosa", hex: "#F8BBD0" },
          { name: "Guinda", hex: "#7D1935" },
        ],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/casacas-nina/dusty_pink_puffer_coat_1.jpg",
      "./public/img/casacas-nina/lila_puffer_coat.jpg",
      "./public/img/casacas-nina/beige_camel_puffer_coat.jpg",
      "./public/img/casacas-nina/guinda_puffer_coat_flatlay.jpg",
      "./public/img/casacas-nina/black_puffer_coat.jpg",
    ],
    realImage: "./public/img/casacas-nina/lila_puffer_coat.jpg",
    description:
      "Casaca de invierno con diseño de corazón y forro polar. ¡Súper calentita y adorable! Disponible en varios colores según talla. Perfecta para los días fríos.",
    material:
      "Exterior: 100% Poliéster impermeable. Interior: Forro polar 100% Poliéster.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta. Planchar a baja temperatura del revés.",
  },

  // ---- CASACA CORREA ----
  {
    id: "mk-casaca-correa",
    slug: "casaca-correa",
    name: "Casaca de Invierno con Correa para Niña",
    category: "casacas-nina",
    price: 45.1,
    oldPrice: 55,
    badge: "oferta",
    rating: 0,
    reviews: 0,
    stock: 10,
    sizes: [
      {
        name: "1-2 Años",
        colors: [
          { name: "Guinda", hex: "#7D1935" },
          { name: "Verde Militar", hex: "#4B5320" },
          { name: "Azul Marino", hex: "#1E3A5F" },
        ],
      },
      {
        name: "2-3 Años",
        colors: [
          { name: "Guinda", hex: "#7D1935" },
          { name: "Azul Marino", hex: "#1E3A5F" },
          { name: "Beige", hex: "#F5F5DC" },
          { name: "Rosa Bebé", hex: "#FFCDB8" },
        ],
      },
      {
        name: "3-4 Años",
        colors: [
          { name: "Verde Militar", hex: "#4B5320" },
          { name: "Azul Marino", hex: "#1E3A5F" },
          { name: "Beige", hex: "#F5F5DC" },
          { name: "Guinda", hex: "#7D1935" },
        ],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/casacas-nina/correa_100_2A_guinda_premium.jpg",
      "./public/img/casacas-nina/correa_100_2A_azul_marino.jpg",
      "./public/img/casacas-nina/correa_100_2A_verde_militar.jpg",
      "./public/img/casacas-nina/correa_100_2A_rosa_bebe.jpg",
      "./public/img/casacas-nina/correa_100_2A_crema.jpg",
    ],
    realImage: "./public/img/casacas-nina/correa_100_2A_rosa_bebe.jpg",
    description:
      "Casaca de invierno con detalle de correa y forro polar. ¡Súper abrigadora y con estilo! Disponible en varios colores según talla. Tallas 1 a 4 años.",
    material:
      "Exterior: 100% Poliéster impermeable. Interior: Forro polar 100% Poliéster.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta. Planchar a baja temperatura del revés.",
  },

  // ---- CASACA MARIPOSA BOMBOM ----
  {
    id: "mk-casaca-mariposa-bombom",
    slug: "casaca-mariposa-bombom",
    name: "Casaca de Invierno con Mariposa Bombom para Niña",
    category: "casacas-nina",
    price: 45.1,
    oldPrice: 55,
    badge: "oferta",
    rating: 0,
    reviews: 0,
    stock: 10,
    sizes: [
      {
        name: "1-2 Años",
        colors: [
          { name: "Rojo", hex: "#C1272D" },
          { name: "Verde menta", hex: "#D6EDE7" },
          { name: "Negro", hex: "#000000" },
        ],
      },
      {
        name: "2-3 Años",
        colors: [
          { name: "Rojo", hex: "#C1272D" },
          { name: "Rosa Salmón", hex: "#FFCDB8" },
          { name: "Verde menta", hex: "#D6EDE7" },
        ],
      },
      {
        name: "3-4 Años",
        colors: [
          { name: "Amarillo Pastel", hex: "#D6B775" },
          { name: "Rojo", hex: "#C1272D" },
          { name: "Verde menta", hex: "#D6EDE7" },
        ],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/casacas-nina/mariposa_rojo.jpg",
      "./public/img/casacas-nina/mariposa_crema.jpg",
      "./public/img/casacas-nina/mariposa_negro.jpg",
      "./public/img/casacas-nina/mariposa_rosa_salmon.jpg",
      "./public/img/casacas-nina/mariposa_verde_menta.jpg",
    ],
    realImage: "./public/img/casacas-nina/mariposa_rosa_salmon.jpg",
    description:
      "Casaca de invierno con diseño de mariposa bombom. ¡Súper calentita y con un diseño único! Forro polar interior. Disponible en varios colores según talla.",
    material:
      "Exterior: 100% Poliéster impermeable. Interior: Forro polar 100% Poliéster.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta. Planchar a baja temperatura del revés.",
  },

  // ---- CASACA MARIPOSA 3D ----
  {
    id: "mk-casaca-mariposa-3d",
    slug: "casaca-mariposa-3d",
    name: "Casaca de Invierno con Mariposa 3D para Niña",
    category: "casacas-nina",
    price: 45.1,
    oldPrice: 55,
    badge: "oferta",
    rating: 0,
    reviews: 0,
    stock: 10,
    sizes: [
      {
        name: "1-2 Años",
        colors: [
          { name: "Azul Marino", hex: "#1E3A5F" },
          { name: "Palo Rosa", hex: "#E8AFAF" },
          { name: "Rosa Chicle", hex: "#FF9EBB" },
          { name: "Rojo", hex: "#C1272D" },
        ],
      },
      {
        name: "2-3 Años",
        colors: [
          { name: "Verde Menta", hex: "#98D8C8" },
          { name: "Azul Marino", hex: "#1E3A5F" },
          { name: "Rosa Chicle", hex: "#FF9EBB" },
          { name: "Rojo", hex: "#C1272D" },
        ],
      },
      {
        name: "3-4 Años",
        colors: [
          { name: "Rojo", hex: "#C1272D" },
          { name: "Palo Rosa", hex: "#E8AFAF" },
          { name: "Azul Marino", hex: "#1E3A5F" },
        ],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/casacas-nina/mariposa3d_azul_marino.jpg",
      "./public/img/casacas-nina/mariposa3d_fucsia.jpg",
      "./public/img/casacas-nina/mariposa3d_palo_rosa.jpg",
      "./public/img/casacas-nina/mariposa3d_rojo.jpg",
      "./public/img/casacas-nina/mariposa3d_verde_agua.jpg",
    ],
    realImage: "./public/img/casacas-nina/mariposa3d_palo_rosa.jpg",
    description:
      "La casaca más especial de la colección. Con una mariposa 3D bordada que le da un toque único. Forro polar interior súper calentito. Disponible en varios colores según talla.",
    material:
      "Exterior: 100% Poliéster impermeable. Interior: Forro polar 100% Poliéster.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta. Planchar a baja temperatura del revés.",
  },

  // ---- CASACA GOPENNI (NIÑO) ----
  {
    id: "mk-casaca-gopenni",
    slug: "casaca-gopenni",
    name: "Casaca de Invierno Gopenni para Niño",
    category: "casacas-nino",
    price: 45.1,
    oldPrice: 55,
    badge: "oferta",
    rating: 0,
    reviews: 0,
    stock: 10,
    sizes: [
      {
        name: "1-2 Años",
        colors: [
          { name: "Verde-Negro", hex: "#81C784,#000000" },
          { name: "Amarillo-Azul", hex: "#FFF176,#64B5F6" },
        ],
      },
      {
        name: "2-3 Años",
        colors: [
          { name: "Marrón-Beige", hex: "#8D6E63,#F5F5DC" },
          { name: "Verde-Negro", hex: "#81C784,#000000" },
          { name: "Amarillo-Azul", hex: "#FFF176,#64B5F6" },
        ],
      },
      {
        name: "3-4 Años",
        colors: [
          { name: "Verde-Negro", hex: "#81C784,#000000" },
          { name: "Amarillo-Azul", hex: "#FFF176,#64B5F6" },
        ],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/casacas-nino/gopenni-amarillo-100-2A.jpg",
      "./public/img/casacas-nino/gopenni-marron-100-2A.jpg",
      "./public/img/casacas-nino/gopenni-verde-100-2A.jpg",
    ],
    realImage: "./public/img/casacas-nino/gopenni-amarillo-100-2A.jpg",
    description:
      "Casaca de invierno Gopenni con forro polar. ¡Súper calentita y con estilo! Disponible en varias combinaciones de colores según talla. Tallas 1 a 4 años.",
    material:
      "Exterior: 100% Poliéster impermeable. Interior: Forro polar 100% Poliéster.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta. Planchar a baja temperatura del revés.",
  },

  // ---- CASACA HONG (NIÑO) ----
  {
    id: "mk-casaca-hong",
    slug: "casaca-hong",
    name: "Casaca de Invierno Hong para Niño",
    category: "casacas-nino",
    price: 45.1,
    oldPrice: 55,
    badge: "oferta",
    rating: 0,
    reviews: 0,
    stock: 10,
    sizes: [
      {
        name: "1-2 Años",
        colors: [
          { name: "Azul Marino", hex: "#001F54" },
          { name: "Plomo Oscuro", hex: "#2F3640" },
          { name: "Verde Militar", hex: "#4B5320" },
        ],
      },
      {
        name: "2-3 Años",
        colors: [
          { name: "Azul Marino", hex: "#001F54" },
          { name: "Negro", hex: "#000000" },
          { name: "Verde Militar", hex: "#4B5320" },
          { name: "Plomo Oscuro", hex: "#2F3640" },
        ],
      },
      {
        name: "3-4 Años",
        colors: [
          { name: "Plomo Oscuro", hex: "#2F3640" },
          { name: "Azul Marino", hex: "#001F54" },
          { name: "Negro", hex: "#000000" },
        ],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/casacas-nino/hong-100-2A.jpg",
      "./public/img/casacas-nino/kids_navy_puffer_coat.jpg",
      "./public/img/casacas-nino/military_olive_puffer_coat.jpg",
      "./public/img/casacas-nino/black_puffer_coat.jpg",
    ],
    realImage: "./public/img/casacas-nino/military_olive_puffer_coat.jpg",
    description:
      "Casaca de invierno Hong con forro polar. ¡Súper calentita y con estilo urbano! Disponible en varios colores según talla. Tallas 1 a 4 años.",
    material:
      "Exterior: 100% Poliéster impermeable. Interior: Forro polar 100% Poliéster.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta. Planchar a baja temperatura del revés.",
  },
  // ============================================================
  // CONJUNTOS DE INVIERNO - FORMATO DINÁMICO
  // (Tallas con Colores Vinculados)
  // ============================================================

  // ============================================================
  // CONJUNTOS DE INVIERNO NIÑA
  // ============================================================

  // ---- TALLA 18-24 MESES ----
  {
    id: "mk-conjunto-nina-18-24-3pzs-chaqueta",
    slug: "conjunto-nina-18-24-3pzs-chaqueta",
    name: "Conjunto de Invierno de 3 Piezas con Chaqueta para Niña",
    category: "conjuntos-invierno-nina",
    price: 48,
    oldPrice: 60,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "12-18 Meses",
        colors: [{ name: "beige", hex: "#F5F5DC" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nina/12m-conjunto-3-pzs-ni-a-chaqueta-chompa-80-12-18M.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nina/12m-conjunto-3-pzs-ni-a-chaqueta-chompa-80-12-18M.jpg",
    description:
      "Conjunto de invierno de 3 piezas para niña. Incluye chaqueta, top y pantalón coordinado. Tejido suave y calentito, perfecto para los días fríos. Ideal para mantenerla abrigada con estilo.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta. Planchar a baja temperatura del revés.",
  },
  {
    id: "mk-conjunto-nina-18-24-bebe-3pzs",
    slug: "conjunto-nina-18-24-bebe-3pzs",
    name: "Conjunto de Bebé de 3 Piezas para Recién Nacido",
    category: "conjuntos-invierno-nina",
    price: 48,
    oldPrice: 60,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "12-18 Meses",
        colors: [{ name: "lila", hex: "#E6E6FA" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nina/12m-conjunto-beb-reci-n-nacido-3-piezas-80-12-18M.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nina/12m-conjunto-beb-reci-n-nacido-3-piezas-80-12-18M.jpg",
    description:
      "Conjunto de 3 piezas para bebé recién nacido. Incluye body, pantalón y chaleco. Tejido súper suave y calentito. Perfecto para mantener a tu bebé abrigado y cómodo.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nina-18-24-overoles",
    slug: "conjunto-nina-18-24-overoles",
    name: "Conjunto de Overoles Peludos para Bebé",
    category: "conjuntos-invierno-nina",
    price: 48,
    oldPrice: 60,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nina/2-conjunto-de-overoles-peludos-y-adorabl-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nina/2-conjunto-de-overoles-peludos-y-adorabl-90-18-24M.jpg",
    description:
      "Conjunto de overoles peludos súper adorables para bebé. Tejido suave y calentito, perfecto para los días fríos. ¡Les encantará a los más pequeños!",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nina-18-24-corazones",
    slug: "conjunto-nina-18-24-corazones",
    name: "Conjunto con Corazones y Pantalón para Niña",
    category: "conjuntos-invierno-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nina/2-conjunto-ni-a-corazones-c-rdigan-panta-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nina/2-conjunto-ni-a-corazones-c-rdigan-panta-90-18-24M.jpg",
    description:
      "Conjunto con cardigan de corazones y pantalón a juego. Suave y cómodo para todo el día. Ideal para los días frescos.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 2 AÑOS ----
  {
    id: "mk-conjunto-nina-2-letras-capucha",
    slug: "conjunto-nina-2-letras-capucha",
    name: "Conjunto de 2 Piezas con Letras y Capucha para Niña",
    category: "conjuntos-invierno-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nina/3-conjunto-2-piezas-letras-con-capucha-o-100-2A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nina/3-conjunto-2-piezas-letras-con-capucha-o-100-2A.jpg",
    description:
      "Conjunto de 2 piezas con letras y capucha. Diseño moderno y cómodo. Perfecto para los días frescos.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nina-2-chaquetas-capucha",
    slug: "conjunto-nina-2-chaquetas-capucha",
    name: "Conjunto de 2 Piezas con Chaquetas y Capucha para Niña",
    category: "conjuntos-invierno-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nina/3-conjunto-2-pzs-chaquetas-ni-a-capucha-100-2A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nina/3-conjunto-2-pzs-chaquetas-ni-a-capucha-100-2A.jpg",
    description:
      "Conjunto de 2 piezas con chaquetas y capucha. Suave y calentito, ideal para el invierno.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nina-2-polo-corazones",
    slug: "conjunto-nina-2-polo-corazones",
    name: "Conjunto de 2 Piezas con Polo de Corazones para Niña",
    category: "conjuntos-invierno-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nina/3-conjunto-2-pzs-ni-a-polo-corazones-man-100-2A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nina/3-conjunto-2-pzs-ni-a-polo-corazones-man-100-2A.jpg",
    description:
      "Conjunto de 2 piezas con polo de corazones y pantalón. Diseño dulce y moderno.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 3 AÑOS ----
  {
    id: "mk-conjunto-nina-3-minnie-daisy",
    slug: "conjunto-nina-3-minnie-daisy",
    name: "Conjunto de 3 Piezas Gris Minnie Daisy para Niña",
    category: "conjuntos-invierno-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Gris", hex: "#9E9E9E" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nina/3-conjunto-3-piezas-gris-minnie-daisy-ch-110-3A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nina/3-conjunto-3-piezas-gris-minnie-daisy-ch-110-3A.jpg",
    description:
      "Conjunto de 3 piezas gris con diseño Minnie Daisy. Suave, cómodo y muy moderno. Ideal para los días de invierno.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nina-3-corazon-chaleco",
    slug: "conjunto-nina-3-corazon-chaleco",
    name: "Conjunto de 3 Piezas con Corazón y Chaleco para Niña",
    category: "conjuntos-invierno-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nina/3-conjunto-3-pzs-mo-ito-coraz-n-chaleco-110-3A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nina/3-conjunto-3-pzs-mo-ito-coraz-n-chaleco-110-3A.jpg",
    description:
      "Conjunto de 3 piezas con corazón y chaleco. Diseño delicado y calentito. Perfecto para el invierno.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nina-3-lila-perrito",
    slug: "conjunto-nina-3-lila-perrito",
    name: "Conjunto Lila con Perrito para Niña",
    category: "conjuntos-invierno-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Lila", hex: "#CE93D8" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nina/3-conjunto-lila-perrito-3-4-chompa-110-3A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nina/3-conjunto-lila-perrito-3-4-chompa-110-3A.jpg",
    description:
      "Conjunto lila con estampado de perrito. Súper tierno y calentito. Ideal para los días fríos.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nina-3-navy-moitos",
    slug: "conjunto-nina-3-navy-moitos",
    name: "Conjunto Navy Blue con Moñitos para Niña",
    category: "conjuntos-invierno-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nina/3-conjunto-navy-blue-mo-itos-2-piezas-110-3A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nina/3-conjunto-navy-blue-mo-itos-2-piezas-110-3A.jpg",
    description:
      "Conjunto navy blue con moñitos. Diseño elegante y moderno. Perfecto para ocasiones especiales.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nina-3-chaquetas-capucha",
    slug: "conjunto-nina-3-chaquetas-capucha",
    name: "Conjunto de 2 Piezas con Chaquetas y Capucha para Niña",
    category: "conjuntos-invierno-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nina/4-conjunto-2-pzs-chaquetas-ni-a-capucha-110-3A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nina/4-conjunto-2-pzs-chaquetas-ni-a-capucha-110-3A.jpg",
    description:
      "Conjunto de 2 piezas con chaquetas y capucha. Suave y calentito, ideal para el invierno.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nina-3-abrigo-pantal",
    slug: "conjunto-nina-3-abrigo-pantal",
    name: "Conjunto de 2 Piezas con Abrigo y Pantalón para Niña",
    category: "conjuntos-invierno-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
      {
        name: "6 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nina/4-conjunto-2-pzs-invierno-abrigo-pantal-110-3A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nina/4-conjunto-2-pzs-invierno-abrigo-pantal-110-3A.jpg",
    description:
      "Conjunto de 2 piezas con abrigo y pantalón. Perfecto para los días más fríos. Suave y calentito.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nina-3-sudadera-capucha",
    slug: "conjunto-nina-3-sudadera-capucha",
    name: "Conjunto de 2 Piezas con Sudadera y Capucha para Niña",
    category: "conjuntos-invierno-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nina/4-conjunto-2-pzs-ni-a-sudadera-capucha-l-110-3A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nina/4-conjunto-2-pzs-ni-a-sudadera-capucha-l-110-3A.jpg",
    description:
      "Conjunto de 2 piezas con sudadera y capucha. Diseño moderno y cómodo. Ideal para el día a día.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nina-3-sudadera-lazo",
    slug: "conjunto-nina-3-sudadera-lazo",
    name: "Conjunto de 2 Piezas con Sudadera y Lazo para Niña",
    category: "conjuntos-invierno-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nina/4-conjunto-2-pzs-ni-a-sudadera-lazo-mang-110-3A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nina/4-conjunto-2-pzs-ni-a-sudadera-lazo-mang-110-3A.jpg",
    description:
      "Conjunto de 2 piezas con sudadera y lazo. Diseño delicado y moderno. Perfecto para ocasiones especiales.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nina-3-varsity-girl",
    slug: "conjunto-nina-3-varsity-girl",
    name: "Conjunto de 2 Piezas Varsity Girl para Niña",
    category: "conjuntos-invierno-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nina/4-conjunto-2pzs-ni-a-varsity-girl-casaca-110-3A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nina/4-conjunto-2pzs-ni-a-varsity-girl-casaca-110-3A.jpg",
    description:
      "Conjunto de 2 piezas estilo Varsity Girl. Diseño moderno y juvenil. Perfecto para los días de invierno.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nina-3-conejo-felpa",
    slug: "conjunto-nina-3-conejo-felpa",
    name: "Conjunto de 3 Piezas con Conejo Unisex de Felpa",
    category: "conjuntos-invierno-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nina/4-conjunto-3-pzs-conejo-unisex-felpa-gru-110-3A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nina/4-conjunto-3-pzs-conejo-unisex-felpa-gru-110-3A.jpg",
    description:
      "Conjunto de 3 piezas con conejo en felpa gruesa. Súper calentito y adorable. Unisex.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 4 AÑOS ----
  {
    id: "mk-conjunto-nina-4-top-manga-larga",
    slug: "conjunto-nina-4-top-manga-larga",
    name: "Conjunto de 2 Piezas con Top Manga Larga para Niña",
    category: "conjuntos-invierno-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nina/5-conjunto-2-pzs-ni-a-top-manga-larga-pa-120-4A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nina/5-conjunto-2-pzs-ni-a-top-manga-larga-pa-120-4A.jpg",
    description:
      "Conjunto de 2 piezas con top manga larga y pantalón. Suave y cómodo para todo el día.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nina-4-retro-mollie",
    slug: "conjunto-nina-4-retro-mollie",
    name: "Conjunto de 3 Piezas Retro Mollie Mae para Niña",
    category: "conjuntos-invierno-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nina/5-conjunto-3-piezas-retro-mollie-mae-top-120-4A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nina/5-conjunto-3-piezas-retro-mollie-mae-top-120-4A.jpg",
    description:
      "Conjunto de 3 piezas estilo Retro Mollie Mae. Diseño moderno y femenino. Ideal para ocasiones especiales.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nina-4-casual-otoño",
    slug: "conjunto-nina-4-casual-otoño",
    name: "Conjunto de 2 Piezas Casual Otoño para Niña",
    category: "conjuntos-invierno-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nina/5-conjunto-ni-a-2-piezas-casual-oto-o-in-120-4A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nina/5-conjunto-ni-a-2-piezas-casual-oto-o-in-120-4A.jpg",
    description:
      "Conjunto de 2 piezas casual otoño. Diseño moderno y cómodo. Perfecto para el día a día.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nina-4-flowers-love",
    slug: "conjunto-nina-4-flowers-love",
    name: "Conjunto de Invierno Flowers Love para Niña",
    category: "conjuntos-invierno-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nina/5-conjunto-ni-a-invierno-flowers-love-3-120-4A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nina/5-conjunto-ni-a-invierno-flowers-love-3-120-4A.jpg",
    description:
      "Conjunto de invierno con diseño Flowers Love. Dulce y calentito. Ideal para los días fríos.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nina-4-peluche-rosa",
    slug: "conjunto-nina-4-peluche-rosa",
    name: "Conjunto de 2 Piezas Peluche Rosa para Niña",
    category: "conjuntos-invierno-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nina/5-conjunto-peluche-rosa-ni-a-2-piezas-ca-120-4A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nina/5-conjunto-peluche-rosa-ni-a-2-piezas-ca-120-4A.jpg",
    description:
      "Conjunto de 2 piezas en peluche rosa. Súper suave y calentito. Perfecto para los días más fríos.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nina-4-pijama-conejito",
    slug: "conjunto-nina-4-pijama-conejito",
    name: "Pijama de Invierno de 2 Piezas con Conejito para Niña",
    category: "conjuntos-invierno-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nina/5-pijama-ni-a-invierno-2-piezas-conejito-120-4A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nina/5-pijama-ni-a-invierno-2-piezas-conejito-120-4A.jpg",
    description:
      "Pijama de invierno de 2 piezas con conejito. Súper calentita y cómoda. Ideal para las noches frías.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 5 AÑOS ----
  {
    id: "mk-conjunto-nina-5-love-fucsia",
    slug: "conjunto-nina-5-love-fucsia",
    name: "Conjunto de 2 Piezas Love Fucsia para Niña",
    category: "conjuntos-invierno-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Fucsia", hex: "#E91E63" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nina/5-conjunto-love-fucsia-2-piezas-130-5A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nina/5-conjunto-love-fucsia-2-piezas-130-5A.jpg",
    description:
      "Conjunto de 2 piezas Love Fucsia. Diseño moderno y llamativo. Perfecto para los días de invierno.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nina-5-conejo-chaqueta",
    slug: "conjunto-nina-5-conejo-chaqueta",
    name: "Conjunto de 2 Piezas con Conejo y Chaqueta con Capucha para Niña",
    category: "conjuntos-invierno-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nina/6-conjunto-2-pzs-conejo-chaqueta-capucha-130-5A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nina/6-conjunto-2-pzs-conejo-chaqueta-capucha-130-5A.jpg",
    description:
      "Conjunto de 2 piezas con conejo y chaqueta con capucha. Súper calentito y adorable.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nina-5-polar-liso",
    slug: "conjunto-nina-5-polar-liso",
    name: "Conjunto de 2 Piezas Polar Liso para Niña",
    category: "conjuntos-invierno-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nina/6-conjunto-ni-a-2-piezas-polar-liso-casa-130-5A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nina/6-conjunto-ni-a-2-piezas-polar-liso-casa-130-5A.jpg",
    description:
      "Conjunto de 2 piezas polar liso. Súper calentito y cómodo. Ideal para los días fríos.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 6 AÑOS ----
  {
    id: "mk-conjunto-nina-6-elegante-lazo",
    slug: "conjunto-nina-6-elegante-lazo",
    name: "Conjunto de 2 Piezas Elegante con Lazo para Niña",
    category: "conjuntos-invierno-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "6 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nina/6-conjunto-2pzs-ni-a-elegante-lazo-casac-140-6A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nina/6-conjunto-2pzs-ni-a-elegante-lazo-casac-140-6A.jpg",
    description:
      "Conjunto de 2 piezas elegante con lazo. Diseño sofisticado y moderno. Ideal para ocasiones especiales.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ============================================================
  // CONJUNTOS DE INVIERNO NIÑO
  // ============================================================

  // ---- TALLA 18-24 MESES ----
  {
    id: "mk-conjunto-nino-18-24-calvin-hoodie",
    slug: "conjunto-nino-18-24-calvin-hoodie",
    name: "Conjunto de 2 Piezas Calvin Hoodie con Letras para Niño",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "12-18 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/12m-conjunto-2-pzs-calvin-hoodie-letras-80-12-18M.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/12m-conjunto-2-pzs-calvin-hoodie-letras-80-12-18M.jpg",
    description:
      "Conjunto de 2 piezas Calvin Hoodie con letras. Diseño moderno y cómodo. Perfecto para los días fríos.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-18-24-deportivo",
    slug: "conjunto-nino-18-24-deportivo",
    name: "Conjunto Deportivo de 2 Piezas para Niño",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "12-18 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/12m-conjunto-2-pzs-ni-o-ch-ndal-deportiv-80-12-18M.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/12m-conjunto-2-pzs-ni-o-ch-ndal-deportiv-80-12-18M.jpg",
    description:
      "Conjunto deportivo de 2 piezas para niño. Cómodo y moderno. Ideal para jugar y moverse.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-18-24-sudadera-capucha",
    slug: "conjunto-nino-18-24-sudadera-capucha",
    name: "Conjunto de 2 Piezas con Sudadera y Capucha para Niño",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "12-18 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/12m-conjunto-2-pzs-ni-o-sudadera-capucha-80-12-18M.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/12m-conjunto-2-pzs-ni-o-sudadera-capucha-80-12-18M.jpg",
    description:
      "Conjunto de 2 piezas con sudadera y capucha. Suave y calentito. Ideal para el invierno.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-18-24-3pzs-bebe",
    slug: "conjunto-nino-18-24-3pzs-bebe",
    name: "Conjunto de 3 Piezas para Bebé Niño",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "12-18 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/12m-conjunto-3-piezas-para-beb-ni-o-colo-80-12-18M.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/12m-conjunto-3-piezas-para-beb-ni-o-colo-80-12-18M.jpg",
    description:
      "Conjunto de 3 piezas para bebé niño. Incluye body, pantalón y chaleco. Súper suave y calentito.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-18-24-piel-oso",
    slug: "conjunto-nino-18-24-piel-oso",
    name: "Conjunto de 3 Piezas Piel de Oso para Bebé",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "12-18 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/12m-conjunto-3-pzs-beb-piel-de-oso-negra-80-12-18M.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/12m-conjunto-3-pzs-beb-piel-de-oso-negra-80-12-18M.jpg",
    description:
      "Conjunto de 3 piezas piel de oso para bebé. Súper calentito y adorable. Perfecto para el invierno.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-18-24-sudadera-letras",
    slug: "conjunto-nino-18-24-sudadera-letras",
    name: "Conjunto de 3 Piezas con Sudadera y Letras para Bebé",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "12-18 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/12m-conjunto-3-pzs-beb-sudadera-letras-c-80-12-18M.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/12m-conjunto-3-pzs-beb-sudadera-letras-c-80-12-18M.jpg",
    description:
      "Conjunto de 3 piezas con sudadera y letras. Diseño moderno y calentito. Ideal para bebés.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-18-24-simba",
    slug: "conjunto-nino-18-24-simba",
    name: "Conjunto de 3 Piezas León Simba Gris para Bebé",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "12-18 Meses",
        colors: [{ name: "Gris", hex: "#9E9E9E" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/12m-conjunto-3-pzs-le-n-simba-gris-plomo-80-12-18M.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/12m-conjunto-3-pzs-le-n-simba-gris-plomo-80-12-18M.jpg",
    description:
      "Conjunto de 3 piezas con diseño León Simba en gris. Súper tierno y calentito.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-18-24-osito-gris",
    slug: "conjunto-nino-18-24-osito-gris",
    name: "Conjunto de 2 Piezas con Osito Gris para Niño",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Gris", hex: "#9E9E9E" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/2-conjunto-2-pzs-pantal-n-osito-gris-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/2-conjunto-2-pzs-pantal-n-osito-gris-90-18-24M.jpg",
    description:
      "Conjunto de 2 piezas con osito gris. Súper tierno y calentito. Ideal para los días fríos.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-18-24-dino-azul",
    slug: "conjunto-nino-18-24-dino-azul",
    name: "Conjunto de 3 Piezas con Dinosaurio Azul para Niño",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Azul", hex: "#64B5F6" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/2-conjunto-3-pzs-dino-azul-chaleco-sudad-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/2-conjunto-3-pzs-dino-azul-chaleco-sudad-90-18-24M.jpg",
    description:
      "Conjunto de 3 piezas con dinosaurio azul. Perfecto para los pequeños amantes de los dinosaurios.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-18-24-king-polo",
    slug: "conjunto-nino-18-24-king-polo",
    name: "Conjunto de 3 Piezas King Polo con Capucha para Niño",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/2-conjunto-3-pzs-king-polo-capucha-chale-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/2-conjunto-3-pzs-king-polo-capucha-chale-90-18-24M.jpg",
    description:
      "Conjunto de 3 piezas King Polo con capucha. Diseño moderno y calentito.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-18-24-2pzs-bebe",
    slug: "conjunto-nino-18-24-2pzs-bebe",
    name: "Conjunto de 2 Piezas para Bebé Niño",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/2-conjunto-de-2-piezas-para-beb-ni-o-peq-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/2-conjunto-de-2-piezas-para-beb-ni-o-peq-90-18-24M.jpg",
    description:
      "Conjunto de 2 piezas para bebé niño. Suave y cómodo. Ideal para el día a día.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-18-24-osito-morralito",
    slug: "conjunto-nino-18-24-osito-morralito",
    name: "Conjunto de 3 Piezas con Osito y Morralito para Bebé",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "beige", hex: "#D5C4A1" }],
      },
      {
        name: "2 Años",
        colors: [{ name: "beige", hex: "#D5C4A1" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/2-conjunto-osito-3-piezas-con-morralito-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/2-conjunto-osito-3-piezas-con-morralito-90-18-24M.jpg",
    description:
      "Conjunto de 3 piezas con osito y morralito. Súper adorable y calentito. ¡Incluye morralito!",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 2 AÑOS ----
  {
    id: "mk-conjunto-nino-2-chaqueta-color",
    slug: "conjunto-nino-2-chaqueta-color",
    name: "Conjunto de 2 Piezas con Chaqueta Color para Niño",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/3-conjunto-2-piezas-ni-o-chaqueta-color-100-2A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/3-conjunto-2-piezas-ni-o-chaqueta-color-100-2A.jpg",
    description:
      "Conjunto de 2 piezas con chaqueta color para niño. Moderno y calentito. Ideal para el invierno.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-2-bolso-bebe",
    slug: "conjunto-nino-2-bolso-bebe",
    name: "Conjunto de 2 Piezas con Bolso para Bebé",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/3-conjunto-2-pzs-bolso-beb-marr-n-100-2A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/3-conjunto-2-pzs-bolso-beb-marr-n-100-2A.jpg",
    description:
      "Conjunto de 2 piezas con bolso para bebé. Práctico y calentito. Ideal para paseos.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-2-dino-capucha",
    slug: "conjunto-nino-2-dino-capucha",
    name: "Conjunto de 2 Piezas con Dinosaurio y Capucha para Niño",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/3-conjunto-dino-2-piezas-con-capucha-100-2A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/3-conjunto-dino-2-piezas-con-capucha-100-2A.jpg",
    description:
      "Conjunto de 2 piezas con dinosaurio y capucha. Perfecto para los pequeños amantes de los dinosaurios.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-2-osito-gduck",
    slug: "conjunto-nino-2-osito-gduck",
    name: "Conjunto de 2 Piezas con Osito para Niño",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
      {
        name: "5 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/3-conjunto-osito-oto-al-ni-o-gduck-100-2A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/3-conjunto-osito-oto-al-ni-o-gduck-100-2A.jpg",
    description:
      "Conjunto de 2 piezas con osito. Súper tierno y calentito. Ideal para los días fríos.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-2-urbano",
    slug: "conjunto-nino-2-urbano",
    name: "Conjunto de 2 Piezas Urbano para Niño",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Azul", hex: "#4285F4" }],
      },
      {
        name: "3 Años",
        colors: [{ name: "Azul", hex: "#4285F4" }],
      },
      {
        name: "5 Años",
        colors: [{ name: "Azul", hex: "#4285F4" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/3-conjunto-urbano-ni-o-2-piezas-100-2A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/3-conjunto-urbano-ni-o-2-piezas-100-2A.jpg",
    description:
      "Conjunto de 2 piezas estilo urbano para niño. Moderno y cómodo. Perfecto para el día a día.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-2-set-abrigador",
    slug: "conjunto-nino-2-set-abrigador",
    name: "Set Abrigador de 3 Piezas para Bebé",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Amarillo", hex: "#fffca0" }],
      },
      {
        name: "3 Años",
        colors: [{ name: "Amarillo", hex: "#fffca0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/3-set-abrigador-beb-3-pzs-100-2A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/3-set-abrigador-beb-3-pzs-100-2A.jpg",
    description:
      "Set abrigador de 3 piezas para bebé. Súper calentito y cómodo. Ideal para el invierno.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 3 AÑOS ----
  {
    id: "mk-conjunto-nino-3-polo-chaleco-oso",
    slug: "conjunto-nino-3-polo-chaleco-oso",
    name: "Conjunto de 3 Piezas con Polo, Chaleco y Oso para Niño",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/4-conjunto-3-pzs-beb-polo-chaleco-oso-pa-110-3A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/4-conjunto-3-pzs-beb-polo-chaleco-oso-pa-110-3A.jpg",
    description:
      "Conjunto de 3 piezas con polo, chaleco y oso. Súper tierno y calentito.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-3-goat-gris",
    slug: "conjunto-nino-3-goat-gris",
    name: "Conjunto de 3 Piezas Goat Gris para Niño",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Gris", hex: "#9E9E9E" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/4-conjunto-3-pzs-goat-gris-110-3A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/4-conjunto-3-pzs-goat-gris-110-3A.jpg",
    description:
      "Conjunto de 3 piezas Goat en gris. Moderno y calentito. Ideal para el invierno.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-3-cuello-alto",
    slug: "conjunto-nino-3-cuello-alto",
    name: "Conjunto de 2 Piezas con Cuello Alto y Cremallera para Niño",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Beige", hex: "#F5F5DC" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/4-conjunto-cuello-alto-con-cremallera-ni-110-3A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/4-conjunto-cuello-alto-con-cremallera-ni-110-3A.jpg",
    description:
      "Conjunto de 2 piezas con cuello alto y cremallera. Elegante y calentito.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-3-deportivo-azul",
    slug: "conjunto-nino-3-deportivo-azul",
    name: "Conjunto Deportivo Juvenil Azul de 2 Piezas para Niño",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Azul", hex: "#64B5F6" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/4-conjunto-deportivo-juvenil-azul-2-piez-110-3A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/4-conjunto-deportivo-juvenil-azul-2-piez-110-3A.jpg",
    description:
      "Conjunto deportivo juvenil azul de 2 piezas. Moderno y cómodo. Ideal para jugar.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-3-felpito",
    slug: "conjunto-nino-3-felpito",
    name: "Conjunto de 2 Piezas Felpito para Bebé",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/4-conjunto-felpito-2-piezas-beb-110-3A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/4-conjunto-felpito-2-piezas-beb-110-3A.jpg",
    description:
      "Conjunto de 2 piezas felpito para bebé. Súper calentito y suave.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-3-polar-capucha",
    slug: "conjunto-nino-3-polar-capucha",
    name: "Conjunto de 2 Piezas Polar con Capucha para Niño",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/4-conjunto-polar-forrado-con-capucha-2-p-110-3A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/4-conjunto-polar-forrado-con-capucha-2-p-110-3A.jpg",
    description:
      "Conjunto de 2 piezas polar con capucha. Súper calentito y moderno. Ideal para el invierno.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-3-set-capucha-chaleco",
    slug: "conjunto-nino-3-set-capucha-chaleco",
    name: "Conjunto de 3 Piezas con Capucha y Chaleco para Niño",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/4-conjunto-set-3-pzs-capucha-y-chaleco-2-110-3A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/4-conjunto-set-3-pzs-capucha-y-chaleco-2-110-3A.jpg",
    description:
      "Conjunto de 3 piezas con capucha y chaleco. Súper calentito y moderno.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 4 AÑOS ----
  {
    id: "mk-conjunto-nino-4-bolso-primavera",
    slug: "conjunto-nino-4-bolso-primavera",
    name: "Conjunto de 2 Piezas con Bolso Primavera para Niño",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/5-conjunto-2-pzs-bolso-ni-o-primavera-120-4A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/5-conjunto-2-pzs-bolso-ni-o-primavera-120-4A.jpg",
    description:
      "Conjunto de 2 piezas con bolso primavera para niño. Práctico y moderno.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-4-dino-chaleco",
    slug: "conjunto-nino-4-dino-chaleco",
    name: "Conjunto de 3 Piezas con Dinosaurio y Chaleco para Niño",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/5-conjunto-3-pzs-dinosaurio-chaleco-pole-120-4A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/5-conjunto-3-pzs-dinosaurio-chaleco-pole-120-4A.jpg",
    description:
      "Conjunto de 3 piezas con dinosaurio y chaleco. Perfecto para los pequeños amantes de los dinosaurios.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-4-beisbol-dreams",
    slug: "conjunto-nino-4-beisbol-dreams",
    name: "Conjunto de 2 Piezas Béisbol Dreams Azul para Niño",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Azul", hex: "#64B5F6" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/5-conjunto-beisbol-dreams-azul-2-pzs-120-4A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/5-conjunto-beisbol-dreams-azul-2-pzs-120-4A.jpg",
    description:
      "Conjunto de 2 piezas Béisbol Dreams en azul. Moderno y cómodo. Ideal para jugar.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-4-beisbol-letra-k",
    slug: "conjunto-nino-4-beisbol-letra-k",
    name: "Conjunto de 2 Piezas Béisbol Letra K para Niño",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/5-conjunto-beisbol-letra-k-2-pzs-120-4A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/5-conjunto-beisbol-letra-k-2-pzs-120-4A.jpg",
    description:
      "Conjunto de 2 piezas Béisbol con Letra K. Moderno y cómodo. Ideal para el día a día.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-4-buzo-bloques",
    slug: "conjunto-nino-4-buzo-bloques",
    name: "Conjunto de 2 Piezas Buzo con Bloques Estampado para Niño",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/5-conjunto-buzo-bloques-estampado-oto-o-120-4A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/5-conjunto-buzo-bloques-estampado-oto-o-120-4A.jpg",
    description:
      "Conjunto de 2 piezas buzo con bloques estampado. Moderno y divertido.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-4-buzo-verde",
    slug: "conjunto-nino-4-buzo-verde",
    name: "Conjunto de 2 Piezas Buzo Verde con Letras para Niño",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Verde", hex: "#A5D6A7" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/5-conjunto-buzo-verde-letras-2-pzs-oto-o-120-4A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/5-conjunto-buzo-verde-letras-2-pzs-oto-o-120-4A.jpg",
    description:
      "Conjunto de 2 piezas buzo verde con letras. Moderno y calentito. Ideal para el invierno.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-4-acolchado",
    slug: "conjunto-nino-4-acolchado",
    name: "Conjunto de 2 Piezas Acolchado para Niño",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/5-conjunto-marr-n-acolchado-nope-2-pzs-120-4A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/5-conjunto-marr-n-acolchado-nope-2-pzs-120-4A.jpg",
    description:
      "Conjunto de 2 piezas acolchado. Súper calentito y cómodo. Ideal para los días fríos.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-4-urbano-polar",
    slug: "conjunto-nino-4-urbano-polar",
    name: "Conjunto de 2 Piezas Urbano Polar para Niño",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 65,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/5-conjunto-urbano-polar-casaca-pantal-n-120-4A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/5-conjunto-urbano-polar-casaca-pantal-n-120-4A.jpg",
    description:
      "Conjunto de 2 piezas urbano polar. Súper calentito y moderno. Ideal para el invierno.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 5 AÑOS ----
  {
    id: "mk-conjunto-nino-5-beige-triangulo",
    slug: "conjunto-nino-5-beige-triangulo",
    name: "Conjunto de 2 Piezas Beige con Triángulo y Forro Peluche para Niño",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Beige", hex: "#F5F5DC" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/6-conjunto-beige-tri-ngulo-forro-peluche-130-5A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/6-conjunto-beige-tri-ngulo-forro-peluche-130-5A.jpg",
    description:
      "Conjunto de 2 piezas beige con triángulo y forro peluche. Súper calentito y moderno.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-5-donabebe",
    slug: "conjunto-nino-5-donabebe",
    name: "Conjunto de 2 Piezas Donabebe Invierno para Niño",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/6-conjunto-donabebe-invierno-2-pzs-130-5A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/6-conjunto-donabebe-invierno-2-pzs-130-5A.jpg",
    description:
      "Conjunto de 2 piezas Donabebe invierno. Súper calentito y moderno. Ideal para el invierno.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-5-gris-nope",
    slug: "conjunto-nino-5-gris-nope",
    name: "Conjunto de 2 Piezas Gris Nope Forrado para Niño",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Gris", hex: "#9E9E9E" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/6-conjunto-gris-nope-2-pzs-forrado-130-5A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/6-conjunto-gris-nope-2-pzs-forrado-130-5A.jpg",
    description:
      "Conjunto de 2 piezas gris Nope forrado. Súper calentito y moderno.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-5-beige-brave",
    slug: "conjunto-nino-5-beige-brave",
    name: "Conjunto de 2 Piezas Beige Brave para Adolescente",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Beige", hex: "#F5F5DC" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/6-set-2-pzs-beige-brave-adolescente-130-5A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/6-set-2-pzs-beige-brave-adolescente-130-5A.jpg",
    description:
      "Conjunto de 2 piezas Beige Brave. Moderno y cómodo. Ideal para adolescentes.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ============================================================
  // JEANS NIÑA - FORMATO DINÁMICO (Tallas con Colores Vinculados)
  // ============================================================

  // ============================================================
  // TALLA 80 - 12-18 MESES (2 productos)
  // ============================================================
  {
    id: "mk-jeans-nina-80-chompa-lazo",
    slug: "cod-230-chompa-y-jean-con-lazo-pack-80-12-18M",
    name: "Chompa y Jean con Lazo - Pack",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 8,
    stock: 12,
    sizes: [
      {
        name: "12-18 Meses",
        colors: [
          { name: "Rosa", hex: "#F8BBD0" },
          { name: "Blanco", hex: "#FFFFFF" },
        ],
      },
    ],
    season: "otoño-invierno",
    images: [
      "./public/img/jeans-nina/cod-230-chompa-y-jean-con-lazo-pack-80-12-18M.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-230-chompa-y-jean-con-lazo-pack-80-12-18M.jpg",
    description:
      "Chompa y jean con lazo. Look dulce y elegante para tu pequeña.",
    material:
      "Chompa: 60% Algodón, 40% Acrílico. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-80-denim-cerezas",
    slug: "cod-229-conjunto-denim-cerezas-pack-80-12-18M",
    name: "Conjunto Denim Cerezas - Pack",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.9,
    reviews: 10,
    stock: 14,
    sizes: [
      {
        name: "12-18 Meses",
        colors: [
          { name: "Rojo", hex: "#DC143C" },
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Azul", hex: "#1A3A5C" },
        ],
      },
    ],
    season: "primavera-verano",
    images: [
      "./public/img/jeans-nina/cod-229-conjunto-denim-cerezas-pack-80-12-18M.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-229-conjunto-denim-cerezas-pack-80-12-18M.jpg",
    description: "Conjunto denim con estampado de cerezas. ¡Fresco y adorable!",
    material: "75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ============================================================
  // TALLA 90 - 18-24 MESES (5 productos)
  // ============================================================
  {
    id: "mk-jeans-nina-90-chompa-bow",
    slug: "cod-228-chompa-rosada-bow-y-jean-pack-90-18-24M",
    name: "Chompa Rosada Bow y Jean - Pack",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.9,
    reviews: 14,
    stock: 10,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [
          { name: "Rosa", hex: "#F8BBD0" },
          { name: "Blanco", hex: "#FFFFFF" },
        ],
      },
    ],
    season: "otoño-invierno",
    images: [
      "./public/img/jeans-nina/cod-228-chompa-rosada-bow-y-jean-pack-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-228-chompa-rosada-bow-y-jean-pack-90-18-24M.jpg",
    description: "Chompa rosada con lazo y jean. ¡Look dulce y femenino!",
    material:
      "Chompa: 60% Algodón, 40% Acrílico. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-90-chompa-cereza",
    slug: "cod-227-set-chompa-blanca-cereza-y-jean-90-18-24M",
    name: "Set Chompa Blanca Cereza y Jean",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 11,
    stock: 13,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Rojo", hex: "#DC143C" },
        ],
      },
    ],
    season: "primavera-verano",
    images: [
      "./public/img/jeans-nina/cod-227-set-chompa-blanca-cereza-y-jean-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-227-set-chompa-blanca-cereza-y-jean-90-18-24M.jpg",
    description: "Set de chompa blanca con cerezas y jean. ¡Adorable y fresco!",
    material:
      "Chompa: 100% Algodón. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-90-cherry-love",
    slug: "cod-226-set-tr-o-cherry-love-con-jean-bo-90-18-24M",
    name: "Set Trío Cherry Love con Jean - Bow",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.9,
    reviews: 12,
    stock: 14,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Rojo", hex: "#DC143C" },
          { name: "Rosa", hex: "#F8BBD0" },
        ],
      },
    ],
    season: "primavera-verano",
    images: [
      "./public/img/jeans-nina/cod-226-set-tr-o-cherry-love-con-jean-bo-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-226-set-tr-o-cherry-love-con-jean-bo-90-18-24M.jpg",
    description: "Set trío Cherry Love con jean y lazo. ¡Ternura y estilo!",
    material: "75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ============================================================
  // TALLA 100 - 2 AÑOS (5 productos)
  // ============================================================
  {
    id: "mk-jeans-nina-100-blusa-yelow",
    slug: "cod-2020-blusa-manga-larga-yelow-lazos-p-100-2A",
    name: "Blusa Manga Larga Yelow Lazos - Pack",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 8,
    stock: 10,
    sizes: [
      {
        name: "2 Años",
        colors: [
          { name: "Amarillo", hex: "#FFD700" },
          { name: "Blanco", hex: "#FFFFFF" },
        ],
      },
    ],
    season: "otoño-invierno",
    images: [
      "./public/img/jeans-nina/cod-2020-blusa-manga-larga-yelow-lazos-p-100-2A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-2020-blusa-manga-larga-yelow-lazos-p-100-2A.jpg",
    description: "Blusa manga larga amarilla con lazos. ¡Dulce y radiante!",
    material: "100% Algodón.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-100-polera-jeans",
    slug: "cod-2018-polera-manga-larga-jeans-azul-c-100-2A",
    name: "Polera Manga Larga + Jeans Azul - Conjunto",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 10,
    stock: 12,
    sizes: [
      {
        name: "2 Años",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Azul", hex: "#1A3A5C" },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-2018-polera-manga-larga-jeans-azul-c-100-2A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-2018-polera-manga-larga-jeans-azul-c-100-2A.jpg",
    description: "Polera manga larga con jeans azul. Look casual y cómodo.",
    material:
      "Polera: 100% Algodón. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-100-heart",
    slug: "cod-2017-polo-manga-corta-heart-pantalon-100-2A",
    name: "Polo Manga Corta Heart + Pantalón",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.9,
    reviews: 12,
    stock: 14,
    sizes: [
      {
        name: "2 Años",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Rojo", hex: "#DC143C" },
        ],
      },
    ],
    season: "primavera-verano",
    images: [
      "./public/img/jeans-nina/cod-2017-polo-manga-corta-heart-pantalon-100-2A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-2017-polo-manga-corta-heart-pantalon-100-2A.jpg",
    description: "Polo manga corta con corazón y pantalón. ¡Con mucho amor!",
    material:
      "Polo: 100% Algodón. Pantalón: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-100-top-puntilla",
    slug: "cod-224-conjunto-de-top-de-puntilla-con-100-2A",
    name: "Conjunto de Top de Puntilla con Jean",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 11,
    stock: 13,
    sizes: [
      {
        name: "2 Años",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Rosa", hex: "#F8BBD0" },
        ],
      },
    ],
    season: "primavera-verano",
    images: [
      "./public/img/jeans-nina/cod-224-conjunto-de-top-de-puntilla-con-100-2A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-224-conjunto-de-top-de-puntilla-con-100-2A.jpg",
    description: "Top de puntilla con jean. Look delicado y femenino.",
    material:
      "Top: 95% Algodón, 5% Spandex. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-100-chaleco",
    slug: "cod-223-conjunto-casual-chaleco-de-cuell-100-2A",
    name: "Conjunto Casual Chaleco de Cuello + Jean",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 9,
    stock: 11,
    sizes: [
      {
        name: "2 Años",
        colors: [
          { name: "rosa", hex: "#F8BBD0" },
          { name: "azul", hex: "#1A3A5C" },
        ],
      },
      {
        name: "3 Años",
        colors: [
          { name: "rosa", hex: "#F8BBD0" },
          { name: "azul", hex: "#1A3A5C" },
        ],
      },
    ],
    season: "otoño-invierno",
    images: [
      "./public/img/jeans-nina/cod-223-conjunto-casual-chaleco-de-cuell-100-2A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-223-conjunto-casual-chaleco-de-cuell-100-2A.jpg",
    description:
      "Conjunto casual de chaleco con cuello y jean. ¡Look con estilo!",
    material:
      "Chaleco: 60% Algodón, 40% Poliéster. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ============================================================
  // TALLA 110 - 3 AÑOS (3 productos)
  // ============================================================
  {
    id: "mk-conjunto-otono-amarillo-3A",
    slug: "mk-conjunto-otono-amarillo-4Y",
    name: "Ropa de Niña Otoño Invierno - Chompita + Jeans",
    category: "jeans-nina",
    price: 49,
    oldPrice: 72.5,
    cost: 37,
    badge: "Otoño",
    rating: 4.9,
    reviews: 10,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [
          {
            name: "Amarillo",
            hex: "#FFEB3B",
          },
        ],
      },
    ],
    season: "otoño-invierno",
    images: [
      "./public/img/preventa/mk-conjunto-otono-amarillo-3A.jpg",
      "./public/img/preventa/mk-conjunto-otono-amarillo-3A-2.jpg",
    ],
    realImage: "./public/img/preventa/mk-conjunto-otono-amarillo-3A-2.jpg",
    description:
      "Conjunto otoño invierno niña, chompita con flor bordada + jeans con flores.",
    material: "100% Poliéster. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-110-sudadera-vaquera",
    slug: "cod-222-pantalones-vaqueros-sudadera-con-110-3A",
    name: "Pantalones Vaqueros + Sudadera con Cuello",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 8,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [
          { name: "Gris", hex: "#808080" },
          { name: "Azul", hex: "#1A3A5C" },
        ],
      },
    ],
    season: "otoño-invierno",
    images: [
      "./public/img/jeans-nina/cod-222-pantalones-vaqueros-sudadera-con-110-3A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-222-pantalones-vaqueros-sudadera-con-110-3A.jpg",
    description:
      "Pantalones vaqueros con sudadera de cuello. Look casual y acogedor.",
    material:
      "Sudadera: 65% Algodón, 35% Poliéster. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-110-blusa-rayas",
    slug: "cod-221-blusa-de-manga-larga-de-rayas-co-110-3A",
    name: "Blusa de Manga Larga de Rayas con Jean",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.9,
    reviews: 13,
    stock: 14,
    sizes: [
      {
        name: "3 Años",
        colors: [
          { name: "Azul", hex: "#1A3A5C" },
          { name: "Blanco", hex: "#FFFFFF" },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-221-blusa-de-manga-larga-de-rayas-co-110-3A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-221-blusa-de-manga-larga-de-rayas-co-110-3A.jpg",
    description: "Blusa manga larga a rayas con jean. Look clásico y elegante.",
    material:
      "Blusa: 100% Algodón. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ============================================================
  // TALLA 120 - 4 AÑOS (7 productos)
  // ============================================================
  {
    id: "mk-jeans-nina-120-lazo-negro",
    slug: "cod-224-polera-manga-larga-lazo-negro-y-120-4A",
    name: "Polera Manga Larga Lazo Negro y Jean",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 10,
    stock: 12,
    sizes: [
      {
        name: "4 Años",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Negro", hex: "#1A1A1A" },
        ],
      },
    ],
    season: "otoño-invierno",
    images: [
      "./public/img/jeans-nina/cod-224-polera-manga-larga-lazo-negro-y-120-4A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-224-polera-manga-larga-lazo-negro-y-120-4A.jpg",
    description: "Polera manga larga con lazo negro y jean. ¡Look con actitud!",
    material:
      "Polera: 100% Algodón. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-120-flores",
    slug: "cod-216-polo-manga-corta-flores-y-jeans-120-4A",
    name: "Polo Manga Corta Flores y Jeans",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.9,
    reviews: 14,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Rosa", hex: "#F8BBD0" },
        ],
      },
    ],
    season: "primavera-verano",
    images: [
      "./public/img/jeans-nina/cod-216-polo-manga-corta-flores-y-jeans-120-4A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-216-polo-manga-corta-flores-y-jeans-120-4A.jpg",
    description:
      "Polo manga corta con estampado de flores y jeans. ¡Fresco y primaveral!",
    material:
      "Polo: 100% Algodón. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-120-blusa-muneca",
    slug: "cod-215-blusa-con-cuello-de-mu-eca-y-man-120-4A",
    name: "Blusa con Cuello de Muñeca y Manga Larga",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 11,
    stock: 13,
    sizes: [
      {
        name: "4 Años",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Rosa", hex: "#F8BBD0" },
        ],
      },
    ],
    season: "otoño-invierno",
    images: [
      "./public/img/jeans-nina/cod-215-blusa-con-cuello-de-mu-eca-y-man-120-4A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-215-blusa-con-cuello-de-mu-eca-y-man-120-4A.jpg",
    description:
      "Blusa con cuello de muñeca y manga larga. ¡Elegancia y ternura!",
    material: "100% Algodón.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-120-blusa-piezas",
    slug: "cod-214-blusa-manga-larga-y-pantalon-pie-120-4A",
    name: "Blusa Manga Larga y Pantalón - Pack",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 9,
    stock: 11,
    sizes: [
      {
        name: "4 Años",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Azul", hex: "#1A3A5C" },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-214-blusa-manga-larga-y-pantalon-pie-120-4A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-214-blusa-manga-larga-y-pantalon-pie-120-4A.jpg",
    description:
      "Pack de blusa manga larga y pantalón. Look coordinado y cómodo.",
    material:
      "Blusa: 100% Algodón. Pantalón: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-120-polera-pantalon",
    slug: "cod-213-polera-manga-larga-y-pantalon-pi-120-4A",
    name: "Polera Manga Larga y Pantalón - Pack",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 10,
    stock: 12,
    sizes: [
      {
        name: "4 Años",
        colors: [
          { name: "Rosa", hex: "#F8BBD0" },
          { name: "Blanco", hex: "#FFFFFF" },
        ],
      },
    ],
    season: "otoño-invierno",
    images: [
      "./public/img/jeans-nina/cod-213-polera-manga-larga-y-pantalon-pi-120-4A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-213-polera-manga-larga-y-pantalon-pi-120-4A.jpg",
    description:
      "Pack de polera manga larga y pantalón. Look dulce y acogedor.",
    material:
      "Polera: 100% Algodón. Pantalón: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-120-traje-melocoton",
    slug: "cod-209-blusa-manga-larga-corta-traje-me-120-4A",
    name: "Blusa Manga Larga Corta - Traje Melocotón",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 8,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [
          { name: "Melocotón", hex: "#FFDAB9" },
          { name: "Blanco", hex: "#FFFFFF" },
        ],
      },
    ],
    season: "primavera-verano",
    images: [
      "./public/img/jeans-nina/cod-209-blusa-manga-larga-corta-traje-me-120-4A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-209-blusa-manga-larga-corta-traje-me-120-4A.jpg",
    description:
      "Blusa manga larga corta en traje melocotón. Look fresco y veraniego.",
    material: "100% Algodón.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-120-blusa-yelow",
    slug: "cod-202-blusa-manga-larga-yelow-pack-120-4A",
    name: "Blusa Manga Larga Yelow - Pack",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 10,
    stock: 12,
    sizes: [
      {
        name: "4 Años",
        colors: [
          { name: "Amarillo", hex: "#FFD700" },
          { name: "Blanco", hex: "#FFFFFF" },
        ],
      },
      {
        name: "5 Años",
        colors: [
          { name: "Amarillo", hex: "#FFD700" },
          { name: "Blanco", hex: "#FFFFFF" },
        ],
      },
    ],
    season: "primavera-verano",
    images: [
      "./public/img/jeans-nina/cod-202-blusa-manga-larga-yelow-pack-120-4A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-202-blusa-manga-larga-yelow-pack-120-4A.jpg",
    description: "Pack de blusa manga larga amarilla. ¡Radiante y alegre!",
    material: "100% Algodón.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ============================================================
  // TALLA 130 - 5 AÑOS (11 productos)
  // ============================================================
  {
    id: "mk-jeans-nina-130-encaje-floral",
    slug: "cod-225-encaje-floral-manga-larga-y-cuel-130-5A",
    name: "Encaje Floral Manga Larga y Cuello - Jean",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.9,
    reviews: 14,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Rosa", hex: "#F8BBD0" },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-225-encaje-floral-manga-larga-y-cuel-130-5A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-225-encaje-floral-manga-larga-y-cuel-130-5A.jpg",
    description:
      "Blusa de encaje floral con manga larga y cuello. Look delicado y elegante.",
    material: "100% Algodón con detalles de encaje.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-130-overol-azul",
    slug: "cod-215-overol-largo-azul-oscuro-con-est-130-5A",
    name: "Overol Largo Azul Oscuro con Estampado",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 11,
    stock: 13,
    sizes: [
      {
        name: "5 Años",
        colors: [
          { name: "Azul", hex: "#1A3A5C" },
          { name: "Blanco", hex: "#FFFFFF" },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-215-overol-largo-azul-oscuro-con-est-130-5A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-215-overol-largo-azul-oscuro-con-est-130-5A.jpg",
    description:
      "Overol largo azul oscuro con estampado. Look casual y moderno.",
    material: "75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-130-jeans-cerezas",
    slug: "cod-212-jeans-cerezas-pack-130-5A",
    name: "Jeans Cerezas - Pack",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.9,
    reviews: 13,
    stock: 14,
    sizes: [
      {
        name: "5 Años",
        colors: [
          { name: "Rojo", hex: "#DC143C" },
          { name: "Blanco", hex: "#FFFFFF" },
        ],
      },
    ],
    season: "primavera-verano",
    images: ["./public/img/jeans-nina/cod-212-jeans-cerezas-pack-130-5A.jpg"],
    realImage: "./public/img/jeans-nina/cod-212-jeans-cerezas-pack-130-5A.jpg",
    description: "Pack de jeans con estampado de cerezas. ¡Fresco y adorable!",
    material: "75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-130-chompa-roja",
    slug: "cod-211-chompa-roja-y-jeans-azul-pack-130-5A",
    name: "Chompa Roja y Jeans Azul - Pack",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 10,
    stock: 12,
    sizes: [
      {
        name: "5 Años",
        colors: [
          { name: "Rojo", hex: "#DC143C" },
          { name: "Azul", hex: "#1A3A5C" },
        ],
      },
    ],
    season: "otoño-invierno",
    images: [
      "./public/img/jeans-nina/cod-211-chompa-roja-y-jeans-azul-pack-130-5A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-211-chompa-roja-y-jeans-azul-pack-130-5A.jpg",
    description: "Pack de chompa roja y jeans azul. Look cálido y con estilo.",
    material:
      "Chompa: 60% Algodón, 40% Acrílico. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-130-blusa-blanca",
    slug: "cod-209-blusa-blanca-manga-larga-y-panta-130-5A",
    name: "Blusa Blanca Manga Larga y Pantalón",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 9,
    stock: 11,
    sizes: [
      {
        name: "5 Años",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Azul", hex: "#1A3A5C" },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-209-blusa-blanca-manga-larga-y-panta-130-5A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-209-blusa-blanca-manga-larga-y-panta-130-5A.jpg",
    description:
      "Blusa blanca manga larga con pantalón. Look clásico y versátil.",
    material:
      "Blusa: 100% Algodón. Pantalón: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-130-blusa-vaquera",
    slug: "cod-208-blusa-blanca-manga-larga-y-vaque-130-5A",
    name: "Blusa Blanca Manga Larga y Vaqueros",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 10,
    stock: 12,
    sizes: [
      {
        name: "5 Años",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Azul", hex: "#1A3A5C" },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-208-blusa-blanca-manga-larga-y-vaque-130-5A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-208-blusa-blanca-manga-larga-y-vaque-130-5A.jpg",
    description:
      "Blusa blanca manga larga con vaqueros. Look elegante y casual.",
    material:
      "Blusa: 100% Algodón. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-130-overol-blanco",
    slug: "cod-207-blusa-blanco-de-manga-larga-y-ov-130-5A",
    name: "Blusa Blanco de Manga Larga y Overol",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.9,
    reviews: 12,
    stock: 14,
    sizes: [
      {
        name: "5 Años",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Azul", hex: "#1A3A5C" },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-207-blusa-blanco-de-manga-larga-y-ov-130-5A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-207-blusa-blanco-de-manga-larga-y-ov-130-5A.jpg",
    description: "Blusa blanca manga larga con overol. Look moderno y cómodo.",
    material:
      "Blusa: 100% Algodón. Overol: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-130-blusa-yelow",
    slug: "cod-203-blusa-manga-corta-yelow-y-jeans-130-5A",
    name: "Blusa Manga Corta Yelow y Jeans",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 8,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [
          { name: "Amarillo", hex: "#FFD700" },
          { name: "Blanco", hex: "#FFFFFF" },
        ],
      },
    ],
    season: "primavera-verano",
    images: [
      "./public/img/jeans-nina/cod-203-blusa-manga-corta-yelow-y-jeans-130-5A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-203-blusa-manga-corta-yelow-y-jeans-130-5A.jpg",
    description:
      "Blusa manga corta amarilla con jeans. Look fresco y radiante.",
    material:
      "Blusa: 100% Algodón. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  {
    id: "mk-jeans-nina-130-floral-vaqueros",
    slug: "cod-201-blusa-floral-y-jean-vaqueros-pac-130-5A",
    name: "Blusa Floral y Jean Vaqueros - Pack",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.9,
    reviews: 14,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [
          { name: "Rosa", hex: "#F8BBD0" },
          { name: "azul", hex: "#1A3A5C" },
        ],
      },
      {
        name: "6 Años",
        colors: [
          { name: "Rosa", hex: "#F8BBD0" },
          { name: "azul", hex: "#1A3A5C" },
        ],
      },
    ],
    season: "primavera-verano",
    images: [
      "./public/img/jeans-nina/cod-201-blusa-floral-y-jean-vaqueros-pac-130-5A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-201-blusa-floral-y-jean-vaqueros-pac-130-5A.jpg",
    description:
      "Pack de blusa floral y jean vaqueros. Look primaveral y femenino.",
    material:
      "Blusa: 100% Algodón. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-130-cereza-pack",
    slug: "cod-200-blusa-mangalarga-cereza-pack-130-5A",
    name: "Blusa Manga Larga Cereza - Pack",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 11,
    stock: 13,
    sizes: [
      {
        name: "5 Años",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Rojo", hex: "#DC143C" },
        ],
      },
    ],
    season: "primavera-verano",
    images: [
      "./public/img/jeans-nina/cod-200-blusa-mangalarga-cereza-pack-130-5A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-200-blusa-mangalarga-cereza-pack-130-5A.jpg",
    description: "Pack de blusa manga larga con cerezas. ¡Dulce y adorable!",
    material: "100% Algodón.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ============================================================
  // TALLA 140 - 6 AÑOS (6 productos)
  // ============================================================
  {
    id: "mk-jeans-nina-140-blusa-rosa",
    slug: "cod-210-blusa-manga-corta-rosa-y-pantalo-140-6A",
    name: "Blusa Manga Corta Rosa y Pantalón",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 10,
    stock: 12,
    sizes: [
      {
        name: "6 Años",
        colors: [
          { name: "Rosa", hex: "#F8BBD0" },
          { name: "Blanco", hex: "#FFFFFF" },
        ],
      },
    ],
    season: "primavera-verano",
    images: [
      "./public/img/jeans-nina/cod-210-blusa-manga-corta-rosa-y-pantalo-140-6A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-210-blusa-manga-corta-rosa-y-pantalo-140-6A.jpg",
    description: "Blusa manga corta rosa con pantalón. Look fresco y femenino.",
    material:
      "Blusa: 100% Algodón. Pantalón: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-140-blusita-roja",
    slug: "cod-205-blusita-roja-y-jean-acampanado-140-6A",
    name: "Blusita Roja y Jean Acampanado",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.9,
    reviews: 13,
    stock: 14,
    sizes: [
      {
        name: "6 Años",
        colors: [
          { name: "Rojo", hex: "#DC143C" },
          { name: "Azul", hex: "#1A3A5C" },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-205-blusita-roja-y-jean-acampanado-140-6A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-205-blusita-roja-y-jean-acampanado-140-6A.jpg",
    description:
      "Blusita roja con jean acampanado. Look con estilo y personalidad.",
    material:
      "Blusa: 100% Algodón. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-140-manga-corta",
    slug: "cod-204-manga-corta-y-pantalones-vaquero-140-6A",
    name: "Manga Corta y Pantalones Vaqueros",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 9,
    stock: 11,
    sizes: [
      {
        name: "6 Años",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Azul", hex: "#1A3A5C" },
        ],
      },
    ],
    season: "primavera-verano",
    images: [
      "./public/img/jeans-nina/cod-204-manga-corta-y-pantalones-vaquero-140-6A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-204-manga-corta-y-pantalones-vaquero-140-6A.jpg",
    description:
      "Conjunto de manga corta con pantalones vaqueros. Look casual y veraniego.",
    material:
      "Polo: 100% Algodón. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-140-flat-lay",
    slug: "cod-130-kids-fashion-flat-lay-140-6A",
    name: "Kids Fashion Flat Lay - Conjunto Denim",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 11,
    stock: 13,
    sizes: [
      {
        name: "6 Años",
        colors: [
          { name: "Azul", hex: "#1A3A5C" },
          { name: "Blanco", hex: "#FFFFFF" },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-130-kids-fashion-flat-lay-140-6A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-130-kids-fashion-flat-lay-140-6A.jpg",
    description: "Conjunto denim en flat lay. Look fashion y moderno.",
    material: "75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-140-coquette",
    slug: "cod-20-conjunto-coquette-ultra-tendencia-140-6A",
    name: "Conjunto Coquette Ultra Tendencia",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.9,
    reviews: 15,
    stock: 16,
    sizes: [
      {
        name: "6 Años",
        colors: [
          { name: "Rosa", hex: "#F8BBD0" },
          { name: "Blanco", hex: "#FFFFFF" },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-20-conjunto-coquette-ultra-tendencia-140-6A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-20-conjunto-coquette-ultra-tendencia-140-6A.jpg",
    description: "Conjunto Coquette ultra tendencia. ¡Look dulce y a la moda!",
    material: "75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ============================================================
  // TALLA 150 - 7 AÑOS (2 productos)
  // ============================================================
  {
    id: "mk-jeans-nina-150-papas-fritas",
    slug: "cod-239-pantal-n-jean-ni-o-papas-fritas-150-7A",
    name: "Pantalón Jean Niño Papas Fritas",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 10,
    stock: 12,
    sizes: [
      {
        name: "7 Años",
        colors: [
          { name: "Azul", hex: "#1A3A5C" },
          { name: "Negro", hex: "#1A1A1A" },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-239-pantal-n-jean-ni-o-papas-fritas-150-7A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-239-pantal-n-jean-ni-o-papas-fritas-150-7A.jpg",
    description:
      "Pantalón jean con estampado de papas fritas. ¡Look divertido y original!",
    material: "75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-150-lentejuelas",
    slug: "cod-206-polo-mo-o-de-lentejuelas-y-jean-150-7A",
    name: "Polo Moño de Lentejuelas y Jean",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.9,
    reviews: 12,
    stock: 14,
    sizes: [
      {
        name: "7 Años",
        colors: [
          { name: "Rosa", hex: "#F8BBD0" },
          { name: "Blanco", hex: "#FFFFFF" },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-206-polo-mo-o-de-lentejuelas-y-jean-150-7A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-206-polo-mo-o-de-lentejuelas-y-jean-150-7A.jpg",
    description:
      "Polo con moño de lentejuelas y jean. ¡Brillo y estilo para tu pequeña!",
    material:
      "Polo: 100% Algodón con lentejuelas. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  // ============================================================
  // TALLA 160 - 9 AÑOS (2 productos)
  // ============================================================
  {
    id: "mk-jeans-nina-160-denim-polo-blanco",
    slug: "cod-241-denim-jeans-polo-blanco-150-9A",
    name: "Denim Jeans + Polo Blanco",
    category: "jeans-nina",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 9,
    stock: 11,
    sizes: [
      {
        name: "9 Años",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Azul", hex: "#1A3A5C" },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-240-denim-jeans-polo-blanco-150-9A.jpg",
      "./public/img/jeans-nina/cod-240-denim-jeans-polo-gris-150-9A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-240-denim-jeans-polo-blanco-150-9A.jpg",
    description: "Conjunto de jean denim y polo blanco. Clásico y versátil.",
    material:
      "Polo: 100% Algodón. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ============================================================
  // JEANS NIÑO - FORMATO DINÁMICO (Tallas con Colores Vinculados)
  // ============================================================

  // ============================================================
  // TALLA 80 - 12-18 MESES (7 productos)
  // ============================================================
  {
    id: "mk-jeans-nino-80-cod-231-overol",
    slug: "cod-231-overol-de-jean-y-polo-manga-larg-80-12-18M",
    name: "Overol de Jean y Polo Manga Larga",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 10,
    stock: 12,
    sizes: [
      {
        name: "12-18 Meses",
        colors: [
          { name: "Azul", hex: "#1A3A5C" },
          { name: "Blanco", hex: "#FFFFFF" },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nino/cod-231-overol-de-jean-y-polo-manga-larg-80-12-18M.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/cod-231-overol-de-jean-y-polo-manga-larg-80-12-18M.jpg",
    description:
      "Overol de jean combinado con polo manga larga. Perfecto para un look casual y cómodo.",
    material:
      "Overol: 75% Algodón, 23% Poliéster, 2% Elastano. Polo: 100% Algodón.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-80-letra-bordada",
    slug: "conjunto-ni-o-2pz-letra-bordada-negro-su-80-12-18M",
    name: "Conjunto Niño 2Pz Letra Bordada Negro - Sudadera Texturizada + Jean Rasgado",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.9,
    reviews: 14,
    stock: 10,
    sizes: [
      {
        name: "12-18 Meses",
        colors: [
          { name: "Negro", hex: "#1A1A1A" },
          { name: "Blanco", hex: "#FFFFFF" },
        ],
      },
    ],
    season: "otoño-invierno",
    images: [
      "./public/img/jeans-nino/conjunto-ni-o-2pz-letra-bordada-negro-su-80-12-18M.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/conjunto-ni-o-2pz-letra-bordada-negro-su-80-12-18M.jpg",
    description:
      "Conjunto de sudadera texturizada con letra bordada y jean rasgado. Look urbano y moderno.",
    material:
      "Sudadera: 65% Algodón, 35% Poliéster. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-80-polo-rayas-azul",
    slug: "conjunto-ni-o-polo-rayas-azul-osito-2-pi-80-12-18M",
    name: "Conjunto Niño Polo Rayas Azul Osito 2 Piezas + Jeans Suave",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 11,
    stock: 10,
    sizes: [
      {
        name: "12-18 Meses",
        colors: [
          { name: "Azul Marino", hex: "#1A2A4A" },
          { name: "Blanco", hex: "#FFFFFF" },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nino/conjunto-ni-o-polo-rayas-azul-osito-2-pi-80-12-18M.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/conjunto-ni-o-polo-rayas-azul-osito-2-pi-80-12-18M.jpg",
    description:
      "Polo a rayas azul con diseño de osito y jeans suave. Ideal para el día a día.",
    material:
      "Polo: 100% Algodón. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-80-rayas-28",
    slug: "conjunto-ni-o-rayas-28-baseball-2-piezas-80-12-18M",
    name: "Conjunto Niño Rayas 28 Baseball 2 Piezas - Polo Cuello + Jean Claro",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 8,
    stock: 10,
    sizes: [
      {
        name: "12-18 Meses",
        colors: [
          { name: "Marino", hex: "#1A2A4A" },
          { name: "Blanco", hex: "#FFFFFF" },
        ],
      },
    ],
    season: "primavera-verano",
    images: [
      "./public/img/jeans-nino/conjunto-ni-o-rayas-28-baseball-2-piezas-80-12-18M.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/conjunto-ni-o-rayas-28-baseball-2-piezas-80-12-18M.jpg",
    description:
      "Polo con cuello estilo baseball y jean claro. Un look deportivo y fresco.",
    material:
      "Polo: 95% Algodón, 5% Spandex. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-80-polera-caqui",
    slug: "polera-manga-larga-caqui-2und-80-12-18M",
    name: "Polera Manga Larga Caqui - 2 Und",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.6,
    reviews: 7,
    stock: 8,
    sizes: [
      {
        name: "12-18 Meses",
        colors: [
          { name: "Caqui", hex: "#C3B091" },
          { name: "Beige", hex: "#F5F5DC" },
        ],
      },
    ],
    season: "otoño-invierno",
    images: [
      "./public/img/jeans-nino/polera-manga-larga-caqui-2und-80-12-18M.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/polera-manga-larga-caqui-2und-80-12-18M.jpg",
    description:
      "Polera manga larga en tono caqui. Versátil y cálida para los días fríos.",
    material: "100% Algodón.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-80-polera-negra",
    slug: "polera-manga-larga-negro-12meses-80-12-18M",
    name: "Polera Manga Larga Negro - 12 Meses",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 9,
    stock: 12,
    sizes: [
      {
        name: "12-18 Meses",
        colors: [
          { name: "Negro", hex: "#1A1A1A" },
          { name: "Blanco", hex: "#FFFFFF" },
        ],
      },
    ],
    season: "otoño-invierno",
    images: [
      "./public/img/jeans-nino/polera-manga-larga-negro-12meses-80-12-18M.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/polera-manga-larga-negro-12meses-80-12-18M.jpg",
    description:
      "Polera manga larga en color negro. Básica y esencial para el armario.",
    material: "100% Algodón.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-80-polo-blanco",
    slug: "polo-manga-corta-blanco-jeans-rasgado-80-12-18M",
    name: "Polo Manga Corta Blanco + Jeans Rasgado",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 9,
    stock: 11,
    sizes: [
      {
        name: "12-18 Meses",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Azul", hex: "#1A3A5C" },
        ],
      },
    ],
    season: "primavera-verano",
    images: [
      "./public/img/jeans-nino/polo-manga-corta-blanco-jeans-rasgado-80-12-18M.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/polo-manga-corta-blanco-jeans-rasgado-80-12-18M.jpg",
    description:
      "Polo manga corta blanco combinado con jeans rasgado. Fresco y moderno.",
    material:
      "Polo: 100% Algodón. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ============================================================
  // TALLA 90 - 18-24 MESES (7 productos)
  // ============================================================
  {
    id: "mk-jeans-nino-90-camisa-cuello",
    slug: "camisa-de-manga-larga-con-cuello-vuelto-90-18-24M",
    name: "Camisa de Manga Larga con Cuello Vuelto y Jeans Largos Vaqueros",
    category: "jeans-nino",
    price: 49,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 15,
    stock: 18,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Azul Claro", hex: "#7BA7C9" },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nino/camisa-de-manga-larga-con-cuello-vuelto-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/camisa-de-manga-larga-con-cuello-vuelto-90-18-24M.jpg",
    description:
      "Camisa de manga larga con cuello vuelto y jeans vaqueros. Look elegante y sofisticado.",
    material:
      "Camisa: 100% Algodón. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-90-casaca-vintage",
    slug: "casaca-vaquera-vintage-y-pantalones-depo-90-18-24M",
    name: "Casaca Vaquera Vintage y Pantalones Deportivos",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 8,
    stock: 10,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [
          { name: "Negro", hex: "#1A1A1A" },
          { name: "Gris", hex: "#808080" },
        ],
      },
    ],
    season: "otoño-invierno",
    images: [
      "./public/img/jeans-nino/casaca-vaquera-vintage-y-pantalones-depo-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/casaca-vaquera-vintage-y-pantalones-depo-90-18-24M.jpg",
    description:
      "Casaca vaquera vintage combinada con pantalones deportivos. Look casual y cómodo.",
    material:
      "Casaca: 75% Algodón, 23% Poliéster, 2% Elastano. Pantalón: 65% Algodón, 35% Poliéster.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-90-overol-oso",
    slug: "overol-de-mezclilla-con-bordado-de-oso-a-90-18-24M",
    name: "Overol de Mezclilla con Bordado de Oso Ajuste Holgado",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.9,
    reviews: 13,
    stock: 14,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [
          { name: "Azul", hex: "#1A3A5C" },
          { name: "Blanco", hex: "#FFFFFF" },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nino/overol-de-mezclilla-con-bordado-de-oso-a-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/overol-de-mezclilla-con-bordado-de-oso-a-90-18-24M.jpg",
    description:
      "Overol de mezclilla con bordado de oso y ajuste holgado. ¡Adorable y cómodo!",
    material: "75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-90-rayas-manga",
    slug: "polera-con-rayas-manga-larga-negro-blanc-90-18-24M",
    name: "Polera con Rayas Manga Larga Negro-Blanco y Pantalón Vaquero Rasgado",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 10,
    stock: 12,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [
          { name: "Negro", hex: "#1A1A1A" },
          { name: "Blanco", hex: "#FFFFFF" },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nino/polera-con-rayas-manga-larga-negro-blanc-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/polera-con-rayas-manga-larga-negro-blanc-90-18-24M.jpg",
    description:
      "Polera a rayas negro-blanco manga larga con pantalón vaquero rasgado. ¡Trendy!",
    material:
      "Polera: 100% Algodón. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-90-polera-oso",
    slug: "polera-de-cuello-redondo-con-bordado-oso-90-18-24M",
    name: "Polera de Cuello Redondo con Bordado Oso y Jeans Rasgado",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 12,
    stock: 11,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [
          { name: "Negro", hex: "#1A1A1A" },
          { name: "Blanco", hex: "#FFFFFF" },
        ],
      },
    ],
    season: "otoño-invierno",
    images: [
      "./public/img/jeans-nino/polera-de-cuello-redondo-con-bordado-oso-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/polera-de-cuello-redondo-con-bordado-oso-90-18-24M.jpg",
    description:
      "Polera cuello redondo con bordado de oso y jeans rasgado. ¡Ternura y estilo!",
    material:
      "Polera: 100% Algodón. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-90-polo-blanco",
    slug: "polera-manga-larga-con-cuello-redondo-bl-90-18-24M",
    name: "Polera Manga Larga con Cuello Redondo Blanco y Jeans Overol Oso",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 9,
    stock: 10,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Azul", hex: "#1A3A5C" },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nino/polera-manga-larga-con-cuello-redondo-bl-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/polera-manga-larga-con-cuello-redondo-bl-90-18-24M.jpg",
    description:
      "Polera manga larga cuello redondo blanco con jeans overol oso. Clásico y adorable.",
    material:
      "Polera: 100% Algodón. Overol: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-90-overol-rayas",
    slug: "polo-manga-corta-con-cuello-redondo-a-ra-90-18-24M",
    name: "Polo Manga Corta con Cuello Redondo a Rayas y Overol Vaquero con Puños y Bolsillos",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.6,
    reviews: 7,
    stock: 9,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [
          { name: "Marrón", hex: "#8B6914" },
          { name: "Azul", hex: "#1A3A5C" },
        ],
      },
    ],
    season: "primavera-verano",
    images: [
      "./public/img/jeans-nino/polo-manga-corta-con-cuello-redondo-a-ra-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/polo-manga-corta-con-cuello-redondo-a-ra-90-18-24M.jpg",
    description:
      "Polo manga corta a rayas con overol vaquero. Fresco y veraniego.",
    material:
      "Polo: 100% Algodón. Overol: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ============================================================
  // TALLA 100 - 2 AÑOS (8 productos)
  // ============================================================
  {
    id: "mk-jeans-nino-100-rayas-punto",
    slug: "camiseta-polo-de-manga-larga-de-punto-a-100-2A",
    name: "Camiseta Polo de Manga Larga de Punto a Rayas y Pantalones Vaqueros",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 9,
    stock: 11,
    sizes: [
      {
        name: "2 Años",
        colors: [
          { name: "Beige", hex: "#F5F5DC" },
          { name: "Negro", hex: "#1A1A1A" },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nino/camiseta-polo-de-manga-larga-de-punto-a-100-2A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/camiseta-polo-de-manga-larga-de-punto-a-100-2A.jpg",
    description:
      "Camiseta polo manga larga de punto a rayas con pantalones vaqueros. Look casual y con estilo.",
    material:
      "Polo: 100% Algodón. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-100-cod-2019",
    slug: "cod-2019-camiseta-de-manga-larga-de-cuel-100-2A",
    name: "Cod 2019 Camiseta de Manga Larga de Cuello Camisa y Pantalones Vaqueros con Apliques",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 10,
    stock: 12,
    sizes: [
      {
        name: "2 Años",
        colors: [
          { name: "Celeste", hex: "#87CEEB" },
          { name: "Azul", hex: "#1A3A5C" },
        ],
      },
    ],
    season: "otoño-invierno",
    images: [
      "./public/img/jeans-nino/cod-2019-camiseta-de-manga-larga-de-cuel-100-2A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/cod-2019-camiseta-de-manga-larga-de-cuel-100-2A.jpg",
    description:
      "Camiseta manga larga con cuello camisa y pantalones vaqueros con apliques. Elegancia y detalle.",
    material:
      "Camiseta: 100% Algodón. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-100-waffle-celeste",
    slug: "polera-casual-de-punto-waffle-de-manga-l-100-2A",
    name: "Polera Casual de Punto Waffle de Manga Larga 2 en 1 Celeste y Pantalones Vaqueros con Apliques",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.9,
    reviews: 14,
    stock: 10,
    sizes: [
      {
        name: "2 Años",
        colors: [
          { name: "Celeste", hex: "#87CEEB" },
          { name: "Blanco", hex: "#FFFFFF" },
        ],
      },
    ],
    season: "otoño-invierno",
    images: [
      "./public/img/jeans-nino/polera-casual-de-punto-waffle-de-manga-l-100-2A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/polera-casual-de-punto-waffle-de-manga-l-100-2A.jpg",
    description:
      "Polera waffle manga larga 2 en 1 celeste con pantalones vaqueros con apliques. ¡Dos looks en uno!",
    material:
      "Polera: 100% Algodón. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-100-corazon",
    slug: "polera-con-letras-de-coraz-n-blanco-y-pa-100-2A",
    name: "Polera con Letras de Corazón Blanco y Pantalones Largos de Mezclilla",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 11,
    stock: 13,
    sizes: [
      {
        name: "2 Años",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Rojo", hex: "#FF0000" },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nino/polera-con-letras-de-coraz-n-blanco-y-pa-100-2A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/polera-con-letras-de-coraz-n-blanco-y-pa-100-2A.jpg",
    description:
      "Polera blanca con letras de corazón y pantalones largos de mezclilla. ¡Con mucho amor!",
    material:
      "Polera: 100% Algodón. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-100-rayas-oso",
    slug: "polera-denim-con-mangas-largas-a-rayas-o-100-2A",
    name: "Polera Denim con Mangas Largas a Rayas Oso 3D Adorable y Jeans Azul",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.9,
    reviews: 15,
    stock: 14,
    sizes: [
      {
        name: "2 Años",
        colors: [
          { name: "Negro", hex: "#1A1A1A" },
          { name: "Beige", hex: "#F5F5DC" },
        ],
      },
    ],
    season: "otoño-invierno",
    images: [
      "./public/img/jeans-nino/polera-denim-con-mangas-largas-a-rayas-o-100-2A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/polera-denim-con-mangas-largas-a-rayas-o-100-2A.jpg",
    description:
      "Polera denim a rayas con oso 3D adorable y jeans azul. ¡Ternura y estilo!",
    material:
      "Polera: 65% Algodón, 35% Poliéster. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-100-mamas-boy",
    slug: "polera-genial-mama-boys-blanco-y-jeans-a-100-2A",
    name: "Polera Genial Mama Boys Blanco y Jeans Azul",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 12,
    stock: 12,
    sizes: [
      {
        name: "2 Años",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Azul", hex: "#1A3A5C" },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nino/polera-genial-mama-boys-blanco-y-jeans-a-100-2A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/polera-genial-mama-boys-blanco-y-jeans-a-100-2A.jpg",
    description:
      "Polera blanca con estampado MAMA'S BOY y jeans azul. ¡El orgullo de mamá!",
    material:
      "Polera: 100% Algodón. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-100-lucky-boy",
    slug: "polera-manga-larga-blanco-jeans-rasgado-100-2A",
    name: "Polera Manga Larga Blanco + Jeans Rasgado",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 9,
    stock: 10,
    sizes: [
      {
        name: "2 Años",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Azul", hex: "#1A3A5C" },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nino/polera-manga-larga-blanco-jeans-rasgado-100-2A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/polera-manga-larga-blanco-jeans-rasgado-100-2A.jpg",
    description:
      "Polera manga larga blanca con jeans rasgado. Look cómodo y casual.",
    material:
      "Polera: 100% Algodón. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-100-the-best",
    slug: "polo-de-manga-corta-blanco-y-jeans-negro-100-2A",
    name: "Polo de Manga Corta Blanco y Jeans Negro",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.6,
    reviews: 8,
    stock: 10,
    sizes: [
      {
        name: "2 Años",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Negro", hex: "#1A1A1A" },
        ],
      },
    ],
    season: "primavera-verano",
    images: [
      "./public/img/jeans-nino/polo-de-manga-corta-blanco-y-jeans-negro-100-2A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/polo-de-manga-corta-blanco-y-jeans-negro-100-2A.jpg",
    description: "Polo manga corta blanco con jeans negro. Clásico y versátil.",
    material:
      "Polo: 100% Algodón. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ============================================================
  // TALLA 110 - 3 AÑOS (7 productos)
  // ============================================================
  {
    id: "mk-jeans-nino-110-lucky-boy",
    slug: "conjunto-beb-2pz-polera-mommy-s-lucky-bo-110-3A",
    name: "Conjunto Bebé 2Pz - Polera Mommy's Lucky Boy + Jean",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.9,
    reviews: 14,
    stock: 16,
    sizes: [
      {
        name: "3 Años",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Azul", hex: "#1A3A5C" },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nino/conjunto-beb-2pz-polera-mommy-s-lucky-bo-110-3A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/conjunto-beb-2pz-polera-mommy-s-lucky-bo-110-3A.jpg",
    description:
      "Conjunto de polera MOMMY'S LUCKY BOY con jean. ¡El niño con suerte!",
    material:
      "Polera: 100% Algodón. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-110-the-best",
    slug: "conjunto-beb-ni-o-2pz-polo-manga-corta-j-110-3A",
    name: "Conjunto Bebé Niño 2Pz - Polo Manga Corta + Jean Rasgado",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 10,
    stock: 12,
    sizes: [
      {
        name: "3 Años",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Azul", hex: "#1A3A5C" },
        ],
      },
    ],
    season: "primavera-verano",
    images: [
      "./public/img/jeans-nino/conjunto-beb-ni-o-2pz-polo-manga-corta-j-110-3A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/conjunto-beb-ni-o-2pz-polo-manga-corta-j-110-3A.jpg",
    description:
      "Conjunto de polo manga corta THE BEST con jean rasgado. ¡Fresco y con estilo!",
    material:
      "Polo: 100% Algodón. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-110-osito-blanco",
    slug: "conjunto-beb-osito-blanco-2-piezas-poler-110-3A",
    name: "Conjunto Bebé Osito Blanco 2 Piezas - Polera Acolchada + Jeans",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 12,
    stock: 13,
    sizes: [
      {
        name: "3 Años",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Azul", hex: "#1A3A5C" },
        ],
      },
    ],
    season: "otoño-invierno",
    images: [
      "./public/img/jeans-nino/conjunto-beb-osito-blanco-2-piezas-poler-110-3A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/conjunto-beb-osito-blanco-2-piezas-poler-110-3A.jpg",
    description:
      "Conjunto de polera acolchada con osito y jeans. ¡Cálido y adorable!",
    material:
      "Polera: 60% Algodón, 40% Poliéster. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-110-patchwork",
    slug: "conjunto-de-camisa-y-pantal-n-de-patchwo-110-3A",
    name: "Conjunto de Camisa y Pantalón de Patchwork Liso",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 11,
    stock: 12,
    sizes: [
      {
        name: "3 Años",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Azul", hex: "#1A3A5C" },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nino/conjunto-de-camisa-y-pantal-n-de-patchwo-110-3A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/conjunto-de-camisa-y-pantal-n-de-patchwo-110-3A.jpg",
    description:
      "Conjunto de camisa y pantalón de patchwork liso. Look único y con personalidad.",
    material:
      "Camisa: 100% Algodón. Pantalón: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-110-camisa-cuadros",
    slug: "conjunto-jeans-ni-o-camisa-cuadros-bolsi-110-3A",
    name: "Conjunto Jeans Niño Camisa Cuadros Bolsillo - Casual Exteriores",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.9,
    reviews: 14,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [
          { name: "Negro", hex: "#1A1A1A" },
          { name: "Blanco", hex: "#FFFFFF" },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nino/conjunto-jeans-ni-o-camisa-cuadros-bolsi-110-3A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/conjunto-jeans-ni-o-camisa-cuadros-bolsi-110-3A.jpg",
    description:
      "Conjunto de camisa de cuadros con bolsillo y jeans. Perfecto para exteriores.",
    material:
      "Camisa: 100% Algodón. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-110-sudadera-beige",
    slug: "conjunto-ni-o-2pz-sudadera-beige-parche-110-3A",
    name: "Conjunto Niño 2Pz Sudadera Beige Parche Jeans",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 9,
    stock: 11,
    sizes: [
      {
        name: "3 Años",
        colors: [
          { name: "Beige", hex: "#F5F5DC" },
          { name: "Azul", hex: "#1A3A5C" },
        ],
      },
    ],
    season: "otoño-invierno",
    images: [
      "./public/img/jeans-nino/conjunto-ni-o-2pz-sudadera-beige-parche-110-3A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/conjunto-ni-o-2pz-sudadera-beige-parche-110-3A.jpg",
    description:
      "Conjunto de sudadera beige con parche y jeans. Look casual y moderno.",
    material:
      "Sudadera: 65% Algodón, 35% Poliéster. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-110-new-york",
    slug: "conjunto-ni-o-new-york-u-s-a-2-piezas-ot-110-3A",
    name: "Conjunto Niño NEW YORK U.S.A 2 Piezas Otoño - Polar Térmico + Jeans",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.9,
    reviews: 13,
    stock: 14,
    sizes: [
      {
        name: "3 Años",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Azul", hex: "#1A3A5C" },
        ],
      },
    ],
    season: "otoño-invierno",
    images: [
      "./public/img/jeans-nino/conjunto-ni-o-new-york-u-s-a-2-piezas-ot-110-3A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/conjunto-ni-o-new-york-u-s-a-2-piezas-ot-110-3A.jpg",
    description:
      "Conjunto de polar térmico NEW YORK con jeans. ¡Cálido y urbano!",
    material:
      "Polera: 60% Algodón, 40% Poliéster. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ============================================================
  // TALLA 120 - 4 AÑOS (9 productos)
  // ============================================================
  {
    id: "mk-jeans-nino-120-the-best",
    slug: "conjunto-beb-ni-o-2pz-polo-manga-corta-j-120-4A",
    name: "Conjunto Bebé Niño 2Pz - Polo Manga Corta + Jean Roto",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 12,
    stock: 14,
    sizes: [
      {
        name: "4 Años",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Gris", hex: "#808080" },
        ],
      },
    ],
    season: "primavera-verano",
    images: [
      "./public/img/jeans-nino/conjunto-beb-ni-o-2pz-polo-manga-corta-j-120-4A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/conjunto-beb-ni-o-2pz-polo-manga-corta-j-120-4A.jpg",
    description:
      "Conjunto de polo manga corta THE BEST con jean roto. ¡Look veraniego!",
    material:
      "Polo: 100% Algodón. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-120-dinosaurio",
    slug: "conjunto-jeans-ni-o-dinosaurio-2-piezas-120-4A",
    name: "Conjunto Jeans Niño Dinosaurio 2 Piezas",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.9,
    reviews: 14,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [
          { name: "Verde", hex: "#228B22" },
          { name: "Azul", hex: "#1A3A5C" },
        ],
      },
    ],
    season: "primavera-verano",
    images: [
      "./public/img/jeans-nino/conjunto-jeans-ni-o-dinosaurio-2-piezas-120-4A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/conjunto-jeans-ni-o-dinosaurio-2-piezas-120-4A.jpg",
    description:
      "Conjunto de camisa con dinosaurio y jeans. ¡Aventura y diversión!",
    material:
      "Camisa: 100% Algodón. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-120-sudadera-estampada",
    slug: "conjunto-ni-o-2-piezas-oto-o-invierno-su-120-4A",
    name: "Conjunto Niño 2 Piezas Otoño Invierno - Sudadera Estampada + Jeans",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 9,
    stock: 11,
    sizes: [
      {
        name: "4 Años",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Celeste", hex: "#87CEEB" },
        ],
      },
    ],
    season: "otoño-invierno",
    images: [
      "./public/img/jeans-nino/conjunto-ni-o-2-piezas-oto-o-invierno-su-120-4A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/conjunto-ni-o-2-piezas-oto-o-invierno-su-120-4A.jpg",
    description:
      "Conjunto de sudadera estampada con jeans. Look acogedor para el frío.",
    material:
      "Sudadera: 65% Algodón, 35% Poliéster. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-120-cocodrilo",
    slug: "conjunto-ni-o-2pz-cocodrilo-sudadera-jea-120-4A",
    name: "Conjunto Niño 2Pz Cocodrilo - Sudadera + Jean Casual",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.6,
    reviews: 8,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [
          { name: "Azul", hex: "#1A3A5C" },
          { name: "Celeste", hex: "#87CEEB" },
        ],
      },
    ],
    season: "primavera-verano",
    images: [
      "./public/img/jeans-nino/conjunto-ni-o-2pz-cocodrilo-sudadera-jea-120-4A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/conjunto-ni-o-2pz-cocodrilo-sudadera-jea-120-4A.jpg",
    description:
      "Conjunto de sudadera con cocodrilo y jeans casual. ¡Look salvaje y divertido!",
    material:
      "Sudadera: 65% Algodón, 35% Poliéster. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-120-letras",
    slug: "conjunto-ni-o-2pz-letras-sudadera-120-4A",
    name: "Conjunto Niño 2Pz Letras - Sudadera",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 11,
    stock: 12,
    sizes: [
      {
        name: "4 Años",
        colors: [
          { name: "Gris", hex: "#808080" },
          { name: "Celeste", hex: "#87CEEB" },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nino/conjunto-ni-o-2pz-letras-sudadera-120-4A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/conjunto-ni-o-2pz-letras-sudadera-120-4A.jpg",
    description: "Conjunto de sudadera con letras y jeans. ¡Estilo urbano!",
    material:
      "Sudadera: 65% Algodón, 35% Poliéster. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-120-sudadera-beige",
    slug: "conjunto-ni-o-2pz-sudadera-beige-parche-120-4A",
    name: "Conjunto Niño 2Pz Sudadera Beige Parche Jeans",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 9,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [
          { name: "Beige", hex: "#F5F5DC" },
          { name: "Azul", hex: "#1A3A5C" },
        ],
      },
    ],
    season: "otoño-invierno",
    images: [
      "./public/img/jeans-nino/conjunto-ni-o-2pz-sudadera-beige-parche-120-4A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/conjunto-ni-o-2pz-sudadera-beige-parche-120-4A.jpg",
    description: "Conjunto de sudadera beige con parche y jeans. Look moderno.",
    material:
      "Sudadera: 65% Algodón, 35% Poliéster. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-120-letras-me",
    slug: "conjunto-ni-o-oto-o-2-piezas-sudadera-le-120-4A",
    name: "Conjunto Niño Otoño 2 Piezas - Sudadera Letras ME + Jeans",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 10,
    stock: 11,
    sizes: [
      {
        name: "4 Años",
        colors: [
          { name: "Crema", hex: "#FFFDD0" },
          { name: "Azul", hex: "#1A3A5C" },
        ],
      },
    ],
    season: "otoño-invierno",
    images: [
      "./public/img/jeans-nino/conjunto-ni-o-oto-o-2-piezas-sudadera-le-120-4A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/conjunto-ni-o-oto-o-2-piezas-sudadera-le-120-4A.jpg",
    description:
      "Conjunto de sudadera con letras ME y jeans. ¡Con estilo propio!",
    material:
      "Sudadera: 65% Algodón, 35% Poliéster. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-120-overol-oso",
    slug: "conjunto-overol-beb-ni-o-oso-2-piezas-ot-120-4A",
    name: "Conjunto Overol Bebé Niño Oso 2 Piezas - Otoño Invierno",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.9,
    reviews: 15,
    stock: 14,
    sizes: [
      {
        name: "4 Años",
        colors: [
          { name: "Negro", hex: "#1A1A1A" },
          { name: "Amarillo", hex: "#FFD700" },
        ],
      },
    ],
    season: "otoño-invierno",
    images: [
      "./public/img/jeans-nino/conjunto-overol-beb-ni-o-oso-2-piezas-ot-120-4A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/conjunto-overol-beb-ni-o-oso-2-piezas-ot-120-4A.jpg",
    description: "Conjunto de overol con oso y polo. ¡Cálido y adorable!",
    material:
      "Overol: 75% Algodón, 23% Poliéster, 2% Elastano. Polo: 100% Algodón.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-120-polera-oso",
    slug: "polera-con-dise-o-de-oso-y-falso-denim-c-120-4A",
    name: "Polera con Diseño de Oso y Falso Denim, Conjunto Casual Rasgado",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 12,
    stock: 13,
    sizes: [
      {
        name: "4 Años",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Amarillo", hex: "#FFD700" },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nino/polera-con-dise-o-de-oso-y-falso-denim-c-120-4A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/polera-con-dise-o-de-oso-y-falso-denim-c-120-4A.jpg",
    description:
      "Polera con diseño de oso y falso denim, conjunto casual rasgado. ¡Ternura y estilo!",
    material:
      "Polera: 100% Algodón. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ============================================================
  // TALLA 130 - 5 AÑOS (5 productos)
  // ============================================================
  {
    id: "mk-jeans-nino-130-jeans-negros",
    slug: "conjunto-beb-ni-o-jeans-negros-2-piezas-130-5A",
    name: "Conjunto Bebé Niño Jeans Negros 2 Piezas - Verano Casual",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 9,
    stock: 11,
    sizes: [
      {
        name: "5 Años",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Negro", hex: "#1A1A1A" },
        ],
      },
    ],
    season: "primavera-verano",
    images: [
      "./public/img/jeans-nino/conjunto-beb-ni-o-jeans-negros-2-piezas-130-5A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/conjunto-beb-ni-o-jeans-negros-2-piezas-130-5A.jpg",
    description:
      "Conjunto casual de polo con jeans negros. Perfecto para verano.",
    material:
      "Polo: 100% Algodón. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-130-rayas-beige",
    slug: "conjunto-jeans-ni-o-camisa-rayas-beige-2-130-5A",
    name: "Conjunto Jeans Niño Camisa Rayas Beige 2 Piezas - Primavera Otoño",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 11,
    stock: 12,
    sizes: [
      {
        name: "5 Años",
        colors: [
          { name: "Beige", hex: "#F5F5DC" },
          { name: "Azul", hex: "#1A3A5C" },
        ],
      },
    ],
    season: "primavera-otoño",
    images: [
      "./public/img/jeans-nino/conjunto-jeans-ni-o-camisa-rayas-beige-2-130-5A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/conjunto-jeans-ni-o-camisa-rayas-beige-2-130-5A.jpg",
    description:
      "Conjunto de camisa a rayas beige con jeans. Look de primavera-otoño.",
    material:
      "Camisa: 100% Algodón. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-130-dino",
    slug: "conjunto-ni-o-dinosaurio-2-piezas-sudade-130-5A",
    name: "Conjunto Niño Dinosaurio 2 Piezas - Sudadera Blanca + Jean Azul",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.9,
    reviews: 14,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Azul", hex: "#1A3A5C" },
        ],
      },
    ],
    season: "otoño-invierno",
    images: [
      "./public/img/jeans-nino/conjunto-ni-o-dinosaurio-2-piezas-sudade-130-5A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/conjunto-ni-o-dinosaurio-2-piezas-sudade-130-5A.jpg",
    description:
      "Conjunto de sudadera blanca con dinosaurio y jean azul. ¡Aventura jurásica!",
    material:
      "Sudadera: 65% Algodón, 35% Poliéster. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-130-rayas-negro",
    slug: "conjunto-ni-o-rayas-negro-blanco-2-pieza-130-5A",
    name: "Conjunto Niño Rayas Negro-Blanco 2 Piezas + Jean Roto Casual",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 12,
    stock: 13,
    sizes: [
      {
        name: "5 Años",
        colors: [
          { name: "Negro", hex: "#1A1A1A" },
          { name: "Blanco", hex: "#FFFFFF" },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nino/conjunto-ni-o-rayas-negro-blanco-2-pieza-130-5A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/conjunto-ni-o-rayas-negro-blanco-2-pieza-130-5A.jpg",
    description:
      "Conjunto de sudadera a rayas negro-blanco con jean roto. ¡Look con actitud!",
    material:
      "Sudadera: 65% Algodón, 35% Poliéster. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-130-osito-xisx",
    slug: "conjunto-osito-xisx-polo-jean-azul-2-pie-130-5A",
    name: "Conjunto Osito XISX Polo + Jean Azul - 2 piezas",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 11,
    stock: 12,
    sizes: [
      {
        name: "5 Años",
        colors: [
          { name: "Blanco", hex: "#FFFFFF" },
          { name: "Azul", hex: "#1A3A5C" },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nino/conjunto-osito-xisx-polo-jean-azul-2-pie-130-5A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/conjunto-osito-xisx-polo-jean-azul-2-pie-130-5A.jpg",
    description:
      "Conjunto de polo con osito XISX y jean azul. ¡Adorable y moderno!",
    material:
      "Polo: 100% Algodón. Jean: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ============================================================
  // TALLA 140 - 6 AÑOS (1 producto)
  // ============================================================
  {
    id: "mk-jeans-nino-140-jean-r",
    slug: "jean-r-camisa-pantal-n-2pzs-140-6A",
    name: "Jean R - Camisa + Pantalón - 2Pzs",
    category: "jeans-nino",
    price: 49,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.7,
    reviews: 9,
    stock: 11,
    sizes: [
      {
        name: "6 Años",
        colors: [
          { name: "Azul", hex: "#1A3A5C" },
          { name: "Blanco", hex: "#FFFFFF" },
        ],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/jeans-nino/jean-r-camisa-pantal-n-2pzs-140-6A.jpg"],
    realImage: "./public/img/jeans-nino/jean-r-camisa-pantal-n-2pzs-140-6A.jpg",
    description:
      "Conjunto de camisa y pantalón Jean R. Look clásico y elegante.",
    material:
      "Camisa: 100% Algodón. Pantalón: 75% Algodón, 23% Poliéster, 2% Elastano.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ============================================================
  // TALLA 150 - 7 AÑOS (1 producto)
  // ============================================================
  {
    id: "mk-jeans-nino-150-archive-23",
    slug: "cod-150-jean-archive-23-2-pzs-150-7A",
    name: "Cod 150 Jean ARCHIVE 23 - 2 Pzs",
    category: "jeans-nino",
    price: 49,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 10,
    stock: 12,
    sizes: [
      {
        name: "7 Años",
        colors: [
          { name: "Azul", hex: "#1A3A5C" },
          { name: "Gris", hex: "#808080" },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nino/cod-150-jean-archive-23-2-pzs-150-7A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/cod-150-jean-archive-23-2-pzs-150-7A.jpg",
    description:
      "Conjunto Jean ARCHIVE 23 de 2 piezas. Estilo vintage y moderno.",
    material: "75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    care: "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ============================================================
  // VESTIDOS - FORMATO DINÁMICO (Tallas con Colores Vinculados)
  // ============================================================
  // ---- TALLA 12-18 MESES ----
  {
    id: "mk-vestido-verano-bebe-12-18M",
    slug: "mk-vestido-verano-bebe-12-18M",
    name: "Vestido de verano para bebés niña",
    category: "vestidos-nina",
    price: 39,
    oldPrice: 55,
    cost: 21.58,
    badge: "Preventa",
    rating: 4.9,
    reviews: 10,
    stock: 10,
    sizes: [
      {
        name: "12-18 Meses",
        colors: [
          {
            name: "Rosa",
            hex: "#F8BBD0",
          },
        ],
      },
    ],
    season: "verano",
    images: [
      "./public/img/preventa/mk-vestido-verano-bebe-12-18M.jpg",
      "./public/img/preventa/mk-vestido-verano-bebe-12-18M_2.jpg",
    ],
    realImage: "./public/img/preventa/mk-vestido-verano-bebe-12-18M_2.jpg",
    description:
      "Vestido de verano para bebés niña, fresco con flores 3D. Ideal para verano.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-vestido-crema-cod-90",
    slug: "vestido-crema-cod-90",
    name: "Vestido de Princesa Crema para Bebé",
    category: "vestidos-nina",
    price: 49,
    oldPrice: 60,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "12-18 Meses",
        colors: [{ name: "Beige Claro", hex: "#FFF8E1" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/vestidos-nina/crema-90-18-24M.jpg"],
    realImage: "./public/img/vestidos-nina/crema-90-18-24M.jpg",
    description:
      "Hermoso vestido de princesa en color crema. Con detalles delicados y corte princesa. Perfecto para fiestas y ocasiones especiales.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-vestido-rosa-cod-90",
    slug: "vestido-rosa-cod-90",
    name: "Vestido de Princesa Rosa para Bebé",
    category: "vestidos-nina",
    price: 49,
    oldPrice: 60,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "12-18 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/vestidos-nina/rosa-90-18-24M.jpg"],
    realImage: "./public/img/vestidos-nina/rosa-90-18-24M.jpg",
    description:
      "Hermoso vestido de princesa en rosa. Con detalles delicados y corte princesa. Perfecto para fiestas y ocasiones especiales.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
    activo: false,
  },
  {
    id: "mk-vestido-rosa-claro-cod-90",
    slug: "vestido-rosa-claro-cod-90",
    name: "Vestido de Princesa Rosa Claro para Bebé",
    category: "vestidos-nina",
    price: 49,
    oldPrice: 60,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "12-18 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/vestidos-nina/rosa-claro-90-18-24M.jpg"],
    realImage: "./public/img/vestidos-nina/rosa-claro-90-18-24M.jpg",
    description:
      "Hermoso vestido de princesa en rosa claro. Con detalles delicados y corte princesa.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
    activo: false,
  },

  {
    id: "mk-vestido-chaleco-gris-cod-90",
    slug: "vestido-chaleco-gris-cod-90",
    name: "Vestido con Chaleco Gris para Bebé",
    category: "vestidos-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "12-18 Meses",
        colors: [{ name: "Gris", hex: "#9E9E9E" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/vestidos-nina/vestido-chaleco-gris-chaqueta-c-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/vestidos-nina/vestido-chaleco-gris-chaqueta-c-90-18-24M.jpg",
    description: "Vestido con chaleco gris. Diseño elegante y moderno.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 18-24 MESES ----
  {
    id: "mk-conjunto-rojo-fresa-18-24M",
    slug: "conjunto-casual-2-piezas-fresita-rojo-18-24M",
    name: "Conjunto Casual de 2 Piezas para Bebé - Chompita Roja + Vestido Fresitas",
    category: "vestidos-nina",
    price: 42,
    oldPrice: 55,
    cost: 23.28,
    badge: "Nuevo",
    rating: 5.0,
    reviews: 3,
    stock: 10,
    sizes: [
      {
        name: "18-24 Meses",
        label: "18-24M",
        colors: [{ name: "Rojo", hex: "#D32F2F", stock: 1 }],
      },
    ],
    season: "primavera-otono",
    images: [
      "./public/img/preventa/mk-conjunto-rojo-fresa-18-24M.jpg",
      "./public/img/preventa/mk-conjunto-rojo-fresa-18-24M_1.jpg",
    ],
    realImage: "./public/img/preventa/mk-conjunto-rojo-fresa-18-24M.jpg",
    description:
      "Hermoso conjunto casual de 2 piezas para bebés y niñas pequeñas estilo primavera/otoño. Incluye chompita roja de punto y vestido blanco con estampado de fresitas. Suave, no pica y perfecto para el día a día.",
    material: "Tejido de punto suave + algodón. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-vestido-18-24-mixxed-cod-90",
    slug: "vestido-18-24-mixxed-cod-90",
    name: "Vestido de Princesa Mixxed Color para Bebé",
    category: "vestidos-nina",
    price: 39,
    oldPrice: 50,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Rosa-Beige", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/vestidos-nina/18-24-mixxed-color-90-18-24M.jpg"],
    realImage: "./public/img/vestidos-nina/18-24-mixxed-color-90-18-24M.jpg",
    description:
      "Hermoso vestido de princesa con diseño mixxed color. Corte princesa y detalles delicados.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-vestido-2-piezas-fleece-cod-90",
    slug: "vestido-2-piezas-fleece-cod-90",
    name: "Conjunto de 2 Piezas Fleece para Bebé",
    category: "vestidos-nina",
    price: 45,
    oldPrice: 59,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/vestidos-nina/2-conjunto-2-piezas-beb-ni-a-fleece-grue-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/vestidos-nina/2-conjunto-2-piezas-beb-ni-a-fleece-grue-90-18-24M.jpg",
    description:
      "Conjunto de 2 piezas fleece para bebé. Perfecto para mantenerla abrigada y cómoda.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-vestido-2-piezas-chaqueta-cod-90",
    slug: "vestido-2-piezas-chaqueta-cod-90",
    name: "Conjunto de 2 Piezas con Chaqueta para Bebé",
    category: "vestidos-nina",
    price: 45,
    oldPrice: 60,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/vestidos-nina/2-conjunto-ni-a-2-piezas-chaqueta-manga-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/vestidos-nina/2-conjunto-ni-a-2-piezas-chaqueta-manga-90-18-24M.jpg",
    description:
      "Conjunto de 2 piezas con chaqueta. Ideal para mantener a tu bebé abrigada con estilo.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-vestido-princesa-navidad-cod-90",
    slug: "vestido-princesa-navidad-cod-90",
    name: "Vestido de Princesa Navideño para Bebé",
    category: "vestidos-nina",
    price: 49,
    oldPrice: 60,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/vestidos-nina/vestido-princesa-beb-sin-mangas-navidad-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/vestidos-nina/vestido-princesa-beb-sin-mangas-navidad-90-18-24M.jpg",
    description:
      "Vestido de princesa navideño sin mangas. Perfecto para celebraciones.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 2 AÑOS ----
  {
    id: "mk-vestido-fiesta-purpura-2A",
    slug: "mk-vestido-fiesta-purpura-2-3Y",
    name: "Vestido de fiesta de princesa con lazo grande Púrpura",
    category: "vestidos-nina",
    price: 49.0,
    oldPrice: 87,
    cost: 28.63,
    badge: "Fiesta",
    rating: 4.9,
    reviews: 10,
    stock: 10,
    sizes: [
      {
        name: "2 Años",
        colors: [
          {
            name: "Púrpura",
            hex: "#9C27B0",
          },
        ],
      },
    ],
    season: "fiesta",
    images: [
      "./public/img/preventa/mk-vestido-fiesta-purpura-2A.jpg",
      "./public/img/preventa/mk-vestido-fiesta-purpura-2A_2.jpg",
    ],
    realImage: "./public/img/preventa/mk-vestido-fiesta-purpura-2A_2.jpg",
    description:
      "Vestido de fiesta de princesa con lazo grande. Diseño elegante para cumpleaños.",
    material: "65% Poliéster, 35% viscose. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-fiesta-rosa-2A",
    slug: "mk-fiesta-rosa-100",
    name: "Vestido de Fiesta de Princesa con volantes Rosa",
    category: "vestidos-nina",
    price: 55.0,
    oldPrice: 77,
    Cost: 32,
    badge: "Princesa",
    rating: 4.9,
    reviews: 10,
    stock: 10,
    sizes: [
      {
        name: "2 Años",
        colors: [
          {
            name: "Rosa",
            hex: "#F8BBD0",
          },
        ],
      },
    ],
    season: "fiesta",
    images: [
      "./public/img/preventa/mk-fiesta-rosa-2A.jpg",
      "./public/img/preventa/mk-fiesta-rosa-2A_2.jpg",
    ],
    realImage: "./public/img/preventa/mk-fiesta-rosa-2A_2.jpg",
    description:
      "Vestido de fiesta de princesa con volantes coloridos. Estilo dulce.",
    material: "65% Poliéster, 35% Viscose. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-vestido-floral-lazo-2A",
    sku: "MK-FLORAL-POLI-2-3Y",
    slug: "vestido-floral-delicado-lazo-bebita-2-3Y",
    name: "Vestido Floral Delicado con Lazo para Bebitas",
    category: "vestidos-nina",
    price: 49.0,
    oldPrice: 84,
    cost: 22.9,
    badge: "Preventa",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "2 Años",
        label: "2-3Y",
        colors: [
          {
            name: "Policromo",
            hex: "#E1F5FE",
            stock: 10,
          },
        ],
      },
    ],
    season: "verano",
    images: [
      "./public/img/preventa/mk-vestido-floral-lazo-2A_2.jpg",
      "./public/img/preventa/mk-vestido-floral-lazo-2A.jpg",
    ],
    realImage: "./public/img/preventa/mk-vestido-floral-lazo-2A.jpg",
    description:
      "Vestido de verano fresco con lazo grande y estampado floral delicado. Manga con volantes.",
    material: "100% Poliéster. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
    delivery: "Preventa. Entrega: 6-19 días hábiles (15 sept-2 oct)",
  },
  {
    id: "mk-vestido-tul-bordado-floral-rosa-2A",
    sku: "MK-TUL-BORD-ROSA-2-3Y",
    slug: "vestido-tul-rosa-bordado-floral-princesa-2-3Y",
    name: "Vestido de Tul Rosa con Bordado Floral - Vestido de Princesa con Mangas",
    category: "vestidos-nina",
    price: 49.0,
    oldPrice: 80,
    cost: 24.56,
    badge: "Princesa",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "2 Años",
        label: "2-3Y",
        colors: [
          {
            name: "Rosa",
            hex: "#F8BBD0",
            stock: 10,
          },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/preventa/mk-vestido-tul-bordado-floral-rosa-2A.jpg",
      "./public/img/preventa/mk-vestido-tul-bordado-floral-rosa-2A_2.jpg",
    ],
    realImage:
      "./public/img/preventa/mk-vestido-tul-bordado-floral-rosa-2A_2.jpg",
    description:
      "Vestido de tul rosa con bordado floral, mangas con volantes y lazo grande. Estilo princesa para fiesta y verano.",
    material: "Tul + 90% Poliéster, 10% Elastano. Forro suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-vestido-marron-caquie-cod-100",
    slug: "vestido-marron-caquie-cod-100",
    name: "Vestido de Princesa Marrón Caqui",
    category: "vestidos-nina",
    price: 49,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Marrón", hex: "#A1887F" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/vestidos-nina/2-marron-caquie-100-2A.jpg"],
    realImage: "./public/img/vestidos-nina/2-marron-caquie-100-2A.jpg",
    description:
      "Elegante vestido de princesa en marrón caqui. Perfecto para ocasiones especiales.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
    activo: false,
  },
  {
    id: "mk-vestido-rosa-manga-larga-cod-100",
    slug: "vestido-rosa-manga-larga-cod-100",
    name: "Vestido de Princesa Rosa con Manga Larga",
    category: "vestidos-nina",
    price: 39,
    oldPrice: 50,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/vestidos-nina/2-rosa-manga-larga-100-2A.jpg"],
    realImage: "./public/img/vestidos-nina/2-rosa-manga-larga-100-2A.jpg",
    description:
      "Hermoso vestido de princesa rosa con manga larga. Perfecto para los días más frescos.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-vestido-verde-limon-cod-100",
    slug: "vestido-verde-limon-cod-100",
    name: "Vestido de Princesa Verde Limón",
    category: "vestidos-nina",
    price: 43,
    oldPrice: 60,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Verde", hex: "#A5D6A7" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/vestidos-nina/2-verde-limon-100-2A.jpg"],
    realImage: "./public/img/vestidos-nina/2-verde-limon-100-2A.jpg",
    description:
      "Hermoso vestido de princesa en verde limón. Perfecto para ocasiones especiales.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-vestido-malla-patchwork-cod-100",
    slug: "vestido-malla-patchwork-cod-100",
    name: "Vestido de Malla con Patchwork para Niña",
    category: "vestidos-nina",
    price: 49,
    oldPrice: 60,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/vestidos-nina/2-vestido-lindo-de-malla-con-patchwork-d-100-2A.jpg",
    ],
    realImage:
      "./public/img/vestidos-nina/2-vestido-lindo-de-malla-con-patchwork-d-100-2A.jpg",
    description: "Vestido de malla con patchwork. Diseño único y delicado.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-vestido-violeta-malla-cod-100",
    slug: "vestido-violeta-malla-cod-100",
    name: "Vestido Violeta de Malla para Niña",
    category: "vestidos-nina",
    price: 43,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/vestidos-nina/2-violeta-vestido-de-malla-con-parc-100-2A.jpg",
    ],
    realImage:
      "./public/img/vestidos-nina/2-violeta-vestido-de-malla-con-parc-100-2A.jpg",
    description: "Vestido violeta de malla. Diseño delicado y elegante.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
    activo: false,
  },
  // ---- TALLA 3 AÑOS ----
  {
    id: "mk-princesa-arcoiris-2A",
    slug: "mk-princesa-arcoiris-100",
    name: "El vestido de princesa con estampado Arcoiris de tonalidades",
    category: "vestidos-nina",
    price: 45.0,
    oldPrice: 60,
    cost: 28,
    badge: "Verano",
    rating: 4.9,
    reviews: 10,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [
          {
            name: "Arcoiris de tonalidades",
            hex: "#B2EBF2",
          },
        ],
      },
    ],
    season: "verano",
    images: [
      "./public/img/preventa/mk-princesa-arcoiris-2A.jpg",
      "./public/img/preventa/mk-princesa-arcoiris-2A-2.jpg",
    ],
    realImage: "./public/img/preventa/mk-princesa-arcoiris-2A-2.jpg",
    description:
      "Vestido de princesa con estampado arcoiris de tonalidades, tul suave.",
    material: "65% Poliéster, 36% Viscose. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-vestido-princesa-amarillo-3A",
    sku: "MK-PRIN-AMAR-3-4Y",
    slug: "vestido-princesa-bebe-cumpleanos-amarillo-3-4Y",
    name: "Vestido de Princesa para Bebé - Fiesta de Cumpleaños",
    category: "vestidos-nina",
    price: 39.0,
    oldPrice: 49,
    cost: 15.98,
    badge: "Preventa",
    rating: 3.9,
    reviews: 10,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        label: "3-4Y",
        colors: [{ name: "Amarillo", hex: "#FFEB3B", stock: 1 }],
      },
    ],
    season: "verano",
    images: [
      "./public/img/preventa/mk-vestido-princesa-amarillo-3A.jpg",
      "./public/img/preventa/mk-vestido-princesa-amarillo-3A_2.jpg",
    ],
    realImage: "./public/img/preventa/mk-vestido-princesa-amarillo-3A_2.jpg",
    description:
      "Vestido de princesa para bebé con peluche suave y detalles brillantes. Ideal para cumpleaños y verano.",
    material:
      "Exterior: Peluche suave 100% Poliéster con detalles bordados de estrellitas. Interior: Forro de algodón suave 95% Algodón, 5% Elastano. No pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora. No planchar directo sobre los bordados.",
    delivery: "Preventa. Entrega: 6-19 días hábiles (15 sept-2 oct)",
    tags: ["princesa", "amarillo", "peluche", "cumpleaños", "verano", "3-4Y"],
  },
  {
    id: "mk-vestido-rojo-borgona-cod-100",
    slug: "vestido-rojo-borgona-cod-100",
    name: "Vestido de Princesa Rojo Borgoña",
    category: "vestidos-nina",
    price: 49,
    oldPrice: 60,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rojo", hex: "#EC1414" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/vestidos-nina/vestido-rojo-borgona-cod100.jpg"],
    realImage: "./public/img/vestidos-nina/vestido-rojo-borgona-cod100.jpg",
    description:
      "Vestido de princesa en rojo borgoña, elegante y sofisticado. ¡Última unidad disponible!",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  // ---- TALLA 3 AÑOS ----
  {
    id: "mk-vestido-princesa-flores-rosa-cod-100",
    slug: "vestido-princesa-flores-rosa-cod-100",
    name: "Vestido de Princesa con Flores Rosas",
    category: "vestidos-nina",
    price: 49,
    oldPrice: 60,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#C2185B" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/vestidos-nina/vestido-princesa-flores-rosa-cod100.jpg",
    ],
    realImage:
      "./public/img/vestidos-nina/vestido-princesa-flores-rosa-cod100.jpg",
    description:
      "Hermoso vestido de princesa con flores rosas. Diseño delicado y elegante. ¡Última unidad!",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 2-3 AÑOS ----
  {
    id: "mk-vestido-verde-oliva-2-3-cod-110",
    slug: "vestido-verde-oliva-2-3-cod-110",
    name: "Vestido de Princesa Verde Oliva",
    category: "vestidos-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Verde", hex: "#A5D6A7" }],
      },
      {
        name: "3 Años",
        colors: [{ name: "Verde", hex: "#A5D6A7" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/vestidos-nina/2-y-3-verde-oliva-110-3A.jpg"],
    realImage: "./public/img/vestidos-nina/2-y-3-verde-oliva-110-3A.jpg",
    description:
      "Elegante vestido de princesa en verde oliva. Perfecto para ocasiones especiales.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 3 AÑOS ----

  {
    id: "mk-vestido-verano-amarillo-3A",
    slug: "vestido-verano-tejido-nina-floral-3D-amarillo-3-4A",
    name: "Vestido de Verano Tejido para Niñas con Manga con Volantes y Diseño Floral 3D - Amarillo",
    category: "vestidos-nina",
    price: 42.8,
    oldPrice: 68,
    cost: 23.55,
    badge: "Verano",
    rating: 4.9,
    reviews: 8,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        label: "3-4Y",
        colors: [{ name: "Amarillo", hex: "#FFEB3B", stock: 1 }],
      },
    ],
    season: "verano",
    images: [
      "./public/img/preventa/mk-vestido-verano-amarillo-3A.jpg",
      "./public/img/preventa/mk-vestido-verano-amarillo-3A_2.jpg",
    ],
    realImage: "./public/img/preventa/mk-vestido-verano-amarillo-3A_2.jpg",
    description:
      "Vestido de verano tejido para niñas con manga con volantes y diseño floral 3D. Suave, fresco y no pica. Perfecto para días de sol, paseos y fotos.",
    material: "Tejido suave - 90% Poliéster, 10% Elastano. Flores 3D bordadas.",
    cuidados: "Lavar a mano con agua fría. No usar blanqueador.",
    features: [
      "Manga con volantes",
      "Diseño floral 3D",
      "Tejido fresco",
      "Ideal primavera-verano",
    ],
    tags: ["verano", "amarillo", "floral 3D", "volantes", "3-4Y", "tejido"],
  },
  {
    id: "mk-vestido-morado-claro-cod-110",
    slug: "vestido-morado-claro-cod-110",
    name: "Vestido de Princesa Morado Claro",
    category: "vestidos-nina",
    price: 49,
    oldPrice: 60,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Morado", hex: "#B39DDB" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/vestidos-nina/2-3-morado-claro-110-3A.jpg"],
    realImage: "./public/img/vestidos-nina/2-3-morado-claro-110-3A.jpg",
    description:
      "Hermoso vestido de princesa en morado claro. Perfecto para fiestas y ocasiones especiales.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-vestido-2-piezas-volantes-cod-110",
    slug: "vestido-2-piezas-volantes-cod-110",
    name: "Vestido de 2 Piezas con Volantes Floral",
    category: "vestidos-nina",
    price: 39,
    oldPrice: 50,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/vestidos-nina/3-conjunto-2-piezas-volantes-floral-110-3A.jpg",
    ],
    realImage:
      "./public/img/vestidos-nina/3-conjunto-2-piezas-volantes-floral-110-3A.jpg",
    description:
      "Vestido de 2 piezas con volantes florales. Diseño moderno y femenino.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
    activo: false,
  },
  {
    id: "mk-vestido-princesa-flor-cod-110",
    slug: "vestido-princesa-flor-cod-110",
    name: "Vestido de Princesa con Flor para Niña",
    category: "vestidos-nina",
    price: 49,
    oldPrice: 65,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/vestidos-nina/3-rosa-vestido-de-princesa-con-flor-110-3A.jpg",
    ],
    realImage:
      "./public/img/vestidos-nina/3-rosa-vestido-de-princesa-con-flor-110-3A.jpg",
    description: "Vestido de princesa con flor. Diseño delicado y elegante.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
    activo: false,
  },
  {
    id: "mk-vestido-casual-mariposas-cod-110",
    slug: "vestido-casual-mariposas-cod-110",
    name: "Vestido Casual con Mariposas para Niña",
    category: "vestidos-nina",
    price: 39,
    oldPrice: 50,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/vestidos-nina/3-vestido-casual-mariposas-con-mo-o-110-3A.jpg",
    ],
    realImage:
      "./public/img/vestidos-nina/3-vestido-casual-mariposas-con-mo-o-110-3A.jpg",
    description: "Vestido casual con mariposas. Diseño alegre y moderno.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-vestido-capa-lazo-cod-110",
    slug: "vestido-capa-lazo-cod-110",
    name: "Vestido con Capa y Lazo para Niña",
    category: "vestidos-nina",
    price: 49,
    oldPrice: 65,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "RoJO", hex: "#FF0000" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/vestidos-nina/3-vestido-con-capa-con-lazo-manga-c-110-3A.jpg",
    ],
    realImage:
      "./public/img/vestidos-nina/3-vestido-con-capa-con-lazo-manga-c-110-3A.jpg",
    description: "Vestido con capa y lazo. Diseño elegante y sofisticado.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
    activo: false,
  },
  {
    id: "mk-vestido-organza-floral-cod-110",
    slug: "vestido-organza-floral-cod-110",
    name: "Vestido de Organza Floral para Niña",
    category: "vestidos-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "ROJO", hex: "#FF0000" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/vestidos-nina/3-vestido-organza-floral-manga-abul-110-3A.jpg",
    ],
    realImage:
      "./public/img/vestidos-nina/3-vestido-organza-floral-manga-abul-110-3A.jpg",
    description: "Vestido de organza floral. Diseño delicado y elegante.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
    activo: false,
  },
  {
    id: "mk-vestido-tut-encaje-cod-110",
    slug: "vestido-tut-encaje-cod-110",
    name: "Vestido de Tutú con Encaje para Niña",
    category: "vestidos-nina",
    price: 49,
    oldPrice: 65,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Celeste", hex: "#B6E5F5" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/vestidos-nina/3-vestido-peque-o-de-tut-de-encaje-110-3A.jpg",
    ],
    realImage:
      "./public/img/vestidos-nina/3-vestido-peque-o-de-tut-de-encaje-110-3A.jpg",
    description: "Vestido de tutú con encaje. Diseño delicado y femenino.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-vestido-princesa-preadolescente-cod-110",
    slug: "vestido-princesa-preadolescente-cod-110",
    name: "Vestido de Princesa Preadolescente",
    category: "vestidos-nina",
    price: 49,
    oldPrice: 65,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/vestidos-nina/3-vestido-princesa-preadolescente-con-la-110-3A.jpg",
    ],
    realImage:
      "./public/img/vestidos-nina/3-vestido-princesa-preadolescente-con-la-110-3A.jpg",
    description:
      "Vestido de princesa preadolescente. Diseño elegante y moderno.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
    activo: false,
  },

  // ---- TALLA 3 AÑOS ----
  {
    id: "mk-vestido-4-floral-con-cod-120",
    slug: "vestido-4-floral-con-cod-120",
    name: "Vestido de Princesa Floral para Niña",
    category: "vestidos-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Lila", hex: "#B39DDB" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/vestidos-nina/4-falda-vestido-princesa-floral-con-120-4A.jpg",
    ],
    realImage:
      "./public/img/vestidos-nina/4-falda-vestido-princesa-floral-con-120-4A.jpg",
    description:
      "Vestido de princesa floral con falda. Diseño delicado y elegante.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-coreano-osito-marron-3A",
    slug: "conjunto-nena-estilo-coreano-osito-marron-2-piezas",
    name: "Conjunto De Ropa Para Niñas Estilo Coreano Con Tela Suave Y Dibujos Animados, Juego De 2 Piezas Con Cuello Redondo",
    category: "vestidos-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Marrón", hex: "#8B5A2B" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/vestidos-nina/mk-coreano-osito-marron-3A.jpg"],
    realImage: "./public/img/vestidos-nina/mk-coreano-osito-marron-3A_1.jpg",
    description:
      "Conjunto coreano 2 piezas súper abrigador: vestido sin mangas con pecho tejido acanalado y falda globo + saquito crop tejido con botones y parche de osito. Tela suave que no pica, ideal para otoño-invierno, salida diaria y fotos.",
    material:
      "Tejido de punto acrílico suave 100% hipoalergénico. Falda: 100% Algodón con forro. No pica, no destiñe.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No retorcer. Secar a la sombra.",
    activo: true,
  },

  // ---- TALLA 4 AÑOS ----
  {
    id: "mk-vestido-verde-3A",
    slug: "mk-vestido-verde-5Y",
    name: "Vestido de niña sin mangas con lazo Verde",
    category: "vestidos-nina",
    price: 49,
    oldPrice: 70,
    cost: 35,
    badge: "Fiesta",
    rating: 4.9,
    reviews: 10,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [
          {
            name: "Verde",
            hex: "#A5D6A7",
          },
        ],
      },
    ],
    season: "fiesta",
    images: [
      "./public/img/preventa/mk-vestido-verde-3A.jpg",
      "./public/img/preventa/mk-vestido-verde-3A-2.jpg",
    ],
    realImage: "./public/img/preventa/mk-vestido-verde-3A-2.jpg",
    description:
      "Vestido de niña sin mangas con lazo grande verde. Elegante y fresco.",
    material: "65% Poliéster, 35% Viscosa. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-vestido-casual-mariposas-4A",
    sku: "MK-VEST-CASUAL-ALB-4-5Y",
    slug: "vestido-casual-ninas-malla-mariposas-tirantes-albaricoque-120",
    name: "Vestido Casual para Niñas, Falda de Malla con Mariposas y Tirantes",
    category: "vestidos-nina",
    price: 39,
    oldPrice: 55,
    cost: 18.3,
    badge: "Nuevo",
    rating: 3.9,
    reviews: 10,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        label: "120",
        colors: [
          {
            name: "Albaricoque",
            hex: "#FFDAB9",
            stock: 10,
          },
        ],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/preventa/mk-vestido-casual-mariposas-4A.jpg",
      "./public/img/preventa/mk-vestido-casual-mariposas-4A_2.jpg",
    ],

    realImage: "./public/img/preventa/mk-vestido-casual-mariposas-4A_2.jpg",
    description:
      "Vestido casual con tirantes, falda de malla con estampado de mariposas. Fresco y delicado.",
    material:
      "Material: Bordado de malla. Composición: 100% Poliéster. Longitud: Mediano (midi).",
    cuidados: "Lavable a máquina. Lavar con colores similares.",
  },
  {
    id: "mk-vestido-camisola-verano-rosa-4A",
    sku: "MK-VEST-CAMISOLA-ROSA-120",
    slug: "vestido-camisola-verano-nina-mariposa-rosa-120",
    name: "Vestido Camisola de Verano para Niñas con Patrón de Mariposa Rosa",
    category: "vestidos-nina",
    price: 42.0,
    oldPrice: 55,
    cost: 20.97,
    badge: "Verano",
    rating: 3.9,
    reviews: 10,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        label: "120",
        colors: [
          {
            name: "Rosa",
            hex: "#F8BBD0",
            stock: 10,
          },
        ],
      },
    ],
    season: "verano",
    images: [
      "./public/img/preventa/mk-vestido-camisola-verano-rosa-4A.jpg",
      "./public/img/preventa/mk-vestido-camisola-verano-rosa-4A_2.jpg",
    ],
    realImage: "./public/img/preventa/mk-vestido-camisola-verano-rosa-4A_2.jpg",
    description:
      "Vestido camisola de verano adornado con gran patrón de mariposa. Fresco con lazo trasero.",
    material:
      "Material: Bordado de malla. Composición: 100% Poliéster. Longitud: Mediano (midi).",
    cuidados: "Lavable a máquina. Lavar con colores similares.",
  },
  {
    id: "mk-vestido-4-rosa-floreada-cod-120",
    slug: "vestido-4-rosa-floreada-cod-120",
    name: "Vestido Rosa Floreada para Niña",
    category: "vestidos-nina",
    price: 49,
    oldPrice: 60,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/vestidos-nina/4-rosa-floreada-120-4A.jpg"],
    realImage: "./public/img/vestidos-nina/4-rosa-floreada-120-4A.jpg",
    description: "Vestido rosa floreada. Diseño delicado y femenino.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
    activo: false,
  },
  {
    id: "mk-vestido-4-princesa-co-cod-120",
    slug: "vestido-4-princesa-co-cod-120",
    name: "Vestido de Princesa para Niña",
    category: "vestidos-nina",
    price: 49,
    oldPrice: 60,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/vestidos-nina/4-vestido-de-princesa-para-ni-as-co-120-4A.jpg",
    ],
    realImage:
      "./public/img/vestidos-nina/4-vestido-de-princesa-para-ni-as-co-120-4A.jpg",
    description: "Vestido de princesa. Diseño elegante y sofisticado.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
    activo: false,
  },
  {
    id: "mk-vestido-4-tul-lentejuelas-cod-120",
    slug: "vestido-4-tul-lentejuelas-cod-120",
    name: "Vestido de Tul con Lentejuelas para Niña",
    category: "vestidos-nina",
    price: 49,
    oldPrice: 60,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/vestidos-nina/4-vestido-de-tul-con-lentejuelas-pa-120-4A.jpg",
    ],
    realImage:
      "./public/img/vestidos-nina/4-vestido-de-tul-con-lentejuelas-pa-120-4A.jpg",
    description: "Vestido de tul con lentejuelas. Diseño brillante y elegante.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-vestido-4-jacquard-princesa-cod-120",
    slug: "vestido-4-jacquard-princesa-cod-120",
    name: "Vestido Jacquard de Princesa para Niña",
    category: "vestidos-nina",
    price: 49,
    oldPrice: 60,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/vestidos-nina/4-vestido-jacquard-princesa-sin-man-120-4A.jpg",
    ],
    realImage:
      "./public/img/vestidos-nina/4-vestido-jacquard-princesa-sin-man-120-4A.jpg",
    description: "Vestido jacquard de princesa. Diseño elegante y sofisticado.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
    activo: false,
  },
  {
    id: "mk-vestido-4-tweed-chanel-cod-120",
    slug: "vestido-4-tweed-chanel-cod-120",
    name: "Vestido Tweed Chanel Negro para Niña",
    category: "vestidos-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Negro", hex: "#212121" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/vestidos-nina/4-vestido-ni-a-tweed-chanel-negro-b-120-4A.jpg",
    ],
    realImage:
      "./public/img/vestidos-nina/4-vestido-ni-a-tweed-chanel-negro-b-120-4A.jpg",
    description:
      "Vestido tweed Chanel en negro. Diseño elegante y sofisticado.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-vestido-4-organza-floral-abul-cod-120",
    slug: "vestido-4-organza-floral-abul-cod-120",
    name: "Vestido de Organza Floral Manga Abullonada",
    category: "vestidos-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/vestidos-nina/4-vestido-organza-floral-manga-abul-120-4A.jpg",
    ],
    realImage:
      "./public/img/vestidos-nina/4-vestido-organza-floral-manga-abul-120-4A.jpg",
    description:
      "Vestido de organza floral con manga abullonada. Diseño delicado y elegante.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
    activo: false,
  },
  {
    id: "mk-vestido-4-punto-azul-cod-120",
    slug: "vestido-4-punto-azul-cod-120",
    name: "Vestido de Princesa Tejido de Punto Azul",
    category: "vestidos-nina",
    price: 39,
    oldPrice: 60,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Azul", hex: "#64B5F6" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/vestidos-nina/vestido-de-princesa-tejido-de-punto-azul-120-4A.jpg",
    ],
    realImage:
      "./public/img/vestidos-nina/vestido-de-princesa-tejido-de-punto-azul-120-4A.jpg",
    description:
      "Vestido de princesa tejido de punto en azul. Diseño moderno y cómodo.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-princesa-melon-4A",
    slug: "conjunto-nena-vestido-tul-saquito-tweed-celeste-fiesta",
    name: "Conjunto Nena Vestido Tul Y Saquito Tweed Celeste Fiesta",
    category: "vestidos-nina",
    price: 39,
    oldPrice: 60,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Azul", hex: "#A9C9E8" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/vestidos-nina/mk-princesa-melon-4A.jpg"],
    realImage: "./public/img/vestidos-nina/mk-princesa-melon-4A_1.jpg",
    description:
      "Conjunto fiesta 2 piezas: vestido con pecho en tweed celeste pata de gallo y falda amplia de tul crema + saquito crop a juego con botones perlados. Elegante, abrigador y con forro suave hipoalergénico. Ideal para bautizo, cumpleaños y fotos.",
    material:
      "Exterior: Tweed 90% Poliéster, 10% Algodón. Falda: Tul 100% Poliéster. Forro: Algodón suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 5 AÑOS ----
  {
    id: "mk-princesa-melon-4A",
    slug: "mk-princesa-melon-7Y",
    name: "Vestido de princesa elegante Melon rojo",
    category: "vestidos-nina",
    price: 49,
    oldPrice: 75,
    cost: 23,
    badge: "Nuevo",
    rating: 4.9,
    reviews: 10,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [
          {
            name: "Melon rojo",
            hex: "#FF8A80",
          },
        ],
      },
    ],
    season: "fiesta",
    images: [
      "./public/img/preventa/mk-princesa-melon-4A.jpg",
      "./public/img/preventa/mk-princesa-melon-4A-2.jpg",
    ],
    realImage: "./public/img/preventa/mk-princesa-melon-4A-2.jpg",
    description:
      "Vestido de princesa elegante color melón rojo con lazo grande.",
    material: "100% Poliéster. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-tul-capas-blanco-5A",
    slug: "mk-tul-capas-blanco-7Y",
    name: "Elegante Vestido de Tul Capas Blanco",
    category: "vestidos-nina",
    price: 68,
    oldPrice: 80,
    cost: 34,
    badge: "Fiesta",
    rating: 4.9,
    reviews: 10,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [
          {
            name: "Blanco",
            hex: "#FFFFFF",
          },
        ],
      },
    ],
    season: "fiesta",
    images: [
      "./public/img/preventa/mk-tul-capas-blanco-5A.jpg",
      "./public/img/preventa/mk-tul-capas-blanco-5A-2.jpg",
    ],
    realImage: "./public/img/preventa/mk-tul-capas-blanco-5A-2.jpg",
    description:
      "Elegante vestido de tul capas blanco, estilo princesa para fiesta.",
    material: "100% Poliéster. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
    activo: false,
  },
  {
    id: "mk-gululu-blanco-5A",
    slug: "mk-gululu-blanco-130",
    name: "GULULU Vestido de Princesa Blanco 6015",
    category: "vestidos-nina",
    price: 59,
    oldPrice: 80,
    cost: 33,
    badge: "Premium",
    rating: 4.9,
    reviews: 10,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [
          {
            name: "Blanco",
            hex: "#FFFFFF",
          },
        ],
      },
    ],
    season: "fiesta",
    images: [
      "./public/img/preventa/mk-gululu-blanco-5A.jpg",
      "./public/img/preventa/mk-gululu-blanco-5A-2.jpg",
    ],
    realImage: "./public/img/preventa/mk-gululu-blanco-5A-2.jpg",
    description: "GULULU vestido de princesa blanco, tul elegante alta gama.",
    material: "65% Poliéster, 35% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
    activo: false,
  },
  {
    id: "mk-verano-rosa-5A",
    slug: "mk-verano-rosa-130",
    name: "Vestido de Verano para Niñas Rosa 130",
    category: "vestidos-nina",
    price: 55,
    oldPrice: 70,
    cost: 34,
    badge: "Verano",
    rating: 4.9,
    reviews: 10,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [
          {
            name: "Rosa",
            hex: "#F8BBD0",
          },
        ],
      },
    ],
    season: "verano",
    images: [
      "./public/img/preventa/mk-verano-rosa-5A.jpg",
      "./public/img/preventa/mk-verano-rosa-5A-2.jpg",
    ],
    realImage: "./public/img/preventa/mk-verano-rosa-5A-2.jpg",
    description:
      "Vestido de verano para niñas rosa, abombado con detalles bordados.",
    material: "100% Poliéster. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-noche-gris-rosaceo-5A",
    slug: "mk-noche-gris-rosaceo-130",
    name: "Vestido de Noche para Niñas con capas Rosa",
    category: "vestidos-nina",
    price: 59,
    oldPrice: 80,
    Cost: 36,
    badge: "Noche",
    rating: 4.9,
    reviews: 10,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [
          {
            name: "Gris rosáceo pálido",
            hex: "#F8BBD0",
          },
        ],
      },
    ],
    season: "noche",
    images: [
      "./public/img/preventa/mk-noche-gris-rosaceo-5A.jpg",
      "./public/img/preventa/mk-noche-gris-rosaceo-5A-2.jpg",
    ],
    realImage: "./public/img/preventa/mk-noche-gris-rosaceo-5A-2.jpg",
    description:
      "Vestido de noche para niñas con capas, elegante para eventos.",
    material: "65% Poliéster, 35% Viscosa. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  {
    id: "mk-vestido-5-capa-brillos-cod-130",
    slug: "vestido-5-capa-brillos-cod-130",
    name: "Vestido de Princesa con Capa y Brillos",
    category: "vestidos-nina",
    price: 44,
    oldPrice: 80,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/vestidos-nina/5-capa-de-princesa-con-brillos-y-ve-130-5A.jpg",
    ],
    realImage:
      "./public/img/vestidos-nina/5-capa-de-princesa-con-brillos-y-ve-130-5A.jpg",
    description:
      "Vestido de princesa con capa y brillos. Diseño elegante y sofisticado.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-vestido-5-abombado-flores-cod-130",
    slug: "vestido-5-abombado-flores-cod-130",
    name: "Vestido Abombado con Flores para Niña",
    category: "vestidos-nina",
    price: 49,
    oldPrice: 60,
    badge: "Oferta",
    rating: 4.9,
    reviews: 10,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/vestidos-nina/5-vestido-abombado-de-flores-de-bod-130-5A.jpg",
    ],
    realImage:
      "./public/img/vestidos-nina/5-vestido-abombado-de-flores-de-bod-130-5A.jpg",
    description: "Vestido abombado con flores. Diseño delicado y femenino.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
    activo: false,
  },
  {
    id: "mk-vestido-5-blanco-cod-130",
    slug: "vestido-5-blanco-cod-130",
    name: "Vestido Blanco de Princesa para Niña",
    category: "vestidos-nina",
    price: 49,
    oldPrice: 60,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Blanco", hex: "#FFFFFF" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/vestidos-nina/5-vestido-blanco-130-5A.jpg"],
    realImage: "./public/img/vestidos-nina/5-vestido-blanco-130-5A.jpg",
    description: "Vestido blanco de princesa. Diseño elegante y atemporal.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-vestido-5-coviviky-encaje-cod-130",
    slug: "vestido-5-coviviky-encaje-cod-130",
    name: "Vestido de Encaje Dulce para Niña",
    category: "vestidos-nina",
    price: 45,
    oldPrice: 60,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/vestidos-nina/5-vestido-coviviky-encaje-dulce-ni-130-5A.jpg",
    ],
    realImage:
      "./public/img/vestidos-nina/5-vestido-coviviky-encaje-dulce-ni-130-5A.jpg",
    description: "Vestido de encaje dulce. Diseño delicado y femenino.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-vestido-5-princesa-color-cod-130",
    slug: "vestido-5-princesa-color-cod-130",
    name: "Vestido de Princesa Color Sólido",
    category: "vestidos-nina",
    price: 49,
    oldPrice: 60,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/vestidos-nina/5-vestido-de-princesa-color-s-lido-130-5A.jpg",
    ],
    realImage:
      "./public/img/vestidos-nina/5-vestido-de-princesa-color-s-lido-130-5A.jpg",
    description: "Vestido de princesa color sólido. Diseño elegante y moderno.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-vestido-5-dorado-halter-cod-130",
    slug: "vestido-5-dorado-halter-cod-130",
    name: "Vestido Dorado con Cuello Halter",
    category: "vestidos-nina",
    price: 55,
    oldPrice: 65,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/vestidos-nina/5-vestido-dorado-con-cuello-halter-130-5A.jpg",
    ],
    realImage:
      "./public/img/vestidos-nina/5-vestido-dorado-con-cuello-halter-130-5A.jpg",
    description:
      "Vestido dorado con cuello halter. Diseño elegante y sofisticado.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
    activo: false,
  },
  {
    id: "mk-vestido-5-blanco-bordado-cod-130",
    slug: "vestido-5-blanco-bordado-cod-130",
    name: "Vestido Blanco con Bordado Floral",
    category: "vestidos-nina",
    price: 49,
    oldPrice: 60,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Blanco", hex: "#FFFFFF" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/vestidos-nina/5-vestido-ni-a-blanco-bordado-flore-130-5A.jpg",
    ],
    realImage:
      "./public/img/vestidos-nina/5-vestido-ni-a-blanco-bordado-flore-130-5A.jpg",
    description:
      "Vestido blanco con bordado floral. Diseño delicado y elegante.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-vestido-5-elegante-boda-cod-130",
    slug: "vestido-5-elegante-boda-cod-130",
    name: "Vestido Elegante para Boda",
    category: "vestidos-nina",
    price: 49,
    oldPrice: 60,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "beige", hex: "#D5C4A1" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/vestidos-nina/5-vestido-para-ni-a-elegante-para-b-130-5A.jpg",
    ],
    realImage:
      "./public/img/vestidos-nina/5-vestido-para-ni-a-elegante-para-b-130-5A.jpg",
    description: "Vestido elegante para boda. Diseño sofisticado y delicado.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-vestido-4-elegante-encaje-cod-120",
    slug: "vestido-4-elegante-encaje-cod-120",
    name: "Vestido Elegante con Encaje para Niña",
    category: "vestidos-nina",
    price: 49,
    oldPrice: 60,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/vestidos-nina/4-vestido-elegante-adornado-con-enc-120-4A.jpg",
    ],
    realImage:
      "./public/img/vestidos-nina/4-vestido-elegante-adornado-con-enc-120-4A.jpg",
    description: "Vestido elegante con encaje. Diseño sofisticado y delicado.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 6 AÑOS ----
  {
    id: "mk-vestido-6-fiesta-floral-cod-140",
    slug: "vestido-6-fiesta-floral-cod-140",
    name: "Vestido de Fiesta Floral Manga Corta",
    category: "vestidos-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "6 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/vestidos-nina/6-vestido-fiesta-floral-manga-corta-140-6A.jpg",
    ],
    realImage:
      "./public/img/vestidos-nina/6-vestido-fiesta-floral-manga-corta-140-6A.jpg",
    description:
      "Vestido de fiesta floral con manga corta. Diseño alegre y moderno.",
    material: "90% Poliéster, 10% Elastano. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-vestido-chal-blanco-6A",
    slug: "vestido-chal-elegante-nina-blanco-6A",
    name: "Vestido Chal Elegante de Niña con Frente Abierto y Mangas Largas",
    category: "vestidos-nina",
    price: 39.9,
    oldPrice: 55,
    badge: "Oferta",
    rating: 5.0,
    reviews: 8,
    stock: 10,
    sizes: [
      {
        name: "6 Años",
        colors: [{ name: "Blanco", hex: "#FFFFFF" }],
      },
    ],
    season: "primavera-verano-otono",
    images: ["./public/img/preventa/mk-vestido-chal-blanco-6A.jpg"],
    realImage: "./public/img/Preventa/mk-vestido-chal-blanco-6A.jpg",
    description:
      "Vestido chal elegante de niña con frente abierto y mangas largas. Top simple de color liso y suave, ideal para primavera, verano y otoño. Esencial para el regreso a clases, no pica y combina con todo.",
    material:
      "Tejido suave de punto - 90% Poliéster, 10% Elastano. Suave al tacto.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-vestido-mariposa-violeta-6A",
    slug: "vestido-princesa-elegante-mariposas-violeta-oscuro",
    name: "Vestido de Princesa Elegante con Mariposas 3D - Violeta Oscuro",
    category: "vestidos-nina",
    price: 54.9,
    oldPrice: 86.64,
    cost: 24.14,
    discount: 44,
    badge: "Oferta",
    rating: 4.9,
    reviews: 8,
    stock: 4,
    sizes: [
      {
        name: "5 Años",
        label: "7Y",
        colors: [
          {
            name: "Violeta Oscuro",
            hex: "#7B1FA2",
            stock: 4,
            images: ["violeta-oscuro-1.jpg"],
          },
          { name: "Rosa", hex: "#F8BBD0", stock: 0, status: "Agotado" },
        ],
      },
    ],
    season: "verano",
    images: [
      "./public/img/preventa/mk-vestido-mariposa-violeta-6A.jpg",
      "./public/img/preventa/mk-vestido-mariposa-violeta-6A_2.jpg",
    ],
    realImage: "./public/img/preventa/mk-vestido-mariposa-violeta-6A.jpg",
    description:
      "Vestido de Princesa Elegante para Verano, Tulle de Malla con Forma de Mariposa 3D, Dobladillo de Patchwork de 5 Colores, Decoración de Cinturón con Lazo, Diseño de Cremallera Trasera, sin Mangas. Moderno y encantador para fiesta casual.",
    material: "Tulle de malla + forro interior suave. 100% Poliéster.",
    cuidados: "Lavar a mano con agua fría. No usar blanqueador.",
    features: [
      "Mariposas 3D",
      "Patchwork 5 colores",
      "Cinturón lazo",
      "Cremallera trasera",
      "Envío gratis",
      "Entrega 6 días hábiles",
    ],
    tags: [
      "princesa",
      "mariposas",
      "violeta",
      "verano",
      "fiesta",
      "viral",
      "4.9 estrellas",
    ],
    delivery:
      "Entrega más rápida: 6 DÍAS HÁBILES - Crédito S/ 4.00 por retraso",
    location: "A.H. La Totoritas Psje Los Geranios Mz.A2 Lt.14 SJL 15434",
  },
  {
    id: "mk-vestido-tul-lentejuelas-6A",
    sku: "MK-TUL-LENT-ALB-7Y",
    slug: "vestido-tul-lentejuelas-bordadas-alta-gama-albaricoque-7Y",
    name: "Vestido de Tul con Lentejuelas Bordadas de Alta Gama",
    category: "vestidos-nina",
    price: 49,
    oldPrice: 60,
    cost: 22.49,
    badge: "Premium",
    rating: 4.9,
    reviews: 12,
    stock: 10,
    sizes: [
      {
        name: "5 Años",
        label: "7Y",
        colors: [
          {
            name: "Albaricoque",
            hex: "#FFDAB9",
            stock: 10,
          },
        ],
      },
    ],
    season: "fiesta",
    images: [
      "./public/img/preventa/mk-vestido-tul-lentejuelas-6A.jpg",
      "./public/img/preventa/mk-vestido-tul-lentejuelas-6A_2.jpg",
    ],
    realImage: "./public/img/preventa/mk-vestido-tul-lentejuelas-6A_2.jpg",
    description:
      "Vestido de noche elegante con falda de tul con lentejuelas bordadas. Diseño de princesa de alta gama para verano, fiesta y noche.",
    material:
      "Material: Bordado de malla con lentejuelas. Composición: 100% Poliéster.",
    cuidados:
      "Lavar a mano con agua fría, del revés para proteger las lentejuelas. No retorcer.",
  },
  // VESTIDOS DE 7 Años
  {
    id: "mk-tul-floral-beige-5A",
    slug: "mk-tul-floral-beige-8Y",
    name: "Vestido de tul con estampado floral Beige",
    category: "vestidos-nina",
    price: 65,
    oldPrice: 77,
    cost: 37,
    badge: "Nuevo Llegado",
    rating: 4.9,
    reviews: 10,
    stock: 10,
    sizes: [
      {
        name: "7 Años",
        colors: [
          {
            name: "Beige",
            hex: "#F5F5DC",
          },
        ],
      },
    ],
    season: "verano-boda",
    images: [
      "./public/img/preventa/mk-tul-floral-beige-5A.jpg",
      "./public/img/preventa/mk-tul-floral-beige-5A-2.jpg",
    ],
    realImage: "./public/img/preventa/mk-tul-floral-beige-5A-2.jpg",
    description:
      "Vestido de niña para boda de verano, malla transpirable, plisado con flores 3D. Beige.",
    material: "100% Poliéster. Forro interior suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
];

// ============================================================
// FUNCIONES DE UTILIDAD
// ============================================================

function resolvePlaceholder(s) {
  if (s && (s.startsWith(".") || s.startsWith("http") || s.startsWith("/"))) {
    return { grad: "real", url: s, emoji: "👗", isReal: true };
  }
  if (s && s.includes(":")) {
    const p = s.split(":");
    return {
      grad: p[1] || "g1",
      emoji: p[2] || "👗",
      isReal: false,
      url: null,
    };
  }
  return { grad: "g1", emoji: "👗", isReal: false, url: null };
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

const ADMIN_MANAGED_CATEGORIES = [
  "cardigans-nina",
  "cardigans-nino",
  "casacas-nina",
  "casacas-nino",
  "jeans-nina",
  "jeans-nino",
  "conjuntos-invierno-nina",
  "conjuntos-invierno-nino",
];

const AVAILABLE_SIZES = [
  "12-18 Meses",
  "18-24 Meses",
  "2 Años",
  "3 Años",
  "4 Años",
  "5 Años",
  "6 Años",
  "7 Años",
  "8 Años",
  "9 Años",
];

const BADGE_INFO = {
  "": null,
  nuevo: { emoji: "🆕", label: "Nuevo Ingreso" },
  tendencia: { emoji: "🔥", label: "Tendencia" },
  liquidacion: { emoji: "🏷", label: "Liquidación" },
};

function badgeDisplay(badge) {
  const info = BADGE_INFO[badge || ""];
  return info ? `${info.emoji} ${info.label}` : "";
}

const ADMIN_OVERRIDES_KEY = "mariekids_admin_overrides";

function loadAdminOverrides() {
  try {
    return JSON.parse(localStorage.getItem(ADMIN_OVERRIDES_KEY) || "{}");
  } catch (e) {
    return {};
  }
}

function saveAdminOverride(productId, patch) {
  const all = loadAdminOverrides();
  all[productId] = { ...(all[productId] || {}), ...patch };
  localStorage.setItem(ADMIN_OVERRIDES_KEY, JSON.stringify(all));
}

function applyAdminOverrides() {
  const overrides = loadAdminOverrides();
  PRODUCTS.forEach((p) => {
    const o = overrides[p.id];
    if (!o) return;
    if (typeof o.price === "number") p.price = o.price;
    if (o.oldPrice === null || typeof o.oldPrice === "number")
      p.oldPrice = o.oldPrice;
    if (Array.isArray(o.sizes)) {
      p.sizes = o.sizes;
      p.ageGroup = o.sizes;
    }
    if (typeof o.badge === "string") p.badge = o.badge;
  });
}
applyAdminOverrides();
