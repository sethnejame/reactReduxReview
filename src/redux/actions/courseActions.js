import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi"

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, payload: courses }
}

export function updatedCourseSuccess(course) {
  return { type: types.UPDATED_COURSE_SUCCESS, payload: course }
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, payload: course }
}
// thunks go at bottom of file
// every thunk returns a func which accepts dispatch
export function loadCourses() {
  return function(dispatch) {
    return courseApi.getCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      console.log('There was an error: ' + error);
      throw error;
    })
  }
}

export function saveCourse(course) {
  return function(dispatch, getState) {
    return courseApi
      .saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch(updatedCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse))
    }).catch(error => {
      console.log('There was an error: ' + error);
      throw error;
    })
  }
}
