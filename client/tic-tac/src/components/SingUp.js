import React, { useState } from 'react'
import Axios from 'axios';
import Cookies from 'universal-cookie';

function SingUp() {
    const coockies = new Cookies();
    const [user, setUser] = useState(null);

    const signUp = () => {
        Axios.post("http://localhost:3001/singup", user).then(res => {
            const { token, userId, firstName, lastName, username, hashedPassword } = res.data;

            coockies.set("token", token);
            coockies.set("userId", userId);
            coockies.set("username", username);
            coockies.set("firstName", firstName);
            coockies.set("lastName", lastName);
            coockies.set("hashedPassword", hashedPassword);
        });
    };

    return (
        <div className='singUp'>
            <label>Sing Up</label>
            <input
                placeholder='Firts name'
                onChange={(event) => {
                    setUser({ ...user, firstName: event.target.value })
                }}
            />
            <input
                placeholder='Last name'
                onChange={(event) => {
                    setUser({ ...user, lastName: event.target.value })
                }}
            />

            <input
                placeholder='username'
                onChange={(event) => {
                    setUser({ ...user, username: event.target.value })
                }}
            />

            <input
                placeholder='Password'
                type='password'
                onChange={(event) => {
                    setUser({ ...user, password: event.target.value })
                }}
            />
            <button onClick={signUp()}>Sing Up</button>
        </div>
    )
}

export default SingUp