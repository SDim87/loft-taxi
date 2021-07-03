import { takeEvery, call, put } from 'redux-saga/effects'
import {
  login, fetchToken, changeAuthStatus, loginData
} from '../../Actions/Actions'
import { setLogin } from '../../API'

export function* authSaga() {
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
}
