const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * NOTE:
 * -----
 * server is started with https://github.com/webpack/webpack-dev-server
 */

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // Help webpack to collect CSS from all the css files referenced in your application and put it into a string
          'css-loader' // Take the output string generated by the above css-loader and put it inside the <style> tags in the index.html file
        ],
      },
      {
        test: /\.(png|jpg|gif|mp3)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        // For every JavaScript file
        test: /\.js$/,
        exclude: /(node_modules)/,  // except the one in "node_modules"
        use: {
          loader: 'babel-loader', // use the following loaders
          options: { // Activate the following options
            presets: [
              '@babel/preset-env', // babel environment
              // 'stage-0', // stage 0 babel functionalities
              '@babel/preset-react' // react conversion (JSX, ...)
            ]
          }
        }
      }
    ]
  }, // module
  plugins: [
    new HtmlWebpackPlugin({
      title: '---My App',
      filename: 'index.html',
      template: './src/index.html'
    })]
}