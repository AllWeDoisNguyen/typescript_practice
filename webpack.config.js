const path = require('path');

module.exports = {
  entry: {
    app: './app.tsx'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [{
      test: /\.tsx?$/, // include .js files
      enforce: "pre", // preload the jshint loader
      exclude: /node_modules/, // exclude any and all files in the node_modules folder
      use: [{
        loader: "ts-loader",
        // more options in the optional jshint object
      }]
    }]
  },
};

// var path = require("path");
// var config = {
//   entry: ["./app.tsx"],
//   output: {
//     path: path.resolve(__dirname, "build"),
//     filename: "bundle.js"
//   },
//   resolve: {
//     extensions: [".ts", ".tsx", ".js"]
//   },

//   module: {
//     loaders: [
//       {
//         test: /\.tsx?$/,
//         loader: "ts-loader",
//         exclude: /node_modules/
//       }
//     ]
//   }
// };

// module.exports = config;