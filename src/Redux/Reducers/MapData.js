/* eslint-disable no-param-reassign */
import { fetchAddressListData, fetchRouteData, logout } from '../Actions/Actions'

const initialState = {
  addressList: [],
  routeAddresses: [],
}

export const MapData = (state = initialState, action) => {
  switch (action.type) {
    case fetchAddressListData.toString():
      return state = {
        ...state,
        addressList: action.payload
      }
    case fetchRouteData.toString():
      return state = {
        ...state,
        routeAddresses: action.payload
      }
    case logout.toString():
      return state = initialState

    default:
      return state
  }
}
