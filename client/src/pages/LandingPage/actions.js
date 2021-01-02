import {
    USER_SIGN_IN_SUCCESS,
    USER_SIGN_IN_FAILURE,
    USER_SIGN_IN_PENDING,
    USER_SIGN_UP_SUCCESS,
    USER_SIGN_UP_FAILURE,
    USER_SIGN_UP_PENDING,
    RENDER_LOGIN_PAGE,
    RENDER_SIGNUP_PAGE
} from './constants'

export const handleSignIn = (data) => (dispatch) => {
    dispatch({type: USER_SIGN_IN_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(data)
    })
      .then(response=> response.json())
      .then(userData => dispatch({type: USER_SIGN_IN_SUCCESS, payload: userData}))
      .catch(err => dispatch({type: USER_SIGN_IN_FAILURE, payload: err}))
}

export const handleSignUp = (data) => (dispatch) => {
    dispatch({type: USER_SIGN_UP_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(data)
    })
      .then(response=> response.json())
      .then(userData => dispatch({type: USER_SIGN_UP_SUCCESS, payload: userData}))
      .catch(err => dispatch({type: USER_SIGN_UP_FAILURE, payload: err}))
}

export const renderLoginPage = () => {
    return ({
        type: RENDER_LOGIN_PAGE
    })
}

export const renderSignupPage = () => {
    return ({
        type: RENDER_SIGNUP_PAGE
    })
}