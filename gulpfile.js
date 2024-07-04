import { series, parallel } from 'gulp'
import figlet from 'figlet';
import { clean } from './tasks/clean.js'
import { styles, stylesWatch } from './tasks/styles.js'
import { scripts, scriptsWatch } from './tasks/scripts.js'
import { vendor, vendorWatch } from './tasks/vendor.js'
import { pages, pagesWatch } from './tasks/pages.js'
import { images, imagesWatch } from './tasks/images.js'
import { assets, assetsWatch } from './tasks/assets.js'
import { fonts, fontsWatch } from './tasks/fonts.js'
import { zip } from './tasks/zip.js';
import { server } from './tasks/server.js'

console.log(figlet.textSync("Meccano 2.0"));

export const build = series(
  clean,
  parallel(
    styles,
    scripts,
    vendor,
    pages,
    images,
    fonts,
    assets
  )
)

export const watch = parallel(
  stylesWatch,
  scriptsWatch,
  vendorWatch,
  pagesWatch,
  imagesWatch,
  fontsWatch,
  assetsWatch
)

export const serve = server

export default series(
  build,
  watch,
  serve,
)

export const prod = series(
  build,
  zip
)
