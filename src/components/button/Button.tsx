import {MouseEventHandler} from "react";
import '../index.css';

export type ButtonProps = {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({
                                           size,
                                           primary,
                                           disabled,
                                           text,
                                           onClick,
                                           ...props
                                       }) => {
    return (
        <button {...props}>{text}</button>
    );
};

export default Button;