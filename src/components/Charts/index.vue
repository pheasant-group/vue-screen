<template>
  <div :ref="ref" class="chart" :style="{ width: width, height: height }"></div>
</template>

<script>
import { uuid, debounce } from "@/utils";

export default {
  name: "Charts",
  props: {
    theme: {
      type: String,
      default: "dark",
    },
    option: {
      type: Object,
      default: () => {
        return {
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              data: [150, 230, 224, 218, 135, 147, 260],
              type: "line",
            },
          ],
        };
      },
    },
  },
  data() {
    return {
      ref: uuid(),
      width: "100%",
      height: "100%",
      chart: null,
      $_resizeHandler: null,
    };
  },
  watch: {
    theme: {
      handler(value) {
        this.$nextTick(() => {
          this.chart && this.chart.showLoading();
          this.chart && this.chart.dispose();
          if (["dark", "light"].includes(value)) {
            this.chart = this.$echarts.init(this.$refs[this.ref], value);
          } else {
            const data = require(`@/theme/${value}.json`);
            this.$echarts.registerTheme(value, data);
            this.chart = this.$echarts.init(this.$refs[this.ref], value);
          }
          this.chart.setOption(this.option);
        });
      },
      immediate: true,
    },
  },
  mounted() {
    this.width = this.$refs[this.ref].clientWidth;
    this.height = this.$refs[this.ref].clientHeight;
    // 监听window的resize
    this.initListener();
  },
  methods: {
    initListener() {
      this.$_resizeHandler = debounce(() => {
        this.chart.resize();
      }, 100);
      window.addEventListener("resize", this.$_resizeHandler);
    },
    destroyListener() {
      window.removeEventListener("resize", this.$_resizeHandler);
      this.$_resizeHandler = null;
    },
  },
  destroyed() {
    this.destroyListener();
  },
};
</script>
