
import TICKET_ACTIONS from './actions/ticket'

const TICKET = {
  namespaced: true,
  state: {
    ticketList: [],
    ticketDetail: {
      ticket: []
    }
  },
  actions: {
    ...TICKET_ACTIONS
  },
  mutations: {
    setTicketList (state, data) {
      state.ticketList = data
    },
    setTicketDetail (state, data) {
      state.ticketDetail = data
    }
  }
}
export default TICKET
