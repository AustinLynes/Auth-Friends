import { LOG_IN_START, LOG_IN_SUCCEED, LOG_IN_FAILED } from '../actions'
const initalState = {
    isLoggedIn: false,
    errs: ''
}
export const logReducer = (state = initalState, action) => {
    switch (action.type) {
        case LOG_IN_START:
            return {
                ...state,
                isLoggedIn:false
            }
        case LOG_IN_SUCCEED:
            return {
                ...state,
                isLoggedIn:true
            }
        case LOG_IN_FAILED:
            return {
                ...state,
                isLoggedIn:false,
                errs:action.errors
            }
        default:
            return state
    }
}