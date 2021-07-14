# vue-screen

利用 vue,charts 封装的可视化大屏快速搭建模板

预览模式：<https://blog.shenzjd.com/vue-screen/#/home>

![20210713211640](https://cdn.jsdelivr.net/gh/wu529778790/image/blog/20210713211640.png)

URL 后面加参数?config=1 开启配置模式

配置模式：<https://blog.shenzjd.com/vue-screen/#/home?config=1>

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

![20210713211600](https://cdn.jsdelivr.net/gh/wu529778790/image/blog/20210713211600.png)

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

布局采用水平和垂直方向都是分割成一百份，比如 `w:100` 表示 `width:100vw` 的意思，渲染就会占据一排，

垂直方向上的高度也是分成一百份，`h：10` 表示 `height:10vh`

例如下面的第一个 layoutItem，渲染到页面上是 header

x,y 分别表示横纵坐标，也就是左上角的位置

i 表示 id，这个只是必须的，而且带唯一

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

## 注意

### echarts 默认取父级的宽高

在 vue-grid-layout 渲染完以后在开始渲染里面的内容,保证 echarts 在渲染之前就可以拿到真实的宽高

所以在 layoutReadyEvent 事件中做了控制

每次拖拽或者移动修改 layout 的数据的时候，都会从新渲染页面(利用这种模式强制重新渲染拿到实际的宽高，有人有更好的方法可以给我提 PR)

## 未来要做的事

- 边框组件换成 svg，这样就可以动态改变颜色了
- 目前可视化添加的功能还没完成，可以删除了

1. 修改 layout 的重大 bug，解决因为 routr-view 重复渲染很多次的问题
2. 抽离 options 和 dataset，方便后面抛出配合文件以及数据请求
3. 模拟数据请求，请求之后在渲染页面。后面改成重新渲染

## 参考链接

- <https://jbaysolutions.github.io/vue-grid-layout/zh>
