import { takeEvery, call, put } from 'redux-saga/effects'
import { fetchAddressList, fetchAddressListSuccess, fetchAddressListError } from '../../Actions/Actions'
import { getAddressList } from '../../API'

export function* addressListSaga() {
  yield takeEvery(fetchAddressList, function* generator() {
    try {
      const result = yield call(getAddressList)
      yield put(fetchAddressListSuccess(result.addresses))
    } catch (error) {
      yield put(fetchAddressListError(error))
    }
  })
}
