import { createContext, useContext, onMount } from "solid-js";
import { createStore } from "solid-js/store";

import type { Component } from "solid-js";

/* -----------------------------------------------------------
* ButtonContext
-----------------------------------------------------------**/
type ButtonContextProps = [
  {
    readonly buttonText: string;
    readonly isDisabled: boolean;
    readonly isLoading: boolean;
  },
  {
    updateButtonText: (buttonText: string) => void;
  }
];

export const ButtonContext = createContext<ButtonContextProps>([
  { buttonText: "", isDisabled: false, isLoading: false },
  {
    updateButtonText: () => {
      return;
    },
  },
]);

interface ButtonRootProps {
  isDisabled?: boolean;
  isLoading?: boolean;
}

const ButtonRoot: Component<ButtonRootProps> = (props) => {
  /**
   * Define a store for the button
   */
  const [state, setState] = createStore({
    buttonText: "",
    isDisabled: props?.isDisabled || false,
    isLoading: props?.isLoading || false,
  });

  /**
   * Create an variable instance of the store to pass around
   */
  const store: ButtonContextProps = [
    state,
    {
      updateButtonText(buttonText: string) {
        setState("buttonText", buttonText);
      },
    },
  ];
  return (
    <ButtonContext.Provider value={store}>
      {props.children}
    </ButtonContext.Provider>
  );
};

/**
 * Returns the button context
 */
const useButtonContext = () => {
  return useContext(ButtonContext);
};

/* -----------------------------------------------------------
* ButtonContent
-----------------------------------------------------------**/
interface ButtonContentProps {
  className?: string;
  isDisabled?: boolean;
  ref?: HTMLButtonElement;
}

const ButtonContent: Component<ButtonContentProps> = (props) => {
  const [state] = useButtonContext();

  return (
    <button
      className={props?.className}
      ref={props?.ref}
      data-state-loading={state.isLoading}
      disabled={state.isDisabled}
      aria-disabled={state.isDisabled ?? undefined}
      aria-label={state.buttonText}
    >
      {props.children}
    </button>
  );
};

/* -----------------------------------------------------------
* ButtonIcon
-----------------------------------------------------------**/
interface ButtonIconProps {
  className?: string;
  ref?: HTMLSpanElement;
}

const ButtonIcon: Component<ButtonIconProps> = (props) => {
  return (
    <span className={props?.className} ref={props?.ref}>
      {props.children}
    </span>
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

const ButtonText: Component<ButtonTextProps> = (props) => {
  /**
   * take the string that is passed as the children and set it in context
   */
  const buttonContext = useButtonContext();

  /**
   * When the component mounts, set the button text in context
   */
  onMount(() => {
    buttonContext?.[1].updateButtonText(props.children);
  });

  return (
    <span className={props?.className} ref={props?.ref}>
      {props.children}
    </span>
  );
};

/* -----------------------------------------------------------
* ButtonLoading
-----------------------------------------------------------**/
interface ButtonLoadingProps {
  className?: string;
  ref?: HTMLSpanElement;
}

const ButtonLoading: Component<ButtonLoadingProps> = (props) => {

  /**
   * subscribe to the button context
   */
  const [state] = useButtonContext();

  /**
   * if the button is not loading return null
   */
  if (!state.isLoading) {
    return null;
  }

  return (
    <span className={props?.className} ref={props?.ref}>
      {props.children}
    </span>
  );
};

export const Button = {
  Root: ButtonRoot,
  Content: ButtonContent,
  Icon: ButtonIcon,
  Text: ButtonText,
  Loading: ButtonLoading,
  useButtonContext,
};

export type {
  ButtonRootProps,
  ButtonContentProps,
  ButtonTextProps,
  ButtonIconProps,
};
