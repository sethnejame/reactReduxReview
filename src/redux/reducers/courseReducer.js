import { CREATE_COURSE } from "../actions/actionTypes";

export const courseReducer = (state = [], action) => {
  switch(action.type) {
    case CREATE_COURSE:
      debugger;
      console.log('courseReducer invokes the action');
      return [...state, {...action.payload}];
    default:
      return state;
  }
};
