const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry point of your application
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output bundle file name
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Apply this rule to JavaScript files
        exclude: /node_modules/, // Don't apply to files residing in node_modules
        use: {
          loader: "babel-loader", // Use Babel loader for JavaScript files
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // Babel presets
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // Apply this rule to image files
        type: "asset/resource", // Use asset modules for image files
      },
      {
        test: /\.css$/, // Apply this rule to CSS files
        use: ["style-loader", "css-loader"], // Use style-loader and css-loader for CSS files
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Automatically resolve these extensions
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"), // Serve content from the dist directory
    compress: true, // Enable gzip compression
    port: 9000, // Port number
  },
};
