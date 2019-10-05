import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getData, addFriend,removeFriend } from '../actions'

const FriendsList = props => {
    const [payload, setPayload] = useState({
        id:'',
        email:'',
        age:'',
        name:''
    })
    const creds = {
        username: window.localStorage.getItem('creds').username,
        password: window.localStorage.getItem('creds').password
    }
    const handleChange = e => {
        e.preventDefault()
        setPayload({
            ...payload,
            [e.target.name]: e.target.value
        })
    }
    const submitAdd = e => {
        e.preventDefault()
        props.addFriend(payload)
        props.getData(creds)

    }
    const submitRemove = e => {
        e.preventDefault()
        props.removeFriend(payload.id)
        props.getData(creds)

    }
    useEffect(() => {
        props.getData(creds)
    }, [])
    return (
        <div className='friend-list'>
            {
                !props.friends.isFetching ?
                    props.friends.data.map(friend => {
                        return (<div key={friend.id} className='friened-card'>
                            <p>{friend.name}</p>
                            <p>{friend.age}</p>
                            <p>{friend.email}</p>
                        </div>)
                    })
                    : <h1>loading...</h1>
            }
            <h1>add a friend?</h1>
            <form onSubmit={submitAdd}>
                <input
                    type='text'
                    name='name'
                    placeholder='name'
                    onChange={handleChange}
                    value={payload.name}
                />
                <input
                    type='text'
                    name='age'
                    placeholder='age'
                    onChange={handleChange}
                    value={payload.age}
                />
                <input
                    type='email'
                    name='email'
                    onChange={handleChange}
                    value={payload.email}
                    placeholder='email'
                />
                <button>add friend</button>
            </form>
            <h1>remove a friend?</h1>
            <form onSubmit={submitRemove}>
                <input
                    type='text'
                    name='id'
                    placeholder='friends number...'
                    onChange={handleChange}
                    value={payload.id}
                />
                <button>add friend</button>
            </form>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        friends: state.data
    }
}
export default connect(mapStateToProps, {
    getData,
    addFriend,
    removeFriend
})(FriendsList)