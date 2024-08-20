
/** @type {import('aegir').PartialOptions} */
export default {
  docs: {
    publish: true,
    entryPoint: './docs'
  },
  tsRepo: true,
  build: {
    types: true,
    config: {
      format: 'esm',
      platform: 'node',
      external: ['electron', '#ansi-styles', 'yargs/yargs', '#supports-color']
    },
    bundlesizeMax: '44KB',

  },
  test: {

  }
}
