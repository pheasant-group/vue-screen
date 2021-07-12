<template>
  <component v-bind:is="border" class="border">
    <slot />
  </component>
</template>

<script>
export default {
  name: "BorderBox",
  props: {
    border: {
      type: String,
      default: "Border1",
    },
  },
};
</script>

<style lang="scss" scoped>
.border {
  height: 100%;
  width: 100%;
}
</style>
