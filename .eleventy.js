const dev = global.dev = ('development' === process.env.NODE_ENV)

module.exports = config => {
  /* --- PLUGINS --- */
  config.addPlugin(require('eleventy-google-fonts'))
  config.addPlugin(require('eleventy-plugin-metagen'))

  /* --- SHORTCODES --- */
  config.addShortcode('version', require('./lib/shortcodes/version'))

  /* --- TRANSFORMATIONS --- */
  config.addTransform('htmlminify', require('./lib/transforms/htmlminify'))

  /* --- WATCHES --- */
  config.addWatchTarget('./_assets/src/css/')
  config.addWatchTarget('./_assets/src/js/')

  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src',
    },
  }
}
