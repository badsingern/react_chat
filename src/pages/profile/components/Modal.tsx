import React, { useState } from "react";
import { ProfileDetailsForm } from "./ProfileDetailsForm";
import { Button } from "../../../shared/components/button/Button";

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
                <div className='profile-details'>
                {isEditMode
                    ? <ProfileDetailsForm
                        name={name}
                        surname={surname}
                        handleSubmit={handleSubmit}
                        handleModalClose={handleModalClose}/>
                    : <div className='profile-details__read-mode'>
                        <data>
                            <h4>Name: {name}</h4>
                            <h4>Surname: {surname}</h4>
                        </data>
                        <footer>
                            <Button text={'Edit'} isDisabled={false} type={'button'} buttonHandler={()=>{setEditMode(true)}}/>
                            <Button text={'Close'} buttonHandler={handleModalClose} isDisabled={false}/>
                        </footer>
                    </div>
                }
                </div>
            </div>
        </div>
    );
}
