// store gets config'd when our app starts
// redux middleware provides extra functionality
// compose adds support redux devtools
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";

// warns us if someone (or something) tries to mutate state
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
