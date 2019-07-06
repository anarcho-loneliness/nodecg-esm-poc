const path = require('path');

module.exports = {
  entry: './src/webpack_and_rollup.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack.js'
  },
  externals: {
    './nodecg.js': 'NodeCGLib'
  },
  optimization:{
	minimize: false,
	usedExports: true
  },
  	mode: 'development'
};
