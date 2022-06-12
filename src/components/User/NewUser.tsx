import { useState } from "react";

import { UserType } from "../../Types/UserType";


import UserForm from "../Form/UserForm";
import Card from "../Ui/Card";
import Modal from "../Ui/Modal";


interface NewUserProps{
    onAddUser: (user: UserType) => void
}


function NewUser(props: NewUserProps){
    const [modalActive, setModalActive] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalTitle, setModalTitle] = useState("");


    function onAddUser(user: UserType){
        props.onAddUser(user);
    }

    function onInvalidUser(title: string, message: string){
        console.log("Invalid user: " + message);
        setModalMessage(message);
        setModalTitle(title);
        setModalActive(true);
    }


    function onCloseModal(){
        setModalActive(false);
    }

    return (
        <Card>
            <UserForm onSubmitForm={onAddUser} onInvalidForm={onInvalidUser}/>
            {modalActive ? <Modal title={modalTitle} message={modalMessage} onCancel={onCloseModal}/> : ""}
        </Card>
    );
}

export default NewUser;
