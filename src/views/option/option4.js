export default {
  geo3D: {
    map: "mapName",
    show: false,
    zlevel: -10,
    boxWidth: 200,
    boxHeight: 4, //4:没有bar. 30:有bar,bar最高度30，按比例分配高度
    regionHeight: 3,
    shading: "lambert",
  },
  series: [
    {
      type: "map3D", // 系列类型
      name: "map3D", // 系列名称
      map: "mapName", // 地图类型。echarts-gl 中使用的地图类型同 geo 组件相同(ECharts 中提供了两种格式的地图数据，一种是可以直接 script 标签引入的 js 文件，引入后会自动注册地图名字和数据。还有一种是 JSON 文件，需要通过 AJAX 异步加载后手动注册。)
      // 环境贴图，支持純颜色值，渐变色，全景贴图的 url。默认为 'auto'，在配置有 light.ambientCubemap.texture 的时候会使用该纹理作为环境贴图。否则则不显示环境贴图。
      // environment: new echarts.graphic.LinearGradient(
      //   0,
      //   0,
      //   0,
      //   1,
      //   [
      //     {
      //       // 配置为垂直渐变的背景
      //       offset: 0,
      //       color: "#183890", // 天空颜色
      //     },
      //     {
      //       offset: 0.7,
      //       color: "#040829", // 地面颜色
      //     },
      //     {
      //       offset: 1,
      //       color: "#040829", // 地面颜色
      //     },
      //   ],
      //   false
      // ),
      label: {
        // 标签的相关设置
        formatter: function(params) {
          return params.name;
        },
        position: "right",
        show: true, // (地图上的城市名称)是否显示标签 [ default: false ]
        //formatter:,               // 标签内容格式器
        // 标签的字体样式
        color: "rgba(23,255,245,1)", // 地图初始化区域字体颜色
        fontSize: "16", // 字体大小
      },
      //地图的颜色
      itemStyle: {
        color: "rgba(23,241,236,0.8)", // 地图板块的颜色
        opacity: 1, // 图形的不透明度 [ default: 1 ]
        borderWidth: 1, // (地图板块间的分隔线)图形描边的宽度。加上描边后可以更清晰的区分每个区域   [ default: 0 ]
        borderColor: "rgba(255,255,255,1)", // 图形描边的颜色。[ default: #333 ]
      },
      emphasis: {
        // 鼠标 hover 高亮时图形和标签的样式 (当鼠标放上去时  label和itemStyle 的样式)
        label: {
          // label高亮时的配置
          show: true,
          color: "#fff", // 高亮时标签颜色变为 白色
          fontSize: 18, // 高亮时标签字体 变大
        },
        itemStyle: {
          // itemStyle高亮时的配置
          areaColor: "rgba(23,241,236,1)", // 高亮时地图板块颜色改变
        },
      },
      // groundPlane: {
      //   // 地面可以让整个组件有个“摆放”的地方，从而使整个场景看起来更真实，更有模型感。
      //   show: false, // 是否显示地面。[ default: false ]
      //   color: "#aaa", // 地面颜色。[ default: '#aaa' ]
      // },
      light: {
        // 光照相关的设置。在 shading 为 'color' 的时候无效。  光照的设置会影响到组件以及组件所在坐标系上的所有图表。
        // 合理的光照设置能够让整个场景的明暗变得更丰富，更有层次。
        main: {
          // 场景主光源的设置，在 globe 组件中就是太阳光。
          color: "#3D94CE", //主光源的颜色。[ default: #fff ]
          intensity: 1, //主光源的强度。[ default: 1 ]
          shadow: true, //主光源是否投射阴影。默认关闭。    开启阴影可以给场景带来更真实和有层次的光照效果。但是同时也会增加程序的运行开销。
          shadowQuality: "high", // 阴影的质量。可选'low', 'medium', 'high', 'ultra' [ default: 'medium' ]
          alpha: 55, // 主光源绕 x 轴，即上下旋转的角度。配合 beta 控制光源的方向。[ default: 40 ]
          beta: 10, // 主光源绕 y 轴，即左右旋转的角度。[ default: 40 ]
        },
        ambient: {
          // 全局的环境光设置。
          color: "#fff", // 环境光的颜色。[ default: #fff ]
          intensity: 0.2, // 环境光的强度。[ default: 0.2 ]
        },
      },
      viewControl: {
        // 用于鼠标的旋转，缩放等视角控制。
        projection: "orthographic", // 投影方式，默认为透视投影'perspective'，也支持设置为正交投影'orthographic'。
        autoRotate: false, // 是否开启视角绕物体的自动旋转查看。[ default: false ]
        autoRotateDirection: "cw", // 物体自传的方向。默认是 'cw' 也就是从上往下看是顺时针方向，也可以取 'ccw'，既从上往下看为逆时针方向。
        autoRotateSpeed: 10, // 物体自传的速度。单位为角度 / 秒，默认为10 ，也就是36秒转一圈。
        autoRotateAfterStill: 3, // 在鼠标静止操作后恢复自动旋转的时间间隔。在开启 autoRotate 后有效。[ default: 3 ]
        damping: 0, // 鼠标进行旋转，缩放等操作时的迟滞因子，在大于等于 1 的时候鼠标在停止操作后，视角仍会因为一定的惯性继续运动（旋转和缩放）。[ default: 0.8 ]
        rotateSensitivity: 1, // 旋转操作的灵敏度，值越大越灵敏。支持使用数组分别设置横向和纵向的旋转灵敏度。默认为1, 设置为0后无法旋转。	rotateSensitivity: [1, 0]——只能横向旋转； rotateSensitivity: [0, 1]——只能纵向旋转。
        zoomSensitivity: 1, // 缩放操作的灵敏度，值越大越灵敏。默认为1,设置为0后无法缩放。
        panSensitivity: 1, // 平移操作的灵敏度，值越大越灵敏。默认为1,设置为0后无法平移。支持使用数组分别设置横向和纵向的平移灵敏度
        panMouseButton: "left", // 平移操作使用的鼠标按键，支持：'left' 鼠标左键（默认）;'middle' 鼠标中键 ;'right' 鼠标右键(注意：如果设置为鼠标右键则会阻止默认的右键菜单。)
        rotateMouseButton: "left", // 旋转操作使用的鼠标按键，支持：'left' 鼠标左键;'middle' 鼠标中键（默认）;'right' 鼠标右键(注意：如果设置为鼠标右键则会阻止默认的右键菜单。)
        distance: 100, // [ default: 100 ] 默认视角距离主体的距离，对于 grid3D 和 geo3D 等其它组件来说是距离中心原点的距离,对于 globe 来说是距离地球表面的距离。在 projection 为'perspective'的时候有效。
        minDistance: 40, // [ default: 40 ] 视角通过鼠标控制能拉近到主体的最小距离。在 projection 为'perspective'的时候有效。
        maxDistance: 400, // [ default: 400 ] 视角通过鼠标控制能拉远到主体的最大距离。在 projection 为'perspective'的时候有效。
        alpha: 40, // 视角绕 x 轴，即上下旋转的角度。配合 beta 可以控制视角的方向。[ default: 40 ]
        beta: 15, // 视角绕 y 轴，即左右旋转的角度。[ default: 0 ]
        minAlpha: -360, // 上下旋转的最小 alpha 值。即视角能旋转到达最上面的角度。[ default: 5 ]
        maxAlpha: 360, // 上下旋转的最大 alpha 值。即视角能旋转到达最下面的角度。[ default: 90 ]
        minBeta: -360, // 左右旋转的最小 beta 值。即视角能旋转到达最左的角度。[ default: -80 ]
        maxBeta: 360, // 左右旋转的最大 beta 值。即视角能旋转到达最右的角度。[ default: 80 ]
        center: [0, 0, 0], // 视角中心点，旋转也会围绕这个中心点旋转，默认为[0,0,0]。
        animation: true, // 是否开启动画。[ default: true ]
        animationDurationUpdate: 1000, // 过渡动画的时长。[ default: 1000 ]
        animationEasingUpdate: "cubicInOut", // 过渡动画的缓动效果。[ default: cubicInOut ]
      },
    },
    {
      type: "scatter3D",
      coordinateSystem: "geo3D",
      zlevel: 3,
      symbol: "circle",
      symbolSize: 16,
      label: {
        show: true,
        position: "right",
        formatter: "{b}",
        color: "#fff",
        fontSize: 14,
        backgroundColor: "transparent",
      },
      data: [
        {
          name: "中心机房",
          value: [85.74, 41.6, 2],
        },
        {
          name: "机房1",
          value: [86.23, 41.74, 2],
        },
        {
          name: "机房2",
          value: [85.92, 41.4, 2],
        },
        {
          name: "机房3",
          value: [85.62, 41.38, 2],
        },
        {
          name: "机房4",
          value: [85.3295, 41.58, 2],
        },
        {
          name: "机房5",
          value: [85.5, 41.99, 2],
        },
      ],
      itemStyle: {
        color: "#2681cf",
        shadowBlur: 20,
        shadowColor: "#fff",
      },
      emphasis: {
        itemStyle: {
          color: "#1ca1d2",
        },
      },
    },
    {
      type: "lines3D",
      coordinateSystem: "geo3D",
      zlevel: 1, //设置这个才会有轨迹线的小尾巴
      polyline: false,
      effect: {
        show: true,
        period: 10,
        trailLength: 0.1,
        trailColor: "#17eafe",
        color: "#fff",
        symbol: "arrow",
        symbolSize: 6,
      },
      lineStyle: {
        color: "#fff",
        width: 1,
        curveness: 0.5,
        shadowColor: "#fff",
      },
      blendMode: "lighter",
      data: [
        {
          fromName: "中心机房",
          toName: "机房1",
          coords: [
            [85.74, 41.6, 1],
            [86.23, 41.74, 1],
          ],
        },
        {
          fromName: "中心机房",
          toName: "机房2",
          coords: [
            [85.74, 41.6, 1],
            [85.92, 41.4, 1],
          ],
        },
        {
          fromName: "中心机房",
          toName: "机房3",
          coords: [
            [85.74, 41.6, 1],
            [85.62, 41.38, 1],
          ],
        },
        {
          fromName: "中心机房",
          toName: "机房4",
          coords: [
            [85.74, 41.6, 1],
            [85.3295, 41.58, 1],
          ],
        },
        {
          fromName: "中心机房",
          toName: "机房5",
          coords: [
            [85.74, 41.6, 1],
            [85.5, 41.99, 1],
          ],
        },
      ],
    },
  ],
};
