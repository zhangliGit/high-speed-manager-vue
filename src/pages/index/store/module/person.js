
import PERSON_ACTIONS from './actions/person'

const PERSON = {
  namespaced: true,
  state: {
    riderList: []
  },
  actions: {
    ...PERSON_ACTIONS
  },
  mutations: {
    /**
     * 设置乘车人列表信息
     */
    setRiderList (state, data) {
      state.riderList = data
    },
    /**
     * 新增乘车人
     */
    addRiderList (state, data) {
      state.riderList.unshift(data)
    },
    /**
     * 删除乘车人
     * index: 列表索引
     */
    delRider (state, index) {
      state.riderList.splice(index, 1)
    }
  }
}
export default PERSON
