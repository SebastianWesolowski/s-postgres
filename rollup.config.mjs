import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import { glob } from 'glob';
import copy from 'rollup-plugin-copy';
import typescript from 'rollup-plugin-typescript2';

const files = glob.sync('src/**/*.ts', { nodir: true });

export const typescriptPlugin = typescript;
export default {
  input: files,
  output: {
    format: 'esm',
    dir: 'lib',
    preserveModules: false,
    entryFileNames: '[name].js',
  },
  plugins: [
    json(),
    copy({
      targets: [{ src: ['src/scripts/*'], dest: 'lib/scripts' }],
      flatten: true,
    }),
    nodeResolve(),
    commonjs({
      transformMixedEsModules: true,
    }),
    typescript({
      tsconfig: 'tsconfig.json',
      useTsconfigDeclarationDir: true,
    }),
    replace({
      preventAssignment: true,
      delimiters: ['', ''],
      values: {
        'source .env': 'source ../../.env',
        './src/': './lib/',
        "{ cwd: './' }": "{cwd: './node_modules/s-postgres/' }",
      },
    }),
  ],
};
