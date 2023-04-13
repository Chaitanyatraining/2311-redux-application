import thunk from 'redux-thunk'
import { reducer } from '../productReducer/reducers'
import { applyMiddleware, createStore } from 'redux'

export const store = createStore(reducer, applyMiddleware(thunk))