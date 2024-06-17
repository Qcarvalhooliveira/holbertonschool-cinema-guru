import React from 'react';
import './auth.css';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

const Login = ({ username, password, setUsername, setPassword, buttonLabel, handleSubmit }) => {
    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <Input
                label=""
                type="text"
                value={username}
                setValue={setUsername}
                icon={faUser}
                inputAttributes={{ placeholder: 'Username' }}
            />
            <Input
                label=""
                type="password"
                value={password}
                setValue={setPassword}
                icon={faKey}
                inputAttributes={{ placeholder: 'Password' }}
            />
            <Button
                label={buttonLabel}
                icon={faKey}
                className="custom-button"
                type="submit"
            />
        </form>
    );
};

export default Login;
