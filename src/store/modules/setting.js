import {
  title,
  bgColor,
  showSetting,
  fontColor,
  globalBorder,
  chartscolor,
  chartstitle,
  chartslegend,
  chartsxAxis,
  chartsyAxis,
  chartsgid,
  chartsradarAxis,
  chartsline,
  chartsbar,
  chartspie,
  chartsradar,
  chartsgauge,
} from "@/setting";

const state = {
  showSetting,
  title,
  bgColor,
  fontColor,
  globalBorder,
  chartscolor,
  chartstitle,
  chartslegend,
  chartsxAxis,
  chartsyAxis,
  chartsgid,
  chartsradarAxis,
  chartsline,
  chartsbar,
  chartspie,
  chartsradar,
  chartsgauge,
};

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value;
    }
  },
};

const actions = {
  changeSetting({ commit }, data) {
    commit("CHANGE_SETTING", data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
