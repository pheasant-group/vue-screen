<template>
  <div class="drawer-container">
    <div class="drawer-box">
      <h3 class="drawer-title">设置</h3>
      <div class="drawer-item">
        <span>标题:</span>
        <el-input
          placeholder="请输入标题"
          v-model="title"
          clearable
          size="small"
          @change="(value) => changeSetting('title', value)"
        ></el-input>
      </div>
      <div class="drawer-item">
        <span>背景颜色:</span>
        <Color-picker
          style="float: right;height: 26px;margin: -3px 8px 0 0;"
          :color="bgColor"
          key="bgColor"
          @change="(value) => changeSetting('bgColor', value)"
        ></Color-picker>
      </div>
      <div class="drawer-item">
        <span>字体颜色:</span>
        <Color-picker
          style="float: right;height: 26px;margin: -3px 8px 0 0;"
          :color="fontColor"
          key="fontColor"
          @change="(value) => changeSetting('fontColor', value)"
        ></Color-picker>
      </div>
      <div class="drawer-item">
        <span>header背景:</span>
        <el-select
          v-model="headerBgImg"
          @change="(value) => changeSetting('headerBgImg', value)"
        >
          <el-option
            v-for="item in headerBgImgOptions"
            :key="item"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </div>
      <div class="drawer-item">
        <span>边框样式:</span>
        <el-select
          v-model="globalBorder"
          placeholder="请选择"
          @change="(value) => changeSetting('globalBorder', value)"
        >
          <el-option
            v-for="item in globalBorderOptions"
            :key="item"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </div>
      <div class="drawer-item">
        <span>边框颜色:</span>
        <Color-picker
          style="float: right;height: 26px;margin: -3px 8px 0 0;"
          :color="globalBorderColor"
          key="globalBorderColor"
          @change="(value) => changeSetting('globalBorderColor', value)"
        ></Color-picker>
      </div>
      <div class="drawer-item">
        <span>echarts主题:</span>
        <el-select
          v-model="theme"
          placeholder="请选择"
          @change="(value) => changeSetting('theme', value)"
        >
          <el-option
            v-for="item in themeOptions"
            :key="item"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </div>
      <div class="footer">
        <el-button type="primary" @click.native="clear" size="mini"
          >恢复默认</el-button
        >
        <el-button type="primary" @click.native="reload" size="mini"
          >刷新生效</el-button
        >
        <el-button type="primary" @click.native="reload" size="mini"
          >上传后台</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ColorPicker from "@/components/ColorPicker/index.vue";

export default {
  components: {
    ColorPicker,
  },
  data() {
    return {
      title: "",
      bgcolor: "",
      fontColor: "",
      theme: "dark",
      themeOptions: [],
      globalBorder: "",
      globalBorderOptions: Array.from(
        { length: 3 },
        (item, index) => `Border${index + 1}`
      ),
      globalBorderColor: "",
      headerBgImg: "header1",
      headerBgImgOptions: Array.from(
        { length: 4 },
        (item, index) => `header${index + 1}`
      ),
    };
  },
  computed: {
    ...mapGetters(["setting"]),
  },
  created() {
    this.title = this.setting.title;
    this.bgColor = this.setting.bgColor;
    this.fontColor = this.setting.fontColor;
    this.theme = this.setting.theme;
    this.themeOptions = ["dark", "light"].concat(
      require
        .context("@/theme", false, /.json/)
        .keys()
        .map((item) => item.replace(/\.\/(.*)\.json/, "$1"))
    );
    this.globalBorder = this.setting.globalBorder;
    this.globalBorderColor = this.setting.globalBorderColor;
    this.headerBgImg = this.setting.headerBgImg;
  },
  methods: {
    changeSetting(key, value) {
      if (key === "theme") {
        this.$store.dispatch("setting/changeSetting", { key, value });
        if (value === "light") {
          this.$store.dispatch("setting/changeSetting", {
            key: "bgColor",
            value: "#fff",
          });
          this.$store.dispatch("setting/changeSetting", {
            key: "fontColor",
            value: "#000",
          });
        } else {
          this.$store.dispatch("setting/changeSetting", {
            key: "bgColor",
            value: "#000",
          });
          this.$store.dispatch("setting/changeSetting", {
            key: "fontColor",
            value: "#fff",
          });
        }
        return;
      }
      this.$store.dispatch("setting/changeSetting", { key, value });
    },
    clear() {
      localStorage.clear();
      setTimeout(() => {
        this.reload();
      }, 1000);
    },
    reload() {
      location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
.drawer-container {
  padding: 5px 20px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;
  height: 98vh;
  overflow: auto;
  .drawer-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 16px;
    line-height: 22px;
    font-weight: bold;
  }

  .drawer-item {
    color: rgba(0, 0, 0, 1);
    font-size: 14px;
    padding: 12px 0;
    display: flex;
    justify-content: space-between;
    span {
      width: 100px;
      display: flex;
      align-items: center;
      justify-content: right;
    }
  }
  .charts-item {
    .description {
      color: rgba(0, 0, 0, 0.65);
    }
  }
  .footer {
    position: sticky;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
  }
}
</style>
