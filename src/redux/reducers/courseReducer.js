// below we use an array because the state will  be an array of courses
export default function courseReducer(state = [], action) {
  switch(action.type) {
    case "CREATE_COURSE":
      // again, spreading the old list of courses into an array
      // and adding the new one so we don't mutate old state
      return [...state, {...action.course}]
    default:
      return state;
  }
}