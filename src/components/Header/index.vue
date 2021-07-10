<template>
  <div class="top-header">
    <div class="title" :style="{ color: fontColor }">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "title",
    },
    fontColor: {
      type: String,
      default: "#fff",
    },
  },
};
</script>

<style lang="scss" scoped>
.top-header {
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
      font-size: 30px;
  }
}
</style>
