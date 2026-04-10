const path = require('path');
const babelConfig = require('./babel.config');

module.exports = {
  plugins: {
    '@stylexjs/postcss-plugin': {
      include: [
        'app/**/*.{js,jsx,ts,tsx}',
        path.join(__dirname, '../../packages/shared-components/src/**/*.{js,jsx,ts,tsx}'),
      ],
      babelConfig: {
        babelrc: false,
        parserOpts: {
          plugins: ['typescript', 'jsx'],
        },
        plugins: babelConfig.plugins,
      },
      useCSSLayers: true,
    },
    autoprefixer: {},
  },
};
