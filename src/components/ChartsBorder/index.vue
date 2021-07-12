<template>
  <BorderBox v-bind="$attrs">
    <Charts v-bind="$attrs"></Charts>
  </BorderBox>
</template>

<script>
import BorderBox from "@/components/BorderBox";
import Charts from "@/components/Charts";
export default {
  name: "ChartsBorder",
  components: {
    BorderBox,
    Charts,
  },
};
</script>
