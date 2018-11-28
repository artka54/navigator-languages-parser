const path = require('path');

module.exports = {
  entry: './src/navigator-languages-parser.js',
  output: {
      path: path.resolve(__dirname, 'bundle_for_test'),
    filename: 'bundle.js'
  },
     module: {
         rules: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['env']
                 }
             }
         ]
     }
};
