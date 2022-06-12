import { UserType } from "../../Types/UserType";

import UserItem from "./UserItem";
import Card from "../Ui/Card";

import classes from "./UserList.module.css";


interface UserListProps{
    users: UserType[]
}


function UserList(props: UserListProps){
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => {
                    return <UserItem user={user} key={user.id}/>
                })}
            </ul>
        </Card>
    );
}

export default UserList;
