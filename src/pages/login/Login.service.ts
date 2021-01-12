interface IProps {
    email?: string;
    password?: string;
}

export function loginValidationSchema(values: IProps): IProps {
    const errors: IProps = {};
    const emailValidationSentence = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const passwordValidationSentence = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!emailValidationSentence.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (!passwordValidationSentence.test(values.password)) {
        errors.password = 'Password must be from 6 to 20 char. contain uppercase, lowercase symbols and digits';
    }

    return errors;
}


