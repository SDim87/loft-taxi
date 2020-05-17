import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './Sagas/rootSaga'
import combineReducers from './Reducers'
import { initialState, saveState } from './localStorage'

const sagaMiddleware = createSagaMiddleware()

export const Store = createStore(
  combineReducers,
  initialState(),
  compose(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(rootSaga)

Store.subscribe(() => saveState(Store.getState()))
