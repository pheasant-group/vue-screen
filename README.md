# vue-screen

利用 vue,charts 封装的可视化大屏快速搭建模板

预览链接：<https://blog.shenzjd.com/vue-screen/#/home>

URL 后面加参数?config=1 开启配置模式

配置模式预览链接：<https://blog.shenzjd.com/vue-screen/#/home?config=1>

- 在线可视化配置(修改同步生效)
- 可修改标题
- 可修改标题背景
- 可修改背景颜色
- 可修改字体颜色
- 可修改组件边框
- 可切换配置主题
- 点击可拖拽移动
- 右下角放大缩小
- layout 可以调整布局配置(当然也完全可以自己手动拖动)

## 主题配置

在<https://echarts.apache.org/zh/theme-builder.html>定制主题后，下载 json 文件放到 theme 中，就会自动加载到下拉框里面

```js
[
  "dark",
  "light",
  "chalk",
  "customed",
  "purple-passion",
  "vintage",
  "walden",
  "westeros",
  "wonderland",
];
```

![20210713210522](https://cdn.jsdelivr.net/gh/wu529778790/image/blog/20210713210522.png)

## layout

```js
[
  { x: 0, y: 0, w: 100, h: 10, i: 0 },
  { x: 0, y: 10, w: 25, h: 30, i: 1 },
  { x: 0, y: 40, w: 25, h: 30, i: 2 },
  { x: 0, y: 70, w: 25, h: 30, i: 3 },
  { x: 25, y: 10, w: 50, h: 60, i: 4 },
  { x: 25, y: 70, w: 50, h: 30, i: 5 },
  { x: 75, y: 10, w: 25, h: 30, i: 6 },
  { x: 75, y: 40, w: 25, h: 30, i: 7 },
  { x: 75, y: 70, w: 25, h: 30, i: 8 },
];
```

### layoutitem

#### i

type: String
required: true
栅格中元素的 ID。

#### x

type: Number
required: true
标识栅格元素位于第几列，需为自然数。

#### y

type: Number
required: true
标识栅格元素位于第几行，需为自然数。

#### w

type: Number
required: true
标识栅格元素的初始宽度，值为 colWidth 的倍数。

#### h

type: Number
required: true
标识栅格元素的初始高度，值为 rowHeight 的倍数。

![20210713204949](https://cdn.jsdelivr.net/gh/wu529778790/image/blog/20210713204949.png)

## 注意

### echarts 默认取父级的宽高

在 vue-grid-layout 渲染完以后在开始渲染里面的内容,保证 echarts 在渲染之前就可以拿到真实的宽高

所以在 layoutReadyEvent 事件中做了控制

每次拖拽或者移动修改 layout 的数据的时候，都会从新渲染页面(利用这种模式强制重新渲染拿到实际的宽高，有人有更好的方法可以给我提 PR)

## 未来要做的事

- 组件自动读取文件
- 边框组件换成 svg，这样就可以动态改变颜色了
- 目前可视化添加的功能还没完成，可以删除了

## 参考链接

- <https://jbaysolutions.github.io/vue-grid-layout/zh>
