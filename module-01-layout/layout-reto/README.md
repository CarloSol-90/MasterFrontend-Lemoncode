# Última Sesión · Reto de Layout

Plataforma de cine de terror maquetada con HTML, SCSS y CSS. Sin JavaScript: Inicio y Buscar son elementos visuales.

## Abrir y editar

Abre `index.html` con el navegador o Live Server. La fuente Jost se carga desde Google Fonts, con Arial como alternativa sin conexión.

Edita `style.scss` y compila desde la raíz del repositorio:

```sh
npx sass module-01-layout/layout-reto/style.scss module-01-layout/layout-reto/style.css
```

## Diseño

- Fondo `#141414`, texto claro y detalles rojos.
- Logo Lionsgate aportado por el usuario, mostrado en blanco mediante `filter: invert(1)` porque el original es negro con transparencia.
- Cabecera sticky y nombre de la plataforma oculto por debajo de 1280 px.
- Cinco populares en escritorio y tres en pantallas menores, numerados con contadores CSS.
- Ranking con ancho mínimo de 225 px; tarjetas inferiores con 250 px. En pantallas menores se ajustan para evitar desbordamientos.
- Ranking con Flexbox y galerías con CSS Grid, con ampliación al pasar el ratón.
- Carátulas completas con `object-fit: contain`.

Se utilizan cinco carátulas verticales y doce apaisadas, repartidas en dos galerías de seis películas. Cementerio de mascotas y Drácula quedan disponibles como alternativas. Los recursos originales de Warner se conservan, pero no se usan en la página.

Comprobado en Chrome a 250, 320, 390, 768, 1024, 1279, 1280 y 1920 px.
