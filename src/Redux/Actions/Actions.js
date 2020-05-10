import * as Types from '../Reducers/SystemData'

export const changeAuthStatus = (payload) => {
  return {
    type: Types.CHANGE_AUTH_STATUS,
    payload,
  }
}

export const changeActiveForm = (payload) => {
  return {
    type: Types.CHANGE_ACTIVE_FORM,
    payload,
  }
}
