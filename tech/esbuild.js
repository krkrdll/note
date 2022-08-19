const { argv } = require("process");
const esbuild = require("esbuild");
const fse = require("fs-extra");

const dist = "./public/";

const isWatch = argv.includes("--watch") ? true : false;
const isProduction = argv.includes("--production") ? true : false;

// try {
//   fse.removeSync(dist);
//   fse.mkdirSync(dist);
//   fse.copySync("./public/", dist);
// } catch (err) {
//   console.error(err);
//   process.exit(-1);
// }

const options = {
  entryPoints: [
    "./src/ts/index.ts"
  ],
  minify: isProduction,
  sourcemap: !isProduction,
  bundle: true,
  target: "es2016",
  platform: "browser",
  watch:
    isWatch
      ? {
          onRebuild(err, result) {
            if (err) console.error("watch build failed:", err);
            else console.log("watch build succeeded:", result);
          },
        }
      : false,
  outdir: dist + "js/",
  tsconfig: "./tsconfig.json",
};

esbuild
  .build(options)
  .then((result) => console.log("build successed:", result))
  .catch((err) => console.error("build failed:", err));
