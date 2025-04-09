import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { glob } from 'glob';
import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy';
import replace from 'rollup-plugin-replace';

const files = glob.sync('src/**/*.ts', { nodir: true });

export const typescriptPlugin = typescript;
export default {
  input: files,
  output: {
    format: 'esm',
    dir: 'lib',
    preserveModules: true,
  },
  plugins: [
    json(),
    replace({
      preventAssignment: true,
      values: {
        'source .env': 'source ../../.env',
        './src/': './lib/',
        "{ cwd: './' }": "{cwd: './node_modules/s-postgres/' }",
      },
    }),
    copy({
      targets: [{ src: ['src/**/*'], dest: 'lib' }],
      flatten: false,
    }),
    nodeResolve(),
    commonjs(),
    typescript({
      tsconfig: 'tsconfig.json',
    }),
  ],
};
