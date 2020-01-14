import { LOAD_AUTHORS_SUCCESS } from './actionTypes'
import * as authorApi from '../../api/authorApi'

export const loadAuthorsSuccess = (authors) => {
    return { type: LOAD_AUTHORS_SUCCESS, payload: authors}
};

export const loadAuthors = () => dispatch => {
    return authorApi
        .getAuthors()
        .then(authors => {
            dispatch(loadAuthorsSuccess(authors))
        })
        .catch(error => {
            console.log('There was an error: ' + error);
            throw error;
        })
};
