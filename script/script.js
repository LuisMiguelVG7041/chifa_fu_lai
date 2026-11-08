/* ====================================================================
   PROYECTO: CHIFA FU LAI - CARTA DIGITAL & SISTEMA DE PEDIDOS
   ARCHIVO: script.js (Lógica JavaScript ES6+ - SPA)
   VERSIÓN: 2.1.0 (Edición Chifa Fu Lai - Recomendaciones & Imágenes)
   AUTOR: Chifa Fu Lai - Equipo de Desarrollo Web
   UBICACIÓN: Inglaterra Mz. O Lt. 8, Cusco, Perú
   ==================================================================== */

/* ========================================== */
/* 1. CONSTANTES Y BASE DE DATOS COMPLETA    */
/* ========================================== */
const WHATSAPP_NUMBER = "51900390458";

const CATEGORIES = [
  "Recomendaciones",
  "Sopas",
  "Chaufas",
  "Aeropuertos",
  "Tortillas",
  "Platos Salados",
  "Platos Agridulces",
  "Platos a la Plancha",
  "Criollos con Chaufa",
  "Combos Tríos",
  "Bebidas"
];

const SECTION_TITLES = {
  "Recomendaciones": "⭐ Platos Recomendados Fu Lai",
  "Sopas": "🍲 Sopas Tradicionales (S/. 11.00 - S/. 16.00)",
  "Chaufas": "🍚 Chaufas al Wok (S/. 11.00 - S/. 20.00)",
  "Aeropuertos": "✈️ Aeropuertos al Wok (S/. 12.00 - S/. 20.00)",
  "Tortillas": "🍳 Tortillas con Chaufa (S/. 14.00 - S/. 20.00)",
  "Platos Salados": "🥢 Platos Salados (S/. 14.00 - S/. 21.00)",
  "Platos Agridulces": "🍍 Platos Agridulces (S/. 14.00 - S/. 20.00)",
  "Platos a la Plancha": "🔥 Platos a la Plancha (S/. 18.00 - S/. 22.00)",
  "Criollos con Chaufa": "🥩 Criollos con Arroz Chaufa (S/. 12.00 - S/. 16.00)",
  "Combos Tríos": "🔥 Combos Tríos Fu Lai (S/. 20.00)",
  "Bebidas": "🥤 Bebidas Frías y Calientes"
};

