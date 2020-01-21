import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi"
import {apiCallError, beginAPICall} from "./apiStatusActions";

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, payload: courses }
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, payload: course }
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, payload: course }
}
// thunks go at bottom of file
// every thunk returns a func which accepts dispatch
export function loadCourses() {
  return function(dispatch) {
    dispatch(beginAPICall())
    return courseApi.getCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      console.log('There was an error: ' + error);
      dispatch(apiCallError(error))
      throw error;
    })
  }
}

export function saveCourse(course) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    dispatch(beginAPICall())
    return courseApi
      .saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse))
    }).catch(error => {
      console.log('There was an error: ' + error);
      dispatch(apiCallError(error))
      throw error;
    })
  }
}
