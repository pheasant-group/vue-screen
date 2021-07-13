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
      v-for="item in layout"
      :key="item.i"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i"
      :style="{
        dispaly: setting.settingShow ? 'none' : 'block',
        border: !layoutContentShow ? 'solid 1px red' : 'none',
      }"
      :class="{ 'border-resize': setting.settingShow }"
      @move="moveEvent"
      @moved="movedEvent"
      @resize="resizeEvent"
      @resized="resizedEvent"
    >
      <span
        v-if="setting.settingShow"
        class="remove"
        @click="removeItem(item.i)"
        >x</span
      >
      <template v-if="layoutContentShow">
        <router-view :i="item.i"></router-view>
      </template>
    </grid-item>
    <right-panel v-if="setting.settingShow">
      <Setting />
    </right-panel>
  </grid-layout>
</template>

<script>
import { mapGetters } from "vuex";
import { GridLayout, GridItem } from "vue-grid-layout";
import RightPanel from "@/components/RightPanel";
import Setting from "@/views/config/setting.vue";
import { debounce } from "@/utils";
import { MessageBox } from "element-ui";

export default {
  components: {
    GridLayout,
    GridItem,
    RightPanel,
    Setting,
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
    // 移动时
    moveEvent() {
      this.layoutContentShow = false;
    },
    // 移动之后
    movedEvent() {
      this.layoutContentShow = true;
    },
    // 调整后保存
    layoutUpdatedEvent() {
      this.$store.dispatch("setting/changeSetting", {
        key: "layout",
        value: this.layout,
      });
    },
    removeItem: function(value) {
      MessageBox.confirm("确定要删除么?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        const index = this.layout.map((item) => item.i).indexOf(value);
        this.layout.splice(index, 1);
        this.layoutUpdatedEvent();
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
    .remove {
      color: red;
      font-size: 30px;
      position: absolute;
      top: 0px;
      right: 15px;
      width: 10px;
      height: 10px;
      cursor: pointer;
      z-index: 999 !important;
    }
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
