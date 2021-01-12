import './Profile.scss';
import React, { useState } from "react";
import { Modal } from "./components/Modal";

export const Profile = () => {
    const [name, setName] = useState('Johan');
    const [surname, setSurname] = useState('Briggston');
    const [isModalVisible, setModalVisibilityStatus] = useState(false);

    const handleSubmit = (name: string, surname: string): void => {
        setName(name);
        setSurname(surname);
        setModalVisibilityStatus(false);
    }

    const handleModalClose = (): void => {
        setModalVisibilityStatus(false);
    }

    return (
        <>
            <div onClick={() => {
                setModalVisibilityStatus(true)
            }} className='profile'>
                {`${name.charAt(0).toUpperCase()}${surname.charAt(0).toUpperCase()}`}
            </div>
            {isModalVisible &&
            <Modal name={name} surname={surname} handleModalClose={handleModalClose} handleSubmit={handleSubmit}/>}
        </>
    );
}
