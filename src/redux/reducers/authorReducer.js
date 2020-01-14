import { LOAD_AUTHORS_SUCCESS } from "../actions/actionTypes";
import initialState from './initialState'

export const authorReducer = (state = initialState.authors, action) => {
    switch(action.type) {
        case LOAD_AUTHORS_SUCCESS:
            console.log('authorReducer invokes loadAuthors');
            return action.payload;
        default:
            return state;
    }
};
