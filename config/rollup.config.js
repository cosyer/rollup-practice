const path = require("path");
// const buble = require("@rollup/plugin-buble");
const { babel } = require("@rollup/plugin-babel");

const resolveFile = function (filePath) {
  return path.join(__dirname, "..", filePath);
};

const babelOptions = {
  presets: ["@babel/preset-env"],
};

module.exports = {
  input: resolveFile("src/index.js"),
  output: {
    file: resolveFile("dist/index.js"),
    // format: "iife", // buble
    format: "umd", // 通用模块定义
    sourcemap: true,
  },
  plugins: [
    // buble(),
    babel({
      presets: babelOptions,
    }),
  ],
};

// 多文件
module.exports = [
  {
    input: resolveFile("src/index.js"),
    output: {
      file: resolveFile("dist/index.js"),
      // format: "iife", // buble
      format: "umd", // 通用模块定义
      sourcemap: true,
    },
    plugins: [
      // buble(),
      babel({
        presets: babelOptions,
      }),
    ],
  },
];
