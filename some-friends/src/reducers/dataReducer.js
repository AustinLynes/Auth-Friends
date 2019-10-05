import { DATA_FETCH_START, DATA_FETCH_SUCCEED, DATA_FETCH_FAILED } from '../actions'
const initalState = {
    isFetching: false,
    data: [],
    errs: ''
}
export const dataReducer = (state = initalState, action) => {
    switch (action.type) {
        case DATA_FETCH_START:
            return {
                ...state,
                isFetching: true
            }
        case DATA_FETCH_SUCCEED:
            return {
                ...state,
                isFetching: false,
                data:action.payload
            }
        case DATA_FETCH_FAILED:
            return {
                ...state,
                isFetching: false,
                errs: action.errors
            }
        default:
            return state
    }
}