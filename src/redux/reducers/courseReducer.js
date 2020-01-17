import * as types from "../actions/actionTypes";
import initialState from './initialState'

export const courseReducer = (state = initialState.courses, action) => {
  switch(action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.payload;
    case types.UPDATED_COURSE_SUCCESS:
      return state.map(course => course.id === action.course.id ? action.course : course)
    case types.CREATE_COURSE_SUCCESS:
      return [...state, {...action.payload}];
    default:
      return state;
  }
};
