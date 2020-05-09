import { createStore } from 'redux'
import combineReducers from './Reducers'
import { initialState, saveState } from './localStorage'

export const Store = createStore(combineReducers, initialState())

Store.subscribe(() => saveState(Store.getState()))
