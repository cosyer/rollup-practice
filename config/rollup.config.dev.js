const path = require("path");
const serve = require("rollup-plugin-serve");
const config = require("./rollup.config");

const resolveFile = function (filePath) {
  return path.join(__dirname, "..", filePath);
};
const PORT = 3001;

config.output.sourcemap = true;
config.plugins = [
  ...config.plugins,
  ...[
    serve({
      port: PORT,
      // contentBase: [resolveFile('')]
      contentBase: [resolveFile("example"), resolveFile("dist")],
    }),
  ],
];

module.exports = config;

// 多文件
// const configList = require("./rollup.config");
// configList.map((config, index) => {
//   config.output.sourcemap = true;

//   if (index === 0) {
//     config.plugins = [
//       ...config.plugins,
//       ...[
//         serve({
//           port: PORT,
//           contentBase: [resolveFile("example"), resolveFile("dist")],
//         }),
//       ],
//     ];
//   }

//   return config;
// });

// module.exports = configList;
