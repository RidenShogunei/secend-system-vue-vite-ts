import {createStore} from 'vuex'
 
// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            page: '1'
        }
    },
    mutations: {
      updatePage(state, page) {
        state.page = page;
      }
    }
})
 
export default store