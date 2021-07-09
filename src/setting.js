module.exports = {
  // 设置面板是否显示
  showSetting: true,
  title: "Vue-screen",
  bgColor: "#030409",
  fontColor: "#fff",
  globalBorder: "dv-border-box-12",
  /**
   * @description 图表全局配色，color属性用来配置图表颜色，配置的颜色将自动覆盖默认配色，颜色支持hex|rgb|rgba，不支持如'red'等描述颜色
   * @type {Array}
   * @default color = []
   */
  chartscolor: ["#37a2da"],
  // title用来显示图表的标题
  chartstitle: {
    /**
     * @description 是否显示标题
     * @type {Boolean}
     * @default show = true
     */
    show: true,
    /**
     * @description 标题文本
     * @type {String}
     * @default text = ''
     */
    text: "",
    /**
     * @description 标题位置偏移
     * @type {Array}
     * @default offset = [0, -20]
     */
    offset: [0, -20],
    /**
     * @description 标题默认样式
     * @type {Object}
     * @default style = {Class Style的配置项}
     */
    style: {
      fill: "#fff",
      fontSize: 20,
      fontWeight: "bold",
      textBaseline: "bottom",
    },
    /**
     * @description 标题渲染级别
     * 级别高者优先渲染
     * @type {Number}
     * @default rLevel = 20
     */
    rLevel: 20,
    /**
     * @description 标题缓动曲线
     * @type {String}
     * @default animationCurve = 'easeOutCubic'
     */
    animationCurve: "easeOutCubic",
    /**
     * @description 标题缓动效果帧数
     * @type {Number}
     * @default animationFrame = 50
     */
    animationFrame: 50,
  },
  chartslegend: {
    /**
     * @description 是否显示图例标签
     * @type {Boolean}
     * @default show = true
     */
    show: true,
    /**
     * @description 图例标签方向
     * @type {String}
     * @default orient = 'horizontal'
     * @example orient = 'horizontal' | 'vertical'
     */
    orient: "horizontal",
    /**
     * @description 图例标签左边距
     * 优先级高于right
     * @type {String|Number}
     * @default left = 'auto'
     * @example left = 'auto' | '10%' | 10
     */
    left: "auto",
    /**
     * @description 图例标签右边距
     * @type {String|Number}
     * @default right = 'auto'
     * @example right = 'auto' | '10%' | 10
     */
    right: "auto",
    /**
     * @description 图例标签上边距
     * 优先级高于bottom
     * @type {String|Number}
     * @default top = 'auto'
     * @example top = 'auto' | '10%' | 10
     */
    top: "auto",
    /**
     * @description 图例标签下边距
     * @type {String|Number}
     * @default bottom = 'auto'
     * @example bottom = 'auto' | '10%' | 10
     */
    bottom: "auto",
    /**
     * @description 标签间距
     * @type {Number}
     * @default itemGap = 10
     */
    itemGap: 10,
    /**
     * @description 图例标签图标的宽度
     * @type {Number}
     * @default iconWidth = 25
     */
    iconWidth: 25,
    /**
     * @description 图例标签图标的高度
     * @type {Number}
     * @default iconHeight = 10
     */
    iconHeight: 10,
    /**
     * @description 图里标签是否具有选择功能
     * 点击以隐藏/显示对应的series子图表
     * @type {Boolean}
     * @default selectAble = true
     */
    selectAble: true,
    /**
     * @description 图例标签文字默认样式
     * @type {Object}
     * @default style = {Class Style的配置项}
     */
    textStyle: {
      fontFamily: "Arial",
      fontSize: 13,
      fill: "#000",
    },
    /**
     * @description 图例标签图标默认样式
     * @type {Object}
     * @default style = {Class Style的配置项}
     */
    iconStyle: {},
    /**
     * @description 未选择的图例标签文字默认样式
     * @type {Object}
     * @default style = {Class Style的配置项}
     */
    textUnselectedStyle: {
      fontFamily: "Arial",
      fontSize: 13,
      fill: "#999",
    },
    /**
     * @description 未选择的图例标签图标默认样式
     * @type {Object}
     * @default style = {Class Style的配置项}
     */
    iconUnselectedStyle: {
      fill: "#999",
    },
    /**
     * @description 图例标签渲染级别
     * 级别高者优先渲染
     * @type {Number}
     * @default rLevel = 20
     */
    rLevel: 20,
    /**
     * @description 图例标签缓动曲线
     * @type {String}
     * @default animationCurve = 'easeOutCubic'
     */
    animationCurve: "easeOutCubic",
    /**
     * @description 图例标签缓动效果帧数
     * @type {Number}
     * @default animationFrame = 50
     */
    animationFrame: 50,
  },
  chartsxAxis: {
    /**
     * @description 是否展示该坐标轴
     * @type {Boolean}
     * @default show = true
     */
    show: true,
    /**
     * @description 坐标轴位置
     * @type {String}
     * @default position = 'bottom'
     * @example position = 'bottom' | 'top'
     */
    position: "bottom",
    /**
     * @description 名称与坐标轴间距
     * @type {Number}
     * @default nameGap = 15
     */
    nameGap: 15,
    /**
     * @description 名称位置
     * @type {String}
     * @default nameLocation = 'end'
     * @example nameLocation = 'end' | 'center' | 'start'
     */
    nameLocation: "end",
    /**
     * @description 名称默认样式
     * @type {Object}
     * @default style = {Class Style的配置项}
     */
    nameTextStyle: {
      fill: "#333",
      fontSize: 10,
    },
    /**
     * @description 坐标轴最小值
     * data属性为'value'时才生效
     * @type {String|Number}
     * @default min = '20%'
     * @example min = '20%' | 0
     */
    min: "20%",
    /**
     * @description 坐标轴最大值
     * data属性为'value'时才生效
     * @type {String|Number}
     * @default max = '20%'
     * @example max = '20%' | 0
     */
    max: "20%",
    /**
     * @description 数值间距
     * data属性为'value'时才生效
     * @type {Number}
     * @default interval = null
     * @example interval = 100
     */
    interval: null,
    /**
     * @description 最小数值间距
     * data属性为'value'时才生效
     * @type {Number}
     * @default minInterval = null
     * @example minInterval = 1
     */
    minInterval: null,
    /**
     * @description 最大数值间距
     * data属性为'value'时才生效
     * @type {Number}
     * @default maxInterval = null
     * @example maxInterval = 100
     */
    maxInterval: null,
    /**
     * @description 边界间隔
     * data属性不为'value'时默认为true
     * @type {Boolean}
     * @default boundaryGap = null
     * @example boundaryGap = true
     */
    boundaryGap: null,
    /**
     * @description 坐标轴分割个数
     * @type {Number}
     * @default splitNumber = 5
     */
    splitNumber: 5,
    /**
     * @description 坐标轴线配置
     * @type {Object}
     */
    axisLine: {
      /**
       * @description 是否显示该轴线
       * @type {Boolean}
       * @default show = true
       */
      show: true,
      /**
       * @description 轴线默认样式
       * @type {Object}
       * @default style = {Class Style的配置项}
       */
      style: {
        stroke: "#333",
        lineWidth: 1,
      },
    },
    /**
     * @description 坐标轴刻度线配置
     * @type {Object}
     */
    axisTick: {
      /**
       * @description 是否显示刻度线
       * @type {Boolean}
       * @default show = true
       */
      show: true,
      /**
       * @description 刻度线默认样式
       * @type {Object}
       * @default style = {Class Style的配置项}
       */
      style: {
        stroke: "#333",
        lineWidth: 1,
      },
    },
    /**
     * @description 坐标轴标签配置
     * @type {Object}
     */
    axisLabel: {
      /**
       * @description 是否显示坐标轴标签
       * @type {Boolean}
       * @default show = true
       */
      show: true,
      /**
       * @description 标签格式化
       * @type {String|Function}
       * @default formatter = null
       * @example formatter = '{value}件'
       * @example formatter = (dataItem) => (dataItem.value)
       */
      formatter: null,
      /**
       * @description 标签默认样式
       * @type {Object}
       * @default style = {Class Style的配置项}
       */
      style: {
        fill: "#333",
        fontSize: 10,
        rotate: 0,
      },
    },
    /**
     * @description 坐标轴分割线配置
     * @type {Object}
     */
    splitLine: {
      /**
       * @description 是否显示分割线
       * @type {Boolean}
       * @default show = false
       */
      show: true,
      /**
       * @description 分割线默认样式
       * @type {Object}
       * @default style = {Class Style的配置项}
       */
      style: {
        stroke: "#d4d4d4",
        lineWidth: 1,
      },
      /**
       * @description X坐标轴渲染级别
       * 级别高者优先渲染
       * @type {Number}
       * @default rLevel = -20
       */
      rLevel: -20,
      /**
       * @description 图例标签缓动曲线
       * @type {String}
       * @default animationCurve = 'easeOutCubic'
       */
      animationCurve: "easeOutCubic",
      /**
       * @description 图例标签缓动效果帧数
       * @type {Number}
       * @default animationFrame = 50
       */
      animationFrame: 50,
    },
  },
  chartsyAxis: {
    /**
     * @description 是否展示该坐标轴
     * @type {Boolean}
     * @default show = true
     */
    show: true,
    /**
     * @description 坐标轴位置
     * @type {String}
     * @default position = 'left'
     * @example position = 'left' | 'right'
     */
    position: "left",
    /**
     * @description 名称与坐标轴间距
     * @type {Number}
     * @default nameGap = 15
     */
    nameGap: 15,
    /**
     * @description 名称位置
     * @type {String}
     * @default nameLocation = 'end'
     * @example nameLocation = 'end' | 'center' | 'start'
     */
    nameLocation: "end",
    /**
     * @description 名称默认样式
     * @type {Object}
     * @default style = {Class Style的配置项}
     */
    nameTextStyle: {
      fill: "#333",
      fontSize: 10,
    },
    /**
     * @description 坐标轴最小值
     * data属性为'value'时才生效
     * @type {String|Number}
     * @default min = '20%'
     * @example min = '20%' | 0
     */
    min: "20%",
    /**
     * @description 坐标轴最大值
     * data属性为'value'时才生效
     * @type {String|Number}
     * @default max = '20%'
     * @example max = '20%' | 0
     */
    max: "20%",
    /**
     * @description 数值间距
     * data属性为'value'时才生效
     * @type {Number}
     * @default interval = null
     * @example interval = 100
     */
    interval: null,
    /**
     * @description 最小数值间距
     * data属性为'value'时才生效
     * @type {Number}
     * @default minInterval = null
     * @example minInterval = 1
     */
    minInterval: null,
    /**
     * @description 最大数值间距
     * data属性为'value'时才生效
     * @type {Number}
     * @default maxInterval = null
     * @example maxInterval = 100
     */
    maxInterval: null,
    /**
     * @description 边界间隔
     * data属性不为'value'时默认为true
     * @type {Boolean}
     * @default boundaryGap = null
     * @example boundaryGap = true
     */
    boundaryGap: null,
    /**
     * @description 坐标轴分割个数
     * @type {Number}
     * @default splitNumber = 5
     */
    splitNumber: 5,
    /**
     * @description 坐标轴线配置
     * @type {Object}
     */
    axisLine: {
      /**
       * @description 是否显示该轴线
       * @type {Boolean}
       * @default show = true
       */
      show: true,
      /**
       * @description 轴线默认样式
       * @type {Object}
       * @default style = {Class Style的配置项}
       */
      style: {
        stroke: "#333",
        lineWidth: 1,
      },
    },
    /**
     * @description 坐标轴刻度线配置
     * @type {Object}
     */
    axisTick: {
      /**
       * @description 是否显示刻度线
       * @type {Boolean}
       * @default show = true
       */
      show: true,
      /**
       * @description 刻度线默认样式
       * @type {Object}
       * @default style = {Class Style的配置项}
       */
      style: {
        stroke: "#333",
        lineWidth: 1,
      },
    },
    /**
     * @description 坐标轴标签配置
     * @type {Object}
     */
    axisLabel: {
      /**
       * @description 是否显示坐标轴标签
       * @type {Boolean}
       * @default show = true
       */
      show: true,
      /**
       * @description 标签格式化
       * @type {String|Function}
       * @default formatter = null
       * @example formatter = '{value}件'
       * @example formatter = (dataItem) => (dataItem.value)
       */
      formatter: null,
      /**
       * @description 标签默认样式
       * @type {Object}
       * @default style = {Class Style的配置项}
       */
      style: {
        fill: "#333",
        fontSize: 10,
        rotate: 0,
      },
    },
    /**
     * @description 坐标轴分割线配置
     * @type {Object}
     */
    splitLine: {
      /**
       * @description 是否显示分割线
       * @type {Boolean}
       * @default show = false
       */
      show: true,
      /**
       * @description 分割线默认样式
       * @type {Object}
       * @default style = {Class Style的配置项}
       */
      style: {
        stroke: "#d4d4d4",
        lineWidth: 1,
      },
      /**
       * @description X坐标轴渲染级别
       * 级别高者优先渲染
       * @type {Number}
       * @default rLevel = -20
       */
      rLevel: -20,
      /**
       * @description 图例标签缓动曲线
       * @type {String}
       * @default animationCurve = 'easeOutCubic'
       */
      animationCurve: "easeOutCubic",
      /**
       * @description 图例标签缓动效果帧数
       * @type {Number}
       * @default animationFrame = 50
       */
      animationFrame: 50,
    },
  },
  chartsgrid: {
    /**
     * @description 网格左边距
     * @type {String|Number}
     * @default left = '10%'
     * @example left = '10%' | 10
     */
    left: "10%",
    /**
     * @description 网格右边距
     * @type {String|Number}
     * @default right = '10%'
     * @example right = '10%' | 10
     */
    right: "10%",
    /**
     * @description 网格上边距
     * @type {String|Number}
     * @default top = 60
     * @example top = '10%' | 60
     */
    top: 60,
    /**
     * @description 网格下边距
     * @type {String|Number}
     * @default bottom = 60
     * @example bottom = '10%' | 60
     */
    bottom: 60,
    /**
     * @description 网格默认样式
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    style: {
      fill: "rgba(0, 0, 0, 0)",
    },
    /**
     * @description 柱状图渲染级别
     * 级别高者优先渲染
     * @type {Number}
     * @default rLevel = -30
     */
    rLevel: -30,
    /**
     * @description 图例标签缓动曲线
     * @type {String}
     * @default animationCurve = 'easeOutCubic'
     */
    animationCurve: "easeOutCubic",
    /**
     * @description 图例标签缓动效果帧数
     * @type {Number}
     * @default animationFrame = 50
     */
    animationFrame: 50,
  },
  chartsradarAxis: {},
  chartsline: {},
  chartsbar: {},
  chartspie: {},
  chartsradar: {},
  chartsgauge: {},
};
