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
    stock: 15,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/cardigans-nina/cardigan-fresa-90-18-24M.jpg"],
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
    stock: 15,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/cardigans-nina/cardigan-corazones-acuarela-100-2A.jpg",
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
    stock: 15,
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
    stock: 15,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/cardigans-nina/cardigan-diamantes-conejitos-100-2A.jpg",
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 1,
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

  // ---- TALLA 2-3 AÑOS ----
  {
    id: "mk-cardigan-nina-diamantes-conejitos-2-3",
    slug: "cardigan-nina-diamantes-conejitos-2-3",
    name: "Cardigan de Punto con Conejitos y Diamantes para Niña",
    category: "cardigans-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/cardigans-nina/c-rdigan-diamantes-y-conejitos-110-3A.jpg",
    ],
    realImage:
      "./public/img/cardigans-nina/c-rdigan-diamantes-y-conejitos-110-3A.jpg",
    description:
      "Cardigan de punto suave con diseño de conejitos y diamantes. Cuello en V y botones frontales. Suave, abrigador y no pica.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
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
    stock: 15,
    sizes: [
      {
        name: "2 Años",
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
    stock: 15,
    sizes: [
      {
        name: "2 Años",
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
    stock: 15,
    sizes: [
      {
        name: "2 Años",
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
  {
    id: "mk-cardigan-nina-fresa-3-4",
    slug: "cardigan-nina-fresa-3-4",
    name: "Cardigan de Punto con Fresas para Niña",
    category: "cardigans-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/cardigans-nina/cardigan-fresa-110-3A.jpg"],
    realImage: "./public/img/cardigans-nina/cardigan-fresa-110-3A.jpg",
    description:
      "Cardigan de punto suave con diseño de fresas. Cuello en V y botones frontales. Suave, abrigador y no pica.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

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
    stock: 2,
    sizes: [
      {
        name: "4 Años",
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    id: "mk-cardigan-nina-diamantes-conejitos-6",
    slug: "cardigan-nina-diamantes-conejitos-6",
    name: "Cardigan de Punto con Conejitos y Diamantes para Niña",
    category: "cardigans-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "6 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/cardigans-nina/cardigan-diamantes-conejitos-100-2A.jpg",
    ],
    realImage:
      "./public/img/cardigans-nina/cardigan-diamantes-conejitos-100-2A.jpg",
    description:
      "Cardigan de punto suave con diseño de conejitos y diamantes. Cuello en V y botones frontales.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-cardigan-nina-fresa-6",
    slug: "cardigan-nina-fresa-6",
    name: "Cardigan de Punto con Fresas para Niña",
    category: "cardigans-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "6 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/cardigans-nina/cardigan-fresa-140-6A.jpg"],
    realImage: "./public/img/cardigans-nina/cardigan-fresa-140-6A.jpg",
    description:
      "Cardigan de punto suave con diseño de fresas. Cuello en V y botones frontales. Suave, abrigador y no pica.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-cardigan-nina-corazones-6",
    slug: "cardigan-nina-corazones-6",
    name: "Cardigan de Punto con Corazones para Niña",
    category: "cardigans-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "6 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/cardigans-nina/c-rdigan-rosa-con-corazones-140-6A.jpg",
    ],
    realImage:
      "./public/img/cardigans-nina/c-rdigan-rosa-con-corazones-140-6A.jpg",
    description:
      "Cardigan de punto suave con diseño de corazones. Cuello en V y botones frontales. Suave, abrigador y no pica.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    id: "mk-cardigan-nina-fresa-7",
    slug: "cardigan-nina-fresa-7",
    name: "Cardigan de Punto con Fresas para Niña",
    category: "cardigans-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 2,
    sizes: [
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
    id: "mk-cardigan-nina-fresas-corazones-7",
    slug: "cardigan-nina-fresas-corazones-7",
    name: "Cardigan de Punto con Fresas y Corazones para Niña",
    category: "cardigans-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
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
    stock: 15,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
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
    stock: 15,
    sizes: [
      {
        name: "18-24 Meses",
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
    stock: 15,
    sizes: [
      {
        name: "18-24 Meses",
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
    stock: 15,
    sizes: [
      {
        name: "2 Años",
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
    stock: 15,
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

  // ---- TALLA 2-3 AÑOS ----
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
    stock: 15,
    sizes: [
      {
        name: "2 Años",
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
    stock: 15,
    sizes: [
      {
        name: "2 Años",
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
    stock: 15,
    sizes: [
      {
        name: "2 Años",
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
    stock: 15,
    sizes: [
      {
        name: "2 Años",
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

  // ---- TALLA 3-4 AÑOS ----
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
    stock: 15,
    sizes: [
      {
        name: "3 Años",
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
    stock: 15,
    sizes: [
      {
        name: "3 Años",
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
    id: "mk-cardigan-nino-dinos-3-4",
    slug: "cardigan-nino-dinos-3-4",
    name: "Cardigan de Punto con Dinosaurios Coloridos para Niño",
    category: "cardigans-nino",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/cardigans-nino/estampado-de-dinosaurios-coloridos-120-4A.jpg",
    ],
    realImage:
      "./public/img/cardigans-nino/estampado-de-dinosaurios-coloridos-120-4A.jpg",
    description:
      "Cardigan de punto suave con dinosaurios coloridos. Cuello en V y botones frontales.",
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
    stock: 15,
    sizes: [
      {
        name: "3 Años",
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

  // ---- TALLA 4-5 AÑOS ----
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
    stock: 15,
    sizes: [
      {
        name: "4 Años",
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
    id: "mk-cardigan-nino-dino-pastel-6",
    slug: "cardigan-nino-dino-pastel-6",
    name: "Cardigan de Punto con Dinosaurio Pastel para Niño",
    category: "cardigans-nino",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "6 Años",
        colors: [{ name: "Beige", hex: "#F5F5DC" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/cardigans-nino/chompa-dino-pastel-100-2A.jpg"],
    realImage: "./public/img/cardigans-nino/chompa-dino-pastel-100-2A.jpg",
    description:
      "Cardigan de punto suave con dinosaurio pastel. Cuello en V y botones frontales.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
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
    stock: 15,
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
  {
    id: "mk-cardigan-nino-monstruos-6",
    slug: "cardigan-nino-monstruos-6",
    name: "Cardigan de Punto con Monstruos para Niño",
    category: "cardigans-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "6 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/cardigans-nino/chompa-monstruos-90-18-24M.jpg"],
    realImage: "./public/img/cardigans-nino/chompa-monstruos-90-18-24M.jpg",
    description:
      "Cardigan de punto suave con diseño de monstruos. Cuello en V y botones frontales.",
    material:
      "Tejido de punto premium: 60% Acrílico, 35% Poliéster, 5% Elastano. Suave, cálido, no pica.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-cardigan-nino-franjas-6",
    slug: "cardigan-nino-franjas-6",
    name: "Cardigan de Punto con Franjas Azules y Cremas para Niño",
    category: "cardigans-nino",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
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
    stock: 15,
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
    price: 49,
    oldPrice: null,
    badge: "nuevo",
    rating: 0,
    reviews: 0,
    stock: 15,
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
    price: 49,
    oldPrice: null,
    badge: "nuevo",
    rating: 0,
    reviews: 0,
    stock: 15,
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
    price: 49,
    oldPrice: null,
    badge: "nuevo",
    rating: 0,
    reviews: 0,
    stock: 15,
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
    price: 49,
    oldPrice: null,
    badge: "nuevo",
    rating: 0,
    reviews: 0,
    stock: 15,
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
    price: 49,
    oldPrice: null,
    badge: "nuevo",
    rating: 0,
    reviews: 0,
    stock: 15,
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
    price: 49,
    oldPrice: null,
    badge: "nuevo",
    rating: 0,
    reviews: 0,
    stock: 15,
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
    stock: 15,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nina/12m-conjunto-3-pzs-ni-a-chaqueta-chompa-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nina/12m-conjunto-3-pzs-ni-a-chaqueta-chompa-90-18-24M.jpg",
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
    stock: 15,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nina/12m-conjunto-beb-reci-n-nacido-3-piezas-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nina/12m-conjunto-beb-reci-n-nacido-3-piezas-90-18-24M.jpg",
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
    stock: 15,
    sizes: [
      {
        name: "18-24 Meses",
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
    sizes: [
      {
        name: "6 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nina/6-conjunto-2pzs-ni-a-elegante-lazo-casac-140-6A-01.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nina/6-conjunto-2pzs-ni-a-elegante-lazo-casac-140-6A-01.jpg",
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
    stock: 15,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/12m-conjunto-2-pzs-calvin-hoodie-letras-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/12m-conjunto-2-pzs-calvin-hoodie-letras-90-18-24M.jpg",
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
    stock: 15,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/12m-conjunto-2-pzs-ni-o-ch-ndal-deportiv-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/12m-conjunto-2-pzs-ni-o-ch-ndal-deportiv-90-18-24M.jpg",
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
    stock: 15,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/12m-conjunto-2-pzs-ni-o-sudadera-capucha-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/12m-conjunto-2-pzs-ni-o-sudadera-capucha-90-18-24M.jpg",
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
    stock: 15,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/12m-conjunto-3-piezas-para-beb-ni-o-colo-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/12m-conjunto-3-piezas-para-beb-ni-o-colo-90-18-24M.jpg",
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
    stock: 15,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/12m-conjunto-3-pzs-beb-piel-de-oso-negra-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/12m-conjunto-3-pzs-beb-piel-de-oso-negra-90-18-24M.jpg",
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
    stock: 15,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/12m-conjunto-3-pzs-beb-sudadera-letras-c-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/12m-conjunto-3-pzs-beb-sudadera-letras-c-90-18-24M.jpg",
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
    stock: 15,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Gris", hex: "#9E9E9E" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/12m-conjunto-3-pzs-le-n-simba-gris-plomo-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/12m-conjunto-3-pzs-le-n-simba-gris-plomo-90-18-24M.jpg",
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
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
    stock: 15,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
  {
    id: "mk-conjunto-nino-3-urbano",
    slug: "conjunto-nino-3-urbano",
    name: "Conjunto de 2 Piezas Urbano para Niño",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
      {
        name: "5 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/4-conjunto-urbano-ni-o-2-piezas-110-3A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/4-conjunto-urbano-ni-o-2-piezas-110-3A.jpg",
    description:
      "Conjunto de 2 piezas estilo urbano para niño. Moderno y cómodo. Perfecto para el día a día.",
    material: "65% Algodón, 30% Poliéster, 5% Elastano. Franela suave.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-conjunto-nino-3-set-abrigador",
    slug: "conjunto-nino-3-set-abrigador",
    name: "Set Abrigador de 3 Piezas para Bebé",
    category: "conjuntos-invierno-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "invierno",
    images: [
      "./public/img/conjuntos-invierno-nino/4-set-abrigador-beb-3-pzs-110-3A.jpg",
    ],
    realImage:
      "./public/img/conjuntos-invierno-nino/4-set-abrigador-beb-3-pzs-110-3A.jpg",
    description:
      "Set abrigador de 3 piezas para bebé. Súper calentito y cómodo. Ideal para el invierno.",
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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

  // ---- TALLA 18-24 MESES ----
  {
    id: "mk-jeans-nina-18-24-226",
    slug: "jeans-nina-18-24-226",
    name: "Set Cherry Love con Jean para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-226-set-tr-o-cherry-love-con-jean-bo-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-226-set-tr-o-cherry-love-con-jean-bo-90-18-24M.jpg",
    description:
      "Set Cherry Love con Jean para niña. Incluye top con estampado de cerezas y jeans a juego. Perfecto para un look dulce y moderno.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta. Planchar a baja temperatura del revés.",
  },
  {
    id: "mk-jeans-nina-18-24-227",
    slug: "jeans-nina-18-24-227",
    name: "Set Chompa Blanca con Cereza y Jean para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-227-set-chompa-blanca-cereza-y-jean-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-227-set-chompa-blanca-cereza-y-jean-90-18-24M.jpg",
    description:
      "Set de chompa blanca con estampado de cereza y jeans a juego. Ideal para un look fresco y juvenil.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-18-24-228",
    slug: "jeans-nina-18-24-228",
    name: "Set Chompa Rosada con Lazo y Jean para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-228-chompa-rosada-bow-y-jean-pack-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-228-chompa-rosada-bow-y-jean-pack-90-18-24M.jpg",
    description:
      "Set de chompa rosada con lazo y jeans a juego. Perfecto para un look tierno y femenino.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-18-24-229",
    slug: "jeans-nina-18-24-229",
    name: "Set Denim con Cerezas para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-229-conjunto-denim-cerezas-pack-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-229-conjunto-denim-cerezas-pack-90-18-24M.jpg",
    description:
      "Conjunto denim con estampado de cerezas. Ideal para un look casual y divertido.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-18-24-230",
    slug: "jeans-nina-18-24-230",
    name: "Set Chompa y Jean con Lazo para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-230-chompa-y-jean-con-lazo-pack-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-230-chompa-y-jean-con-lazo-pack-90-18-24M.jpg",
    description:
      "Set de chompa y jean con detalle de lazo. Perfecto para un look dulce y moderno.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 2 AÑOS ----
  {
    id: "mk-jeans-nina-2-2017",
    slug: "jeans-nina-2-2017",
    name: "Polo Manga Corta con Corazón y Jean para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-2017-polo-manga-corta-heart-pantalon-100-2A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-2017-polo-manga-corta-heart-pantalon-100-2A.jpg",
    description:
      "Polo manga corta con estampado de corazón y jeans a juego. Ideal para un look casual y divertido.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-2-2018",
    slug: "jeans-nina-2-2018",
    name: "Polera Manga Larga y Jean Azul para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Azul", hex: "#64B5F6" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-2018-polera-manga-larga-jeans-azul-c-100-2A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-2018-polera-manga-larga-jeans-azul-c-100-2A.jpg",
    description:
      "Polera manga larga con jeans azul. Perfecto para un look cómodo y moderno.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-2-2020",
    slug: "jeans-nina-2-2020",
    name: "Blusa Manga Larga con Lazos y Jean para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-2020-blusa-manga-larga-yelow-lazos-p-100-2A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-2020-blusa-manga-larga-yelow-lazos-p-100-2A.jpg",
    description:
      "Blusa manga larga con detalle de lazos y jeans a juego. Ideal para un look dulce y elegante.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-2-223",
    slug: "jeans-nina-2-223",
    name: "Chaleco de Cuello y Jean para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-223-conjunto-casual-chaleco-de-cuell-100-2A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-223-conjunto-casual-chaleco-de-cuell-100-2A.jpg",
    description:
      "Conjunto casual con chaleco de cuello y jeans. Perfecto para un look moderno y cómodo.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-2-224",
    slug: "jeans-nina-2-224",
    name: "Top de Puntilla y Jean para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-224-conjunto-de-top-de-puntilla-con-100-2A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-224-conjunto-de-top-de-puntilla-con-100-2A.jpg",
    description:
      "Top de puntilla con jeans a juego. Ideal para un look delicado y femenino.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 3 AÑOS ----
  {
    id: "mk-jeans-nina-3-221",
    slug: "jeans-nina-3-221",
    name: "Blusa Manga Larga con Rayas y Jean para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-221-blusa-de-manga-larga-de-rayas-co-110-3A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-221-blusa-de-manga-larga-de-rayas-co-110-3A.jpg",
    description:
      "Blusa manga larga con rayas y jeans a juego. Perfecto para un look casual y moderno.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-3-222",
    slug: "jeans-nina-3-222",
    name: "Sudadera y Vaqueros para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-222-pantalones-vaqueros-sudadera-con-110-3A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-222-pantalones-vaqueros-sudadera-con-110-3A.jpg",
    description:
      "Conjunto de sudadera y vaqueros. Ideal para un look cómodo y moderno.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-3-223",
    slug: "jeans-nina-3-223",
    name: "Chaleco de Cuello y Jean para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-223-conjunto-casual-chaleco-de-cuell-100-2A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-223-conjunto-casual-chaleco-de-cuell-100-2A.jpg",
    description:
      "Conjunto casual con chaleco de cuello y jeans. Perfecto para un look moderno.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 4 AÑOS ----
  {
    id: "mk-jeans-nina-4-202",
    slug: "jeans-nina-4-202",
    name: "Blusa Manga Larga Yellow y Jean para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
      {
        name: "5 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-202-blusa-manga-larga-yelow-pack-120-4A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-202-blusa-manga-larga-yelow-pack-120-4A.jpg",
    description:
      "Blusa manga larga yellow con jeans a juego. Ideal para un look fresco y moderno.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-4-209",
    slug: "jeans-nina-4-209",
    name: "Blusa Manga Larga Corta y Jean para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-209-blusa-manga-larga-corta-traje-me-120-4A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-209-blusa-manga-larga-corta-traje-me-120-4A.jpg",
    description:
      "Blusa manga larga corta con jeans a juego. Perfecto para un look moderno.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-4-213",
    slug: "jeans-nina-4-213",
    name: "Polera Manga Larga y Jean para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 65,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-213-polera-manga-larga-y-pantalon-pi-120-4A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-213-polera-manga-larga-y-pantalon-pi-120-4A.jpg",
    description:
      "Polera manga larga con jeans a juego. Ideal para un look cómodo y moderno.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-4-214",
    slug: "jeans-nina-4-214",
    name: "Blusa Manga Larga y Jean para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-214-blusa-manga-larga-y-pantalon-pie-120-4A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-214-blusa-manga-larga-y-pantalon-pie-120-4A.jpg",
    description:
      "Blusa manga larga con jeans a juego. Perfecto para un look elegante.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-4-215",
    slug: "jeans-nina-4-215",
    name: "Blusa con Cuello de Muñeca y Jean para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-215-blusa-con-cuello-de-mu-eca-y-man-120-4A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-215-blusa-con-cuello-de-mu-eca-y-man-120-4A.jpg",
    description:
      "Blusa con cuello de muñeca y jeans a juego. Ideal para un look delicado.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-4-216",
    slug: "jeans-nina-4-216",
    name: "Polo Manga Corta con Flores y Jean para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-216-polo-manga-corta-flores-y-jeans-120-4A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-216-polo-manga-corta-flores-y-jeans-120-4A.jpg",
    description:
      "Polo manga corta con estampado de flores y jeans a juego. Perfecto para un look primaveral.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-4-224",
    slug: "jeans-nina-4-224",
    name: "Polera Manga Larga con Lazo Negro y Jean para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Negro", hex: "#212121" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-224-polera-manga-larga-lazo-negro-y-120-4A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-224-polera-manga-larga-lazo-negro-y-120-4A.jpg",
    description:
      "Polera manga larga con lazo negro y jeans a juego. Ideal para un look moderno.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 5 AÑOS ----
  {
    id: "mk-jeans-nina-5-200",
    slug: "jeans-nina-5-200",
    name: "Blusa Mangalarga con Cereza y Jean para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-200-blusa-mangalarga-cereza-pack-130-5A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-200-blusa-mangalarga-cereza-pack-130-5A.jpg",
    description:
      "Blusa mangalarga con estampado de cereza y jeans a juego. Perfecto para un look dulce.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-5-201",
    slug: "jeans-nina-5-201",
    name: "Blusa Floral y Jean Vaqueros para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
      {
        name: "6 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-201-blusa-floral-y-jean-vaqueros-pac-130-5A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-201-blusa-floral-y-jean-vaqueros-pac-130-5A.jpg",
    description:
      "Blusa floral con jeans vaqueros. Ideal para un look fresco y primaveral.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-5-203",
    slug: "jeans-nina-5-203",
    name: "Blusa Manga Corta Yellow y Jean para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-203-blusa-manga-corta-yelow-y-jeans-130-5A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-203-blusa-manga-corta-yelow-y-jeans-130-5A.jpg",
    description:
      "Blusa manga corta yellow con jeans a juego. Perfecto para un look veraniego.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-5-207",
    slug: "jeans-nina-5-207",
    name: "Blusa Blanca Manga Larga y Jean para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Blanco", hex: "#FFFFFF" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-207-blusa-blanco-de-manga-larga-y-ov-130-5A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-207-blusa-blanco-de-manga-larga-y-ov-130-5A.jpg",
    description:
      "Blusa blanca manga larga con jeans a juego. Ideal para un look elegante y atemporal.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-5-208",
    slug: "jeans-nina-5-208",
    name: "Blusa Blanca Manga Larga y Vaqueros para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-208-blusa-blanca-manga-larga-y-vaque-130-5A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-208-blusa-blanca-manga-larga-y-vaque-130-5A.jpg",
    description:
      "Blusa blanca manga larga con vaqueros. Perfecto para un look moderno.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-5-209",
    slug: "jeans-nina-5-209",
    name: "Blusa Blanca Manga Larga y Pantalón para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-209-blusa-blanca-manga-larga-y-panta-130-5A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-209-blusa-blanca-manga-larga-y-panta-130-5A.jpg",
    description:
      "Blusa blanca manga larga con pantalón a juego. Ideal para un look elegante.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-5-211",
    slug: "jeans-nina-5-211",
    name: "Chompa Roja y Jeans Azul para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Azul", hex: "#64B5F6" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-211-chompa-roja-y-jeans-azul-pack-130-5A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-211-chompa-roja-y-jeans-azul-pack-130-5A.jpg",
    description:
      "Chompa roja con jeans azul. Perfecto para un look colorido y moderno.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-5-212",
    slug: "jeans-nina-5-212",
    name: "Jeans con Estampado de Cerezas para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/jeans-nina/cod-212-jeans-cerezas-pack-130-5A.jpg"],
    realImage: "./public/img/jeans-nina/cod-212-jeans-cerezas-pack-130-5A.jpg",
    description:
      "Jeans con estampado de cerezas. Ideal para un look divertido y moderno.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-5-215",
    slug: "jeans-nina-5-215",
    name: "Overol Largo Azul Oscuro para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Azul", hex: "#64B5F6" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-215-overol-largo-azul-oscuro-con-est-130-5A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-215-overol-largo-azul-oscuro-con-est-130-5A.jpg",
    description:
      "Overol largo azul oscuro. Perfecto para un look casual y moderno.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-5-225",
    slug: "jeans-nina-5-225",
    name: "Encaje Floral Manga Larga y Jean para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-225-encaje-floral-manga-larga-y-cuel-130-5A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-225-encaje-floral-manga-larga-y-cuel-130-5A.jpg",
    description:
      "Encaje floral manga larga con jeans a juego. Ideal para un look delicado.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 6 AÑOS ----
  {
    id: "mk-jeans-nina-6-140",
    slug: "jeans-nina-6-140",
    name: "Jeans Básicos para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "6 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-130-kids-fashion-flat-lay-140-6A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-130-kids-fashion-flat-lay-140-6A.jpg",
    description:
      "Jeans básicos con stretch. Corte moderno y cómodo, perfecto para el día a día.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-6-20",
    slug: "jeans-nina-6-20",
    name: "Conjunto Coquette Ultra Tendencia para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "6 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-20-conjunto-coquette-ultra-tendencia-140-6A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-20-conjunto-coquette-ultra-tendencia-140-6A.jpg",
    description:
      "Conjunto coquette ultra tendencia. Perfecto para un look moderno y femenino.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-6-204",
    slug: "jeans-nina-6-204",
    name: "Manga Corta y Pantalones Vaqueros para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "6 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-204-manga-corta-y-pantalones-vaquero-140-6A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-204-manga-corta-y-pantalones-vaquero-140-6A.jpg",
    description:
      "Conjunto de manga corta y pantalones vaqueros. Ideal para un look veraniego.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-6-205",
    slug: "jeans-nina-6-205",
    name: "Blusita Roja y Jean Acampanado para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "6 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-205-blusita-roja-y-jean-acampanado-140-6A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-205-blusita-roja-y-jean-acampanado-140-6A.jpg",
    description:
      "Blusita roja con jean acampanado. Perfecto para un look retro y moderno.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-6-210",
    slug: "jeans-nina-6-210",
    name: "Blusa Manga Corta Rosa y Pantalón para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "6 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-210-blusa-manga-corta-rosa-y-pantalo-140-6A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-210-blusa-manga-corta-rosa-y-pantalo-140-6A.jpg",
    description:
      "Blusa manga corta rosa con pantalón a juego. Ideal para un look veraniego.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 7 AÑOS ----
  {
    id: "mk-jeans-nina-7-206",
    slug: "jeans-nina-7-206",
    name: "Polo con Lentejuelas y Jean para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "7 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-206-polo-mo-o-de-lentejuelas-y-jean-150-7A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-206-polo-mo-o-de-lentejuelas-y-jean-150-7A.jpg",
    description:
      "Polo con lentejuelas y jeans a juego. Perfecto para un look brillante y festivo.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nina-7-239",
    slug: "jeans-nina-7-239",
    name: "Pantalón Jean con Estampado de Papas Fritas para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "7 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-239-pantal-n-jean-ni-o-papas-fritas-150-7A.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-239-pantal-n-jean-ni-o-papas-fritas-150-7A.jpg",
    description:
      "Pantalón jean con estampado de papas fritas. Ideal para un look divertido.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 8 AÑOS ----
  {
    id: "mk-jeans-nina-8-240",
    slug: "jeans-nina-8-240",
    name: "Denim Jeans y Polo Blanco para Niña",
    category: "jeans-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "8 Años",
        colors: [{ name: "Blanco", hex: "#FFFFFF" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nina/cod-240-denim-jeans-polo-blanco-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/jeans-nina/cod-240-denim-jeans-polo-blanco-90-18-24M.jpg",
    description:
      "Denim jeans con polo blanco. Perfecto para un look clásico y moderno.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ============================================================
  // JEANS NIÑO - FORMATO DINÁMICO (Tallas con Colores Vinculados)
  // ============================================================

  // ---- TALLA 18-24 MESES ----
  {
    id: "mk-jeans-nino-18-24-camisa",
    slug: "jeans-nino-18-24-camisa",
    name: "Camisa de Manga Larga con Cuello Vuelto y Jean para Niño",
    category: "jeans-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nino/camisa-de-manga-larga-con-cuello-vuelto-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/camisa-de-manga-larga-con-cuello-vuelto-90-18-24M.jpg",
    description:
      "Camisa de manga larga con cuello vuelto y jeans a juego. Perfecto para un look elegante.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-18-24-vaquera",
    slug: "jeans-nino-18-24-vaquera",
    name: "Vaquera Vintage y Pantalón para Niño",
    category: "jeans-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nino/casaca-vaquera-vintage-y-pantalones-depo-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/casaca-vaquera-vintage-y-pantalones-depo-90-18-24M.jpg",
    description:
      "Vaquera vintage con pantalón a juego. Ideal para un look retro y moderno.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-18-24-letra",
    slug: "jeans-nino-18-24-letra",
    name: "Conjunto con Letra Bordada Negro para Niño",
    category: "jeans-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Negro", hex: "#212121" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nino/conjunto-ni-o-2pz-letra-bordada-negro-su-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/conjunto-ni-o-2pz-letra-bordada-negro-su-90-18-24M.jpg",
    description:
      "Conjunto con letra bordada en negro. Perfecto para un look moderno.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-18-24-rayas",
    slug: "jeans-nino-18-24-rayas",
    name: "Polo Rayas Azul con Osito y Jean para Niño",
    category: "jeans-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Azul", hex: "#64B5F6" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nino/conjunto-ni-o-polo-rayas-azul-osito-2-pi-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/conjunto-ni-o-polo-rayas-azul-osito-2-pi-90-18-24M.jpg",
    description:
      "Polo rayas azul con osito y jeans a juego. Ideal para un look tierno.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-18-24-baseball",
    slug: "jeans-nino-18-24-baseball",
    name: "Conjunto Rayas 28 Baseball para Niño",
    category: "jeans-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nino/conjunto-ni-o-rayas-28-baseball-2-piezas-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/conjunto-ni-o-rayas-28-baseball-2-piezas-90-18-24M.jpg",
    description: "Conjunto rayas 28 baseball. Perfecto para un look deportivo.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-18-24-overol",
    slug: "jeans-nino-18-24-overol",
    name: "Overol de Mezclilla con Bordado de Oso para Niño",
    category: "jeans-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nino/overol-de-mezclilla-con-bordado-de-oso-a-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/overol-de-mezclilla-con-bordado-de-oso-a-90-18-24M.jpg",
    description:
      "Overol de mezclilla con bordado de oso. Ideal para un look casual.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-18-24-231",
    slug: "jeans-nino-18-24-231",
    name: "Overol de Jean y Polo Manga Larga para Niño",
    category: "jeans-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nino/cod-231-overol-de-jean-y-polo-manga-larg-90-18-24M.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/cod-231-overol-de-jean-y-polo-manga-larg-90-18-24M.jpg",
    description:
      "Overol de jean con polo manga larga. Perfecto para un look moderno.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 2 AÑOS ----
  {
    id: "mk-jeans-nino-2-100-polo",
    slug: "jeans-nino-2-100-polo",
    name: "Camiseta Polo de Manga Larga y Jean para Niño",
    category: "jeans-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nino/camiseta-polo-de-manga-larga-de-punto-a-100-2A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/camiseta-polo-de-manga-larga-de-punto-a-100-2A.jpg",
    description:
      "Camiseta polo de manga larga con jeans a juego. Ideal para un look moderno.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  {
    id: "mk-jeans-nino-2-2019",
    slug: "jeans-nino-2-2019",
    name: "Camiseta de Manga Larga y Jean para Niño",
    category: "jeans-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "2 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nino/cod-2019-camiseta-de-manga-larga-de-cuel-100-2A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/cod-2019-camiseta-de-manga-larga-de-cuel-100-2A.jpg",
    description:
      "Camiseta de manga larga con jeans a juego. Perfecto para un look casual.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 3 AÑOS ----
  {
    id: "mk-jeans-nino-3-110-mommy",
    slug: "jeans-nino-3-110-mommy",
    name: "Conjunto Bebé Polera Mommy's Lucky para Niño",
    category: "jeans-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nino/conjunto-beb-2pz-polera-mommy-s-lucky-bo-110-3A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/conjunto-beb-2pz-polera-mommy-s-lucky-bo-110-3A.jpg",
    description:
      "Conjunto bebé con polera Mommy's Lucky y jeans. Ideal para un look tierno.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 4 AÑOS ----
  {
    id: "mk-jeans-nino-4-120-dino",
    slug: "jeans-nino-4-120-dino",
    name: "Conjunto Jeans con Dinosaurio para Niño",
    category: "jeans-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nino/conjunto-jeans-ni-o-dinosaurio-2-piezas-120-4A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/conjunto-jeans-ni-o-dinosaurio-2-piezas-120-4A.jpg",
    description:
      "Conjunto jeans con dinosaurio. Perfecto para los amantes de los dinosaurios.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 5 AÑOS ----
  {
    id: "mk-jeans-nino-5-130-camisa",
    slug: "jeans-nino-5-130-camisa",
    name: "Camisa Rayas Beige y Jean para Niño",
    category: "jeans-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "5 Años",
        colors: [{ name: "Beige", hex: "#F5F5DC" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nino/conjunto-jeans-ni-o-camisa-rayas-beige-2-130-5A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/conjunto-jeans-ni-o-camisa-rayas-beige-2-130-5A.jpg",
    description:
      "Camisa rayas beige con jeans a juego. Ideal para un look elegante.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 6 AÑOS ----
  {
    id: "mk-jeans-nino-6-140",
    slug: "jeans-nino-6-140",
    name: "Jean R Camisa y Pantalón para Niño",
    category: "jeans-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "6 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: ["./public/img/jeans-nino/jean-r-camisa-pantal-n-2pzs-140-6A.jpg"],
    realImage: "./public/img/jeans-nino/jean-r-camisa-pantal-n-2pzs-140-6A.jpg",
    description: "Jean R con camisa y pantalón. Perfecto para un look moderno.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },

  // ---- TALLA 7 AÑOS ----
  {
    id: "mk-jeans-nino-7-150",
    slug: "jeans-nino-7-150",
    name: "Jeans Básicos para Niño",
    category: "jeans-nino",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "7 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
      },
    ],
    season: "todo-el-año",
    images: [
      "./public/img/jeans-nino/cod-150-jean-archive-23-2-pzs-150-7A.jpg",
    ],
    realImage:
      "./public/img/jeans-nino/cod-150-jean-archive-23-2-pzs-150-7A.jpg",
    description:
      "Jeans básicos con stretch. Corte moderno y cómodo, perfecto para el día a día.",
    material: "Denim: 75% Algodón, 23% Poliéster, 2% Elastano. Con stretch.",
    cuidados:
      "Lavar a mano con agua fría. No usar blanqueador. No secadora alta.",
  },
  // ============================================================
  // VESTIDOS - FORMATO DINÁMICO (Tallas con Colores Vinculados)
  // ============================================================

  // ---- TALLA 12-18 MESES ----
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
  },

  // ---- TALLA 18-24 MESES ----
  {
    id: "mk-vestido-18-24-mixxed-cod-90",
    slug: "vestido-18-24-mixxed-cod-90",
    name: "Vestido de Princesa Mixxed Color para Bebé",
    category: "vestidos-nina",
    price: 45,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "18-24 Meses",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
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
    stock: 15,
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
    stock: 15,
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
    id: "mk-vestido-chaleco-gris-cod-90",
    slug: "vestido-chaleco-gris-cod-90",
    name: "Vestido con Chaleco Gris para Bebé",
    category: "vestidos-nina",
    price: 39,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "18-24 Meses",
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
    stock: 15,
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
    id: "mk-vestido-marron-caquie-cod-100",
    slug: "vestido-marron-caquie-cod-100",
    name: "Vestido de Princesa Marrón Caqui",
    category: "vestidos-nina",
    price: 49,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 1,
    sizes: [
      {
        name: "2 Años",
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
    stock: 1,
    sizes: [
      {
        name: "2 Años",
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
    stock: 15,
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
    id: "mk-vestido-morado-claro-cod-110",
    slug: "vestido-morado-claro-cod-110",
    name: "Vestido de Princesa Morado Claro",
    category: "vestidos-nina",
    price: 49,
    oldPrice: 60,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
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
    stock: 15,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
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
    stock: 15,
    sizes: [
      {
        name: "3 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
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
    stock: 15,
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
  },

  // ---- TALLA 4 AÑOS ----
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
    stock: 15,
    sizes: [
      {
        name: "4 Años",
        colors: [{ name: "Rosa", hex: "#F8BBD0" }],
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
    id: "mk-vestido-4-rosa-floreada-cod-120",
    slug: "vestido-4-rosa-floreada-cod-120",
    name: "Vestido Rosa Floreada para Niña",
    category: "vestidos-nina",
    price: 49,
    oldPrice: 60,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    id: "mk-vestido-4-elegante-encaje-cod-120",
    slug: "vestido-4-elegante-encaje-cod-120",
    name: "Vestido Elegante con Encaje para Niña",
    category: "vestidos-nina",
    price: 49,
    oldPrice: 60,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
    sizes: [
      {
        name: "4 Años",
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
    stock: 15,
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
  },
  {
    id: "mk-vestido-4-tweed-chanel-cod-120",
    slug: "vestido-4-tweed-chanel-cod-120",
    name: "Vestido Tweed Chanel Negro para Niña",
    category: "vestidos-nina",
    price: 38,
    oldPrice: 55,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
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
    stock: 15,
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
  },
  {
    id: "mk-vestido-4-punto-azul-cod-120",
    slug: "vestido-4-punto-azul-cod-120",
    name: "Vestido de Princesa Tejido de Punto Azul",
    category: "vestidos-nina",
    price: 45,
    oldPrice: 60,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
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

  // ---- TALLA 5 AÑOS ----
  {
    id: "mk-vestido-5-capa-brillos-cod-130",
    slug: "vestido-5-capa-brillos-cod-130",
    name: "Vestido de Princesa con Capa y Brillos",
    category: "vestidos-nina",
    price: 39,
    oldPrice: 60,
    badge: "Oferta",
    rating: 4.9,
    reviews: 12,
    stock: 15,
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
    reviews: 12,
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
    stock: 15,
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
