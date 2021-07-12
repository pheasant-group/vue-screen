<template>
  <grid-layout
    :layout.sync="layout"
    :margin="[0, 0]"
    :col-num="100"
    :row-height="rowHeight"
    :use-css-transforms="true"
    :vertical-compact="true"
    :is-draggable="setting.settingShow"
    :is-resizable="setting.settingShow"
    @layout-ready="layoutReadyEvent"
    @layout-updated="layoutUpdatedEvent"
    :style="{ backgroundColor: setting.bgColor }"
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
      :style="{ dispaly: setting.settingShow ? 'none' : 'block' }"
      :class="{ 'border-resize': setting.settingShow }"
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
    this.settingShow = Boolean(this.$route.query.config);
    this.$store.dispatch("setting/changeSetting", {
      key: "settingShow",
      value: this.settingShow,
    });
    this.$watch(
      () => {
        return this.setting.layout;
      },
      (value) => {
        this.layout = value;
      }
    );
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
    // 调整后保存
    layoutUpdatedEvent() {
      this.$store.dispatch("setting/changeSetting", {
        key: "layout",
        value: this.layout,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.vue-grid-layout {
  overflow: hidden;
  min-height: 100%;
  .vue-grid-item {
    touch-action: none;
  }
}
::v-deep {
  .vue-grid-item > .vue-resizable-handle {
    background: url("data:image/svg+xml;base64,PHN2ZyBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjYiIGhlaWdodD0iNiI+DQoJPHBhdGggZD0iTTYgNkgwVjQuMmg0LjJWMEg2djZ6IiBmaWxsPSJyZWQiIC8+DQo8L3N2Zz4NCg==");
    background-repeat: no-repeat;
    box-sizing: border-box;
  }
  .border-resize {
    box-sizing: border-box;
  }
}
</style>
