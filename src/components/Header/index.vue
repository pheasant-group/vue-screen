<template>
  <div
    class="header"
    :style="{
      backgroundColor: bgColor,
      backgroundImage:
        'url(' + require(`@/assets/image/${headerBgImg}.png`) + ')',
    }"
  >
    <div
      class="title"
      :style="{
        color: fontColor,
      }"
    >
      {{ title }}
    </div>
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
    bgColor: {
      type: String,
      default: "#100c2a",
    },
    headerBgImg: {
      type: String,
      default: "header1",
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    font-size: 30px;
  }
}
</style>
