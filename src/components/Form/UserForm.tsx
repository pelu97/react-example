import { useState } from "react";

import { UserType } from "../../Types/UserType";

import classes from "./UserForm.module.css";

// import UserModal from "./UserModal";


interface UserFormProps{
    onSubmitForm: (user: UserType) => void,
    onInvalidForm: (message: string) => void
}


function UserForm(props: UserFormProps){
    const [inputUsername, setInputUsername] = useState("");
    const [inputAge, setInputAge] = useState(0);

    // const [validInput, setValidInput] = useState(true);

    let invalidMessage: string;
    let validInput: boolean;


    function formSubmitHandler(){
        const user: UserType = {
            id: "",
            username: inputUsername,
            age: inputAge
        }

        // run validations
        // setValidInput(true);
        validInput = true;

        console.log("Running validations");
        // console.log(user);

        if(user.username.length <= 0){
            // setValidInput(false);
            // setModalMessage("Insert a valid username.");
            // setModalActive(true);
            validInput = false;
            invalidMessage = "Insert a valid username.";
        }
        else if(user.age <= 0){
            // setValidInput(false);
            // setModalMessage("Insert a valid age.");
            // setModalActive(true);
            validInput = false;
            invalidMessage = "Insert a valid age.";
        }


        if(validInput){
            props.onSubmitForm(user);
            setInputUsername("");
            setInputAge(0);
        }
        else{
            props.onInvalidForm(invalidMessage);
        }


    }

    function usernameChangeHandler(value: string){
        setInputUsername(value);
    }

    function ageChangeHandler(value: string){
        if(value.length > 0){
            setInputAge(parseInt(value));
        }
        else{
            setInputAge(0);
        }
    }

    return (
        <form className={classes.input} onSubmit={(event) => {
            event.preventDefault();
            formSubmitHandler();
        }}>
            <div>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={inputUsername} onChange={(event) => {
                    usernameChangeHandler(event.target.value);
                }}/>
            </div>

            <div>
                <label htmlFor="age">Age</label>
                <input id="age" type="number" value={inputAge} onChange={(event) => {
                    ageChangeHandler(event.target.value);
                }}/>
            </div>
            <button type="submit">Add User</button>
        </form>
    );
}

export default UserForm;
