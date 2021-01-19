#### Vue3 `CompositionAPI`知识点

> 1: `Setup`函数

> 2: `ref`

> 3: `reactive`

> 4: `toRef`

> 5: `context`

> 6: `watch`和`watchEffect`区别

> 7: `CompositionAPI` 生命周期

> 8：依赖注入 `Provide` 和 `Inject`

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
