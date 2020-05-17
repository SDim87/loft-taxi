import { fork } from 'redux-saga/effects'

import { registrSaga } from './registrSaga/registrSaga'
import { authSaga } from './authSaga/authSaga'
import { addressListSaga } from './addressListSaga/addressListSaga'
import { routeSaga } from './routeSaga/routeSaga'
import { setCardSaga, getCardSaga } from './paymentSaga/paymentSaga'

export function* rootSaga() {
  yield fork(registrSaga)
  yield fork(authSaga)
  yield fork(addressListSaga)
  yield fork(routeSaga)
  yield fork(getCardSaga)
  yield fork(setCardSaga)
}
