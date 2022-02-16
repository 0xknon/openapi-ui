const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#75B643',
              '@menu-item-color': '#fff',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