const PRODUCTS = [
  /* RECOMENDACIONES (TARJETAS CON IMAGEN) */
{ 
    id: "rec-a", 
    name: "Sopa Wantán", 
    category: "Recomendaciones", 
    price: 8.00, 
    desc: "Reconfortante caldo claro de pollo salteado con kion y aceite de ajonjolí, servido con wantanes artesanales rellenos, láminas de pollo, pac choy y cebollita china.", 
    image: "img/combos/combo-f.svg" 
  },
  { 
    id: "rec-b", 
    name: "Chaufa c/ Tallarín Saltado de Pollo y Carne", 
    category: "Recomendaciones", 
    price: 18.00, 
    desc: "Combinado especial estilo mitad y mitad: arroz chaufa granado y tallarín saltado al wok con trozos de pollo, carne de res y verduras frescas en salsa de ostión.", 
    image: "img/combos/combo-b.svg" 
  },
  { 
    id: "rec-c", 
    name: "Tallarín Saltado de Carne", 
    category: "Recomendaciones", 
    price: 14.00, 
    desc: "Fideos chinos salteados al wok a fuego vivo con jugosas tiras de carne de res, cebolla morada, tomate, pimiento, holantao y col china en salsa de soya y ostión.", 
    image: "img/combos/combo-c.svg" 
  },
  { 
    id: "rec-d", 
    name: "Chaufa + Kam Lu Wantán", 
    category: "Recomendaciones", 
    price: 20.00, 
    desc: "Arroz chaufa salteado de la casa acompañado de wantanes fritos crujientes, pollo, cerdo char siu, langostinos y piña bañados en salsa agridulce de tamarindo.", 
    image: "img/combos/combo-d.svg" 
  },
  { 
    id: "rec-e", 
    name: "Chaufa + Pollo con durazno", 
    category: "Recomendaciones", 
    price: 15.00, 
    desc: "Arroz chaufa al wok servido con bocados de pollo dorados bañados en una fina salsa agridulce de tamarindo acompañada de gajos de durazno y vegetales.", 
    image: "img/combos/combo-e.svg" 
  },
  { 
    id: "rec-f", 
    name: "Chaufa con Tortilla Mixta (Pollo y Carne)", 
    category: "Recomendaciones", 
    price: 17.00, 
    desc: "Arroz chaufa de la casa coronado con una jugosa y esponjosa tortilla de huevo preparada al wok, rellena de trozos de pollo, carne de res y cebollita china.", 
    image: "img/combos/combo-a.svg" 
  },
  { 
    id: "rec-g", 
    name: "Aeropuerto Mixto (Pollo y Carne)", 
    category: "Recomendaciones", 
    price: 16.00, 
    desc: "Abundante fusión de arroz chaufa y fideos chinos salteados al wok a alta temperatura con trozos de pollo, carne de res, brotes de soya (frijolito de china) y huevo.", 
    image: "img/combos/combo-g.svg" 
  },
  { 
    id: "rec-h", 
    name: "Chaufa con Lomo Saltado", 
    category: "Recomendaciones", 
    price: 14.00, 
    desc: "Arroz chaufa frito al wok acompañado de un criollo Lomo Saltado de res con cebolla, tomate, ají amarillo, papas fritas y su jugoso jugo salteado.", 
    image: "img/combos/combo-h.svg" 
  },
  { 
    id: "rec-i", 
    name: "Chaufa con Milanesa de Pollo", 
    category: "Recomendaciones", 
    price: 14.00, 
    desc: "Porción abundante de arroz chaufa tradicional tostado al wok, acompañado de un filete de pechuga de pollo empanizada (milanesa) crujiente y dorada.", 
    image: "img/combos/combo-i.svg" 
  },
  
  /* SOPAS */
  { id: "sop-1", name: "Sopa de Pollo", category: "Sopas", price: 11.00, desc: "Sopa reconfortante con trozos de pollo y fideos." },
  { id: "sop-2", name: "Sopa Wantán", category: "Sopas", price: 11.00, desc: "Caldo de la casa con wantanes rellenos y verduras." },
  { id: "sop-3", name: "Sopa de Pollo con Kión", category: "Sopas", price: 11.00, desc: "Sopa aromática de pollo con toque de kión fresco." },
  { id: "sop-4", name: "Sopa de Pollo y Verduras", category: "Sopas", price: 12.00, desc: "Sopa nutritiva con tiras de pollo y verduras chinas." },
  { id: "sop-5", name: "Sopa Especial (Taypa)", category: "Sopas", price: 16.00, badge: "Especial ⭐", desc: "Sopa sustanciosa con pollo, carne, langostinos, huevos de codorniz y wantán." },

  /* CHAUFAS */
  { id: "ch-1", name: "Chaufa de Pollo", category: "Chaufas", price: 11.00, desc: "Arroz salteado con pollo al wok." },
  { id: "ch-2", name: "Chaufa de Carne", category: "Chaufas", price: 12.00, desc: "Arroz salteado con carne de res al wok." },
  { id: "ch-3", name: "Chaufa de Chancho", category: "Chaufas", price: 13.00, desc: "Arroz salteado con chancho asado al wok." },
  { id: "ch-4", name: "Chaufa de Verduras 'Sin Pollo'", category: "Chaufas", price: 11.00, desc: "Arroz salteado con verduras frescas al wok." },
  { id: "ch-5", name: "Chaufa de Champiñones", category: "Chaufas", price: 14.00, desc: "Arroz salteado con champiñones al wok." },
  { id: "ch-6", name: "Chaufa de Langostinos", category: "Chaufas", price: 16.00, desc: "Arroz salteado con langostinos frescos al wok." },
  { id: "ch-7", name: "Chaufa Mixta (Pollo y Carne)", category: "Chaufas", price: 15.00, desc: "Arroz salteado con pollo y carne al wok." },
  { id: "ch-8", name: "Chaufa Mixta (Pollo y Chancho)", category: "Chaufas", price: 15.00, desc: "Arroz salteado con pollo y chancho al wok." },
  { id: "ch-9", name: "Chaufa Mixta (Pollo y Verduras)", category: "Chaufas", price: 15.00, desc: "Arroz salteado con pollo y verduras al wok." },
  { id: "ch-10", name: "Chaufa Especial 'Taypa'", category: "Chaufas", price: 20.00, badge: "Taipá ⭐", desc: "Arroz salteado con pollo, carne, chancho, langostinos y champiñones al wok." },

  /* AEROPUERTOS */
  { id: "aero-1", name: "Aeropuerto de Pollo", category: "Aeropuertos", price: 12.00, desc: "Arroz con tallarín y frejol chino salteado con pollo al wok." },
  { id: "aero-2", name: "Aeropuerto de Carne", category: "Aeropuertos", price: 13.00, desc: "Arroz con tallarín y frejol chino salteado con carne al wok." },
  { id: "aero-3", name: "Aeropuerto de Chancho", category: "Aeropuertos", price: 14.00, desc: "Arroz con tallarín y frejol chino salteado con chancho al wok." },
  { id: "aero-4", name: "Aeropuerto de Verduras 'Sin Pollo'", category: "Aeropuertos", price: 12.00, desc: "Arroz con tallarín y frejol chino salteado con verduras al wok." },
  { id: "aero-5", name: "Aeropuerto de Langostinos", category: "Aeropuertos", price: 17.00, desc: "Arroz con tallarín y frejol chino salteado con langostinos al wok." },
  { id: "aero-6", name: "Aeropuerto Mixto (Pollo y Carne)", category: "Aeropuertos", price: 16.00, desc: "Arroz con tallarín y frejol chino salteado con pollo y carne al wok." },
  { id: "aero-7", name: "Aeropuerto Mixto (Pollo y Chancho)", category: "Aeropuertos", price: 16.00, desc: "Arroz con tallarín y frejol chino salteado con pollo y chancho al wok." },
  { id: "aero-8", name: "Aeropuerto Mixto (Pollo y Verduras)", category: "Aeropuertos", price: 16.00, desc: "Arroz con tallarín y frejol chino salteado con pollo y verduras al wok." },
  { id: "aero-9", name: "Aeropuerto Especial 'Taypa'", category: "Aeropuertos", price: 20.00, badge: "Taipá ⭐", desc: "Arroz con tallarín y frejol chino con pollo, carne, chancho, langostinos y champiñones al wok." },

  /* TORTILLAS */
  { id: "tort-1", name: "Chaufa con Tortilla de Pollo", category: "Tortillas", price: 14.00, desc: "Arroz salteado cubierto con jugosa tortilla de pollo." },
  { id: "tort-2", name: "Chaufa con Tortilla de Carne", category: "Tortillas", price: 14.00, desc: "Arroz salteado cubierto con tortilla de carne." },
  { id: "tort-3", name: "Chaufa con Tortilla de Chancho", category: "Tortillas", price: 15.00, desc: "Arroz salteado cubierto con tortilla de chancho asado." },
  { id: "tort-4", name: "Chaufa con Tortilla de Verduras 'Sin Pollo'", category: "Tortillas", price: 14.00, desc: "Arroz salteado cubierto con tortilla de verduras." },
  { id: "tort-5", name: "Chaufa con Tortilla de Champiñones", category: "Tortillas", price: 15.00, desc: "Arroz salteado cubierto con tortilla de champiñones." },
  { id: "tort-6", name: "Chaufa con Tortilla de Langostinos", category: "Tortillas", price: 17.00, desc: "Arroz salteado cubierto con tortilla de langostinos." },
  { id: "tort-7", name: "Chaufa con Tortilla de Verduras y Champiñones", category: "Tortillas", price: 17.00, desc: "Arroz salteado cubierto con tortilla de verduras y champiñones." },
  { id: "tort-8", name: "Chaufa con Tortilla Mixta (Pollo y Verduras)", category: "Tortillas", price: 17.00, desc: "Arroz salteado cubierto con tortilla de pollo y verduras." },
  { id: "tort-9", name: "Chaufa con Tortilla Mixta (Pollo y Carne)", category: "Tortillas", price: 17.00, desc: "Arroz salteado cubierto con tortilla de pollo y carne." },
  { id: "tort-10", name: "Chaufa con Tortilla Mixta (Pollo y Chancho)", category: "Tortillas", price: 17.00, desc: "Arroz salteado cubierto con tortilla de pollo y chancho." },
  { id: "tort-11", name: "Chaufa con Tortilla Mixta (Carne y Chancho)", category: "Tortillas", price: 18.00, desc: "Arroz salteado cubierto con tortilla de carne y chancho." },
  { id: "tort-12", name: "Chaufa con Tortilla Especial", category: "Tortillas", price: 20.00, badge: "Especial ⭐", desc: "Arroz salteado cubierto con tortilla de pollo, carne, chancho, champiñones y langostinos." },

  /* PLATOS SALADOS */
  { id: "sal-1", name: "Pollo Chijaukay", category: "Platos Salados", price: 16.00, desc: "Pollo crocante en salsa de ostión tradicional." },
  { id: "sal-2", name: "Pollo Chijaukay en Salsa de Champiñones", category: "Platos Salados", price: 18.00, desc: "Pollo crocante en salsa de ostión con champiñones." },
  { id: "sal-3", name: "Pollo Enrollado con Espárragos", category: "Platos Salados", price: 18.00, desc: "Pollo enrollado con espárragos en salsa de ostión." },
  { id: "sal-4", name: "Pollo Enrollado con Espárragos en Salsa de Champiñones", category: "Platos Salados", price: 19.00, desc: "Pollo enrollado con espárragos y salsa de champiñones." },
  { id: "sal-5", name: "Pollo con Verduras", category: "Platos Salados", price: 14.00, desc: "Pollo y verduras frescas salteadas al wok." },
  { id: "sal-6", name: "Carne con Verduras", category: "Platos Salados", price: 14.00, desc: "Carne de res y verduras salteadas al wok." },
  { id: "sal-7", name: "Chancho con Verduras", category: "Platos Salados", price: 16.00, desc: "Chancho asado y verduras salteadas al wok." },
  { id: "sal-8", name: "Pollo con Verduras y Champiñones", category: "Platos Salados", price: 17.00, desc: "Verduras, champiñones y pollo salteados al wok." },
  { id: "sal-9", name: "Combinado de Pollo", category: "Platos Salados", price: 15.00, desc: "Arroz chaufa y tallarín saltado de pollo con verduras al wok." },
  { id: "sal-10", name: "Combinado de Carne", category: "Platos Salados", price: 15.00, desc: "Arroz chaufa y tallarín saltado de carne con verduras al wok." },
  { id: "sal-11", name: "Combinado de Chancho", category: "Platos Salados", price: 17.00, desc: "Arroz chaufa y tallarín saltado de chancho con verduras al wok." },
  { id: "sal-12", name: "Combinado de Pollo y Chancho", category: "Platos Salados", price: 18.00, desc: "Arroz chaufa y tallarín saltado de pollo y chancho al wok." },
  { id: "sal-13", name: "Combinado de Pollo y Carne", category: "Platos Salados", price: 18.00, desc: "Arroz chaufa y tallarín saltado de pollo y carne al wok." },
  { id: "sal-14", name: "Combinado Especial 'Taypa'", category: "Platos Salados", price: 21.00, badge: "Taipá ⭐", desc: "Chaufa y tallarín con pollo, carne, chancho, champiñones y langostinos." },
  { id: "sal-15", name: "Tallarín de Pollo", category: "Platos Salados", price: 14.00, desc: "Fideos chinos saltados al wok con pollo y verduras." },
  { id: "sal-16", name: "Tallarín de Carne", category: "Platos Salados", price: 14.00, desc: "Fideos chinos saltados al wok con carne y verduras." },
  { id: "sal-17", name: "Tallarín de Chancho", category: "Platos Salados", price: 16.00, desc: "Fideos chinos saltados al wok con chancho y verduras." },
  { id: "sal-18", name: "Tallarín Taypa", category: "Platos Salados", price: 20.00, badge: "Taypa ⭐", desc: "Fideos saltados con pollo, res, chancho, langostinos, huevos de codorniz y champiñones." },

  /* PLATOS AGRIDULCES */
  { id: "agri-1", name: "Pollo Tipakai", category: "Platos Agridulces", price: 16.00, desc: "Pollo crujiente en salsa tamarindo artesanal." },
  { id: "agri-2", name: "Pollo con Piña", category: "Platos Agridulces", price: 14.00, desc: "Pollo crujiente y piña fresca salteados en salsa agridulce." },
  { id: "agri-3", name: "Pollo con Durazno", category: "Platos Agridulces", price: 15.00, desc: "Pollo crujiente y durazno fresco salteados en salsa agridulce." },
  { id: "agri-4", name: "Pollo con Tamarindo", category: "Platos Agridulces", price: 16.00, desc: "Pollo crujiente con piña y durazno en salsa agridulce de tamarindo." },
  { id: "agri-5", name: "Pollo Enrollado con Espárragos", category: "Platos Agridulces", price: 18.00, desc: "Pollo enrollado crujiente con piña y durazno en salsa agridulce de tamarindo." },
  { id: "agri-6", name: "Chancho con Piña", category: "Platos Agridulces", price: 17.00, desc: "Cerdo y piña fresca en salsa agridulce." },
  { id: "agri-7", name: "Chancho con Durazno", category: "Platos Agridulces", price: 17.00, desc: "Cerdo y durazno en salsa agridulce." },
  { id: "agri-8", name: "Chancho Tamarindo", category: "Platos Agridulces", price: 18.00, desc: "Cerdo con piña y durazno en salsa agridulce de tamarindo." },
  { id: "agri-9", name: "Pollo Limonkai", category: "Platos Agridulces", price: 16.00, desc: "Pollo crocante en láminas bañado en salsa agridulce de limón." },
  { id: "agri-10", name: "Pollo a la Naranja", category: "Platos Agridulces", price: 16.00, desc: "Pollo crocante en láminas bañado en salsa agridulce de naranja." },
  { id: "agri-11", name: "Kanlu Wantan", category: "Platos Agridulces", price: 20.00, badge: "Especial ⭐", desc: "Wantanes crocantes con pollo, chancho, frutas y huevitos de codorniz en salsa agridulce." },

  /* PLATOS A LA PLANCHA */
  { id: "planch-1", name: "Taypa a la Plancha", category: "Platos a la Plancha", price: 22.00, badge: "Espectacular 🔥", desc: "Pollo, carne, chancho, langostinos, champiñones y huevitos de codorniz salteados en plancha caliente." },
  { id: "planch-2", name: "Pollo con Verduras a la Plancha", category: "Platos a la Plancha", price: 18.00, desc: "Pollo salteado con verduras, servidos en plancha caliente." },
  { id: "planch-3", name: "Pollo Enrollado con Espárragos a la Plancha", category: "Platos a la Plancha", price: 20.00, desc: "Pollo enrollado crocante en plancha caliente con salteado de verduras orientales." },

  /* CRIOLLOS CON CHAUFA */
  { id: "crio-1", name: "Tallarín Saltado (Pollo o Carne)", category: "Criollos con Chaufa", price: 12.00, desc: "Fideos saltados al wok con jugosos trozos de carne o pollo." },
  { id: "crio-2", name: "Chaufa con Lomo Saltado", category: "Criollos con Chaufa", price: 14.00, desc: "Jugosos trozos de lomo saltado con cebolla y tomate, acompañados de arroz chaufa." },
  { id: "crio-3", name: "Chaufa con Saltado de Pollo", category: "Criollos con Chaufa", price: 14.00, desc: "Trozos de pollo salteados al wok acompañados de arroz chaufa." },
  { id: "crio-4", name: "Chaufa con Pollo a la Plancha", category: "Criollos con Chaufa", price: 14.00, desc: "Jugosa pechuga de pollo a la plancha acompañada de arroz chaufa." },
  { id: "crio-5", name: "Chaufa con Milanesa de Pollo", category: "Criollos con Chaufa", price: 14.00, desc: "Crujiente pechuga de pollo empanizada acompañada de arroz chaufa." },
  { id: "crio-6", name: "Chaufa con Tallarín Saltado (Pollo o Carne)", category: "Criollos con Chaufa", price: 14.00, desc: "Porción de arroz chaufa servida junto a un jugoso tallarín saltado criollo." },
  { id: "crio-7", name: "Chaufa con Bistec Montado", category: "Criollos con Chaufa", price: 15.00, desc: "Filete de res frito con huevo montado, papas y arroz chaufa." },
  { id: "crio-8", name: "Chaufa con Pollo Montado", category: "Criollos con Chaufa", price: 15.00, desc: "Filete de pollo frito con huevo montado, papas y arroz chaufa." },
  { id: "crio-9", name: "Chaufa con Bistec Montado a lo Pobre", category: "Criollos con Chaufa", price: 16.00, desc: "Filete de res frito con huevo montado, papas, plátano frito, salchicha y arroz chaufa." },
  { id: "crio-10", name: "Chaufa con Pollo Montado a lo Pobre", category: "Criollos con Chaufa", price: 16.00, desc: "Filete de pollo frito con huevo montado, papas, plátano frito, salchicha y arroz chaufa." },
  { id: "crio-11", name: "Chaufa con Lomo Saltado a lo Pobre", category: "Criollos con Chaufa", price: 16.00, desc: "Lomo saltado con cebolla y tomate, servido con chaufa, huevo, salchicha y plátano frito." },
  { id: "crio-12", name: "Chaufa con Saltado de Pollo a lo Pobre", category: "Criollos con Chaufa", price: 16.00, desc: "Trozos de pollo salteado acompañados de arroz chaufa, huevo, salchicha y plátano frito." },
  { id: "crio-13", name: "Chaufa con Pollo a la Plancha a lo Pobre", category: "Criollos con Chaufa", price: 16.00, desc: "Pechuga a la plancha con arroz chaufa, huevo, plátano frito y salchicha." },
  { id: "crio-14", name: "Chaufa con Milanesa de Pollo a lo Pobre", category: "Criollos con Chaufa", price: 16.00, desc: "Pechuga empanizada con arroz chaufa, huevo, papas, plátano y salchicha." },

  /* COMBOS TRIOS */
  { id: "trio-1", name: "Chaufa + Tipakai + Chijaukai con Wantán", category: "Combos Tríos", price: 20.00, badge: "Trío N° 1 🔥", desc: "Arroz chaufa, pollo tipakai agridulce, pollo chijaukai y wantán frito." },
  { id: "trio-2", name: "Chaufa + Pollo con Verduras + Pollo Durazno con Wantán", category: "Combos Tríos", price: 20.00, badge: "Trío N° 2 🔥", desc: "Arroz chaufa, pollo salteado con verduras, pollo durazno agridulce y wantán frito." },
  { id: "trio-3", name: "Chaufa + Lomo + Pollo con Piña con Wantán", category: "Combos Tríos", price: 20.00, badge: "Trío N° 3 🔥", desc: "Arroz chaufa, lomo saltado, pollo con piña agridulce y wantán frito." },

  /* BEBIDAS */
  { id: "beb-1", name: "Gaseosa Personal 400ml", category: "Bebidas", price: 3.00, desc: "Gaseosa personal helada." },
  { id: "beb-2", name: "Gaseosa Personal 625ml", category: "Bebidas", price: 4.00, desc: "Gaseosa personal mediana." },
  { id: "beb-3", name: "Gordita", category: "Bebidas", price: 5.00, desc: "Gaseosa personal de formato gordita." },
  { id: "beb-4", name: "Gaseosa 1 Litro", category: "Bebidas", price: 8.00, desc: "Gaseosa de 1Lt helada ideal para compartir." },
  { id: "beb-5", name: "Gaseosa 2 Litros", category: "Bebidas", price: 11.00, desc: "Gaseosa familiar de 2Lt helada." },
  { id: "beb-6", name: "Limonada (1 Litro)", category: "Bebidas", price: 8.00, desc: "Limonada artesanal helada de la casa." },
  { id: "beb-7", name: "Chicha Morada (1 Litro)", category: "Bebidas", price: 8.00, desc: "Chicha morada natural preparada con maíz morado." },
  { id: "beb-8", name: "Maracuyá (1 Litro)", category: "Bebidas", price: 8.00, desc: "Refresco natural de maracuyá helado." },
  { id: "beb-9", name: "Infusiones", category: "Bebidas", price: 3.00, desc: "Manzanilla, té, hierba luisa o anís." },
  { id: "beb-10", name: "Café Pasar", category: "Bebidas", price: 3.00, desc: "Café caliente pasado." }
];

