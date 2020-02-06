import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app.js';
import website from './modules/website.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    app,
    website
  }
})
