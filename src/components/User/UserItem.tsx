import { UserType } from "../../Types/UserType";


interface UserItemProps{
    user: UserType
}


function UserItem(props: UserItemProps){
    return (
        <div>
            {`${props.user.username} (${props.user.age} years old)`}
        </div>
    );
}

export default UserItem;
