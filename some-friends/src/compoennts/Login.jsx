import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'
const Login = props => {
    const [creds, setCreds] = useState({
        username: 'Lambda School',
        password:'i<3Lambd4'
    })
    console.log(props.logState)
    const handleChange = e => {
        e.preventDefault()
        setCreds({ ...creds, [e.target.name]: e.target.value })
    }
    const login = e => {
        e.preventDefault()
        window.localStorage.setItem('creds', {username:creds.username, password:creds.password})
        props.login(creds)
        setTimeout(()=>{
            if (props.logState.isLoggedIn === true)
                this.props.history.push('/dashboard')
            else
                alert(props.logState.err)

        },500)
    }
    return (
        <form onSubmit={login}>
            <input
                onChange={handleChange}
                placeholder='username'
                value={creds.username}
            />
            <input
                onChange={handleChange}
                placeholder='password'
                value={creds.password}
            />
            <button>Login</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        logState : state.log
    }
}

export default connect(mapStateToProps, {
    login
})(Login)