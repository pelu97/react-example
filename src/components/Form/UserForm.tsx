import { useState, useRef } from "react";

import { UserType } from "../../Types/UserType";

import Button from "../Ui/Button";

import classes from "./UserForm.module.css";

// import UserModal from "./UserModal";

// Usign state to get one input and ref to get another, to compare the differences between the two.
// Using state looks more elegant and doesn't involve manipulating the DOM, even though ref needs just a small manipulation


interface UserFormProps{
    onSubmitForm: (user: UserType) => void,
    onInvalidForm: (title: string, message: string) => void
}


function UserForm(props: UserFormProps){
    // const inputUsernameRef = useRef<HTMLInputElement>(null);
    const inputAgeRef = useRef<HTMLInputElement>(null);


    const [inputUsername, setInputUsername] = useState("");
    // const [inputAge, setInputAge] = useState(0);

    // const [validInput, setValidInput] = useState(true);

    let invalidTitle: string;
    let invalidMessage: string;
    let validInput: boolean;


    function formSubmitHandler(){
        // const inputUsername: string = inputUsernameRef.current!.value;
        const inputAge: number = +inputAgeRef.current!.value;

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

        if(user.username.trim().length <= 0){
            // setValidInput(false);
            // setModalMessage("Insert a valid username.");
            // setModalActive(true);
            validInput = false;
            invalidTitle = "Invalid input";
            invalidMessage = "Insert a valid username.";
        }
        else if(user.age <= 0){
            // setValidInput(false);
            // setModalMessage("Insert a valid age.");
            // setModalActive(true);
            invalidTitle = "Invalid input";
            validInput = false;
            invalidMessage = "Insert a valid age.";
        }


        if(validInput){
            props.onSubmitForm(user);
            // setInputUsername("");
            // setInputAge(0);

            // Directly manipulating the DOM just to reset the input values
            // inputUsernameRef.current!.value = "";
            inputAgeRef.current!.value = "";
        }
        else{
            props.onInvalidForm(invalidTitle, invalidMessage);
        }


    }

    function usernameChangeHandler(value: string){
        setInputUsername(value);
    }

    //
    // function ageChangeHandler(value: string){
    //     if(value.trim().length > 0){
    //         setInputAge(parseInt(value));
    //     }
    //     else{
    //         setInputAge(0);
    //     }
    // }

    // <button type="submit">Add User</button>


    // <input id="username" type="text" value={inputUsername} ref={inputUsernameRef} onChange={(event) => {
    //     usernameChangeHandler(event.target.value);
    // }}/>

    // <input id="age" type="number" value={inputAge} ref={inputAgeRef} onChange={(event) => {
    //     ageChangeHandler(event.target.value);
    // }}/>

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
                <input id="age" type="number" ref={inputAgeRef}/>
            </div>
            <Button type="submit">Add User</Button>
        </form>
    );
}

export default UserForm;
