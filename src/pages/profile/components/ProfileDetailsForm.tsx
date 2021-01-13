import { useFormik } from "formik";
import { InputField } from "../../../shared/components/input-field/InputField";
import { Button } from "../../../shared/components/button/Button";
import React from "react";

interface ProfileDetailsFormProps {
    name: string;
    surname: string;
    handleSubmit: (name: string, surname: string) => void;
    handleModalClose: () => void;
}

export const ProfileDetailsForm = ({name, surname, handleSubmit, handleModalClose}: ProfileDetailsFormProps) => {
    const formik = useFormik({
        initialValues: {
            name, surname
        },
        onSubmit: () => (formik.isValid && formik.isSubmitting) && handleSubmit(formik.values.name, formik.values.surname)
    });

    return (
            <form className='profile-details__form' onSubmit={formik.handleSubmit}>
                <InputField
                    name='name'
                    value={formik.values.name}
                    onChangeHandler={formik.handleChange}
                />
                <InputField
                    name='surname'
                    value={formik.values.surname}
                    onChangeHandler={formik.handleChange}
                />
                <footer>
                    <Button
                        isDisabled={false}
                        text={'Save'}
                    />
                    <Button
                        text={'Close'}
                        isDisabled={false}
                        buttonHandler={handleModalClose}
                        type={'button'}
                    />
                </footer>
            </form>
    );
};
