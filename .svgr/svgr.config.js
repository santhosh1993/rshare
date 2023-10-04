module.exports = {
  parser: 'babel',
  outDir: 'src/generated/assets',
  template: require('./template'),
  prettier: true,
  native: true,
  memo: true,
  svgo: true,
  typescript: true,
  ignoreExisting: false,
  ref: true,
  expandProps: 'start',
  replaceAttrValues: {
    '#000': '{props.fill}',
  },
  svgoConfig: {
    plugins: [
      {
        name: 'removeXMLNS',
        active: true,
      },
      {
        name: 'removeViewBox',
        active: false,
      },
      {
        name: 'removeDimensions',
        active: true,
      },
    ],
  },
}
