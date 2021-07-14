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
        border: setting.settingShow ? 'solid 1px red' : 'none',
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
        <Header
          v-if="item.i === '0'"
          :title="setting.title"
          :bgColor="setting.bgColor"
          :fontColor="setting.fontColor"
          :headerBgImg="setting.headerBgImg"
        />
        <template v-for="number in setting.layout.length - 1">
          <template v-if="item.i === String(number) && [4].includes(number)">
            <ChartsBorder
              :key="number"
              :option="
                option.find((item) => item.name === `option${number}`).value
                  .default
              "
            />
          </template>
          <template v-if="item.i === String(number) && ![4].includes(number)">
            <ChartsBorder
              :key="number"
              :option="
                option.find((item) => item.name === `option${number}`).value
                  .default
              "
              mapJson="库尔勒市"
            />
          </template>
        </template>
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
import Header from "@/components/Header";
import ChartsBorder from "@/views/components/ChartsBorder";

export default {
  name: "Home",
  components: {
    GridLayout,
    GridItem,
    RightPanel,
    Setting,
    Header,
    ChartsBorder,
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
      option: [],
    };
  },
  created() {
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
        // 根据拉layout布局长度引入option
        for (let index = 1; index < this.layout.length; index++) {
          let option = require(`@/views/option/option${index}.js`);
          this.option.push({
            name: `option${index}`,
            value: option,
          });
        }
        // 如果layout长度 - 1 > option长度，说明缺少option
        const optionLength = require
          .context("@/views/option", false, /.js/)
          .keys()
          .map((item) => item.replace(/\.\/(.*)\.js/, "$1")).length;
        if (optionLength < this.layout.length - 1) {
          console.warn("缺少option");
        }
      },
      {
        immediate: true,
      }
    );
  },
  mounted() {
    this.initListener();
    // 模拟请求后台数据
    setTimeout(() => {
      this.layoutContentShow = false;
      const index = this.option.findIndex((item) => item.name === 'option1');
      console.log(this.option[index])
      this.option[index].value.default = {
        ...this.option[index].value.default,
        // 从后台请求的dataset
        dataset: {
          source: [
            {
              date: "07-01",
              orderAmt: 90.05,
              orderNum: 546,
            },
            {
              date: "07-02",
              orderAmt: 80.05,
              orderNum: 346,
            },
            {
              date: "07-03",
              orderAmt: 700.05,
              orderNum: 646,
            },
          ],
        },
      };
      this.layoutContentShow = true;
    }, 1000);
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
      // this.layoutContentShow = true;
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
    box-sizing: border-box;
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
