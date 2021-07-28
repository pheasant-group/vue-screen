import * as echarts from "echarts";

export default {
  xAxis: {
    type: "category",
    boundaryGap: true,
    axisLine: {
      lineStyle: {
        color: "rgba(255,255,255,0.3)",
      },
    },
    axisLabel: {
      color: "rgba(255,255,255,0.7)",
    },
    axisTick: {
      alignWithLabel: true,
    },
  },
  yAxis: {
    type: "value",
    axisLine: {
      lineStyle: {
        color: "rgba(255,255,255,0.7)",
      },
    },
    splitLine: {
      lineStyle: {
        color: "rgba(255,255,255,0.3)", // 分割线颜色
      },
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "13%",
    containLabel: true,
  },
  series: [
    {
      // data: [820, 932, 901, 934, 1290, 1330],
      type: "line",
      color: "rgba(7,165,255,1)", //折线颜色
      smooth: true, //折线是否带有弧度
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgba(255,255,255,1)",
          },
          {
            offset: 1,
            color: "rgba(255,255,255,.1)",
          },
        ]),
      },
    },
    {
      type: "line",
      color: "#00f2f1", //折线颜色
      smooth: true, //折线是否带有弧度
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgba(23,241,236,1)",
          },
          {
            offset: 1,
            color: "rgba(23,241,236,0.1)",
          },
        ]),
      },
    },
  ],
};
