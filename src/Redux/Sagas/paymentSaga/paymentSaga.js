import { takeEvery, call, put } from 'redux-saga/effects'
import {
  changeCard,
  changeCardSuccess,
  changeCardError,
  fetchCard,
  fetchCardSuccess,
  fetchCardError
} from '../../Actions/Actions'
import { setCard, getCard } from '../../API'

export function* setCardSaga() {
  yield takeEvery(changeCard, function* generate(action) {
    try {
      const result = yield call(setCard, action)
      yield put(changeCardSuccess(result))
    } catch (error) {
      yield put(changeCardError(error))
    }
  })
}

export function* getCardSaga() {
  yield takeEvery(fetchCard, function* generate(action) {
    try {
      const result = yield call(getCard, action.payload.token)

      yield put(fetchCardSuccess(result))
    } catch (error) {
      yield put(fetchCardError(error))
    }
  })
}
