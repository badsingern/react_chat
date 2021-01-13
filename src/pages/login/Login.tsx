import React from "react";
import { Redirect } from "react-router-dom";
import { LoginForm } from "./components/LoginForm";

interface LoginState {
    email: string;
    password: string;
    handleSubmit: () => void;
    redirect: string;
}

export class Login extends React.Component {
    handleInput = (event): void => {
        this.setState((prevState) => ({...prevState, [event.target.name]: event.target.value}))
    }

    handleSubmit = (): void => {
        this.setState({redirect: '/chat'});
    }

    state: LoginState = {
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
