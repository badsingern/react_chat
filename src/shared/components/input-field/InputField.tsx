import React from "react";
import './InputField.scss';

interface InputFieldProps {
    name?: string;
    value: string;
    type?: 'text' | 'password';
    onChangeHandler?: any;
    errorMessage?: string;
    placeholder?: string;
    handleError?: boolean;
}

export const InputField = ({
                               name = '',
                               value,
                               type = 'text',
                               onChangeHandler,
                               errorMessage = '',
                               placeholder = '',
                               handleError = true
                           }: InputFieldProps) =>
    (
        <div className='input-field'>
            <label htmlFor={name}>{name}</label>
            <input name={name} type={type} value={value} placeholder={placeholder} onChange={onChangeHandler}/>
            {
                handleError && <p>{errorMessage}</p>
            }
        </div>
    );
