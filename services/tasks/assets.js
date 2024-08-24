import { src, dest, watch } from 'gulp'
import config from '../config.js'

export const assets = () => {
  return src(config.assets.src, { encoding: false })
    .pipe(dest(config.assets.dest))
}

export const assetsWatch = (done) => {
  watch(config.assets.watch, assets)

  done()
}
