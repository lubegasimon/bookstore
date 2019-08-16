const path = require("path");

module.exports = {
  mode: "development",

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  entry: "./frontend",

  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'webpack.bundle.js',
  },

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx"]
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "css-loader"
      },

      {
        test: /\.ts(x?)$/,

        exclude: [
          path.resolve(__dirname, "node_modules"),
        ],

        use: [
          {
            loader: "awesome-typescript-loader"
          }
        ]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    "semantic-ui-react": ["Button", "Form", "Input", "FormField", "Header"]
  }
};
