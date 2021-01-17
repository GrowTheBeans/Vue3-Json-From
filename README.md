#### Vue3 `CompositionAPI`知识点

>

#### 项目包含技术知识点

> 使用组件库 `Vant3.x`

- 无法被`Tree Shaking`识别并移除，天然具备按需引入的能力

> 修改组件库主题色
```js
// 通过path引入路径
const path = require("path");
const myTheme = path.resolve(__dirname, "src/styles/var.less");
module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            hack: `true; @import "${myTheme}";`
          }
        }
      }
    }
  }
};
```

> 自定义控件
 
- 弹出层 使用 `van-popup` 与 `van-picker` **选择器** 结合

> 控制主题色
