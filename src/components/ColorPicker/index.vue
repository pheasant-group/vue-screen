<template>
  <div class="color-picker">
    <el-color-picker
      v-model="colors"
      show-alpha
      :predefine="[
        '#409EFF',
        '#1890ff',
        '#304156',
        '#212121',
        '#11a983',
        '#13c2c2',
        '#6959CD',
        '#f5222d',
      ]"
      @change="change"
      class="theme-picker"
      popper-class="theme-picker-dropdown"
    />
  </div>
</template>

<script>
export default {
  name: "ColorPicker",
  props: {
    color: {
      type: String,
      default: "#000",
    },
  },
  data() {
    return {
      colors: "",
    };
  },
  created() {
    this.colors = this.color;
  },
  methods: {
    change() {
      this.$emit("change", this.colors);
    },
  },
};
</script>

<style lang="scss" scoped>
.theme-picker .el-color-picker__trigger {
  height: 26px !important;
  width: 26px !important;
  padding: 2px;
}

.theme-picker-dropdown .el-color-dropdown__link-btn {
  display: none;
}
</style>
