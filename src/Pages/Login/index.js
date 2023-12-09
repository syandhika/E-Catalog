import React, { useEffect, useState } from 'react';
import axiosService from '../../Services';
import { Image } from 'react-bootstrap';
import { setCookie, parseCookies } from "nookies";
import BackgroundImage from './../../assets/image/background3.jpg'
import DarmaHenwa from './../../assets/image/DarmaHenwa.png'
import './login.css';


function LoginPage({ CheckLogin = () => { } }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        // console.log(username,password)
        axiosService.post('/auth/login',
            {
                JDE_NO: username,
                PASSWORD: password,
                APP_ID:1
            },
            {
                headers: {
                    Authorization: process.env.REACT_APP_BASIC_AUTH,
                    "Access-Control-Allow-Origin" : "*"
                }
            }
        ).then((res) => {
            console.log(res)
            if (res.data.status === 200) {
                setCookie(null, "access_token", res.data.token, {
                    maxAge: 30 * 24 * 60 * 60,
                    path: "/",
                })
                setCookie(null, 'user', res.data.user, {
                    maxAge: 30 * 24 * 60 * 60,
                    path: "/",
                })
                // CheckLogin()
                window.location.reload()
            }
        })
            .catch((error) => {
                console.log(error)
            })
    };

    return (
        <>
            <div className='background-image'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='pages-login'>
                                <div className='card bd-radius'>
                                    <div className='logo-DH'>
                                        <Image
                                            src={DarmaHenwa}
                                            width="250px"
                                        />
                                    </div>
                                    <p className='mr-login color-green'>JDE No</p>
                                    <div className='mr-login'>
                                        <input
                                            type="text"
                                            placeholder="Username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            className="form-login"
                                        />
                                    </div>
                                    <p className='mr-login color-green'>Password</p>
                                    <div className='mr-login'>
                                        <input
                                            width="220px"
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="form-login"
                                        />
                                    </div>
                                    <button className='btn btn-primary mr-login btn-login' onClick={handleLogin} >Login</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>

                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default LoginPage;