const VALID_COUPONS = {
  "FULAI10": { type: "fixed", value: 2.00, minSubtotal: 30.00, desc: "S/. 2.00 de descuento (Min. S/. 30.00)" },
  "FULAIVIP": { type: "fixed", value: 3.00, minDishes: 3, desc: "S/. 3.00 de descuento por 3+ platos" }
};

/* ========================================== */
/* 2. ESTADO GLOBAL DE LA APLICACIÓN         */
/* ========================================== */
let cart = [];
let selectedCategory = "Recomendaciones";
let searchQuery = "";
let serviceType = "sala";
let payMethod = "yape";
let custName = "";
let custNotes = "";
let appliedCoupon = null;

/* ========================================== */
/* 3. INICIALIZACIÓN Y EVENT LISTENERS       */
/* ========================================== */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  checkStoreOpenStatus();
  setInterval(checkStoreOpenStatus, 60000);
  renderCategories();
  renderCatalog();
  calculateBanquet();
  startCountdown();
  attachEventListeners();
});

function initTheme() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = saved ? (saved === 'dark') : prefersDark;
  
  document.documentElement.classList.toggle('dark', isDark);
  document.getElementById('theme-icon-sun')?.classList.toggle('hidden', !isDark);
  document.getElementById('theme-icon-moon')?.classList.toggle('hidden', isDark);
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  document.getElementById('theme-icon-sun')?.classList.toggle('hidden', !isDark);
  document.getElementById('theme-icon-moon')?.classList.toggle('hidden', isDark);
}

