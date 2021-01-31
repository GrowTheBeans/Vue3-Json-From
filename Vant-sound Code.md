### Vant组件库分析

- [x] 版本 `3.0.5`

> 判断浏览器类型

- 使用 `navigator.userAgent.toLowerCase` 进行判断
    - navigator是HTML中的内置对象，包含浏览器的信息
    - userAgent是navigator的属性方法，可以返回由客户机发送服务器的头部的值，作用其实就是就是返回当前用户所使用的是什么浏览器
    - toLowerCase转换为小写

```js
// 使用正则进行
const ua = navigator.userAgent.toLowerCase()
const isMobile = /ios|iphone|ipod|ipad|android/.test(ua)
// 或者nu.includes(‘ios’) 返回布尔值
```

> 整体样式（组件化）

- [x] 文件设置 `style/var.less`

- 字体类型
```less
@base-font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
  Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB',
  'Microsoft Yahei', sans-serif;
@price-integer-font-family: Avenir-Heavy, PingFang SC, Helvetica Neue, Arial,
  sans-serif;
@font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'miui',
'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;
```

- [x] 样式命名规则

```less
// DOM
demo-home-nav {}
demo-home-nav__title-simulator {}
// 样式属性
demo-home-nav {
  &__title-simulator {}
}
```

- [x] 不常用的css属性

- 字体平滑 `font-smoothing`

```less
// 字体平滑
-webkit-font-smoothing: antialiased
// font-size 属性
font-size: inherit; // 从父元素继承字体尺寸
```

- `word-wrap` 和 `word-break` 区别

- [x] 浏览器滚动条样式设置

```less
.van-doc-nav {
  &::-webkit-scrollbar{
    width: 6px;
    height: 6px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 6px;
  }
  &:hover::-webkit-scrollbar-thumb {
    background-color: rgba(69, 90, 100, .2);
  }
}
```

-[x] 文字省略

- 单行省略 && 多行省略

```less
// 单行省略
.ellipsis {
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
}
// 多行省略
.multi-ellipsis(@lines) {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: @lines;
  -webkit-box-orient: vertical;
}
// 调用
.van-multi-ellipsis--l2 {
  .multi-ellipsis(2); // .multi-ellipsis(n);
}
```

- `1px`设置

> js 知识点

- [x] 计算元素的所有样式

```js
const domstyle = window.getComputedStyle();
```

### `Vue Router`路由

- 全局后置钩子 `router.afterEach()`



### 核心功能

> `vant-cli`

- [x] **pc** 端

- 

- [x] **mobile** 移动端

### 控件领域

> 基础组件

#### 案例1： `Button` 按钮控件

#### 案例2： `Cell` 单元格

#### 案例3： `Icon` 图标

#### 案例4： `Toast` 轻提示

#### 案例5： `Popup` 弹出层

> 布局组件

#### 案例1： `Layout` 布局

> 功能组件

#### 案例1： `Tab` 标签页

#### 案例2： `NoticeBar` 通知栏

#### 案例3： `Swipe` 轮播图

> 业务组件

#### 案例1： `AddressEdit` 地址编辑

> 表单组件

#### 案例1： `Calendar` 日历

#### 案例2： `Cascader` 级联选择

#### 案例3： `Field` 输入框

#### 案例4： `Form` 表单

#### 案例5： `Rate` 评分


