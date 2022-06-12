import { useState, Fragment } from "react";

import { UserType } from "./Types/UserType";

import UserList from "./components/User/UserList";
import NewUser from "./components/User/NewUser";


const DUMMY_DATA: UserType[] = [
    {
        id: "testId",
        username: "Test user",
        age: 999
    }
]

function App() {
    const [userData, setUserData] = useState(DUMMY_DATA);



    function addUser(user: UserType){
        user.id = Math.random.toString();

        setUserData((prevData) => {
            return (
                [
                    ...prevData,
                    user
                ]
            );
        });
    }


    return (
        <Fragment>
            <NewUser onAddUser={addUser}/>
            <UserList users={userData}/>
        </Fragment>
    );
}

export default App;
