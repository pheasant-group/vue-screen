<template>
  <Border v-bind="$attrs">
    <Charts v-bind="$attrs"></Charts>
  </Border>
</template>

<script>
import Border from "@/components/BorderBox";
import Charts from "@/components/Charts";
export default {
  name: "ChartsBorder",
  components: {
    Border,
    Charts,
  },
};
</script>
