import { src, dest, watch } from 'gulp'
import config from '../config.js'
import stylus from 'gulp-stylus'
import urlAdjuster from 'gulp-css-url-adjuster'
import gulpif from 'gulp-if'
import gcmq from 'gulp-group-css-media-queries'
import rupture from 'rupture'
import path from 'path'

const production = process.env.NODE_ENV === 'production'

export const styles = () => {
  const stylusConfig = {
    use: [rupture()],
    include: [
      path.join(path.resolve(), '')
    ],
  }

  return src(config.styles.src)
    .pipe(stylus(stylusConfig))
    .pipe(urlAdjuster({
      replace: [`/${config.src}`, '..']
    }))
    .pipe(gulpif(production, gcmq()))
    .pipe(dest(config.styles.dest))
}

export const stylesWatch = (done) => {
  watch(config.styles.watch, styles)

  done()
}
