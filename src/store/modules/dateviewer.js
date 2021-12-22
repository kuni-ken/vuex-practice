import { mutationTypes, actionTypes } from '../const'

const dateviewer = {
  namespaced: true,  // モジュール分割したい場合は名前空間を設定する

  state: () => ({
    viewdate: 0
  }),

  mutations: {
    [mutationTypes.DATEVIEWER_CURRENTDATE] (state, payload) {
      state.viewdate = payload.value
    }
  },

  actions: {
    [actionTypes.DATEVIEWER_GETCURRENTDATE](context){
      context.commit(mutationTypes.DATEVIEWER_CURRENTDATE, {
        value: new Date()
      });
    }
  }
}
export default dateviewer;
