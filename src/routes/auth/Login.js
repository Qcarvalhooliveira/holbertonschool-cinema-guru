import React from 'react';
import './auth.css';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons/faKey';

const Login = ({ username, password, setUsername, setPassword, buttonLabel }) => {
    return (
        <form className="auth-form">
            <Input
                label=""
                type="text"
                value={username}
                setValue={setUsername}
                icon={faUser}
                inputAttributes={{ placeholder: 'Username:' }}
            />
            <Input
                label=""
                type="password"
                value={password}
                setValue={setPassword}
                icon={faKey}
                inputAttributes={{ placeholder: 'Password:' }}
            />
            <Button
                label={buttonLabel}
                className="custom-button"
                icon={faKey}
                onClick={() => { /* Lógica de login */ }}
            />
        </form>
    );
};

export default Login;
