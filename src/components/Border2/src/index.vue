<template>
  <div class="border2">
    <div class="border-container" :style="{ borderColor: borderColor }">
      <div class="border-box-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Border2",
  props: {
    title: {
      type: String,
    },
    borderColor: {
      type: String,
      default: "#5473bf",
    },
  },
};
</script>

<style lang="scss" scoped>
.border2 {
  position: relative;
  width: 100%;
  height: 100%;
  .border-container {
    border-width: 1px;
    border-style: solid;
    box-sizing: border-box;
    position: absolute;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    top: 5px;
    left: 5px;
  }
  .border-box-content {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>
