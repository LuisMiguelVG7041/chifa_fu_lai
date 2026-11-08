/* ====================================================================
   PROYECTO: CHIFA FU LAI - CARTA DIGITAL & SISTEMA DE PEDIDOS
   ARCHIVO: script.js (Lógica JavaScript ES6+ - SPA)
   VERSIÓN: 2.0.0 (Edición Chifa Fu Lai 100% Completa)
   AUTOR: Chifa Fu Lai - Equipo de Desarrollo Web
   UBICACIÓN: Av. El Sol 456, Centro Histórico, Cusco, Perú
   DESCRIPCIÓN: Controlador principal Single Page Application (SPA).
                Incluye gestión de carrito bimodal (sala/llevar), recargo
                de envases, motor de búsqueda en tiempo real, validación de
                cupones, ruleta interactiva de recomendaciones, calculadora
                de banquetes, control de horario y generador de pedidos por WhatsApp.
   ==================================================================== */

/* ========================================== */
/* 1. CONSTANTES Y BASE DE DATOS COMPLETA    */
/* ========================================== */
const WHATSAPP_NUMBER = "51900390458";

const CATEGORIES = [
  "Todos", 
  "Combos", 
  "Chaufa Verduras", 
  "Chaufa Especial", 
  "Saltados & Milanesas", 
  "Chaufas", 
  "Aeropuertos", 
  "Tallarines", 
  "Combinados", 
  "Bebidas", 
  "Extras"
];

const SECTION_TITLES = {
  "Combos": "🔥 Combos Especiales Fu Lai (S/. 14.00 - S/. 16.00)",
  "Chaufa Verduras": "🥬 Combinados Chaufa de Verduras (S/. 18.00)",
  "Chaufa Especial": "⭐ Combinados Chaufa Especial (S/. 20.00)",
  "Saltados & Milanesas": "🍳 Saltados, Bisteck & Milanesas (S/. 14.00 - S/. 18.00)",
  "Chaufas": "🍚 Chaufas Tradicionales al Wok (S/. 8.00 - S/. 15.00)",
  "Aeropuertos": "✈️ Aeropuertos al Wok (S/. 12.00 - S/. 15.00)",
  "Tallarines": "🍜 Tallarines Saltados (S/. 13.00 - S/. 16.00)",
  "Combinados": "🥢 Combinados Simples (S/. 13.50 - S/. 18.00)",
  "Bebidas": "🥤 Bebidas & Refrescos",
  "Extras": "➕ Extras & Porciones"
};

