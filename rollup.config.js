import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json' assert { type: 'json' }

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'es',
      exports: 'named',
      sourcemap: 'inline',
      strict: false,
    },
  ],
  plugins: [sass({ insert: true }), typescript({ objectHashIgnoreUnknownHack: false })],
  external: ['react', 'react-dom'],
}
