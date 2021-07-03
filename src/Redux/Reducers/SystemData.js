/* eslint-disable no-param-reassign */
import {
  changeAuthStatus,
  changeActiveForm,
  registrationData,
  fetchToken,
  loginData,
  logout,
  changeCardSuccess,
  changeCardError,
  fetchCardSuccess
} from '../Actions/Actions'

const initialState = {
  authStatus: false,
  isActiveForm: true,
  registration: {},
  login: {},
  cardData: {},
  card: {}
}

export const SystemData = (state = initialState, action) => {
  switch (action.type) {
    case changeAuthStatus.toString():
      return state = {
        ...state,
        authStatus: action.payload
      }
    case changeActiveForm.toString():
      return state = {
        ...state,
        isActiveForm: action.payload
      }
    case registrationData.toString():
      return state = {
        ...state,
        registration: action.payload
      }
    case loginData.toString():
      return state = {
        ...state,
        login: action.payload
      }
    case fetchToken.toString():
      return state = {
        ...state,
        tokenUser: action.payload
      }
    case logout.toString():
      return state = initialState
    case changeCardSuccess.toString():
      return state = {
        ...state,
        cardData: { ...action.payload }
      }
    case changeCardError.toString():
      return state = {
        ...state,
        cardData: action.payload
      }
    case fetchCardSuccess.toString():
      return state = {
        ...state,
        card: action.payload
      }

    default:
      return state
  }
}
