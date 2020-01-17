import * as types from "../actions/actionTypes";
import initialState from './initialState'

export const courseReducer = (state = initialState.courses, action) => {
  switch(action.type) {
    case types.CREATE_COURSE:
      return [...state, {...action.payload}];
    case types.LOAD_COURSES_SUCCESS:
      return action.payload;
    case types.UPDATED_COURSE_SUCCESS:
      //TODO
    case types.CREATE_COURSE_SUCCESS:
      //TODO
    default:
      return state;
  }
};
