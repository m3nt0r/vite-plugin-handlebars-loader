import { precompile } from 'handlebars';

// @ts-ignore
const fileRegex = /\.(hbs)$/;
function handlebarsPlugin() {
  return {
    name: 'handlebars',

    transform(src, path) {
      if (fileRegex.test(path)) {
        const code = precompile(src).toString();
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

export default handlebarsPlugin;
//# sourceMappingURL=index.module.js.map