function attachEventListeners() {
  window.addEventListener('scroll', handleBackToTopScroll);
  document.getElementById('back-to-top-btn')?.addEventListener('click', scrollToTop);
  window.addEventListener('scroll', handleHeaderScroll);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCheckoutModal();
  });

  // Navegación SPA desde los botones del footer
  document.querySelectorAll('.footer-nav-link').forEach(function(button) {
    button.addEventListener('click', function(e) {
      const targetId = e.currentTarget.getAttribute('data-target');
      if (targetId && typeof switchTab === 'function') {
        switchTab(targetId);
      }
    });
  });

  // Copiar número telefónico al portapapeles desde el footer
  const copyPhoneBtn = document.getElementById('footer-copy-phone');
  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', function() {
      if (typeof copyYapeNumber === 'function') {
        copyYapeNumber();
      }
    });
  }
  
  document.getElementById('brand-logo-btn')?.addEventListener('click', () => switchTab('sec-carta'));
  document.getElementById('theme-toggle-btn')?.addEventListener('click', toggleTheme);
  
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetId = e.currentTarget.id.replace('tab-btn-', '');
      if (targetId.startsWith('sec-')) switchTab(targetId);
    });
  });

  document.getElementById('search-input')?.addEventListener('input', onSearchInput);
  document.getElementById('clear-search-btn')?.addEventListener('click', clearSearch);
  document.getElementById('reset-filters-btn')?.addEventListener('click', resetFilters);

  document.getElementById('scroll-cat-prev')?.addEventListener('click', () => scrollCategoryPills(-1));
  document.getElementById('scroll-cat-next')?.addEventListener('click', () => scrollCategoryPills(1));

  // Event Delegation para interacciones de tarjetas y carrito
  document.getElementById('catalog-container')?.addEventListener('click', handleCartActionClick);
  document.getElementById('desktop-sidebar-items-list')?.addEventListener('click', handleCartActionClick);
  document.getElementById('modal-cart-items-list')?.addEventListener('click', handleCartActionClick);

  document.getElementById('budget-range')?.addEventListener('input', (e) => {
    const valEl = document.getElementById('budget-value');
    if (valEl) valEl.textContent = `S/. ${parseFloat(e.target.value).toFixed(2)}`;
  });

  document.querySelectorAll('.hunger-type-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.hunger-type-btn').forEach(b => b.classList.remove('active'));
      const target = e.currentTarget;
      target.classList.add('active');

      const type = target.dataset.type;
      const rangeInput = document.getElementById('budget-range');
      const valEl = document.getElementById('budget-value');

      if (rangeInput) {
        if (type === 'solo') {
          rangeInput.min = "8"; rangeInput.max = "30"; rangeInput.value = "18";
        } else if (type === 'pareja') {
          rangeInput.min = "20"; rangeInput.max = "60"; rangeInput.value = "35";
        } else if (type === 'familiar') {
          rangeInput.min = "40"; rangeInput.max = "120"; rangeInput.value = "65";
        }
        if (valEl) valEl.textContent = `S/. ${parseFloat(rangeInput.value).toFixed(2)}`;
      }
    });
  });

  document.getElementById('roulette-spin-btn')?.addEventListener('click', spinRouletteRecommendation);
  document.getElementById('guests-range')?.addEventListener('input', calculateBanquet);
  document.getElementById('add-banquet-btn')?.addEventListener('click', addBanquetToCart);

  document.querySelectorAll('.btn-copy-coupon').forEach(btn => {
    btn.addEventListener('click', (e) => copyCouponCode(e.currentTarget.dataset.code));
  });

  document.querySelectorAll('.btn-copy-yape-trigger').forEach(btn => {
    btn.addEventListener('click', copyYapeNumber);
  });

  document.querySelectorAll('input[name="dt-service-type"], input[name="mb-service-type"]').forEach(r => {
    r.addEventListener('change', (e) => syncServiceType(e.target.value));
  });

  document.querySelectorAll('input[name="dt-pay-method"], input[name="mb-pay-method"]').forEach(r => {
    r.addEventListener('change', (e) => syncPayMethod(e.target.value));
  });

  ['dt-cust-name', 'mb-cust-name', 'dt-cust-notes', 'mb-cust-notes'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', syncCustData);
  });

  document.getElementById('dt-apply-coupon-btn')?.addEventListener('click', () => applyCouponFromInput('dt'));
  document.getElementById('mb-apply-coupon-btn')?.addEventListener('click', () => applyCouponFromInput('mb'));

  document.getElementById('send-whatsapp-dt-btn')?.addEventListener('click', sendWhatsAppOrder);
  document.getElementById('send-whatsapp-mb-btn')?.addEventListener('click', sendWhatsAppOrder);

  document.getElementById('open-checkout-modal-btn')?.addEventListener('click', openCheckoutModal);
  document.getElementById('close-checkout-modal-btn')?.addEventListener('click', closeCheckoutModal);
  document.getElementById('modal-backdrop')?.addEventListener('click', closeCheckoutModal);

  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => toggleFaq(item));
  });

  document.getElementById('promo-add-btn')?.addEventListener('click', () => addToCart('rec-a'));
}

