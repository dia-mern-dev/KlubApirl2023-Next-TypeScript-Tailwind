import React, { ReactNode } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

type Props = {
  type?: "submit" | "button";
  buttonStyle?: "white" | "black" | "gray";
  className?: string;
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  fullWidth?: boolean;
};

const Button: React.FC<Props> = ({
  type = "button",
  buttonStyle = "white",
  className = "",
  children,
  onClick = () => {},
  fullWidth = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(className, styles.buttonStyle, styles[buttonStyle], {
        "w-full": fullWidth,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
