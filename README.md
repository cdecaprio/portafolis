# 🌸 Portafolis

**Web en vivo:** https://cdecaprio.github.io/portafolis/  
**Repositorio:** https://github.com/cdecaprio/portafolis

Portafolio personal **estático** de Carla de Caprio con una estética editorial futurista: fondo oscuro, tipografía protagonista, rejilla sutil y acentos neón rosa/cian.

Hecho con **Vue 3 + Vite + Tailwind CSS**. No usa Laravel, base de datos ni backend: solo muestra contenido.

## Tecnologías

- Vue 3 (Composition API)
- Vite 6
- Tailwind CSS 4
- GitHub Pages + GitHub Actions

## Requisitos

- Node.js 20 o superior

## Puesta en marcha

```bash
npm install      # instalar dependencias (una sola vez)
npm run dev      # ver en local con recarga automática
npm run build    # generar la versión final en dist/
npm run preview  # previsualizar la versión final
```

## Editar el contenido

Todo el texto, los proyectos, las habilidades y los enlaces están en un único archivo:

📄 **`src/data/portfolio.js`**

| Clave | Qué controla |
| --- | --- |
| `profile` | Nombre, saludo, puesto, texto «Sobre mí» y foto |
| `navLinks` | Enlaces del índice superior |
| `skills` | Los cuatro bloques de habilidades |
| `projects` | Los seis proyectos (nombre, descripción, etiquetas, imagen y enlace) |
| `contact` | Email, LinkedIn, GitHub y mensaje de contacto |

### Cambiar la foto

1. Coloca tu imagen en `public/images/` (por ejemplo `carla.jpg`).
2. En `src/data/portfolio.js`, cambia `avatar: './avatar.svg'` por `avatar: './images/carla.jpg'`.

> Usa siempre rutas que empiecen por `./`. Las rutas absolutas como `/avatar.svg` se rompen en GitHub Pages porque la web se sirve dentro de `/portafolis/`.

Mientras tanto se usa el avatar de ejemplo `public/avatar.svg`.

### Cambiar colores

Los acentos están en las clases `pink-*` y `cyan-*` de los componentes en `src/components/`. Para cambiar la paleta, sustituye esos nombres por otro color de Tailwind (por ejemplo `violet` o `emerald`). La fuente se define en `src/style.css` mediante `@theme`.

## Despliegue automático

Cada push a `main` ejecuta `.github/workflows/deploy.yml`, que:

1. Instala dependencias con `npm ci`.
2. Genera `dist/` con `npm run build`.
3. Publica el resultado en GitHub Pages con `actions/deploy-pages`.

No hace falta subir `dist/` a ninguna rama: está en `.gitignore` y se genera en el pipeline. Para publicar cambios, basta con hacer push a `main`.

Si quieres publicar en otro hosting (Netlify, Vercel o FTP), usa:

- **Build command:** `npm run build`
- **Directorio a publicar:** `dist`

`vite.config.js` usa `base: './'` para que los archivos funcionen tanto en la raíz de un dominio como en una subcarpeta.

## Estructura

```
portafolis/
├── .github/workflows/deploy.yml  # deploy automático a GitHub Pages
├── index.html
├── public/                       # avatar y favicon (se copian tal cual)
├── src/
│   ├── components/               # cabecera, hero, secciones, footer
│   ├── data/portfolio.js         # ✏️ TODO el contenido editable aquí
│   ├── App.vue
│   ├── main.js
│   └── style.css                 # fuentes y ajustes globales
└── dist/                         # se genera con npm run build (no editar)
```
