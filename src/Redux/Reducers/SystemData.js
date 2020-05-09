/* eslint-disable no-param-reassign */
export const CHANGE_AUTH_STATUS = 'CHANGE_AUTH_STATUS'

const initialState = {
  authStatus: false
}

export const SystemData = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_AUTH_STATUS:
      return state = {
        ...state,
        authStatus: action.payload
      }

    default:
      return state
  }
}
