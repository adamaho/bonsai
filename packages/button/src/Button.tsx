import type { Component } from "solid-js";

/* -----------------------------------------------------------
* ButtonRoot
-----------------------------------------------------------**/
interface ButtonRootProps {
  className?: string;
  ref?: HTMLButtonElement;
}

const ButtonRoot: Component<ButtonRootProps> = ({ children, className, ref }) => {
  return (
    <button className={className} ref={ref}>
      {children}
    </button>
  );
};

/* -----------------------------------------------------------
* ButtonText
-----------------------------------------------------------**/
interface ButtonTextProps {
  children: string;
  className?: string;
  ref?: HTMLSpanElement;
}

const ButtonText: Component<ButtonTextProps> = ({ children, className, ref }) => {
  return (
    <span className={className} ref={ref}>
      {children}
    </span>
  );
};

/* -----------------------------------------------------------
* ButtonIcon
-----------------------------------------------------------**/
interface ButtonIconProps {
  className?: string;
  ref?: HTMLSpanElement;
}

const ButtonIcon: Component<ButtonIconProps> = ({ children, className, ref }) => {
  return (
    <span className={className} ref={ref}>
      {children}
    </span>
  );
};

export const Button = {
  Root: ButtonRoot,
  Text: ButtonText,
  Icon: ButtonIcon
};

export type { ButtonRootProps, ButtonTextProps, ButtonIconProps };