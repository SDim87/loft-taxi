import { createStore, applyMiddleware } from 'redux'
import combineReducers from './Reducers'
import { initialState, saveState } from './localStorage'
import { middleware } from './customMiddleware'

export const Store = createStore(
  combineReducers,
  initialState(),
  applyMiddleware(middleware)
)

Store.subscribe(() => saveState(Store.getState()))
