
import $ajax from '@a/js/ajax-service.js'
import API_LIST from '@a/js/config.js'

/**
 * @description 获取乘车人列表
 */
const PERSON_ACTIONS = {
  async getRiderList ({ commit, state }) {
    const REQ_PARAMS = {
      url: API_LIST.rider_list
    }
    const DATA = await $ajax.get(REQ_PARAMS)
    commit('setRiderList', DATA.data)
  }
}

export default PERSON_ACTIONS
