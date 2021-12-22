import { getterTypes, mutationTypes } from '../const'

const counter = {
  namespaced: true,

  state: () => ({
    count: 0
  }),

  getters: {
    [getterTypes.COUNTER_GETCOUNTERTEXT](state){
      return function(suffix){
        return state.count + suffix;
      }
    },
    [getterTypes.COUNTER_GETCOUNTERDAITEXT](state){
      return state.count + "台";
    },

  },

  mutations: {
    [mutationTypes.COUNTER_INCREMENT] (state) {
      state.count++
    }
  }
}
export default counter;
