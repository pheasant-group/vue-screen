<template>
  <grid-layout
    :layout.sync="layout"
    :margin="[0, 0]"
    :col-num="100"
    :row-height="rowHeight"
    :use-css-transforms="true"
    :vertical-compact="false"
    @layout-ready="layoutReadyEvent"
  >
    <grid-item
      v-for="(item, index) in layout"
      :key="item.i"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i"
      @resize="resizeEvent"
      @resized="resizedEvent"
    >
      <template v-if="layoutContentShow">
        <router-view :index="index"></router-view>
      </template>
    </grid-item>
  </grid-layout>
</template>

<script>
import { mapGetters } from "vuex";
import { GridLayout, GridItem } from "vue-grid-layout";
import { debounce } from "@/utils";

export default {
  components: {
    GridLayout,
    GridItem,
  },
  computed: {
    ...mapGetters(["setting"]),
  },
  data() {
    return {
      layoutContentShow: false, // 控制布局内的容器的渲染
      $_resizeHandler: null,
      rowHeight: window.innerHeight / 100,
      layout: [],
    };
  },
  created() {
    this.layout = this.setting.layout;
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
    // layout渲染好之后才能渲染里面的内容，保证echarts在渲染之前就可以拿到真实的宽高
    layoutReadyEvent() {
      this.layoutContentShow = true;
    },
    // 调整大小之前
    resizeEvent() {
      this.layoutContentShow = false;
    },
    // 调整大小后的事件
    resizedEvent() {
      this.layoutContentShow = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.vue-grid-layout {
  overflow: hidden;
  .vue-grid-item:not(.vue-grid-placeholder) {
    border: 1px solid red;
    box-sizing: border-box;
  }
  .vue-grid-item {
    touch-action: none;
    .vue-resizable-handle {
      display: none;
    }
  }
}
</style>
