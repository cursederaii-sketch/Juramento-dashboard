// Pega aquí tus enlaces de pago. Se crean en cada servicio (ver README).
// Nunca pongas claves secretas aquí: este archivo lo ve cualquiera.
var PAGOS={
  tarjeta:"",       // enlace de pago de Stripe (Payment Link)
  paypal:"",        // enlace de PayPal (botón de pago o paypal.me)
  mercadopago:"",   // enlace de pago de Mercado Pago
  otro:{nombre:"",url:""} // por ejemplo itch.io, Ko-fi, Gumroad...
};
// A dónde va el jugador después de pagar (enlace del juego o del APK).
var JUEGO_URL="";

// Pago con alias de Mercado Pago (si no tienes link de pago).
// Si pones aquí tu alias, la web muestra las instrucciones para transferir.
var MP={
  alias:"gabriel159.mp2",        // tu alias de Mercado Pago
  usd:1.21,        // precio en dólares; la web lo convierte a pesos con el cambio del día
  cotizacion:"oficial", // "oficial", "blue", "bolsa" (MEP), "tarjeta"...
  montoRespaldo:"",     // opcional: monto fijo en pesos si no carga la cotización
  contacto:{texto:"11 2606 3401 (WhatsApp)",url:"https://wa.me/5491126063401"} // dónde te mandan el comprobante (Discord, correo, Instagram...)
};

// Botón alojado de PayPal (los dos datos son públicos, no son claves secretas).
var PAYPAL={
  clientId:"BAAhza50yiD2iUUOvKbXawT31KYs-DOXiRgIw-ByluBINRQeyzcNowcpsbUwQjVv6sqqNVSPQvEWf22FiM",
  botonId:"24R9MKAAB8VLY"
};
