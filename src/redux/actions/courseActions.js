import { CREATE_COURSE } from "./actionTypes";

export function createCourse(course) {
  debugger;
  console.log('createCourse action is called');
  return { type: CREATE_COURSE, payload: course}
}
