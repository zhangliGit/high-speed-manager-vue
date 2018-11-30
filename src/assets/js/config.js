const HOST_URL = 'http://yapi.demo.qunar.com/mock/28776/'

/**
 * 车牌预定
 */
const TICKET_API = {
  ticket_list: `${HOST_URL}ticketList`,
  ticket_detail: `${HOST_URL}ticketDetail`
}

/**
 * 我的行程
 */
const TRIP_API = {
  trip_new_list: `${HOST_URL}tripNews`
}

const API_LIST = {
  ...TICKET_API,
  ...TRIP_API
}
export default API_LIST
