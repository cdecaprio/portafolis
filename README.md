# 🌸 Portafolis

Portafolio personal **estático** de Carla, hecho con **Vue 3 + Vite + Tailwind CSS**.
No usa Laravel, base de datos ni backend: es solo para mostrar contenido.

## Requisitos

- Node.js 18 o superior

## Puesta en marcha

```bash
npm install      # instalar dependencias (una sola vez)
npm run dev      # ver en local con recarga automática
npm run build    # generar la versión final en /dist
npm run preview  # previsualizar la versión final
```

## Editar el contenido

Todo el texto, proyectos, habilidades y enlaces están en un único archivo:

📄 **`src/data/portfolio.js`**

- `profile`: nombre, saludo, puesto, texto "Sobre mí" y foto.
- `skills`: las cuatro tarjetas de habilidades.
- `projects`: lista de proyectos (nombre, descripción, etiquetas, imagen y enlace).
- `contact`: email, LinkedIn y GitHub.

### Cambiar la foto

1. Pon tu imagen en `public/images/` (por ejemplo `carla.jpg`).
2. En `src/data/portfolio.js`, cambia `avatar: '/avatar.svg'` por `avatar: '/images/carla.jpg'`.

Mientras tanto se usa un avatar de ejemplo en `public/avatar.svg`.

### Cambiar colores

Los colores son las clases `pink-*` de Tailwind repartidas en los componentes de `src/components/`.
Para cambiar la paleta completa, sustituye `pink` por otro color de Tailwind (por ejemplo `violet`).

## Publicar

La carpeta resultante es `dist/`. Tiene dentro todo lo necesario (HTML, CSS, JS e imágenes).

- **Netlify / Vercel**: conecta el repositorio, build command `npm run build`, publish directory `dist`.
- **GitHub Pages**: sube el contenido de `dist/` a la rama `gh-pages` (o usa una GitHub Action).
- **Cualquier hosting**: copia el contenido de `dist/` por FTP. No necesita PHP ni base de datos.

## Estructura

```
portafolis-static/
├── index.html
├── public/            # archivos que se copian tal cual (avatar, favicon)
├── src/
│   ├── components/    # nav, hero, sobre mí, habilidades, proyectos, contacto, footer
│   ├── data/          # ✏️ todo el contenido editable aquí
│   ├── App.vue
│   ├── main.js
│   └── style.css
└── dist/              # se genera con npm run build (no editar)
```
