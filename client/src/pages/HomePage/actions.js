import {
    REQUEST_LISTS_FAILED,
    REQUEST_LISTS_SUCCESS,
    REQUEST_LISTS_PENDING
} from './constants'

export const requestLists = () => () => {
    dispatchEvent({type: REQUEST_LISTS_PENDING});
    fetch('api-endpoint')
        .then(response=> response.json())
        .then(lists => dispatch({type: REQUEST_LISTS_SUCCESS, payload: lists}))
        .catch(err => dispatch({type: REQUEST_LISTS_FAILED, payload: err}))
}