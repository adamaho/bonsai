import type { Component } from "solid-js";

/* -------------------------------------------------------
* ButtonRoot
-----------------------------------------------------------**/
interface ButtonRootProps {
  className: string;
  ref?: HTMLButtonElement;
}

const ButtonRoot: Component<ButtonRootProps> = ({ className, ref }) => {
  return (
    <button className={className} ref={ref}>hello</button>
  );
};

export const Button = {
  Root: ButtonRoot
};