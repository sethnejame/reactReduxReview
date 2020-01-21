import {API_CALL_ERROR, BEGIN_API_CALL} from '../actions/actionTypes'
import initialState from './initialState'

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS"
}

export const apiCallStatusReducer = (state = initialState.apiCallsInProgress,
                                     action) => {
  if (action.type === BEGIN_API_CALL) {
    return state + 1
  } else if (actionTypeEndsInSuccess(action.type) || action.type === API_CALL_ERROR) {
    return state - 1;
  }

  return state
}
