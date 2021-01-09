import { useFormik } from "formik";
import React from "react";
import { Route } from "react-router-dom";
import './Login.scss';

interface FormProps {
    email: string;
    password: string;
    handleInput: any;
}

const InputField = (props) => <input name={props.name} value={props.value} onChange={props.handleInput}/>;
const SubmitButton = (props) => <Route render={({history}) => (
    <button
        type='submit'
    >
        Login
    </button>
)}/>;

const LoginForm = ({email, password, handleInput}: FormProps) => {
    const formik = useFormik({
        initialValues: {
            email: '', password: ''
        },
        validate: values => {
            const errors = {};
            if (!values.email) {
                errors['email'] = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors['email'] = '\'Invalid email address';
            }

            return errors;
        },
        onSubmit: values => (formik.isValid && formik.isSubmitting) && console.log('Submitted')
    });

    return (
        <div className='login'>
            <form className='login__form' onSubmit={formik.handleSubmit}>
                <InputField name='email' value={formik.values.email} handleInput={formik.handleChange}/>
                <p>{formik.errors.email}</p>
                <InputField name='password' value={formik.values.password} handleInput={formik.handleChange}/>
                <p>{formik.errors.email}</p>
                {console.log(formik.errors)}
                <SubmitButton/>
            </form>
        </div>
    );
};

export class Login extends React.Component {
    handleInput = (event) => {
        this.setState((prevState) => ({...prevState, [event.target.name]: event.target.value}))
    }

    state = {
        email: '',
        password: '',
        handleInput: this.handleInput
    };

    render() {
        return (
            <>
                <LoginForm {...this.state} />
            </>
        )
    }
}
