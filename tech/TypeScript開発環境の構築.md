# TypeScript開発環境の構築

Visual Stidio CodeでTypeScript開発環境を構築する。

```package.json
"devDependencies": {
	"ts-loader": "^5.3.3",
	"eslint": "^5.12.1",
	"eslint-config-standard": "^8.0.1",
	"typescript": "^3.2.2",
	"webpack": "^4.26.0",
	"webpack-cli": "^3.1.2"
}
```

## npmの設定

TypeScriptで書いたコードをトランスパイル・モジュールバンドルするため、TypeScriptとWebpack関連ツールをインストールする。

```
$ npm i -D typescript ts-loader webpack webpack-cli
```

"tsconfig.json"を作成する。

```
$ npx tsc --init
```

"webpack.config.json"を作成する。

```webpack.config.json
const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/ts/main.ts'
  },
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader'
    }]
  },
  resolve: {
    modules: [
      'node_modules'
    ],
    extensions: ['.ts']
  }
};
```

TypeScriptのLinterを使用するため、Linterツールをインストールする。ルールは"eslint-config-standard"を使用する。

```
$ npm i -D eslint
```

"eslint.json"を作成する。 "Use a popular style guide."を選択する

```
$ npx eslint --init
```

