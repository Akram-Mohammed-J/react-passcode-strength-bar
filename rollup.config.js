import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'
import external from 'rollup-plugin-peer-deps-external'
import pkg from './package.json' assert { type: 'json' }
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: 'inline',
      strict: false,
    },
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: 'inline',
      strict: false,
    },
  ],
  plugins: [
    external(),
    resolve(),
    commonjs(),
    sass({ insert: true }),
    typescript({ objectHashIgnoreUnknownHack: false }),
    terser(),
  ],

  external: ['react', 'react-dom'],
}
