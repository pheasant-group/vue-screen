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
      <ChartsBorder
        v-if="index === 1"
        class="grid-item"
      />
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
      ]
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
  .vue-grid-item > .vue-resizable-handle {
    display: none;
  }
}
</style>
