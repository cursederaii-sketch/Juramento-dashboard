# El último Juramento · web promocional

Sitio estático para GitHub Pages: sube estos archivos a un repositorio y en Settings → Pages elige la rama `main` y la carpeta `/ (root)`.

## Pagos

Esta web no cobra por sí misma: cada botón lleva a una página de pago de un servicio. Crea un enlace en cada uno y pégalo en `config.js`:

- **Tarjeta:** Stripe → Payment Links. Define el precio y, en "después del pago", pon la URL de `gracias.html`.
- **PayPal:** botón de pago de PayPal o tu enlace de paypal.me.
- **Mercado Pago:** "Link de pago" desde tu cuenta. Configura la URL de retorno hacia `gracias.html`.
- **Otro:** itch.io, Ko-fi, Gumroad o lo que prefieras.

Los métodos que dejes vacíos no se muestran; si no pones ninguno, los botones salen como "Próximamente". Pon el enlace del juego o del APK en `JUEGO_URL` para que `gracias.html` lo muestre.

Aviso: `gracias.html` es pública; quien conozca su dirección verá el enlace de juego. Para verificar de verdad cada compra hace falta un servidor.

## Pago con alias de Mercado Pago

Si no puedes crear un link de pago, pon tu alias y un contacto en `MP` dentro de `config.js`. La web mostrará los pasos para transferir. Ese pago es manual: revisa en tu app de Mercado Pago que llegó antes de dar el acceso. La web convierte el precio en dólares (`usd`) a pesos con la cotización del día (dolarapi.com) y se lo muestra al comprador. No puede comprobar si el pago llegó ni obligar a pagar ese monto.

## PayPal

El botón alojado de PayPal se carga con `PAYPAL.clientId` y `PAYPAL.botonId` de `config.js`. Ambos datos son públicos. Si PayPal te deja definir una página de retorno, usa la de `gracias.html`.