function handleCartActionClick(e) {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;

  const action = btn.dataset.action;
  const id = btn.dataset.id;
  if (!id) return;

  if (action === 'add') {
    addToCart(id);
  } else if (action === 'increase') {
    updateCartQty(id, 1);
  } else if (action === 'decrease') {
    updateCartQty(id, -1);
  }
}

function checkStoreOpenStatus() {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Lima',
    hour: 'numeric',
    hour12: false
  });
  const peruHours = parseInt(formatter.format(now), 10);
  const isOpen = peruHours >= 11 && peruHours < 22;

  const dtText = document.getElementById('text-desktop');
  const mbText = document.getElementById('text-mobile');

  if (isOpen) {
    if (dtText) dtText.textContent = "ABIERTO";
    if (mbText) mbText.textContent = "ABIERTO (11:00 AM - 10:00 PM)";
  } else {
    if (dtText) dtText.textContent = "CERRADO (Abre 11:00 AM)";
    if (mbText) mbText.textContent = "CERRADO (Abre 11:00 AM)";
  }
}

/* ========================================== */
/* 4. MOTOR DE RENDERIZADO DE MENÚ Y CARDS  */
/* ========================================== */
function switchTab(sectionId) {
  document.querySelectorAll('.spa-section').forEach(sec => sec.classList.add('hidden'));
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active-tab'));

  const targetSec = document.getElementById(sectionId);
  if (targetSec) targetSec.classList.remove('hidden');

  const targetBtn = document.getElementById(`tab-btn-${sectionId}`);
  if (targetBtn) targetBtn.classList.add('active-tab');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderCategories() {
  const container = document.getElementById('category-pills');
  if (!container) return;
  container.innerHTML = CATEGORIES.map(cat => `
    <button 
      class="tab-btn px-3-5 py-1-5 rounded-2xl text-xs flex-shrink-0 cursor-pointer ${cat === selectedCategory ? 'active-tab font-black' : 'glass-card text-slate-700 dark-text-slate-100'}"
      onclick="selectCategory('${cat}')">
      ${cat}
    </button>
  `).join('');
}

function selectCategory(cat) {
  selectedCategory = cat;
  renderCategories();
  renderCatalog();
}

function onSearchInput() {
  const input = document.getElementById('search-input');
  searchQuery = input ? input.value.trim().toLowerCase() : "";
  document.getElementById('clear-search-btn')?.classList.toggle('hidden', searchQuery.length === 0);
  renderCatalog();
}

function clearSearch() {
  const input = document.getElementById('search-input');
  if (input) input.value = "";
  searchQuery = "";
  document.getElementById('clear-search-btn')?.classList.add('hidden');
  renderCatalog();
}

function resetFilters() {
  selectedCategory = "Recomendaciones";
  clearSearch();
  renderCategories();
}

function renderCatalog() {
  const container = document.getElementById('catalog-container');
  const emptyState = document.getElementById('empty-catalog-state');

  if (!container || !emptyState) return;

  const filtered = PRODUCTS.filter(p => 
    (p.category === selectedCategory) && 
    (searchQuery === "" || p.name.toLowerCase().includes(searchQuery))
  );

  if (filtered.length === 0) {
    container.classList.add('hidden');
    emptyState.classList.remove('hidden');
    return;
  }

  container.classList.remove('hidden');
  emptyState.classList.add('hidden');

  // Si la categoría seleccionada es Recomendaciones, renderiza en Grid con Imágenes
  if (selectedCategory === "Recomendaciones") {
    container.innerHTML = `
      <div class="combos-grid">
        ${filtered.map(p => renderComboCard(p)).join('')}
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="space-y-3">
        ${filtered.map(p => (p.category === "Recomendaciones" ? renderComboCard(p) : renderProductCard(p))).join('')}
      </div>
    `;
  }
}

function renderProductCard(p) {
  const item = cart.find(i => i.id === p.id);
  const qty = item ? item.qty : 0;
  return `
    <div class="glass-card rounded-2xl p-4 flex items-center justify-between gap-3 card-hover-effect">
      <div class="flex-1 min-w-0 space-y-1">
        ${p.badge ? `<span class="badge-item-tag inline-block text-micro font-black text-amber px-2 py-0.5 rounded-md bg-amber-soft border-amber-trans mb-1">${p.badge}</span>` : ''}
        <h4 class="text-xs sm-text-sm font-black m-0 leading-snug">${p.name}</h4>
        <p class="text-xs text-slate-500 m-0 leading-relaxed">${p.desc}</p>
      </div>
      <div class="flex items-center gap-2 flex-shrink-0">
        <span class="text-xs sm-text-sm font-black text-crimson dark-text-amber">S/. ${p.price.toFixed(2)}</span>
        ${qty > 0 ? `
          <div class="flex items-center gap-1 bg-slate-soft p-1 rounded-xl border">
            <button data-action="decrease" data-id="${p.id}" class="btn-primary-sm px-2 py-1 cursor-pointer" aria-label="Disminuir cantidad">-</button>
            <span class="text-xs font-black px-1.5">${qty}</span>
            <button data-action="increase" data-id="${p.id}" class="btn-primary-sm px-2 py-1 cursor-pointer" aria-label="Aumentar cantidad">+</button>
          </div>
        ` : `
          <button data-action="add" data-id="${p.id}" class="btn-primary-sm cursor-pointer">+ Agregar</button>
        `}
      </div>
    </div>
  `;
}

function renderComboCard(p) {
  const item = cart.find(i => i.id === p.id);
  const qty = item ? item.qty : 0;
  const imageSrc = p.image || 'img/combos/combo-a.svg';

  return `
    <div class="glass-card rounded-3xl p-3.5 combo-card card-hover-effect">
      <div class="space-y-3">
        <div class="combo-img-wrap">
          ${p.badge ? `<span class="badge-item-tag combo-badge-overlay text-micro font-black text-amber px-2.5 py-1 rounded-lg bg-amber-soft border-amber-trans backdrop-blur-md">${p.badge}</span>` : ''}
          <img 
            src="${imageSrc}" 
            alt="${p.name}" 
            class="combo-img"
            loading="lazy"
            onerror="this.onerror=null; this.src='https://placehold.co/600x600/1e293b/F59E0B?text=CHIFA+FU+LAI';"
          />
        </div>
        <div class="space-y-1">
          <h4 class="text-xs sm-text-sm font-black m-0 leading-snug line-clamp-2">${p.name}</h4>
          <p class="text-xs text-slate-500 m-0 leading-relaxed line-clamp-2">${p.desc}</p>
        </div>
      </div>
      <div class="flex items-center justify-between gap-2 pt-3 mt-3 border-t">
        <span class="text-sm font-black text-crimson dark-text-amber">S/. ${p.price.toFixed(2)}</span>
        ${qty > 0 ? `
          <div class="flex items-center gap-1 bg-slate-soft p-1 rounded-xl border">
            <button data-action="decrease" data-id="${p.id}" class="btn-primary-sm px-2 py-1 cursor-pointer" aria-label="Disminuir cantidad">-</button>
            <span class="text-xs font-black px-1.5">${qty}</span>
            <button data-action="increase" data-id="${p.id}" class="btn-primary-sm px-2 py-1 cursor-pointer" aria-label="Aumentar cantidad">+</button>
          </div>
        ` : `
          <button data-action="add" data-id="${p.id}" class="btn-primary-sm cursor-pointer">+ Agregar</button>
        `}
      </div>
    </div>
  `;
}

/* ========================================== */
/* 5. GESTIÓN DEL CARRITO Y LÓGICA DE PAGO   */
/* ========================================== */
function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...p, qty: 1 });
  
  updateCartUI();
  renderCatalog();
  showToast(`¡${p.name} añadido al pedido!`);
}

