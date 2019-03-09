import * as webpack from "webpack";
import * as path from "path";

const config: webpack.Configuration = {
  mode: "development",
  entry: {
    index: "./src/index.tsx"
  },
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"] //resolve all the modules other than index.ts
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.(ts|tsx)$/
      }
    ]
  }
};

export default config;
