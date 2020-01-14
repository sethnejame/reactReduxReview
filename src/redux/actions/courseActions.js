import { CREATE_COURSE, LOAD_COURSES_SUCCESS } from "./actionTypes";
import * as courseApi from "../../api/courseApi"

export function createCourse(course) {
  console.log('createCourse action is called');
  return { type: CREATE_COURSE, payload: course }
}

export function loadCoursesSuccess(courses) {
  return { type: LOAD_COURSES_SUCCESS, payload: courses }
}
// thunks go at bottom of file
// every thunk returns a func which accepts dispatch
export function loadCourses() {
  return function(dispatch) {
    return courseApi.getCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      console.log(error);
      throw error;
    })
  }
}
