
import $ajax from '@a/js/ajax-service.js'
import API_LIST from '@a/js/config.js'

/**
 * @description 获取火车票列表
 */
const TRIP_ACTIONS = {
  async getTripList ({ commit, state }) {
    const REQ_PARAMS = {
      url: API_LIST.trip_new_list
    }
    const DATA = await $ajax.get(REQ_PARAMS)
    commit('setTripList', DATA.data)
  }
}

export default TRIP_ACTIONS
