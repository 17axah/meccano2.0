const SOURCE = 'src'
const DEST = 'dest'

const STYLES_DIR = 'styles'
const SCRIPTS_DIR = 'scripts'
const IMAGES_DIR = 'images'
const ASSETS_DIR = 'assets'
const FONTS_DIR = 'fonts'
const COMPONENTS_DIR = 'components'
const VENDOR_DIR = 'vendor'

export default {
  dest: DEST,
  src: SOURCE,
  styles: {
    dir: STYLES_DIR,
    src: [
      `${SOURCE}/${STYLES_DIR}/*.styl`,
      `!${SOURCE}/${STYLES_DIR}/_*.styl`
    ],
    dest: `${DEST}/${STYLES_DIR}`,
    watch: [
      `${SOURCE}/${STYLES_DIR}/*.styl`,
      `${SOURCE}/${COMPONENTS_DIR}/**/*.styl`,
    ]
  },
  scripts: {
    dir: SCRIPTS_DIR,
    src: [
      `${SOURCE}/${SCRIPTS_DIR}/*.js`,
      `${SOURCE}/${COMPONENTS_DIR}/**/*.js`,
    ],
    dest: `${DEST}/${SCRIPTS_DIR}`,
    watch: [
      `${SOURCE}/${SCRIPTS_DIR}/*.js`,
      `${SOURCE}/${COMPONENTS_DIR}/**/*.js`,
    ]
  },
  pages: {
    dir: '',
    src: `${SOURCE}/*.html`,
    dest: `${DEST}/`,
    watch: [
      `${SOURCE}/*.html`,
      `${SOURCE}/${COMPONENTS_DIR}/**/*.html`,
    ]
  },
  images: {
    dir: IMAGES_DIR,
    src: `${SOURCE}/${IMAGES_DIR}/**/*.*`,
    dest: `${DEST}/${IMAGES_DIR}`,
    watch: [
      `${SOURCE}/${IMAGES_DIR}/**/*.*`
    ]
  },
  assets: {
    dir: ASSETS_DIR,
    src: `${SOURCE}/${ASSETS_DIR}/**/*.*`,
    dest: `${DEST}/`,
    watch: [
      `${SOURCE}/${ASSETS_DIR}/**/*.*`
    ]
  },
  fonts: {
    dir: FONTS_DIR,
    src: `${SOURCE}/${FONTS_DIR}/*.*`,
    dest: `${DEST}/${FONTS_DIR}`,
    watch: [
      `${SOURCE}/${FONTS_DIR}/*.*`
    ]
  },
  vendor: {
    dir: VENDOR_DIR,
    src: `${SOURCE}/${VENDOR_DIR}/*.*`,
    dest: `${DEST}/${VENDOR_DIR}`,
    watch: [
      `${SOURCE}/${VENDOR_DIR}/*.*`
    ]
  },
  components: {
    dir: COMPONENTS_DIR
  }
}