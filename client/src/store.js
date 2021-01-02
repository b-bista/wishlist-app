import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import {handleLandingPage} from './pages/LandingPage/reducers'

const rootReducer = combineReducers({handleLandingPage});

const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

export default store;