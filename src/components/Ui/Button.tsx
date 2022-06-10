
import classes from "./Button.module.css";

interface ButtonProps {
    children: string,
    onClick?: () => void,
    type?: "button" | "submit" | "reset" | undefined
}


function Button(props: ButtonProps) {
    return (
        <button className={classes.button} type={props.type || "button"} onClick={props.onClick}>{props.children}</button>
    );
}

export default Button;
