// @ts-ignore
import { precompile } from 'handlebars';
import type { Plugin as VitePlugin } from 'vite';

const fileRegex = /\.(hbs)$/

export default function handlebarsPlugin(): VitePlugin {
    return {
        name: 'handlebars',

        transform(src: string, path: string) {
            if (fileRegex.test(path)) {
                const code = precompile(src).toString();
                return {
                    code: `
import {template} from 'handlebars';
export default template(${code.toString()});
`,
                    map: null
                }
            }
        }
    }
}
