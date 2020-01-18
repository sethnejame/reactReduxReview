import { combineReducers } from "redux";
import {courseReducer} from './courseReducer'
import {authorReducer} from './authorReducer'
import { apiCallStatusReducer } from "./apitStatusReducer";


const rootReducer = combineReducers({
  allCourses: courseReducer,
  authors: authorReducer,
  apiCallsInProgress: apiCallStatusReducer,
});

export default rootReducer;
