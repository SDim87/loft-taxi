/* eslint-disable no-param-reassign */
import {
  fetchAddressListSuccess,
  fetchAddressListError,
  fetchRouteSuccess,
  fetchRouteError,
  logout,
} from '../Actions/Actions'

const initialState = {
  addressList: [],
  routeAddresses: [],
}

export const MapData = (state = initialState, action) => {
  switch (action.type) {
    case fetchAddressListSuccess.toString():
      return state = {
        ...state,
        addressList: action.payload
      }
    case fetchAddressListError.toString():
      return state = {
        ...state,
        addressList: { error: action.payload }
      }
    case fetchRouteSuccess.toString():
      return state = {
        ...state,
        routeAddresses: action.payload
      }
    case fetchRouteError.toString():
      return state = {
        ...state,
        routeAddresses: { error: action.payload }
      }
    case logout.toString():
      return state = initialState

    default:
      return state
  }
}
