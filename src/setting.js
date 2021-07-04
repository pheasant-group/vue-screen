module.exports = {
  // 设置面板是否显示
  showSetting: true,
  title: "Vue2-datav-screen",
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
    style: {
      fill: "#fff",
      fontSize: 20,
      fontWeight: "bold",
      textBaseline: "bottom",
    },
  },
  chartslegend: {},
  chartsxAxis: {},
  chartsyAxis: {},
  chartsgrid: {},
  chartsradarAxis: {},
  chartsline: {},
  chartsbar: {},
  chartspie: {},
  chartsradar: {},
  chartsgauge: {},
};
