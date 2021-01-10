import { useFormik } from "formik";
import React from "react";
import { Redirect } from "react-router-dom";
import './Login.scss';

interface FormProps {
    email: string;
    password: string;
    handleSubmit: any;
}

const InputField = ({name, value, type='text', onChangeHandler, errorMessage}) =>
    <div className='login__form-input'>
        <label htmlFor={name}>{name}</label>
        <input name={name} type={type} value={value} onChange={onChangeHandler}/>
        <p>{errorMessage}</p>
    </div>;

const SubmitButton = ({isFormValid}) => {
    const styleClasses = `login__form-button ${!isFormValid && 'login__form-button--disabled'}`;

    return (<button className={styleClasses} type='submit'>Login</button>);
};

const LoginForm = ({email, password, handleSubmit}: FormProps) => {
    const formik = useFormik({
        initialValues: {
            email, password
        },
        initialTouched: {
            email: true,
            password: true
        },
        validate: values => {
            const errors = {};
            if (!values.email) {
                errors['email'] = 'Email is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors['email'] = 'Invalid email address';
            }

            if(!values.password) {
                errors['password'] = 'Password is required';
            } else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(values.password)) {
                errors['password'] = 'Password must be from 6 to 20 char. contain uppercase, lowercase symbols and digits';
            }

            return errors;
        },
        onSubmit: () => (formik.isValid && formik.isSubmitting) && handleSubmit()
    });

    return (
        <div className='login'>
            <form className='login__form' onSubmit={formik.handleSubmit}>
                <InputField name='email' value={formik.values.email} onChangeHandler={formik.handleChange}
                            errorMessage={formik.errors.email}/>
                <InputField name='password' type={'password'} value={formik.values.password} onChangeHandler={formik.handleChange}
                            errorMessage={formik.errors.password}/>
                <SubmitButton isFormValid={formik.isValid}/>
            </form>
        </div>
    );
};

export class Login extends React.Component {
    handleInput = (event) => {
        this.setState((prevState) => ({...prevState, [event.target.name]: event.target.value}))
    }

    handleSubmit = (event) => {
        this.setState({redirect: '/chat'});
    }

    state = {
        email: '',
        password: '',
        handleSubmit: this.handleSubmit,
        redirect: ''
    };

    render() {
        if(this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <>
                <LoginForm {...this.state} />
            </>
        )
    }
}
