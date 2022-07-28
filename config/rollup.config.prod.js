const { terser } = require("rollup-plugin-terser");
const config = require("./rollup.config");

config.output.sourcemap = false;
config.plugins = [...config.plugins, ...[terser()]];

module.exports = config;

// 多文件
// const configList = require("./rollup.config");
// configList.map((config, index) => {
//   config.output.sourcemap = false;
//   config.plugins = [...config.plugins, ...[uglify()]];

//   return config;
// });

// module.exports = configList;
