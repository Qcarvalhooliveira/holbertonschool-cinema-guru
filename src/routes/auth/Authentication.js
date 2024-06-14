import React, { useState } from 'react';
import './auth.css';
import Login from './Login';
import Register from './Register';

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
                <>
                    <h2>Sign in with your account</h2>
                    <Login
                        username={username}
                        password={password}
                        setUsername={setUsername}
                        setPassword={setPassword}
                        buttonLabel="Sign In"
                    />
                </>
            ) : (
                <>
                    <h2>Create a new account</h2>
                    <Register
                        username={username}
                        password={password}
                        setUsername={setUsername}
                        setPassword={setPassword}
                        buttonLabel="Sign Up"
                        
                    />
                </>
            )}
        </div>
    );
};

export default Authentication;
