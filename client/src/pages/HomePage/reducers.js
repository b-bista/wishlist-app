import {
    REQUEST_LISTS_FAILED,
    REQUEST_LISTS_SUCCESS,
    REQUEST_LISTS_PENDING
} from './constants'

const initialStateLists = {
    isPending: true,
    lists: [],
    error: ''
}

export const requestLists = (state=initialStateLists, action={}) => {
    switch (action.type) {
        case REQUEST_LISTS_PENDING: {
            return Object.assign({}, state, {isPending: true})
        }
        case REQUEST_LISTS_SUCCESS: {
            return Object.assign({}, state, {robots: action.payload, isPending: false})
        }
        case REQUEST_LISTS_FAILED: {
            return Object.assign({}, state, {error: action.payload, isPending: false})
        }
        default: 
            return state;
    }
}