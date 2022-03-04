import { onMount, useContext } from "solid-js";
import type { Component } from "solid-js";

import { useButtonContext, ButtonContext } from "./Button";

export interface ButtonTextProps {
  children: string;
  className?: string;
  ref?: HTMLSpanElement;
}

export const ButtonText: Component<ButtonTextProps> = ({
  className,
  ref,
  ...props
}) => {
  /**
   * take the string that is passed as the children and set it in context
   */
  const buttonContext = useContext(ButtonContext);
  
  /**
   * When the component mounts, set the button text in context
   */
  onMount(() => {
    buttonContext?.[1].updateButtonText(props.children);
  });

  return (
    <span className={className} ref={ref}>
      {props.children}
    </span>
  );
};