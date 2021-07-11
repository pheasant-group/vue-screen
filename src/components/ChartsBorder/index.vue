<template>
  <Border v-bind="$attrs">
    <Charts v-bind="$attrs"></Charts>
  </Border>
</template>

<script>
import Border from "@/components/Border";
import Charts from "@/components/Charts";
export default {
  name: "ChartsBorder",
  components: {
    Border,
    Charts,
  },
};
</script>

<style lang="scss" scoped>

</style>
