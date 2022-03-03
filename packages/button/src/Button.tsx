import { createContext, useContext, createSignal, onMount } from "solid-js";
import type { Component, Setter, Accessor } from "solid-js";

/* -----------------------------------------------------------
* ButtonContext
-----------------------------------------------------------**/
interface ButtonContextProps {
  isDisabled: boolean;
  buttonText: Accessor<string>;
  setButtonText: Setter<string>;
}

const ButtonContext = createContext<ButtonContextProps>();

/**
 * Returns the button context
 */
const useButtonContext = () => {
  return useContext(ButtonContext);
};

/* -----------------------------------------------------------
* ButtonRoot
-----------------------------------------------------------**/
interface ButtonRootProps {
  className?: string;
  isDisabled?: boolean;
  ref?: HTMLButtonElement;
}

const ButtonRoot: Component<ButtonRootProps> = ({
  children,
  className,
  isDisabled = false,
  ref,
}) => {
  /**
   * Define a signal that holds the button text
   */
  const [buttonText, setButtonText] = createSignal("");

  return (
    <ButtonContext.Provider
      value={{
        isDisabled,
        buttonText,
        setButtonText,
      }}
    >
      <button
        className={className}
        ref={ref}
        disabled={isDisabled}
        aria-label={buttonText()}
      >
        {children}
      </button>
    </ButtonContext.Provider>
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

const ButtonText: Component<ButtonTextProps> = ({
  className,
  ref,
  ...props
}) => {
  /**
   * take the string that is passed as the children and set it in context
   */
  const buttonContext = useButtonContext();

  /**
   * When the component mounts, set the button text in context
   */
  onMount(() => {
    buttonContext?.setButtonText(props.children);
  });

  return (
    <span className={className} ref={ref}>
      {props.children}
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

const ButtonIcon: Component<ButtonIconProps> = ({
  children,
  className,
  ref,
}) => {
  return (
    <span className={className} ref={ref}>
      {children}
    </span>
  );
};

export const Button = {
  Root: ButtonRoot,
  Text: ButtonText,
  Icon: ButtonIcon,
};

export type { ButtonRootProps, ButtonTextProps, ButtonIconProps };
