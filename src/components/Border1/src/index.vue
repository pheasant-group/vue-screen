<template>
  <div class="border1">
    <div class="border-container" :style="{ borderColor: borderColor }">
      <div class="right-top"></div>
      <div class="right-bottom"></div>
      <div class="left-bottom"></div>
      <div class="border-box-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Border1",
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
.border1 {
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
    .right-top {
      position: absolute;
      right: -1px;
      top: -1px;
      border-top: 2px solid rgba(23, 241, 236, 1);
      border-right: 2px solid rgba(23, 241, 236, 1);
      width: 15px;
      height: 15px;
    }
    .right-bottom {
      position: absolute;
      right: -1px;
      bottom: -1px;
      border-bottom: 2px solid rgba(23, 241, 236, 1);
      border-right: 2px solid rgba(23, 241, 236, 1);
      width: 15px;
      height: 15px;
    }
    .left-bottom {
      position: absolute;
      left: -1px;
      bottom: -1px;
      border-bottom: 2px solid rgba(23, 241, 236, 1);
      border-left: 2px solid rgba(23, 241, 236, 1);
      width: 15px;
      height: 15px;
    }
  }
  .border-box-content {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>
