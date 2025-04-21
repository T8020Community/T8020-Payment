const { ProvidePlugin } = require('webpack');
module.exports = function override(config, env) {
  config.resolve.fallback = {
    stream: require.resolve('stream-browserify'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    zlib: require.resolve('browserify-zlib')
  };
  config.plugins.push(
    new ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer']
    })
  );
  return config;
};