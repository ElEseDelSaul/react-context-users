import React, { useContext, useReducer } from 'react';
import UserContext from '../context/User/UserContext';

const Profile = () => {

    const { selectedUser } = useContext(UserContext);

    return (
        <>
            {selectedUser ? (<div>
                <div className="card card-body text-center">
                    <img className="img img-top rounded-circle m-auto img-fluid" src={selectedUser.avatar}></img>
                    <h1>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
                    <h3>{selectedUser.email}</h3>
                </div>
            </div>) : (<h1>Usuario no seleccionado</h1>)}
        </>
    )
}

export default Profile;