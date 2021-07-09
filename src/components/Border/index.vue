<template>
  <component v-bind:is="border" class="border">
    <slot />
  </component>
</template>

<script>
export default {
  name: "Border",
  props: {
    border: {
      type: String,
      default: "div",
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
