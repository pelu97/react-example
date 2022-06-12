import { Fragment } from "react";
import ReactDOM from "react-dom";

import Button from "./Button";
import Card from "./Card";

import classes from "./Modal.module.css";






interface ModalProps{
    title: string,
    message: string,
    onCancel: () => void
}

function Modal(props: ModalProps){
    function cancelHandler(){
        props.onCancel();
    }

    const backdropComponent = (
        <div className={classes.backdrop} onClick={cancelHandler}/>
    );

    const modalComponent = (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button type="button" onClick={cancelHandler}>Okay</Button>
            </footer>
        </Card>
    );



    return (
        <Fragment>
            {ReactDOM.createPortal(
                backdropComponent,
                document.getElementById("backdrop-root")!
            )}
            {ReactDOM.createPortal(
                modalComponent,
                document.getElementById("overlay-root")!
            )}
        </Fragment>
    );
}

export default Modal;