const PRODUCTS = [
  /* COMBOS */
  { id: "combo-a", name: "Combo A: Chaufa c/ Lomo Saltado + Tortilla de Pollo", category: "Combos", price: 16.00, badge: "El Más Pedido 🔥", desc: "Chaufa especial con Lomo Saltado jugoso y Tortilla de Pollo.", image: "img/combos/combo-a.jpg" },
  { id: "combo-b", name: "Combo B: Chaufa c/ Tallarín Saltado de Pollo + Tortilla", category: "Combos", price: 16.00, desc: "Chaufa, Tallarín saltado de pollo y Tortilla de Pollo.", image: "img/combos/combo-b.jpg" },
  { id: "combo-c", name: "Combo C: Chaufa + Milanesa de pollo + huevo + Plátano", category: "Combos", price: 16.00, badge: "Favorito Fu Lai", desc: "Chaufa abundante con milanesa, huevo frito y plátano frito.", image: "img/combos/combo-c.jpg" },
  { id: "combo-d", name: "Combo D: Chaufa + Papas fritas + Tortilla de Pollo", category: "Combos", price: 14.00, desc: "Chaufa con papas fritas doradas y tortilla de pollo.", image: "img/combos/combo-d.jpg" },
  { id: "combo-e", name: "Combo E: Chaufa con Pollo + Bisteck Montado", category: "Combos", price: 16.00, desc: "Chaufa con pollo coronado con bisteck a la plancha.", image: "img/combos/combo-e.jpg" },
  { id: "combo-f", name: "Combo F: Chaufa + papas fritas + Tortilla de verduras y pollo", category: "Combos", price: 15.00, desc: "Chaufa, papitas fritas y tortilla salteada con verduras y pollo.", image: "img/combos/combo-f.jpg" },
  { id: "combo-g", name: "Combo G: Chaufa + filete de pollo montado + encebollado", category: "Combos", price: 16.00, desc: "Chaufa acompañado de filete de pollo montado y encebollado.", image: "img/combos/combo-g.jpg" },
  { id: "combo-h", name: "Combo H: Chaufa + Milanesa de carne + huevo + Plátano", category: "Combos", price: 16.00, desc: "Chaufa con milanesa de carne, huevo frito y plátano frito.", image: "img/combos/combo-h.jpg" },
  { id: "combo-i", name: "Combo I: Chaufa + papas fritas + bisteck a lo pobre", category: "Combos", price: 16.00, badge: "Taipá 🔥", desc: "Chaufa con papas fritas, bisteck, 2 plátanos y 1 salchicha.", image: "img/combos/combo-i.jpg" },
  
  /* CHAUFA VERDURAS */
  { id: "cv-1", name: "Chaufa de Verduras con Lomo Saltado", category: "Chaufa Verduras", price: 18.00, desc: "Chaufa de verduras acompañado con Lomo Saltado." },
  { id: "cv-2", name: "Chaufa de Verduras con Saltado de Pollo", category: "Chaufa Verduras", price: 18.00, desc: "Chaufa salteado con verduras y tiras de pollo." },
  { id: "cv-3", name: "Chaufa de Verduras con Tortilla de Pollo", category: "Chaufa Verduras", price: 18.00, desc: "Chaufa de verduras acompañado con tortilla de pollo." },
  { id: "cv-4", name: "Chaufa de Verduras con Tortilla de Carne", category: "Chaufa Verduras", price: 18.00, desc: "Chaufa de verduras con tortilla de carne." },
  { id: "cv-5", name: "Chaufa de Verduras con Bisteck Montado", category: "Chaufa Verduras", price: 18.00, desc: "Chaufa de verduras con bisteck a la plancha montado." },
  { id: "cv-6", name: "Chaufa de Verduras con Milanesa de Pollo", category: "Chaufa Verduras", price: 18.00, desc: "Chaufa de verduras con milanesa de pollo crujiente." },
  { id: "cv-7", name: "Chaufa de Verduras con Filete de Pollo Montado", category: "Chaufa Verduras", price: 18.00, desc: "Chaufa de verduras con filete de pollo montado." },
  { id: "cv-8", name: "Chaufa de Verduras con Pollo a la Plancha", category: "Chaufa Verduras", price: 18.00, desc: "Chaufa de verduras con pechuga de pollo a la plancha." },

  /* CHAUFA ESPECIAL */
  { id: "ce-1", name: "Chaufa Especial con Lomo Saltado", category: "Chaufa Especial", price: 20.00, badge: "Premium ⭐", desc: "Chaufa especial gourmet con Lomo Saltado fino." },
  { id: "ce-2", name: "Chaufa Especial con Saltado de Pollo", category: "Chaufa Especial", price: 20.00, desc: "Chaufa especial salteado con tiras de pollo jugoso." },
  { id: "ce-3", name: "Chaufa Especial con Tortilla de Pollo", category: "Chaufa Especial", price: 20.00, desc: "Chaufa especial acompañado de tortilla de pollo." },
  { id: "ce-4", name: "Chaufa Especial con Tortilla de Carne", category: "Chaufa Especial", price: 20.00, desc: "Chaufa especial acompañado de tortilla de carne." },
  { id: "ce-5", name: "Chaufa Especial con Bisteck Montado", category: "Chaufa Especial", price: 20.00, desc: "Chaufa especial servido con bisteck montado." },
  { id: "ce-6", name: "Chaufa Especial con Milanesa de Pollo", category: "Chaufa Especial", price: 20.00, desc: "Chaufa especial servido con milanesa de pollo." },
  { id: "ce-7", name: "Chaufa Especial con Filete de Pollo Montado", category: "Chaufa Especial", price: 20.00, desc: "Chaufa especial servido con filete de pollo montado." },
  { id: "ce-8", name: "Chaufa Especial con Pollo a la Plancha", category: "Chaufa Especial", price: 20.00, desc: "Chaufa especial servido con pechuga a la plancha." },

  /* SALTADOS - BISTECK - MILANESAS */
  { id: "sm-1", name: "Chaufa con Milanesa de Pollo", category: "Saltados & Milanesas", price: 15.00, desc: "Milanesa de pollo dorada acompañada de arroz chaufa." },
  { id: "sm-2", name: "Chaufa con Milanesa de Pollo + Huevo", category: "Saltados & Milanesas", price: 16.00, desc: "Milanesa de pollo con huevo frito y chaufa." },
  { id: "sm-3", name: "Chaufa con Milanesa de Carne", category: "Saltados & Milanesas", price: 16.00, desc: "Milanesa de carne dorada con chaufa." },
  { id: "sm-4", name: "Chaufa con Milanesa de Pollo a lo Pobre", category: "Saltados & Milanesas", price: 17.00, desc: "Milanesa de pollo, papas fritas, huevo y plátano con chaufa." },
  { id: "sm-5", name: "Chaufa con Milanesa de Carne a lo Pobre", category: "Saltados & Milanesas", price: 17.00, desc: "Milanesa de carne, papas fritas, huevo y plátano con chaufa." },
  { id: "sm-6", name: "Chaufa con Bisteck a lo Pobre", category: "Saltados & Milanesas", price: 16.00, desc: "Bisteck a la plancha con huevo, plátano y arroz chaufa." },
  { id: "sm-7", name: "Chaufa con Filete a lo Pobre", category: "Saltados & Milanesas", price: 16.00, desc: "Filete de pollo con huevo, plátano y arroz chaufa." },
  { id: "sm-8", name: "Chaufa con Bisteck Montado", category: "Saltados & Milanesas", price: 14.50, desc: "Bisteck a la plancha sobre chaufa caliente." },
  { id: "sm-9", name: "Bisteck Montado Encebollado", category: "Saltados & Milanesas", price: 15.00, desc: "Bisteck jugoso con salteado de cebollas y tomates." },
  { id: "sm-10", name: "Chaufa con Filete de Pollo Montado", category: "Saltados & Milanesas", price: 14.50, desc: "Filete de pollo a la plancha con chaufa." },
  { id: "sm-11", name: "Chaufa con Pollo a la Plancha", category: "Saltados & Milanesas", price: 14.00, desc: "Pollo a la plancha sazonado al wok con chaufa." },
  { id: "sm-12", name: "Chaufa con Chicharrón de Pollo", category: "Saltados & Milanesas", price: 18.00, badge: "Recomendado 💡", desc: "Trozos crocantes de chicharrón de pollo con chaufa." },
  { id: "sm-13", name: "Lomo Saltado a lo Pobre", category: "Saltados & Milanesas", price: 16.00, desc: "Lomo saltado tradicional servido con huevo y plátano frito." },
  { id: "sm-14", name: "Saltado de Pollo a lo Pobre", category: "Saltados & Milanesas", price: 16.00, desc: "Pollo saltado al wok servido con huevo y plátano frito." },
  { id: "sm-15", name: "Saltado de Verduras con Carne", category: "Saltados & Milanesas", price: 15.00, desc: "Verduras chinas salteadas con tiras de carne." },
  { id: "sm-16", name: "Saltado de Verduras con Pollo", category: "Saltados & Milanesas", price: 15.00, desc: "Verduras salteadas al wok con tiras de pollo." },
  { id: "sm-17", name: "Saltado de Verduras con Pollo y Champiñones", category: "Saltados & Milanesas", price: 16.00, desc: "Verduras, pollo y champiñones frescos al wok." },
  { id: "sm-18", name: "Saltado de Verduras con Carne y Pollo", category: "Saltados & Milanesas", price: 16.00, desc: "Mezcla de carnes salteadas con verduras de estación." },
  { id: "sm-19", name: "Pollo con Verduras (Guiso)", category: "Saltados & Milanesas", price: 15.00, desc: "Guiso estilo chifa de pollo con verduras al wok." },
  { id: "sm-20", name: "Carne con Verduras (Guiso)", category: "Saltados & Milanesas", price: 15.00, desc: "Guiso estilo chifa de carne suave con verduras." },
  { id: "sm-21", name: "Champiñones con Verduras (Guiso)", category: "Saltados & Milanesas", price: 15.00, desc: "Guiso vegetariano de champiñones salteados." },
  { id: "sm-22", name: "Taypa 'Fu Lai' (Guiso Especial)", category: "Saltados & Milanesas", price: 17.00, badge: "Especial Fu Lai ⭐", desc: "Guiso estrella con mixtura de carnes y verduras al wok." },

  /* CHAUFAS */
  { id: "ch-1", name: "Chaufa con Carne", category: "Chaufas", price: 10.00, desc: "Chaufa clásico salteado con carne de res." },
  { id: "ch-2", name: "Chaufa con Pollo", category: "Chaufas", price: 10.00, desc: "Chaufa tradicional salteado con tiras de pollo." },
  { id: "ch-3", name: "Chaufa con Salchicha y Papas Fritas", category: "Chaufas", price: 8.00, badge: "Económico 💡", desc: "Chaufa popular con salchichas y papitas fritas." },
  { id: "ch-4", name: "Chaufa con Pollo y Carne", category: "Chaufas", price: 13.00, desc: "Chaufa combinado de pollo y carne de res." },
  { id: "ch-5", name: "Chaufa con Verduras", category: "Chaufas", price: 12.00, desc: "Chaufa ligero preparado con verduras frescas al wok." },
  { id: "ch-6", name: "Chaufa Especial (Pollo/Carne/Champiñones)", category: "Chaufas", price: 15.00, badge: "Taipá", desc: "Mezcla de pollo, carne y champiñones al wok." },
  { id: "ch-7", name: "Chaufa con Champiñones", category: "Chaufas", price: 12.00, desc: "Chaufa especial preparado con champiñones fritos." },
  { id: "ch-8", name: "Chaufa con Champiñones, Verduras y Carne", category: "Chaufas", price: 15.00, desc: "Chaufa completo de champiñones, verduras y carne." },
  { id: "ch-9", name: "Chaufa con Verduras, Champiñones y Pollo", category: "Chaufas", price: 15.00, desc: "Chaufa abundante de verduras, champiñones y pollo." },
  { id: "ch-10", name: "Chaufa con Verduras y Champiñones", category: "Chaufas", price: 13.00, desc: "Chaufa salteado con mezcla de verduras y champiñones." },
  { id: "ch-11", name: "Chaufa con Pollo y Champiñones", category: "Chaufas", price: 13.00, desc: "Chaufa con tiras de pollo y champiñones al wok." },
  { id: "ch-12", name: "Chaufa con Carne y Champiñones", category: "Chaufas", price: 13.00, desc: "Chaufa salteado con carne y champiñones frescos." },

  /* AEROPUERTOS */
  { id: "aero-1", name: "Aeropuerto con Champiñones", category: "Aeropuertos", price: 12.00, desc: "Chaufa + Tallarín salteados con champiñones." },
  { id: "aero-2", name: "Aeropuerto con Pollo", category: "Aeropuertos", price: 12.00, desc: "Chaufa + Tallarín salteados con tiras de pollo." },
  { id: "aero-3", name: "Aeropuerto con Carne", category: "Aeropuertos", price: 12.00, desc: "Chaufa + Tallarín salteados con carne de res." },
  { id: "aero-4", name: "Aeropuerto Especial (Pollo/Carne/Champiñones)", category: "Aeropuertos", price: 15.00, badge: "Taipá ⭐", desc: "Chaufa + Tallarín + pollo, carne y champiñones." },

  /* TALLARINES */
  { id: "tal-1", name: "Tallarín Saltado con Carne", category: "Tallarines", price: 13.00, desc: "Tallarines salteados con tiras de carne y verduras." },
  { id: "tal-2", name: "Tallarín Saltado con Pollo", category: "Tallarines", price: 13.00, desc: "Tallarines salteados con pollo jugoso y verduras." },
  { id: "tal-3", name: "Tallarín Saltado Especial", category: "Tallarines", price: 15.00, desc: "Tallarines salteados con mixtura de carnes y verduras." },
  { id: "tal-4", name: "Tallarín Saltado con Verduras y Champiñones", category: "Tallarines", price: 14.00, desc: "Tallarines salteados con selección de verduras y champiñones." },
  { id: "tal-5", name: "Tallarín Saltado con Champiñones", category: "Tallarines", price: 13.00, desc: "Tallarines fritos con champiñones al wok." },
  { id: "tal-6", name: "Tallarín Saltado con Champiñones y Pollo", category: "Tallarines", price: 14.00, desc: "Tallarines con pechuga de pollo y champiñones." },
  { id: "tal-7", name: "Tallarín Saltado con Pollo, Verduras y Champiñones", category: "Tallarines", price: 15.00, desc: "Tallarín completo con pollo, champiñones y verduras." },
  { id: "tal-8", name: "Tallarín Saltado con Pollo y Verduras", category: "Tallarines", price: 14.00, desc: "Tallarines tradicionales de pollo y verduras." },
  { id: "tal-9", name: "Tallarín Saltado con Carne y Verduras", category: "Tallarines", price: 14.00, desc: "Tallarines al wok con carne y verduras de estación." },
  { id: "tal-10", name: "Tallarín Saltado con Champiñones y Carne", category: "Tallarines", price: 14.00, desc: "Tallarines salteados con champiñones y trozos de carne." },
  { id: "tal-11", name: "Tallarín Saltado 'Fu Lai'", category: "Tallarines", price: 16.00, badge: "Especial ⭐", desc: "Tallarín especial con carnes mixtas y sazón de la casa." },

  /* COMBINADOS */
  { id: "comb-1", name: "Chaufa con Lomo Saltado", category: "Combinados", price: 13.50, desc: "Chaufa combinado con Lomo Saltado jugoso." },
  { id: "comb-2", name: "Chaufa con Lomo Saltado + Huevo", category: "Combinados", price: 14.50, desc: "Chaufa combinado con Lomo Saltado y huevo frito." },
  { id: "comb-3", name: "Chaufa con Saltado de Pollo", category: "Combinados", price: 13.50, desc: "Chaufa servido con saltado de pollo." },
  { id: "comb-4", name: "Chaufa con Saltado de Pollo + Huevo", category: "Combinados", price: 14.50, desc: "Chaufa con saltado de pollo y huevo frito." },
  { id: "comb-5", name: "Chaufa con Lomo Saltado + Tallarín Saltado con Pollo", category: "Combinados", price: 18.00, badge: "Dúo Furia 🔥", desc: "Trío potente: Chaufa, Lomo Saltado y Tallarín de Pollo." },
  { id: "comb-6", name: "Chaufa con Saltado de Pollo + Tallarín Saltado con Carne", category: "Combinados", price: 18.00, desc: "Combinación de Chaufa, Saltado de Pollo y Tallarín de Carne." },
  { id: "comb-7", name: "Chaufa con Tallarín Saltado de Carne", category: "Combinados", price: 13.50, desc: "Clásico dúo de Chaufa con Tallarín de Carne." },
  { id: "comb-8", name: "Chaufa con Tallarín Saltado de Pollo", category: "Combinados", price: 13.50, desc: "Dúo popular de Chaufa con Tallarín de Pollo." },
  { id: "comb-9", name: "Chaufa con Tallarín Saltado de Champiñones", category: "Combinados", price: 13.50, desc: "Chaufa servido con Tallarín de Champiñones." },
  { id: "comb-10", name: "Chaufa con Tallarín Saltado de Pollo y Verduras", category: "Combinados", price: 14.50, desc: "Chaufa con Tallarín de pollo salteado con verduras." },
  { id: "comb-11", name: "Chaufa con Tallarín Saltado de Pollo y Champiñones", category: "Combinados", price: 14.50, desc: "Chaufa con Tallarín de pollo y champiñones." },
  { id: "comb-12", name: "Chaufa con Tortilla de Pollo", category: "Combinados", price: 13.50, desc: "Chaufa caliente con jugosa tortilla de pollo." },
  { id: "comb-13", name: "Chaufa con Tortilla de Carne", category: "Combinados", price: 13.50, desc: "Chaufa servido con tortilla de carne picada." },
  { id: "comb-14", name: "Chaufa con Tortilla de Salchicha", category: "Combinados", price: 13.50, desc: "Chaufa servido con tortilla frita de salchicha." },
  { id: "comb-15", name: "Chaufa con Tortilla Especial", category: "Combinados", price: 15.00, desc: "Chaufa con tortilla especial de carnes mixtas." },
  { id: "comb-16", name: "Chaufa con Tortilla de Verduras", category: "Combinados", price: 13.50, desc: "Chaufa servido con tortilla salteada de verduras." },
  { id: "comb-17", name: "Chaufa con Tortilla de Verduras y Pollo", category: "Combinados", price: 14.50, desc: "Chaufa con tortilla de verduras mixtas y pollo." },
  { id: "comb-18", name: "Chaufa con Tortilla de Verduras con Carne", category: "Combinados", price: 14.50, desc: "Chaufa con tortilla de verduras mixtas y carne." },
  { id: "comb-19", name: "Chaufa con Tortilla de Champiñones", category: "Combinados", price: 13.50, desc: "Chaufa servido con tortilla de champiñones." },
  { id: "comb-20", name: "Chaufa con Tortilla de Champiñones y Pollo", category: "Combinados", price: 14.50, desc: "Chaufa con tortilla de champiñones frescos y pollo." },
  { id: "comb-21", name: "Chaufa con Tortilla de Champiñones y Verduras", category: "Combinados", price: 14.50, desc: "Chaufa con tortilla de champiñones y verduras." },
  { id: "comb-22", name: "Chaufa con Tortilla de Champiñones y Carne", category: "Combinados", price: 14.50, desc: "Chaufa con tortilla de champiñones y tiras de carne." },
  { id: "comb-23", name: "Chaufa con Tortilla de Champiñones, Pollo y Verduras", category: "Combinados", price: 15.00, desc: "Chaufa con tortilla completa de champiñones, pollo y verduras." },
  { id: "comb-24", name: "Chaufa con Tortilla 'Fu Lai'", category: "Combinados", price: 16.00, badge: "Especial ⭐", desc: "Chaufa con la tortilla especial completa de la casa." },

  /* BEBIDAS & EXTRAS */
  { id: "beb-1", name: "Coca Cola / Inka Kola 1 Litro", category: "Bebidas", price: 8.00, desc: "Gaseosa helada de 1 Litro ideal para compartir." },
  { id: "ext-1", name: "Porción de Plátano", category: "Extras", price: 3.00, desc: "Porción de plátanos fritos doraditos." },
  { id: "ext-2", name: "01 Huevo Adicional", category: "Extras", price: 2.00, desc: "Huevo frito adicional montado." },
  { id: "ext-3", name: "Porción de Arroz Chaufa", category: "Extras", price: 3.00, desc: "Porción extra de arroz chaufa frito al wok." }
];

