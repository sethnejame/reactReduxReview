import { BEGIN_API_CALL} from '../actions/actionTypes'
import initialState from './initialState'

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS"
}

export const apiCallStatusReducer = (state = initialState.apiCallsInProgress,
                                     action) => {
  if (action.type == BEGIN_API_CALL) {
    console.log('apiCallStatusReducer is called the first time')
    return state + 1
  } else if (actionTypeEndsInSuccess(action.type)) {
    console.log('apiCallStatusReducer is called again')
    return state - 1;
  }

  return state
}