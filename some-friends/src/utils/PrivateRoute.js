import React from 'react'
import {Route, Redirect} from 'react-router-dom'

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={
        props =>
            localStorage.getItem('token') ?
                <Component {...props} />
                :
                <Redirect to='/login' />
    } />
)

/*

t has the same API as <Route />.
It renders a <Route /> and passes all the props through to it.
It checks if the user is authenticated, if they are, it renders the “component” prop. If not, it redirects the user to /login.
*/