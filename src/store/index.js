import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter';
import dateviewer from './modules/dateviewer';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    counter,
    dateviewer
  }
})