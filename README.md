# Swarm Of Hatred

Sitio oficial de **Swarm Of Hatred**, banda chilena de black metal. Es una SPA estatica creada para concentrar la presentacion de la banda, su musica, discografia, canales sociales y datos de contacto en una sola pagina.

No hay backend, autenticacion, base de datos ni formulario que procese informacion: el contenido se publica desde el codigo fuente y los enlaces llevan a servicios externos.

## Que muestra el sitio

- **Portada:** nombre de la banda, genero, procedencia, descripcion, accesos a musica y contacto, y redes sociales.
- **About:** biografia, declaracion artistica e integrantes.
- **Music:** reproductor embebido de Spotify para el perfil de artista.
- **Discography:** lanzamientos con portada, ano, formato y descripcion. Se presentan del mas reciente al mas antiguo en un carrusel horizontal que admite arrastre con mouse y desplazamiento nativo en pantallas tactiles.
- **Contact:** enlace `mailto:` para booking, prensa y consultas, junto con las redes sociales.
- **Pie de pagina:** aviso de derechos con el ano calculado automaticamente.

La navegacion superior usa anclas internas y desplazamiento suave. El diseno es oscuro, responsive y mantiene la cabecera visible al desplazarse.

## Estado de las secciones

| Seccion | Estado | Fuente de contenido |
| --- | --- | --- |
| Portada | Visible | `bandData` y `Hero.jsx` |
| About | Visible | `About.jsx` |
| Musica | Visible | `bandData.musicEmbed` |
| Discografia | Visible | `releases` |
| Fechas en vivo | Preparada, no publicada | `liveDates` y `Live.jsx` |
| Contacto | Visible | `bandData.contactEmail` y `bandData.socials` |

`Live.jsx` y el arreglo `liveDates` estan implementados, pero `App.jsx` no monta la seccion y la opcion correspondiente esta comentada en `Navbar.jsx`. Para hacer visibles las fechas, hay que renderizar `<Live />` en `App.jsx` y habilitar su enlace de navegacion.

## Stack tecnico

- React 18
- Vite 5
- React DOM
- CSS global sin bibliotecas de componentes
- Spotify Embed para la reproduccion de musica
- Vercel configurado para alojar la SPA

## Requisitos

- Node.js 18 o superior
- npm

## Ejecucion local

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrara en la terminal la URL local para abrir el sitio.

## Scripts disponibles

| Comando | Funcion |
| --- | --- |
| `npm run dev` | Inicia Vite en modo desarrollo con recarga en caliente. |
| `npm run build` | Genera la version optimizada en `dist/`. |
| `npm run preview` | Sirve localmente el ultimo build de produccion. |

## Estructura del proyecto

```text
.
|- public/
|  |- assets/             # Foto de banda y portadas servidas sin procesar
|  |- calaca-swarm.png    # Ilustracion del hero
|  |- favicon.png         # Recurso favicon disponible
|  `- og-image.jpg        # Imagen para compartir en redes
|- src/
|  |- assets/             # Fondo y recursos de desarrollo del hero
|  |- components/         # Navbar, Footer, SectionTitle y SocialLinks
|  |- data/siteData.js    # Datos centralizados de banda, discos y shows
|  |- sections/           # Bloques de contenido de la pagina
|  |- styles/global.css   # Estilos, layout y media queries
|  |- App.jsx             # Orden y secciones publicadas de la SPA
|  `- main.jsx            # Punto de entrada React
|- index.html             # Metadatos SEO/OG, fuentes y raiz de la app
|- vercel.json            # Fallback de rutas al index de la SPA
`- package.json           # Dependencias y scripts
```

## Gestion de contenido

### Datos centralizados

El archivo `src/data/siteData.js` concentra los datos que conviene actualizar periodicamente:

- `bandData.name`, `tagline`, `location` y `description`: identidad y texto de portada.
- `bandData.socials`: URLs de Instagram, Facebook, YouTube, Spotify y Bandcamp. `SocialLinks.jsx` las recorre automaticamente, por lo que aparecen tanto en la portada como en contacto.
- `bandData.musicEmbed`: URL del `iframe` de Spotify.
- `bandData.contactEmail`: correo que usa el enlace de contacto.
- `releases`: catalogo de la discografia.
- `liveDates`: eventos futuros para la seccion Live cuando se habilite.

Cada lanzamiento de `releases` usa esta forma:

```js
{
  title: 'Nombre del lanzamiento',
  year: '2026',
  format: 'LP',
  cover: '/assets/portada.jpg',
  description: 'Descripcion breve.'
}
```

La interfaz invierte el arreglo antes de mostrarlo. Conviene guardar los lanzamientos en orden cronologico ascendente dentro de `siteData.js` para que se vean de mas nuevo a mas antiguo.

La biografia, declaracion y formacion actual estan escritas directamente en `src/sections/About.jsx`.

### Imagenes y recursos

- Las portadas de los discos y la fotografia de la banda se referencian desde `public/assets/`, mediante rutas como `/assets/LP2018.jpg`.
- La ilustracion de la portada se carga desde `public/calaca-swarm.png`.
- El fondo del hero se declara en `src/styles/global.css` como `/src/assets/hero-bg.jpg`.
- `public/og-image.jpg` se utiliza como imagen Open Graph en `index.html`.

Al sustituir una imagen publica, conserva o actualiza exactamente la ruta indicada en el componente o en `siteData.js`.

## Personalizacion visual y metadatos

- Ajusta colores, tipografia, espaciados y comportamiento responsive en `src/styles/global.css`.
- La fuente Josefin Sans se carga desde Google Fonts en `index.html`.
- Actualiza titulo, descripcion, Open Graph y color del tema en `index.html` al cambiar la identidad o el material promocional.
- El documento HTML declara `lang="en"` porque la interfaz publicada esta principalmente en ingles. Cambialo si se localiza el sitio a otro idioma.

## Despliegue en Vercel

El proyecto incluye `vercel.json` con una reescritura de cualquier ruta a `index.html`. Esto permite que una SPA siga cargando aunque se acceda directamente a una ruta del dominio.

Para desplegarlo:

1. Sube el repositorio a GitHub, GitLab o Bitbucket.
2. Importalo desde Vercel.
3. Selecciona el preset **Vite**.
4. Usa `npm run build` como comando de compilacion.
5. Define `dist` como directorio de salida si Vercel no lo detecta automaticamente.
6. Publica el despliegue.

No se requieren variables de entorno para el estado actual del sitio.

## Verificacion

Antes de publicar cambios, genera el build de produccion:

```bash
npm run build
```

El proyecto no incluye pruebas automatizadas ni configuracion de lint. La comprobacion recomendada es revisar el build y abrir `npm run preview` para validar enlaces, imagenes, reproductor y vista movil.

## Consideraciones actuales

- La disponibilidad del reproductor depende de Spotify y de que el navegador permita el contenido embebido.
- Las redes sociales abren en una pestana nueva; el correo abre el cliente de correo configurado por la persona visitante.
- `index.html` referencia `favicon-16.png` y `favicon-32.png`, pero los recursos presentes en `public/` se llaman `favicon.png`. Si se requieren iconos en esas medidas, deben agregarse o actualizarse las referencias.

## Licencia

No se ha definido una licencia en el repositorio. No reutilices el codigo, las imagenes ni el material de la banda fuera de los permisos aplicables.
