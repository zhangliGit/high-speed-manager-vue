
import TRIP_ACTIONS from './actions/trip'

const TRIP = {
  namespaced: true,
  state: {
    tripList: []
  },
  actions: {
    ...TRIP_ACTIONS
  },
  mutations: {
    setTripList (state, data) {
      state.tripList = data
    }
  }
}
export default TRIP
