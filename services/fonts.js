import Fontmin from 'fontmin'
import string from 'lodash/string.js'
import { globSync } from 'glob'
import fs from 'fs'
import path from 'path'
import Handlebars from 'handlebars';

new Fontmin()
  .src('src/fonts/*.ttf')
  .use(Fontmin.ttf2woff())
  .use(Fontmin.ttf2woff2())
  .dest('src/fonts')
  .run();

const files = globSync('src/fonts/*.woff', { posix: true })

const fonts = files.map((filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  const fontName = path.basename(filePath, ext);

  return {
    fontName: string.kebabCase(fontName),
    originName: fontName,
  }
})

fs.readFile('services/templates/fonts.hbs', 'utf-8', (err, templateSource) => {
  const template = Handlebars.compile(templateSource);
  const content = template({ fonts });

  fs.writeFile('src/styles/_fonts.styl', content, (err) => {
    if (err) {
      console.error('Error writing Stylus file:', err);
    } else {
      console.log('Stylus file generated successfully!');
    }
  });
});
