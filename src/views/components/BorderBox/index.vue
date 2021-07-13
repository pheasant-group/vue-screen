<template>
  <component v-bind:is="border" class="border" v-bind="$attrs" v-if="render">
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
  data() {
    return {
      render: true,
    };
  },
  watch: {
    border() {
      this.render = false;
      this.render = true;
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
