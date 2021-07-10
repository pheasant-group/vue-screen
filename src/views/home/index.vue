<template>
  <div class="home" :style="{ backgroundColor: setting.bgColor }">
    <Header v-if="index === 0" :title="setting.title" />
    <ChartsBorder v-if="index === 1" :option="option1" :theme="setting.theme" />
    <ChartsBorder v-if="index === 2" :option="option1" :theme="setting.theme" />
    <right-panel v-if="setting.showSetting && $route.query.config">
      <Setting />
    </right-panel>
  </div>
</template>

<script>
import Header from "@/components/Header";
import RightPanel from "@/components/RightPanel";
import Setting from "@/views/config/setting.vue";
import ChartsBorder from "@/components/ChartsBorder";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Header,
    RightPanel,
    Setting,
    ChartsBorder,
  },
  props: {
    index: {
      type: Number,
    },
  },
  computed: {
    ...mapGetters(["setting"]),
  },
  data() {
    return {
      option1: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true,
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;
}
</style>
