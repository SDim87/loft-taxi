import { takeEvery, call, put } from 'redux-saga/effects'
import { fetchRoute, fetchRouteSuccess, fetchRouteError } from '../../Actions/Actions'
import { getRoute } from '../../API'

export function* routeSaga() {
  yield takeEvery(fetchRoute, function* generator(action) {
    try {
      const result = yield call(getRoute, action)
      yield put(fetchRouteSuccess(result))
    } catch (error) {
      yield put(fetchRouteError(error))
    }
  })
}
