import React from 'react';
import './App.scss';
import Login from './compoennts/Login'
import { Route, Link } from 'react-router-dom'
import { PrivateRoute } from './utils/PrivateRoute'
import FriendsList from './compoennts/FriendList'
function App() {
  return (
    <div className="App">
      <div className='nav-bar'>
        <Link to='/login'>
          <button>Login</button>
        </Link>
        <Link to='/my-friends-list'>
          <button>Friends List</button>
        </Link>
      </div>
      <>
        <Route path='/login' component={Login} />
      </>
      <PrivateRoute exact path='/my-friends-list' component={FriendsList} />

    </div>
  );
}

export default App;
