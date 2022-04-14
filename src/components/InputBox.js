import React from 'react';

const InputBox = ({ text, type, placeholder, name, isRequired, onChange, value, error }) => {

    return (
        <div className='input__box'>
            <span className='input__text'>{text}
                {isRequired && (<span className='required__input'>*</span>)}
            </span>
            <br />
            <input
                id={name}
                name={name}
                onChange={onChange}
                value={value}
                type={type || "text"} placeholder={placeholder || ""} />
            <span className='input__error'>{error}</span>
        </div >
    );
};

export default InputBox;