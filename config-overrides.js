// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');

const { override, addWebpackAlias } = require('customize-cra');
const { addReactRefresh } = require('customize-cra-react-refresh');

module.exports = override(
  addReactRefresh({ disableRefreshCheck: true }),
  addWebpackAlias({
    components: path.resolve(__dirname, 'src/components'),
  })
);
