var handlebars = require('handlebars');

// @ts-ignore
const fileRegex = /\.(hbs)$/;
function handlebarsPlugin() {
  return {
    name: 'handlebars',

    transform(src, path) {
      if (fileRegex.test(path)) {
        const code = handlebars.precompile(src).toString();
        return {
          code: `
import {template} from 'handlebars';
export default template(${code.toString()});
`,
          map: null
        };
      }
    }

  };
}

module.exports = handlebarsPlugin;
//# sourceMappingURL=index.js.map
