import { takeEvery, call, put } from 'redux-saga/effects'
import {
  registration, registrationData, fetchToken, changeAuthStatus
} from '../../Actions/Actions'
import { setRegistration } from '../../API'

export function* registrSaga() {
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
}
