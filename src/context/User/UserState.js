import React, { useReducer } from 'react';
import UserReducer from './UserReducer';
import UserContext from './UserContext';
import axios from 'axios';

const UserState = (props) => {

    const initialState = {
        users: [],
        selectedUser: null
    }

    //Declarar el estado de la App
    const [state, dispatch] = useReducer(UserReducer, initialState);

    const getUsers = async () => {
        const r = await axios.get('https://reqres.in/api/users');
        //console.log(r.data.data);
        dispatch({
            type: 'GET_USERS',
            payload: r.data.data
        })
    }

    const getProfile = async (id) => {
        const r = await axios.get(`https://reqres.in/api/users/${id}`);
        //console.log(r.data.data);
        dispatch({
            type: 'GET_PROFILE',
            payload: r.data.data
        })
    }

    return (
        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUser,
            getUsers,
            getProfile
        }}>
            {props.children}
        </UserContext.Provider>

    )

}

export default UserState;