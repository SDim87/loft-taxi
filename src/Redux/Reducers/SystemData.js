/* eslint-disable no-param-reassign */
export const CHANGE_AUTH_STATUS = 'CHANGE_AUTH_STATUS'
export const CHANGE_ACTIVE_FORM = 'CHANGE_ACTIVE_FORM'

const initialState = {
  authStatus: false,
  isActiveForm: true
}

export const SystemData = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_AUTH_STATUS:
      return state = {
        ...state,
        authStatus: action.payload
      }
    case CHANGE_ACTIVE_FORM:
      return state = {
        ...state,
        isActiveForm: action.payload
      }

    default:
      return state
  }
}
