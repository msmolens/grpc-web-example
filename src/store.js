import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    log: [],
    error: null
  },
  mutations: {
    addToLog(state, info) {
      state.log.push(info + "\n");
    },
    clearLog(state) {
      state.log = [];
    },
    setError(state, error) {
      state.error = error;
    }
  },
  actions: {}
});
