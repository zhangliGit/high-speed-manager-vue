
import $ajax from '@a/js/ajax-service.js'
import API_LIST from '@a/js/config.js'

/**
 * @description 获取火车票列表
 */
const TICKET_ACTIONS = {
  async getTicketList ({ commit, state }) {
    const REQ_PARAMS = {
      url: API_LIST.ticket_list
    }
    const DATA = await $ajax.get(REQ_PARAMS)
    commit('setTicketList', DATA.data)
  },
  async getTicketDetail ({ commit, state }, id) {
    const REQ_PARAMS = {
      url: API_LIST.ticket_detail,
      params: {
        id
      }
    }
    const DATA = await $ajax.get(REQ_PARAMS)
    commit('setTicketDetail', DATA.data)
  }
}

export default TICKET_ACTIONS
