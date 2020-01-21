import { LOAD_AUTHORS_SUCCESS } from './actionTypes'
import * as authorApi from '../../api/authorApi'
import {apiCallError, beginAPICall} from "./apiStatusActions";

export const loadAuthorsSuccess = (authors) => {
    return { type: LOAD_AUTHORS_SUCCESS, payload: authors}
};

export const loadAuthors = () => dispatch => {
  dispatch(beginAPICall())
    return authorApi
        .getAuthors()
        .then(authors => {
            dispatch(loadAuthorsSuccess(authors))
        })
        .catch(error => {
            console.log('There was an error: ' + error);
            dispatch(apiCallError(error))
            throw error;
        })
};