function updateCartQty(id, change) {
  const idx = cart.findIndex(i => i.id === id);
  if (idx !== -1) {
    cart[idx].qty += change;
    if (cart[idx].qty <= 0) cart.splice(idx, 1);
  }
  updateCartUI();
  renderCatalog();
}

function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const subtotal = cart.reduce((s, i) => s + (i.price * i.qty), 0);

  const countPill = document.getElementById('cart-pill-count');
  const totalPill = document.getElementById('cart-pill-total');
  if (countPill) countPill.textContent = count;
  if (totalPill) totalPill.textContent = `S/. ${subtotal.toFixed(2)}`;
  
  const bar = document.getElementById('sticky-cart-bar');
  if (bar) {
    if (count > 0) bar.classList.remove('transform-down', 'opacity-0', 'pointer-events-none');
    else bar.classList.add('transform-down', 'opacity-0', 'pointer-events-none');
  }

  const dtCount = document.getElementById('desktop-sidebar-count');
  if (dtCount) dtCount.textContent = `${count} items`;

  const mbCount = document.getElementById('modal-item-count');
  if (mbCount) mbCount.textContent = `${count} items`;

  renderCartLists();
  recalculateTotals();
}

function renderCartLists() {
  const modalList = document.getElementById('modal-cart-items-list');
  const dtList = document.getElementById('desktop-sidebar-items-list');

  if (cart.length === 0) {
    const emptyHtml = `<p class="text-center py-4 text-slate-400 text-xs m-0">Tu carrito está vacío.</p>`;
    if (modalList) modalList.innerHTML = emptyHtml;
    if (dtList) dtList.innerHTML = emptyHtml;
    return;
  }

  const itemsHtml = cart.map(i => `
    <div class="flex items-center justify-between p-2 rounded-xl bg-slate-soft text-xs border">
      <div class="flex-1 truncate pr-2">
        <h4 class="font-bold truncate m-0">${i.name}</h4>
        <span class="text-micro text-slate-400">S/. ${i.price.toFixed(2)} c/u</span>
      </div>
      <div class="flex items-center gap-1 flex-shrink-0">
        <button data-action="decrease" data-id="${i.id}" class="btn-primary-sm px-2 py-0.5 cursor-pointer">-</button>
        <span class="font-black px-1.5">${i.qty}</span>
        <button data-action="increase" data-id="${i.id}" class="btn-primary-sm px-2 py-0.5 cursor-pointer">+</button>
      </div>
      <span class="font-black text-crimson dark-text-amber w-16 text-right flex-shrink-0">S/. ${(i.price * i.qty).toFixed(2)}</span>
    </div>
  `).join('');

  if (modalList) modalList.innerHTML = itemsHtml;
  if (dtList) dtList.innerHTML = itemsHtml;
}

function syncCustData(e) {
  const source = e?.target;
  if (!source) return;

  if (source.id === 'dt-cust-name' || source.id === 'mb-cust-name') {
    custName = source.value;
    document.querySelectorAll('#dt-cust-name, #mb-cust-name').forEach(el => {
      if (el !== source) el.value = custName;
    });
  } else if (source.id === 'dt-cust-notes' || source.id === 'mb-cust-notes') {
    custNotes = source.value;
    document.querySelectorAll('#dt-cust-notes, #mb-cust-notes').forEach(el => {
      if (el !== source) el.value = custNotes;
    });
  }
}

function syncServiceType(type) {
  serviceType = type;

  document.querySelectorAll('input[name="dt-service-type"], input[name="mb-service-type"]').forEach(r => {
    r.checked = (r.value === type);
  });

  const isSala = (type === 'sala');
  
  ['dt-opt-sala-label', 'mb-opt-sala-label'].forEach(id => {
    document.getElementById(id)?.classList.toggle('active', isSala);
  });
  ['dt-opt-llevar-label', 'mb-opt-llevar-label'].forEach(id => {
    document.getElementById(id)?.classList.toggle('active', !isSala);
  });

  recalculateTotals();
}

function syncPayMethod(method) {
  payMethod = method;

  document.querySelectorAll('input[name="dt-pay-method"], input[name="mb-pay-method"]').forEach(r => {
    r.checked = (r.value === method);
  });

  ['dt-pay-yape-label', 'mb-pay-yape-label'].forEach(id => {
    document.getElementById(id)?.classList.toggle('active-yape', method === 'yape');
  });
  ['dt-pay-plin-label', 'mb-pay-plin-label'].forEach(id => {
    document.getElementById(id)?.classList.toggle('active-yape', method === 'plin');
  });
  ['dt-pay-efectivo-label', 'mb-pay-efectivo-label'].forEach(id => {
    document.getElementById(id)?.classList.toggle('active-yape', method === 'efectivo');
  });

  const hideQr = method === 'efectivo';
  document.getElementById('dt-qr-container')?.classList.toggle('hidden', hideQr);
  document.getElementById('mb-qr-container')?.classList.toggle('hidden', hideQr);
}

function applyCouponFromInput(prefix) {
  const input = document.getElementById(`${prefix}-coupon-input`);
  const msgEl = document.getElementById(`${prefix}-coupon-msg`);
  if (!input || !msgEl) return;

  const code = input.value.trim().toUpperCase();
  if (!code) {
    appliedCoupon = null;
    msgEl.classList.add('hidden');
    recalculateTotals();
    showToast("Cupón removido");
    return;
  }

  if (!Object.prototype.hasOwnProperty.call(VALID_COUPONS, code)) {
    msgEl.textContent = "❌ Cupón no válido";
    msgEl.className = "text-micro font-bold text-crimson m-0";
    msgEl.classList.remove('hidden');
    appliedCoupon = null;
    recalculateTotals();
    return;
  }

  const coupon = VALID_COUPONS[code];
  appliedCoupon = { code, ...coupon };
  
  const otherPrefix = prefix === 'dt' ? 'mb' : 'dt';
  const otherInput = document.getElementById(`${otherPrefix}-coupon-input`);
  if (otherInput) otherInput.value = code;

  recalculateTotals();
}

function recalculateTotals() {
  const isTakeaway = serviceType === 'llevar';
  const dishCount = cart.filter(i => i.category !== 'Bebidas' && i.category !== 'Extras').reduce((s, i) => s + i.qty, 0);
  const subtotal = cart.reduce((s, i) => s + (i.price * i.qty), 0);
  
  let discount = 0;
  const dtMsg = document.getElementById('dt-coupon-msg');
  const mbMsg = document.getElementById('mb-coupon-msg');

  if (appliedCoupon) {
    let isValid = true;
    let warningText = "";

    if (appliedCoupon.minSubtotal && subtotal < appliedCoupon.minSubtotal) {
      isValid = false;
      warningText = `⚠️ Requiere mínimo S/. ${appliedCoupon.minSubtotal.toFixed(2)}`;
    } else if (appliedCoupon.minDishes && dishCount < appliedCoupon.minDishes) {
      isValid = false;
      warningText = `⚠️ Requiere mínimo ${appliedCoupon.minDishes} platos`;
    }

    if (isValid) {
      discount = appliedCoupon.value;
      [dtMsg, mbMsg].forEach(msgEl => {
        if (msgEl) {
          msgEl.textContent = `✅ ${appliedCoupon.desc}`;
          msgEl.className = "text-micro font-bold text-emerald-600 dark-text-amber m-0";
          msgEl.classList.remove('hidden');
        }
      });
    } else {
      discount = 0;
      [dtMsg, mbMsg].forEach(msgEl => {
        if (msgEl) {
          msgEl.textContent = warningText;
          msgEl.className = "text-micro font-bold text-amber-600 dark-text-amber m-0";
          msgEl.classList.remove('hidden');
        }
      });
    }
  } else {
    [dtMsg, mbMsg].forEach(msgEl => msgEl?.classList.add('hidden'));
  }

  const envase = isTakeaway ? dishCount * 1.00 : 0;
  const total = Math.max(0, subtotal - discount + envase);

  ['breakdown-subtotal', 'dt-breakdown-subtotal'].forEach(id => {
    const el = document.getElementById(id); if (el) el.textContent = `S/. ${subtotal.toFixed(2)}`;
  });
  
  ['breakdown-discount', 'dt-breakdown-discount'].forEach(id => {
    const el = document.getElementById(id); if (el) el.textContent = `-S/. ${discount.toFixed(2)}`;
  });

  const showDiscount = discount > 0;
  document.getElementById('dt-discount-row')?.classList.toggle('hidden', !showDiscount);
  document.getElementById('mb-discount-row')?.classList.toggle('hidden', !showDiscount);

  ['breakdown-envase', 'dt-breakdown-envase'].forEach(id => {
    const el = document.getElementById(id); if (el) el.textContent = `S/. ${envase.toFixed(2)}`;
  });
  ['breakdown-total', 'dt-breakdown-total'].forEach(id => {
    const el = document.getElementById(id); if (el) el.textContent = `S/. ${total.toFixed(2)}`;
  });
}

