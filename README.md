# Swarm Of Hatred

SPA hecha con React + Vite para el sitio oficial de la banda.

## Requisitos

- Node.js 18 o superior
- npm

## Instalar

```bash
npm install
```

## Levantar en local

```bash
npm run dev
```

## Build producción

```bash
npm run build
```

## Deploy en Vercel

1. Sube el proyecto a GitHub.
2. Entra a Vercel.
3. Importa el repositorio.
4. Framework preset: **Vite**.
5. Build command: `npm run build`
6. Output directory: `dist`

## Cosas que deberías editar primero

- `src/data/siteData.js`
- `src/styles/global.css`
- imágenes en `src/assets/`
- textos del bio, discografía y contacto

## Notas

- `vercel.json` fuerza el fallback a `index.html`, útil para SPA.
- Puedes cambiar el embed de Bandcamp por Spotify o YouTube.
