import { combineReducers } from "redux";
// below we import courseReducer as 'courses'
import courses from "./courseReducer";

const rootReducer = combineReducers({
  // and then we combine our courseReducer (courses)
  // this would normally be courses: courseReducer
  // but we are using object shorthand so it is now 'courses'
  courses
});

export default rootReducer;