const VALID_COUPONS = {
  "FULAI10": { type: "fixed", value: 2.00, minSubtotal: 30.00, desc: "S/. 2.00 de descuento (Min. S/. 30.00)" },
  "FULAIVIP": { type: "fixed", value: 3.00, minDishes: 3, desc: "S/. 3.00 de descuento por 3+ platos" }
};

/* ========================================== */
/* 2. ESTADO GLOBAL DE LA APLICACIÓN         */
/* ========================================== */
let cart = [];
let selectedCategory = "Todos";
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

  document.getElementById('promo-add-btn')?.addEventListener('click', () => addToCart('combo-a'));
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
  selectedCategory = "Todos";
  clearSearch();
  renderCategories();
}

function renderCatalog() {
  const container = document.getElementById('catalog-container');
  const emptyState = document.getElementById('empty-catalog-state');

  if (!container || !emptyState) return;

  const filtered = PRODUCTS.filter(p => 
    (selectedCategory === "Todos" || p.category === selectedCategory) && 
    (searchQuery === "" || p.name.toLowerCase().includes(searchQuery))
  );

  if (filtered.length === 0) {
    container.classList.add('hidden');
    emptyState.classList.remove('hidden');
    return;
  }

  container.classList.remove('hidden');
  emptyState.classList.add('hidden');

  if (selectedCategory === "Todos" && searchQuery === "") {
    const grouped = {};
    filtered.forEach(p => {
      if (!grouped[p.category]) grouped[p.category] = [];
      grouped[p.category].push(p);
    });

    let html = '';
    for (const cat in grouped) {
      const title = SECTION_TITLES[cat] || cat;
      const isCombosSection = (cat === "Combos");

      html += `
        <div class="space-y-3">
          <h3 class="text-xs font-black uppercase tracking-wider text-amber-gold border-b pb-1.5">${title}</h3>
          ${isCombosSection ? `
            <div class="combos-grid">
              ${grouped[cat].map(p => renderComboCard(p)).join('')}
            </div>
          ` : `
            <div class="space-y-3">
              ${grouped[cat].map(p => renderProductCard(p)).join('')}
            </div>
          `}
        </div>
      `;
    }
    container.innerHTML = html;
  } else {
    if (selectedCategory === "Combos") {
      container.innerHTML = `
        <div class="combos-grid">
          ${filtered.map(p => renderComboCard(p)).join('')}
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="space-y-3">
          ${filtered.map(p => (p.category === "Combos" ? renderComboCard(p) : renderProductCard(p))).join('')}
        </div>
      `;
    }
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
  const imageSrc = p.image || 'img/combos/combo-a.jpg';

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
  msg += `💳 *Pago:* ${payMethod.toUpperCase()} (Titular: David Reyes)\n`;
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

  // Reset del estado completo tras la orden
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

  // Redirección directa para preservar el User Gesture Context en navegadores móviles
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

  const dishes = PRODUCTS.filter(p => p.category !== 'Bebidas' && p.category !== 'Extras');
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
  const catalogPool = PRODUCTS.filter(p => p.category !== 'Bebidas' && p.category !== 'Extras');

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
  const drink = PRODUCTS.find(p => p.id === 'beb-1') || { id: 'beb-1', name: 'Gaseosa Coca Cola / Inka Kola 1 Litro', price: 8.00 };

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
  safeCopyText("900390458", "¡Número Yape/Plin 900 390 458 (David Reyes) copiado!");
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
