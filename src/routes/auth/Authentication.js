import React, { useState } from 'react';
import './auth.css';
import Login from './Login';
import Register from './Register';
import axios from 'axios';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
    const [isSwitch, setSwitch] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignInClick = () => {
        setSwitch(true);
    };

    const handleSignUpClick = () => {
        setSwitch(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const url = isSwitch ? '/api/auth/login' : '/api/auth/register';
            const response = await axios.post(url, { username, password });

            const { accessToken } = response.data;
            localStorage.setItem('accessToken', accessToken);
            setUserUsername(username);
            setIsLoggedIn(true);
        } catch (error) {
            console.error('Error during authentication', error);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-header">
                <button 
                    className={isSwitch ? 'active' : 'inactive'}
                    onClick={handleSignInClick}
                >
                    Sign In
                </button>
                <button 
                    className={!isSwitch ? 'active' : 'inactive'}
                    onClick={handleSignUpClick}
                >
                    Sign Up
                </button>
            </div>
            {isSwitch ? (
                <div className='title'>
                    <h2>Sign in with your account</h2>
                    <Login
                        username={username}
                        password={password}
                        setUsername={setUsername}
                        setPassword={setPassword}
                        buttonLabel="Sign In"
                        handleSubmit={handleSubmit}
                    />
                </div>
            ) : (
                <div className='title'>
                    <h2>Create a new account</h2>
                    <Register
                        username={username}
                        password={password}
                        setUsername={setUsername}
                        setPassword={setPassword}
                        buttonLabel="Sign Up"
                        handleSubmit={handleSubmit}
                    />
                </div>
            )}
        </div>
    );
};

export default Authentication;
