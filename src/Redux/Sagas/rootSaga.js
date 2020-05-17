import { takeEvery, call, put } from 'redux-saga/effects'
import {
  registration,
  registrationData,
  login,
  fetchToken,
  changeAuthStatus,
  loginData,
  changeCard,
  changeCardSuccess,
  changeCardError,
  fetchCard,
  fetchCardSuccess,
  fetchCardError,
  fetchAddressList,
  fetchAddressListSuccess,
  fetchAddressListError,
  fetchRoute,
  fetchRouteSuccess,
  fetchRouteError
} from '../Actions/Actions'
import {
  setRegistration,
  setLogin,
  getAddressList,
  getRoute,
  setCard,
  getCard
} from '../API'

export function* rootSaga() {
  yield takeEvery(registration, function* generator(action) {
    try {
      const result = yield call(setRegistration, action)

      if (result.success) {
        yield put(fetchToken(result.token))
        yield put(changeAuthStatus(result.success))
        yield put(registrationData(result.success))
      } else {
        yield put(registrationData(result))
      }
    } catch (error) {
      yield put(registrationData(error))
    }
  })

  yield takeEvery(login, function* generator(action) {
    try {
      const result = yield call(setLogin, action)

      if (result.success) {
        yield put(fetchToken(result.token))
        yield put(changeAuthStatus(result.success))
      } else {
        yield put(loginData(result))
      }
    } catch (error) {
      yield put(loginData(error))
    }
  })

  yield takeEvery(fetchAddressList, function* generator() {
    try {
      const result = yield call(getAddressList)
      yield put(fetchAddressListSuccess(result.addresses))
    } catch (error) {
      yield put(fetchAddressListError(error))
    }
  })

  yield takeEvery(fetchRoute, function* generator(action) {
    try {
      const result = yield call(getRoute, action)
      yield put(fetchRouteSuccess(result))
    } catch (error) {
      yield put(fetchRouteError(error))
    }
  })

  yield takeEvery(changeCard, function* generate(action) {
    try {
      const result = yield call(setCard, action)
      yield put(changeCardSuccess(result))
    } catch (error) {
      yield put(changeCardError(error))
    }
  })

  yield takeEvery(fetchCard, function* generate(action) {
    try {
      const result = yield call(getCard, action.payload.token)

      yield put(fetchCardSuccess(result))
    } catch (error) {
      yield put(fetchCardError(error))
    }
  })
}