function sendWhatsAppOrder() {
  const nameInput = document.getElementById('dt-cust-name')?.value || document.getElementById('mb-cust-name')?.value || "";
  custName = nameInput.trim();

  if (!custName) return showToast("Por favor ingresa tu nombre");
  if (cart.length === 0) return showToast("Agrega al menos un plato");

  if (document.activeElement && typeof document.activeElement.blur === 'function') {
    document.activeElement.blur();
  }

  const isTakeaway = serviceType === 'llevar';
  const dishCount = cart.filter(i => i.category !== 'Bebidas' && i.category !== 'Extras').reduce((s, i) => s + i.qty, 0);
  const subtotal = cart.reduce((s, i) => s + (i.price * i.qty), 0);
  
  let discount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.minSubtotal && subtotal >= appliedCoupon.minSubtotal) discount = appliedCoupon.value;
    else if (appliedCoupon.minDishes && dishCount >= appliedCoupon.minDishes) discount = appliedCoupon.value;
  }

  const envase = isTakeaway ? dishCount * 1.00 : 0;
  const total = Math.max(0, subtotal - discount + envase);

  let msg = `*¡NUEVO PEDIDO - CHIFA FU LAI!* 🍜\n`;
  msg += `👤 *Cliente:* ${custName}\n`;
  msg += `🛵 *Modalidad:* ${isTakeaway ? '🥡 PARA LLEVAR / RECOJO' : '🍽️ EN SALA'}\n`;
  msg += `💳 *Pago:* ${payMethod.toUpperCase()} (Titular: Edwin David T.)\n`;
  if (custNotes) msg += `📝 *Notas:* ${custNotes}\n`;
  msg += `------------------------------------------\n`;
  cart.forEach(i => msg += `• ${i.qty}x ${i.name} - S/. ${(i.price * i.qty).toFixed(2)}\n`);
  msg += `------------------------------------------\n`;
  msg += `📊 *Subtotal:* S/. ${subtotal.toFixed(2)}\n`;
  if (discount > 0) msg += `🎟️ *Descuento (${appliedCoupon.code}):* -S/. ${discount.toFixed(2)}\n`;
  if (isTakeaway) msg += `📦 *Envases (${dishCount} platos):* S/. ${envase.toFixed(2)}\n`;
  msg += `🔥 *TOTAL GENERAL:* S/. ${total.toFixed(2)}\n`;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

  closeCheckoutModal();

  cart = [];
  appliedCoupon = null;
  custNotes = "";
  custName = "";
  
  ['dt-cust-notes', 'mb-cust-notes', 'dt-cust-name', 'mb-cust-name', 'dt-coupon-input', 'mb-coupon-input'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  
  document.getElementById('dt-coupon-msg')?.classList.add('hidden');
  document.getElementById('mb-coupon-msg')?.classList.add('hidden');
  
  updateCartUI();
  renderCatalog();

  window.location.href = whatsappUrl;
}

function openCheckoutModal() {
  if (cart.length === 0) return showToast("El carrito está vacío");
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    document.body.style.overflow = 'hidden';
    modal.classList.remove('opacity-0', 'pointer-events-none');
    const sheet = modal.querySelector('.modal-sheet');
    if (sheet) sheet.style.transform = 'translateY(0)';
  }
}

function closeCheckoutModal() {
  document.body.style.overflow = '';
  
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    const sheet = modal.querySelector('.modal-sheet');
    if (sheet) sheet.style.transform = 'translateY(100%)';
    setTimeout(() => modal.classList.add('opacity-0', 'pointer-events-none'), 200);
  }
}

