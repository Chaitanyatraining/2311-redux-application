import { reducer } from '../productReducer/reducers'
import { createStore } from 'redux'

export const store = createStore(reducer, {})