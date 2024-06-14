import React from 'react';
import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Input = ({ label, type, className, value, setValue, icon, inputAttributes }) => {
    const handleInput = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className={`input-wrapper ${className}`}>
            {label && <label>{label}</label>}
            <div className="input-icon-wrapper">
                {icon && <FontAwesomeIcon icon={icon} />}
                <input
                    type={type}
                    value={value}
                    onChange={handleInput}
                    {...inputAttributes}
                />
            </div>
        </div>
    );
};

export default Input;
