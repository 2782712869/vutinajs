/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-var-requires */
//@ts-check
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import terser from '@rollup/plugin-terser';

const packageJson = require('./package.json');

const umdName = '_';

const globals = {
  ...packageJson.devDependencies,
};

const dir = 'dist';

/**
 * @type {import('rollup').RollupOptions[]}
 */
const config = [
  {
    input: 'package/index.ts',
    external: [...Object.keys(globals)],
    output: [
      {
        file: dir + '/index.umd.js',
        format: 'umd',
        sourcemap: true,
        name: umdName,
      },
      {
        file: dir + '/index.umd.min.js',
        format: 'umd',
        sourcemap: true,
        name: umdName,
        plugins: [terser()],
      },
      {
        file: dir + '/index.cjs.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: dir + '/index.cjs.min.js',
        format: 'cjs',
        sourcemap: true,
        plugins: [terser()],
      },
      {
        file: dir + '/index.esm.js',
        format: 'es',
        sourcemap: true,
      },
      {
        file: dir + '/index.esm.min.js',
        format: 'es',
        sourcemap: true,
        plugins: [terser()],
      },
    ],
    plugins: [
      nodeResolve(),
      commonjs({ include: 'node_modules/**' }),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      typescript({
        tsconfig: './tsconfig.json',
        // @ts-ignore
        declaration: true,
        check: true
      }),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      peerDepsExternal(),
    ],

    treeshake: true,
  },
];

export default config;
