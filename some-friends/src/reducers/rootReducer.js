import {combineReducers} from 'redux'
import { logReducer } from './logReducer';
import { dataReducer } from './dataReducer';

export default combineReducers({
     log:logReducer,
     data:dataReducer
    })