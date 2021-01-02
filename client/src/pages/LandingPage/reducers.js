import { RENDER_LOGIN_PAGE, RENDER_SIGNUP_PAGE} from './constants'

const initialLandingState = {
    renderLogin: true
}

export const handleLandingPage = (state=initialLandingState, action={}) => {
    if (action.type === RENDER_LOGIN_PAGE)
        return Object.assign({}, state, {renderLogin: true});
    if (action.type === RENDER_SIGNUP_PAGE)
        return Object.assign({}, state, {renderLogin: false});
    
    return state;
}