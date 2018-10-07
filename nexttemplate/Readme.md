# Nextjs Template

## setting up the project

`npm install`

## Development mode

`npm run dev`

## Production mode 

`npm run build`

`npm run start`

- optimized files will be generated into assets directory

## Generate static pages

`npm run build`

`npm run export`

- static files will be exported into out directory

## Scss config

- **SCSS** code is at `assets\scss\style.scss`
- `style.scss` is imported into `layouts\frontoffice.js`
- `pages\_document.js` contains link to the `css` file generated from `scss`

    `<link rel="stylesheet" href="/_next/static/style.css" />`
