import { src, dest, watch } from 'gulp'
import config from '../config.js'
import posthtml from 'gulp-posthtml'
import posthtmlComponent from 'posthtml-component'
import posthtmlBeautify from 'posthtml-beautify'
import posthtmlReplace from 'posthtml-replace'

const plugins = [
  posthtmlComponent({
    "root": './',
    "tag": "component",
    "attribute": "src"
  }),
  posthtmlBeautify(),
  posthtmlReplace([
    {
      match: {
        tag: 'link'
      },
      attrs: {
        href: {
          from: `${config.src}/${config.assets.dir}/`,
          to: ``
        }
      }
    },
    {
      match: {
        tag: 'link'
      },
      attrs: {
        href: {
          from: `${config.src}/${config.styles.dir}/`,
          to: `${config.styles.dir}/`
        }
      }
    },
    {
      match: {
        tag: 'link'
      },
      attrs: {
        href: {
          from: `${config.src}/${config.vendor.dir}/`,
          to: `${config.vendor.dir}/`
        }
      }
    },
    {
      match: {
        tag: 'link'
      },
      attrs: {
        href: {
          from: `.styl`,
          to: `.css`
        }
      }
    },
    {
      match: {
        tag: 'script'
      },
      attrs: {
        src: {
          from: `${config.src}/${config.scripts.dir}/`,
          to: `${config.scripts.dir}/`
        }
      }
    },
    {
      match: {
        tag: 'script'
      },
      attrs: {
        src: {
          from: `${config.src}/${config.vendor.dir}/`,
          to: `${config.vendor.dir}/`
        }
      }
    },
    {
      match: {
        tag: 'img'
      },
      attrs: {
        src: {
          from: `${config.src}/${config.images.dir}/`,
          to: `${config.images.dir}/`
        }
      }
    }
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
