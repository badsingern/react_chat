import React, { useState } from "react";
import { ProfileDetailsForm } from "./ProfileDetails";

interface ModalProps {
    name: string;
    surname: string;
    handleSubmit: (name: string, surname: string) => void;
    handleModalClose: () => void;
}

export const Modal = ({name, surname, handleSubmit, handleModalClose}: ModalProps) => {
    const [isEditMode, setEditMode] = useState(false);

    return (
        <div className='modal-overlay'>
            <div className='modal-content'>
                <h2>Profile Details</h2>
                {isEditMode
                    ? <ProfileDetailsForm
                        name={name}
                        surname={surname}
                        handleSubmit={handleSubmit}
                        handleModalClose={handleModalClose}/>
                    : <>
                        <h4>{name}</h4>
                        <h4>{surname}</h4>
                        <button onClick={() => setEditMode(true)}>Edit</button>
                    </>
                }
            </div>
        </div>
    );
}
