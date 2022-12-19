const CracoAlias = require("craco-alias");


//webpack config快捷方式
module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        // see in examples section
        baseUrl: './src',
        source: 'jsconfig',
      }
    }
  ]
};