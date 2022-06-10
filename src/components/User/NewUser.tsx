import { useState } from "react";

import { UserType } from "../../Types/UserType";


import UserForm from "../Form/UserForm";
import Card from "../Ui/Card";
import UserModal from "../Form/UserModal";


interface NewUserProps{
    onAddUser: (user: UserType) => void
}


function NewUser(props: NewUserProps){
    const [modalActive, setModalActive] = useState(false);
    const [modalMessage, setModalMessage] = useState("");


    function onAddUser(user: UserType){
        props.onAddUser(user);
    }

    function onInvalidUser(message: string){
        console.log("Invalid user: " + message);
        setModalMessage(message);
        setModalActive(true);
    }


    function onCloseModal(){
        setModalActive(false);
    }

    return (
        <Card>
            <UserForm onSubmitForm={onAddUser} onInvalidForm={onInvalidUser}/>
            {modalActive ? <UserModal message={modalMessage} onCancel={onCloseModal}/> : ""}
        </Card>
    );
}

export default NewUser;
