import { createAction } from 'redux-actions'

// export const getSeriesRequest = createAction('GET_SERIES_REQUEST')
// export const getSeriesSuccess = createAction('GET_SERIES_SUCCESS')
// export const getSeriesFailure = createAction('GET_SERIES_FAILURE')

export const changeAuthStatus = createAction('CHANGE_AUTH_STATUS')
export const changeActiveForm = createAction('CHANGE_AUTH_FORM')
export const registration = createAction('REGISTRATION')
export const registrationData = createAction('REGISTRATION_DATA')
export const fetchToken = createAction('FETCH_TOKEN')
export const login = createAction('LOGIN')
export const loginData = createAction('LOGIN_DATA')
export const logout = createAction('LOGOUT')

export const changeCard = createAction('CHANGE_CARD')
export const changeCardData = createAction('SAVE_CARD_DATA')
export const fetchCard = createAction('FETCH_CARD')
export const fetchCardData = createAction('FETCH_CARD_DATA')

export const fetchAddressList = createAction('FETCH_ADDRESS_LIST')
export const fetchAddressListData = createAction('FETCH_ADDRESS_LIST_DATA')
export const fetchRoute = createAction('FETCH_ROUTE')
export const fetchRouteData = createAction('FETCH_ROUTE_DATA')
