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
export const changeCardSuccess = createAction('SAVE_CARD_SUCCESS')
export const changeCardError = createAction('SAVE_CARD_ERROR')
export const fetchCard = createAction('FETCH_CARD')
export const fetchCardSuccess = createAction('FETCH_CARD_SUCCESS')
export const fetchCardError = createAction('FETCH_CARD_ERROR')

export const fetchAddressList = createAction('FETCH_ADDRESS_LIST')
export const fetchAddressListSuccess = createAction('FETCH_ADDRESS_LIST_SUCCESS')
export const fetchAddressListError = createAction('FETCH_ADDRESS_LIST_ERROR')
export const fetchRoute = createAction('FETCH_ROUTE')
export const fetchRouteSuccess = createAction('FETCH_ROUTE_SUCCESS')
export const fetchRouteError = createAction('FETCH_ROUTE_ERROR')
