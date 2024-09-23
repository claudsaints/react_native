const path = require("path");

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    puglins: ['module-resolver',{
      root: ['./src'],
      alias: {

        '@assets': './src/assets',
        '@components':'./src/components',
        '@screens':'./src/screens',
        '@storage':'./src/storage',
        '@thema':'./src/theme',
        '@utils': './src/utilss'

      }
    }
  ]
  };
};
