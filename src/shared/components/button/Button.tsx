import React from "react";
import './Button.scss';

interface IProps {
    text: string,
    isDisabled: boolean,
    type?: "button" | "submit" | "reset" | undefined,
    buttonHandler?: () => void
}

export const Button = ({isDisabled, text, type = 'submit', buttonHandler}: IProps) => {
    const styleClasses = `button ${isDisabled ? 'button--disabled' : ''}`;

    return (<button onClick={buttonHandler} type={type} className={styleClasses}>{text}</button>);
};
