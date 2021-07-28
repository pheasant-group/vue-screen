<template>
  <BorderBox
    v-bind="$attrs"
    :border="setting.globalBorder"
    :border-color="setting.globalBorderColor"
  >
    <Charts v-bind="$attrs" :theme="setting.theme"></Charts>
  </BorderBox>
</template>

<script>
import { mapGetters } from "vuex";
import BorderBox from "@/views/components/BorderBox";
import Charts from "@/components/Charts";

export default {
  name: "ChartsBorder",
  components: {
    BorderBox,
    Charts,
  },
  computed: {
    ...mapGetters(["setting"]),
  },
};
</script>
