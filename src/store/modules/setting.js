import {
  settingShow,
  layout,
  title,
  bgColor,
  fontColor,
  headerBgImg,
  globalBorder,
  theme,
} from "@/setting";

const state = {
  settingShow,
  layout,
  title,
  bgColor,
  fontColor,
  headerBgImg,
  globalBorder,
  theme
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
