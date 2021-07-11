<template>
  <div
    :ref="ref"
    class="charts"
    :style="{ width: width, height: height }"
  ></div>
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
      charts: null,
      $_resizeHandler: null,
    };
  },
  watch: {
    theme(value) {
      this.charts = this.$echarts.init(this.$refs[this.ref], value);
    },
  },
  mounted() {
    this.width = this.$refs[this.ref].clientWidth;
    this.height = this.$refs[this.ref].clientHeight;
    this.charts = this.$echarts.init(this.$refs[this.ref], this.theme);
    this.charts.setOption(this.option);
    // 监听window的resize
    this.initListener();
  },
  methods: {
    initListener() {
      this.$_resizeHandler = debounce(() => {
        this.charts.resize()
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