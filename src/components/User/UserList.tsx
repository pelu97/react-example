import { UserType } from "../../Types/UserType";

import UserItem from "./UserItem";
import Card from "../Ui/Card";


interface UserListProps{
    users: UserType[]
}


function UserList(props: UserListProps){
    return (
        <Card>
            {props.users.map((user) => {
                return <UserItem user={user} key={user.id}/>
            })}
        </Card>
    );
}

export default UserList;
