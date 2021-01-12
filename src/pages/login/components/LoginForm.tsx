import { useFormik } from "formik";
import { InputField } from "../../../shared/components/input-field/InputField";
import { Button } from "../../../shared/components/button/Button";
import React from "react";
import { loginValidationSchema } from "../Login.service";
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    email: string;
    password: string;
    handleSubmit: () => void;
}

export const LoginForm = ({email, password, handleSubmit}: LoginFormProps) => {
    const formik = useFormik({
        initialValues: {
            email, password
        },
        initialTouched: {
            email: true,
            password: true
        },
        validate: values => loginValidationSchema(values),
        onSubmit: () => (formik.isValid && formik.isSubmitting) && handleSubmit()
    });

    return (
        <div className={styles.login}>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                <InputField
                    name='email'
                    value={formik.values.email}
                    onChangeHandler={formik.handleChange}
                    errorMessage={formik.errors.email}
                    placeholder={'Please enter your email'}
                />
                <InputField
                    name='password'
                    type={'password'}
                    value={formik.values.password}
                    onChangeHandler={formik.handleChange}
                    errorMessage={formik.errors.password}
                    placeholder={'Please enter your password'}
                />
                <Button isDisabled={!formik.isValid} text={'Login'}/>
            </form>
        </div>
    );
};
