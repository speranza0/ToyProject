import React, { ButtonHTMLAttributes } from "react";
import cn from "classnames";
import * as styles from "./style";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
}

function Button({ type, onClick, children }: ButtonProps) {
  return (
    <button
      css={styles.block}
      type={type}
      className={cn({ "btn-primary": type === "submit" })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
