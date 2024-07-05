import { src, dest, watch } from 'gulp'
import config from '../config.js'
import concat from 'gulp-concat'

export const scripts = () => {
  return src(config.scripts.src)
    .pipe(concat('scripts.js'))
    .pipe(dest(config.scripts.dest))
}

export const scriptsWatch = (done) => {
  watch(config.scripts.watch, scripts)

  done()
}
