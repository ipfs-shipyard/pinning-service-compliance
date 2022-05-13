
/** @type {import('aegir').PartialOptions} */
export default {
  docs: {
    publish: true,
    entryPoint: './'
  },
  tsRepo: true,
  build: {
    types: true,
    config: {
      platform: 'node',
      external: ['electron', '#ansi-styles', 'yargs/yargs', '#supports-color']
    },
    bundlesizeMax: '44KB',

  },
  test: {

  }
}
