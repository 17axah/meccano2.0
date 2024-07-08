import { src, dest, watch } from 'gulp'
import config from '../config.js'
import posthtml from 'gulp-posthtml'
import posthtmlComponent from 'posthtml-component'
import posthtmlBeautify from 'posthtml-beautify'
import posthtmlReplace from 'posthtml-replace'

const htmlReplace = (tag, attr, from, to) => {
  return {
    match: {
      tag
    },
    attrs: {
      [attr]: {
        from,
        to
      }
    }
  }
}

const plugins = [
  posthtmlComponent({
    "root": './',
    "tag": "component",
    "attribute": "src"
  }),
  posthtmlBeautify(),
  posthtmlReplace([
    htmlReplace('link', 'href', `/${config.src}/${config.assets.dir}/`, ''),
    htmlReplace('link', 'href', `/${config.src}/${config.styles.dir}/`, `${config.styles.dir}/`),
    htmlReplace('link', 'href', `/${config.src}/${config.vendor.dir}/`, `${config.vendor.dir}/`),
    htmlReplace('link', 'href', '.styl', '.css'),

    htmlReplace('script', 'src', `/${config.src}/${config.scripts.dir}/`, `${config.scripts.dir}/`),
    htmlReplace('script', 'src', `/${config.src}/${config.vendor.dir}/`, `${config.vendor.dir}/`),

    htmlReplace('img', 'src', `/${config.src}/${config.images.dir}/`, `${config.images.dir}/`),
  ]),
]

export const pages = () => {
  return src(config.pages.src)
    .pipe(posthtml(plugins))
    .pipe(dest(config.pages.dest))
}

export const pagesWatch = (done) => {
  watch(config.pages.watch, pages)

  done()
}
