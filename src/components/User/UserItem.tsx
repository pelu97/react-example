import { UserType } from "../../Types/UserType";


interface UserItemProps{
    user: UserType
}


function UserItem(props: UserItemProps){
    return (
        <li>
            {`${props.user.username} (${props.user.age} years old)`}
        </li>
    );
}

export default UserItem;
