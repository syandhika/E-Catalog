import React, { useState } from 'react'

function Login2() {
    const [username,setUsername] = useState()
    const [password, setPassword] = useState()

    const usernameHandler = (e) =>{
        console.log(e.target.value)

    }
    const passwordHandler = (e) =>{
        console.log(e.target.value)

    }
    return (
        <>
            <input
                type="text"
                placeholder="Username"
                // value={username}
                onChange={(e) => {usernameHandler(e)}}
                className="form-login"
            />
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => {passwordHandler(e)}}
                className="form-login"
            />
        </>
    )
}

export default Login2