/* ========================================== */
/* 6. MOTOR DE RECOMENDACIONES Y BANQUETES    */
/* ========================================== */
function spinRouletteRecommendation() {
  const rangeInput = document.getElementById('budget-range');
  const budget = rangeInput ? parseFloat(rangeInput.value) : 18;

  const activeTypeBtn = document.querySelector('.hunger-type-btn.active');
  const hungerType = activeTypeBtn ? activeTypeBtn.dataset.type : 'solo';

  const dishes = PRODUCTS.filter(p => p.category !== 'Bebidas');
  const drinks = PRODUCTS.filter(p => p.category === 'Bebidas');

  let recommendation = null;

  if (hungerType === 'solo') {
    const candidateProducts = PRODUCTS.filter(p => p.price <= budget);
    if (candidateProducts.length > 0) {
      const picked = candidateProducts[Math.floor(Math.random() * candidateProducts.length)];
      recommendation = {
        title: `👤 ${picked.name}`,
        desc: picked.desc,
        price: picked.price,
        items: [picked.id],
        comboName: picked.name
      };
    }
  } 
  else if (hungerType === 'pareja') {
    const validDishes = dishes.filter(d => d.price <= budget);
    const shuffledDishes = [...validDishes].sort(() => Math.random() - 0.5);

    let selectedDishes = [];
    let currentCost = 0;

    for (const d of shuffledDishes) {
      if (currentCost + d.price <= budget && selectedDishes.length < 2) {
        selectedDishes.push(d);
        currentCost += d.price;
      }
    }

    if (selectedDishes.length > 0) {
      const validDrinks = drinks.filter(dr => currentCost + dr.price <= budget);
      let selectedDrink = null;
      if (validDrinks.length > 0) {
        selectedDrink = validDrinks[Math.floor(Math.random() * validDrinks.length)];
        currentCost += selectedDrink.price;
      }

      const itemIds = selectedDishes.map(d => d.id);
      if (selectedDrink) itemIds.push(selectedDrink.id);

      recommendation = {
        title: selectedDrink ? `👥 Pack Pareja Fu Lai + Bebida` : `👥 Menú Pareja Fu Lai`,
        desc: `Incluye: ${selectedDishes.map(d => `1x ${d.name}`).join(', ')}${selectedDrink ? ` y 1x ${selectedDrink.name}` : ''}.`,
        price: currentCost,
        items: itemIds,
        comboName: selectedDrink ? "Pack Pareja Completo Fu Lai" : "Menú Pareja Fu Lai"
      };
    }
  } 
  else if (hungerType === 'familiar') {
    const validDishes = dishes.filter(d => d.price <= budget);
    const shuffledDishes = [...validDishes].sort(() => Math.random() - 0.5);

    let selectedDishes = [];
    let currentCost = 0;

    for (const d of shuffledDishes) {
      if (currentCost + d.price <= budget && selectedDishes.length < 3) {
        selectedDishes.push(d);
        currentCost += d.price;
      }
    }

    if (selectedDishes.length > 0) {
      const validDrinks = drinks.filter(dr => currentCost + dr.price <= budget);
      let selectedDrink = null;
      if (validDrinks.length > 0) {
        selectedDrink = validDrinks[Math.floor(Math.random() * validDrinks.length)];
        currentCost += selectedDrink.price;
      }

      const itemIds = selectedDishes.map(d => d.id);
      if (selectedDrink) itemIds.push(selectedDrink.id);

      recommendation = {
        title: selectedDrink ? `👨‍👩‍👧‍👦 Banquete Taipá Fu Lai (3 Platos + Bebida)` : `👨‍👩‍👧‍👦 Banquete Olla Taipá Fu Lai`,
        desc: `Incluye: ${selectedDishes.map(d => `1x ${d.name}`).join(', ')}${selectedDrink ? ` y 1x ${selectedDrink.name}` : ''}.`,
        price: currentCost,
        items: itemIds,
        comboName: selectedDrink ? "Banquete Taipá Familiar Fu Lai" : "Banquete Olla Taipá Fu Lai"
      };
    }
  }

  if (!recommendation) {
    return showToast("Aumenta un poco tu presupuesto para encontrar opciones disponibles.");
  }

  const spinBtn = document.getElementById('roulette-spin-btn');
  if (spinBtn) {
    spinBtn.disabled = true;
    spinBtn.innerHTML = `<span>🎰 Girando la ruleta Fu Lai...</span>`;
  }

  setTimeout(() => {
    const titleEl = document.getElementById('rec-title');
    const descEl = document.getElementById('rec-desc');
    const priceEl = document.getElementById('rec-price');
    const addBtn = document.getElementById('rec-add-btn');
    const resultCard = document.getElementById('recommendation-result');

    if (titleEl) titleEl.textContent = recommendation.title;
    if (descEl) descEl.textContent = recommendation.desc;
    if (priceEl) priceEl.textContent = `S/. ${recommendation.price.toFixed(2)}`;

    if (addBtn) {
      addBtn.onclick = null;
      addBtn.onclick = () => addMultipleToCart(recommendation.items, recommendation.comboName);
    }

    if (resultCard) {
      resultCard.classList.remove('hidden');
      resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    if (spinBtn) {
      spinBtn.disabled = false;
      spinBtn.innerHTML = `<span>🎲 ¡Sorpréndeme con la Elección Fu Lai!</span>`;
    }
  }, 400);
}

function getBanquetDistribution(guests) {
  const totalMainDishes = Math.max(2, Math.round(guests * 0.8));
  const catalogPool = PRODUCTS.filter(p => p.category !== 'Bebidas');

  const distributionMap = new Map();
  for (let i = 0; i < totalMainDishes; i++) {
    const item = catalogPool[i % catalogPool.length];
    if (distributionMap.has(item.id)) {
      distributionMap.get(item.id).qty += 1;
    } else {
      distributionMap.set(item.id, {
        id: item.id,
        name: item.name,
        qty: 1,
        unitPrice: item.price
      });
    }
  }

  const result = Array.from(distributionMap.values());
  const bebidasQty = Math.max(1, Math.ceil(guests / 4));
  const drink = PRODUCTS.find(p => p.id === 'beb-4') || { id: 'beb-4', name: 'Gaseosa 1 Litro', price: 8.00 };

  result.push({
    id: drink.id,
    name: drink.name,
    qty: bebidasQty,
    unitPrice: drink.price
  });

  return result;
}

function calculateBanquet() {
  const rangeInput = document.getElementById('guests-range');
  const guests = rangeInput ? parseInt(rangeInput.value) : 6;

  const guestsCountEl = document.getElementById('guests-count');
  if (guestsCountEl) guestsCountEl.textContent = `${guests} Personas`;

  const items = getBanquetDistribution(guests);
  let totalCost = 0;

  const listEl = document.getElementById('banquet-items-list');
  const totalEl = document.getElementById('banquet-total-price');

  if (listEl) {
    listEl.innerHTML = items.map(item => {
      const subtotal = item.qty * item.unitPrice;
      totalCost += subtotal;
      return `<li>• <strong>${item.qty}x</strong> ${item.name}</li>`;
    }).join('');
  }

  if (totalEl) totalEl.textContent = `S/. ${totalCost.toFixed(2)}`;
}

function addMultipleItemsToCart(id, qty) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p || qty <= 0) return;
  
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...p, qty: qty });
  }
}

function addBanquetToCart() {
  const rangeInput = document.getElementById('guests-range');
  const guests = rangeInput ? parseInt(rangeInput.value) : 6;

  const items = getBanquetDistribution(guests);

  items.forEach(item => {
    if (item.qty > 0) {
      addMultipleItemsToCart(item.id, item.qty);
    }
  });

  updateCartUI();
  renderCatalog();

  showToast(`¡Banquete Taipá para ${guests} personas agregado al carrito!`);
}

function addMultipleToCart(itemIds, comboName) {
  itemIds.forEach(id => {
    const p = PRODUCTS.find(x => x.id === id);
    if (p) {
      const existing = cart.find(i => i.id === id);
      if (existing) existing.qty++;
      else cart.push({ ...p, qty: 1 });
    }
  });
  updateCartUI();
  renderCatalog();
  showToast(`¡${comboName} añadido al pedido!`);
}

function startCountdown() {
  let seconds = 13512;
  setInterval(() => {
    if (seconds > 0) seconds--;
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    const timerEl = document.getElementById('promo-timer');
    if (timerEl) timerEl.textContent = `${h}:${m}:${s}`;
  }, 1000);
}

/* ========================================== */
/* 7. UTILIDADES (THEME, CLIPBOARD, TOAST)    */
/* ========================================== */
function safeCopyText(text, successMsg) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text)
      .then(() => showToast(successMsg))
      .catch(() => fallbackCopyText(text, successMsg));
  } else {
    fallbackCopyText(text, successMsg);
  }
}

function fallbackCopyText(text, successMsg) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  textArea.style.top = "0";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(successMsg);
  } catch (err) {
    showToast("Error al copiar texto");
  }
  document.body.removeChild(textArea);
}

function copyYapeNumber() {
  safeCopyText("900390458", "¡Número Yape/Plin 900 390 458 (Edwin David T.) copiado!");
}

function copyCouponCode(code) {
  const dtInput = document.getElementById('dt-coupon-input');
  const mbInput = document.getElementById('mb-coupon-input');
  if (dtInput) dtInput.value = code;
  if (mbInput) mbInput.value = code;
  
  applyCouponFromInput('dt');
  safeCopyText(code, `¡Cupón ${code} copiado y aplicado!`);
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  if (toast && toastMsg) {
    toastMsg.textContent = msg;
    toast.classList.remove('opacity-0', 'pointer-events-none');
    setTimeout(() => toast.classList.add('opacity-0', 'pointer-events-none'), 2500);
  }
}

function scrollCategoryPills(direction) {
  document.getElementById('category-pills')?.scrollBy({ left: direction * 180, behavior: 'smooth' });
}

function toggleFaq(item) {
  const answer = item.querySelector('.faq-answer');
  const arrow = item.querySelector('.faq-arrow');
  
  if (!answer) return;

  const isOpen = answer.classList.contains('open');

  document.querySelectorAll('.faq-answer').forEach(ans => ans.classList.remove('open'));
  document.querySelectorAll('.faq-arrow').forEach(arr => arr.classList.remove('rotate'));

  if (!isOpen) {
    answer.classList.add('open');
    if (arrow) arrow.classList.add('rotate');
  }
}

function handleBackToTopScroll() {
  const btn = document.getElementById('back-to-top-btn');
  if (!btn) return;

  if (window.scrollY > 300) {
    btn.classList.remove('hidden');
  } else {
    btn.classList.add('hidden');
  }
}

function handleHeaderScroll() {
  const header = document.getElementById('main-header');
  if (header) {
    if (window.scrollY > 15) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
