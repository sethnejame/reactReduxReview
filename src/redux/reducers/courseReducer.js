import { CREATE_COURSE, LOAD_COURSES_SUCCESS } from "../actions/actionTypes";
import initialState from './initialState'

export const courseReducer = (state = initialState.courses, action) => {
  switch(action.type) {
    case CREATE_COURSE:
      console.log('courseReducer invokes createCourse');
      return [...state, {...action.payload}];
    case LOAD_COURSES_SUCCESS:
      console.log('courseReducer invokes loadCourses');
      return action.payload;
    default:
      return state;
  }
};
