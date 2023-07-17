import React, { ButtonHTMLAttributes } from "react";
import cn from "classnames";
import * as styles from "./style";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  type?: "default" | "primary";
  htmlType: "submit" | "reset" | "button";
  children: React.ReactNode;
  onClick?: () => void;
}

function Button({
  type = "default",
  htmlType,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      css={styles.block}
      type={htmlType}
      className={cn({ "btn-primary": type === "primary" })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
