import { src, dest, watch } from 'gulp'
import config from '../config.js'
import stylus from 'gulp-stylus'
import urlAdjuster from 'gulp-css-url-adjuster'
import gulpif from 'gulp-if'
import gcmq from 'gulp-group-css-media-queries'
import rupture from 'rupture'
import purgecss from 'gulp-purgecss'
import cleanCSS from 'gulp-clean-css'
import path from 'path'

const production = process.env.NODE_ENV === 'production'

const purgecssConfig = {
  content: [`${config.dest}/*.html`]
}

const urlAdjusterConfig = {
  replace: [`/${config.src}`, '..']
}

const cleanCSSConfig = {
  format: 'beautify',
  level: {
    2: {
      removeDuplicateRules: true
    }
  }
}

export const styles = () => {
  const stylusConfig = {
    use: [rupture()],
    include: [
      path.join(path.resolve(), '')
    ],
  }

  return src(config.styles.src)
    .pipe(stylus(stylusConfig))
    .pipe(urlAdjuster(urlAdjusterConfig))
    .pipe(gulpif(production, purgecss(purgecssConfig)))
    .pipe(gulpif(production, gcmq()))
    .pipe(gulpif(production, cleanCSS(cleanCSSConfig)))
    .pipe(dest(config.styles.dest))
}

export const stylesWatch = (done) => {
  watch(config.styles.watch, styles)

  done()
}
