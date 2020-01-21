import * as types from './actionTypes'

export const beginAPICall = () => {
  return { type: types.BEGIN_API_CALL }
}

export const apiCallError = () => {
  return { type: types.API_CALL_ERROR }
}