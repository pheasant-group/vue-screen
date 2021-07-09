# vue-screen

利用 vue,charts 封装的可视化大屏快速搭建模板

URL 后面加参数?config=1 开启配置模式

- 标题
- 背景颜色
- 字体颜色
- 边框

  ![20210705010323](https://cdn.jsdelivr.net/gh/wu529778790/image/blog/20210705010323.png)

## 注意

### echarts 默认取父级的宽高

在 vue-grid-layout 渲染完以后在开始渲染里面的内容,保证 echarts 在渲染之前就可以拿到真实的宽高

所以在 layoutReadyEvent 事件中做了控制

## 参考链接

- <https://jbaysolutions.github.io/vue-grid-layout/zh>
