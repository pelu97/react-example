
interface UserModalProps{
    message: string,
    onCancel: () => void
}


function UserModal(props: UserModalProps){
    function cancelHandler(){
        props.onCancel();
    }

    return (
        <div>
            {props.message}
            <button type="button" onClick={cancelHandler}>Okay</button>
        </div>
    );
}

export default UserModal;
