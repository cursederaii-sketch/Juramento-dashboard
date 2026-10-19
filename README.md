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

## Entrega del juego

- **PayPal:** configura la página de retorno en `gracias.html`. Allí aparecen los botones de Windows y Android según `JUEGO_WINDOWS` y `JUEGO_ANDROID` en `config.js`.
- **Transferencia de Mercado Pago:** entrega manual. Verifica el pago en tu app y manda el enlace por el contacto de `MP`.
- El `.exe` pesa más de 100 MB y GitHub no lo admite en el repositorio. Súbelo, junto con el `.apk`, a un Release (Releases → Draft a new release → adjuntar archivos) y copia el enlace de cada uno.
- Los botones de `gracias.html` no verifican nada: quien conozca esa dirección verá los enlaces.

## Medir visitas (Cloudflare Web Analytics)

No hace falta tocar el código. En el panel de Cloudflare: Workers & Pages → tu proyecto → Metrics → Web Analytics → Enable. Cloudflare añade el script solo en el siguiente despliegue (hay que volver a subir la web después de activarlo).

Para ver los datos: Analytics & Logs → Web Analytics, y elige tu proyecto. Muestra visitas, páginas vistas, de dónde llegan y qué páginas abren.

Cómo leerlo:
- Visitas a `index.html` = gente que llega a la web.
- Visitas a `gracias.html` = personas que volvieron de PayPal. Es una estimación: esa página es pública y alguien puede abrirla sin haber pagado. Para ventas reales, cuenta los pagos en PayPal y Mercado Pago.
- No mide cuántos reproducen el tráiler ni cuántos pulsan "Conseguir acceso". Para eso haría falta una herramienta con eventos.
