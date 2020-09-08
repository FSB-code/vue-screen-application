import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    screens: [],
    loaded: null,
    currentScreens: [],
  },
  getters: { 
    allScreens: state => state.screens, 
    loaded: state => state.loaded,
    currentScreens: state => state.currentScreens,
  },
  mutations: {
    UPDATE_SCREENS(state,screens) {
      state.screens = screens
     },
    UPDATE_LOADED(state,loaded) {
      state.loaded = loaded
    },
    UPDATE_CURRENTSCREENS(state,currentScreens) {
      state.currentScreens = currentScreens
    }
  },
  actions: {
    async fetchScreens(context) {
      const response = await fetch(
        'http://localhost:8080/server/screens.json'
        //'server/screens.json' for deploy
      );
      const arrayScreensText = (await response.text()).split('\n');
      const arrayScreens = arrayScreensText.map(screen => JSON.parse(screen));
      arrayScreens.forEach(el => {
        const splitEl = el.data.split(" ");
        const obj = {
          type: splitEl[0],
          x: +splitEl[1],
          y: +splitEl[2],
          information: splitEl.slice(3).join(" "),
        };
        el.data = obj; 
      });
      context.commit('UPDATE_SCREENS', arrayScreens)
    },
  },
  modules: {
  }
})
