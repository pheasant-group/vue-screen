<template>
  <grid-layout
    :layout.sync="layout"
    :margin="[0, 0]"
    :col-num="100"
    :row-height="rowHeight"
    :use-css-transforms="true"
    :vertical-compact="false"
  >
    <grid-item
      v-for="(item, index) in layout"
      :key="item.i"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i"
    >
      <Charts-border v-if="index === 0" :option="option1" class="charts-border-item" />
    </grid-item>
  </grid-layout>
</template>

<script>
import { GridLayout, GridItem } from "vue-grid-layout";
import ChartsBorder from "@/components/ChartsBorder";
import { debounce } from "@/utils";

export default {
  components: {
    GridLayout,
    GridItem,
    ChartsBorder,
  },
  data() {
    return {
      $_resizeHandler: null,
      rowHeight: window.innerHeight / 100,
      layout: [
        { x: 0, y: 0, w: 100, h: 10, i: "0" },
        { x: 0, y: 10, w: 25, h: 30, i: "1" },
        { x: 0, y: 40, w: 25, h: 30, i: "2" },
        { x: 0, y: 70, w: 25, h: 30, i: "3" },
        { x: 25, y: 10, w: 50, h: 60, i: "4" },
        // { x: 25, y: 40, w: 25, h: 30, i: "5" },
        { x: 25, y: 70, w: 50, h: 30, i: "6" },
        { x: 75, y: 10, w: 25, h: 30, i: "7" },
        { x: 75, y: 40, w: 25, h: 30, i: "8" },
        { x: 75, y: 70, w: 25, h: 30, i: "9" },
      ],
      option1: {
        title: {
          text: "周销售额趋势",
        },
        xAxis: {
          name: "第二周",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
        yAxis: {
          name: "销售额",
          data: "value",
        },
        series: [
          {
            data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
            type: "line",
            smooth: true,
            lineArea: {
              show: true,
            },
          },
        ],
      },
    };
  },
  mounted() {
    this.initListener();
  },
  methods: {
    initListener() {
      this.$_resizeHandler = debounce(() => {
        this.rowHeight = window.innerHeight / 100;
      }, 100);
      window.addEventListener("resize", this.$_resizeHandler);
    },
    destroyListener() {
      window.removeEventListener("resize", this.$_resizeHandler);
      this.$_resizeHandler = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.vue-grid-layout {
  overflow: hidden;
  .vue-grid-item:not(.vue-grid-placeholder) {
    /* border: 1px solid black; */
    box-sizing: border-box;
  }
}
</style>
