import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth'
/*AUTH*/
export const LOG_IN_START = 'LOG_IN_START'
export const LOG_IN_SUCCEED = 'LOG_IN_SUCCEED'
export const LOG_IN_FAILED = 'LOG_IN_FAILED'

/*GET*/
export const DATA_FETCH_START = 'DATA_FETCH_START'
export const DATA_FETCH_SUCCEED = 'DATA_FETCH_UCCEED'
export const DATA_FETCH_FAILED = 'DATA_FETCH_FAILED'
/*UPDATE*/
/*ADD*/
export const DATA_ADD_START = 'DATA_ADD_START'
export const DATA_ADD_SUCCEED = 'DATA_ADD_SUCCEED'
export const DATA_ADD_FAILED = 'DATA_ADD_FAILED'
/*REMOVE*/
export const DATA_REMOVE_START = 'DATA_REMOVE_START'
export const DATA_REMOVE_SUCCEED = 'DATA_REMOVE_SUCCEED'
export const DATA_REMOVE_FAILED = 'DATA_REMOVE_FAILED'

export const login = (creds) => dispatch => {
    dispatch({ type: LOG_IN_START })
    axios.post('http://localhost:5000/api/login', creds)
        .then(res => {
            localStorage.setItem('token', res.data.payload)
            dispatch({ type: LOG_IN_SUCCEED })
        })
        .catch(err => dispatch({ type: LOG_IN_FAILED, payload: err }))
}
export const getData = (creds) => dispatch => {
    dispatch({ type: DATA_FETCH_START })
    axiosWithAuth()
        .get('/friends', creds)
        .then(res => {
            dispatch({ type: DATA_FETCH_SUCCEED, payload: res.data })
        })
        .catch(err => dispatch({ type: DATA_FETCH_FAILED, payload: err }))
}
export const addFriend = (user) => dispatch => {
    dispatch({ type: DATA_ADD_START })
    console.log('adding ', user)
    axiosWithAuth()
    .post(`/friends`, user)
    .then(res => {
        dispatch({type:DATA_ADD_SUCCEED})
        })
        .catch(err=>{
            dispatch({payload:err})
        })
    }
    export const removeFriend = (id) => dispatch => {
        dispatch({ type: DATA_REMOVE_START })
        axiosWithAuth()
        .delete(`/friends/${id}`)
        .then(res=>{
            dispatch({ type: DATA_REMOVE_SUCCEED })
            console.log('removing ', res.data)
            
        })

    
}