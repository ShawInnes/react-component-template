import { MouseEventHandler } from "react";
import "../index.css";

export type ButtonProps = {
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({ text, ...props }) => {
  return <button {...props}>{text}</button>;
};

export default Button;
