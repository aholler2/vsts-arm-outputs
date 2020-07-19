var path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './dist/index.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist/bundle'),
    library: 'arm-outputs',
    libraryTarget: 'umd',
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.resjson$/,
        use: 'raw-loader'
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        // { from: "node_modules/azure-pipelines-task-lib", to: "node_modules/azure-pipelines-task-lib" },
        { from: "./icon.png", to: "icon.png" },
        { from: "./task.json", to: "task.json" }
      ]
    })
  ]
};