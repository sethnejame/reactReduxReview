import { LOAD_AUTHORS_SUCCESS } from "../actions/actionTypes";

export const authorReducer = (state = [], action) => {
    switch(action.type) {
        case LOAD_AUTHORS_SUCCESS:
            console.log('authorReducer invokes loadAuthors');
            return action.payload;
        default:
            return state;
    }
};
