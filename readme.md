## rollup + typescript 打造工具库

### 所需依赖
- typescript 
- rollup: JavaScript 模块打包器，将小块代码编译成大块复杂的代码
- rollup-plugin-dts: 生成`.d.ts`文件
- @rollup/plugin-node-resolve: 在node_modules中找到并捆绑第三方依赖项
- @rollup/plugin-commonjs：将 CommonJS模块转换为 ES6
- @rollup/plugin-json: 将.json文件转换为ES6模块
- @rollup/plugin-alias: 定义和解析捆绑包依赖项的别名
- rollup-plugin-typescript2: rollup 和 typescript 之间的继承
- @rollup/plugin-babel: 使用babel编译文件
- @babel/core: babel核心库
- @babel/cli
- @babel/plugin-proposal-class-properties
- @babel/plugin-transform-classes
- @babel/plugin-transform-runtime
- @babel/preset-env
- @babel/preset-typescript

## 遇到的坑
### babel相关
**babel 相关依赖版本的大等级需要一致** 

#### `@rollup/plugin-babel: babelHelpers option error `
修改`rollup.config.js`配置
```
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel'

export default {
  // ...
  plugins: [
    // ...
    getBabelOutputPlugin({
      configFile: path.resolve(__dirname, '.babelrc'),
      allowAllFormats: true
    }),
    babel({
      babelHelpers: 'runtime',
      skipPreflightCheck: true,
      exclude: '**/node_modules/**',
      extensions: [
        ...DEFAULT_EXTENSIONS,
        '.ts',
      ],
    })
  ]
}

```
修改 `.babelrc` 配置
```
{
  "presets": [
    "@babel/preset-env"
  ],
  "plugins": [
    [
      "@babel/plugin-proposal-class-properties",
      { "loose": true }
    ],
    [
      "@babel/plugin-transform-runtime",
      { "corejs": 2 }
    ],
    [
      "@babel/plugin-transform-classes"
    ]
  ]
}
```
### `__dirname is not defined in ES module scope`
`__dirname` 是 `commonjs` 规范的内置变量，如果使用了`esm`，是不会注入这个变量的。
在esm中，模块的导入导出使用`export/import`，而不是使用`exports/require`，同理`__dirname`, `__filename` 也是如此：
```
import path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
```
`import.meta` 是ECMA规范的一部分，提供了一个模块的上下文信息。