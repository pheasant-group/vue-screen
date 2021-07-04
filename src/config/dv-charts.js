import { changeDefaultConfig } from "@jiaminghi/charts";
import store from "@/store";
console.log(store.state.setting);
Object.entries(store.state.setting).map((item) => {
  if (item[0].indexOf("charts") !== -1) {
    // 如果在项目中你需要使用多个图表，并且他们的某些配置相同，那么你可以直接更改这些默认配置，这样就不需要重复的对每一个图表进行相关配置
    const key = item[0].split("charts")[1];
    const value = item[1];
    changeDefaultConfig(key, value);
  }
});
