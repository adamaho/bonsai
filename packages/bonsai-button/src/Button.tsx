import { createContext, useContext, onMount } from "solid-js";
import { createStore } from "solid-js/store";

import type { Component} from "solid-js";

/* -----------------------------------------------------------
* ButtonContext
-----------------------------------------------------------**/
type ButtonContextProps = [{
  readonly buttonText: string;
  readonly isDisabled: boolean
}, {
  updateButtonText: (buttonText: string) => void
}];

export const ButtonContext = createContext<ButtonContextProps>([{ buttonText: "0", isDisabled: false }, { updateButtonText: () => { return; }}]);

export interface ButtonContextProviderProps {
  isDisabled?: boolean
}

export const ButtonContextProvider: Component<ButtonContextProviderProps> = (props) => {
  /**
   * Define a store for the button
   */
    const [state, setState] = createStore({
    buttonText: "",
    isDisabled: props?.isDisabled || false
  });

  /**
   * Create an variable instance of the store to pass around
   */
  const store: ButtonContextProps = [
    state,
    {
      updateButtonText(buttonText: string) {
        setState("buttonText", buttonText);
      }
    }
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
export const useButtonContext = () => {
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

export const ButtonRoot: Component<ButtonRootProps> = ({
  children,
  className,
  isDisabled = false,
  ref,
}) => {

  const buttonContext = useButtonContext();

  return (
    <button
      className={className}
      ref={ref}
      disabled={isDisabled}
      aria-label={buttonContext[0].buttonText}
    >
      {children}
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

export const ButtonIcon: Component<ButtonIconProps> = ({
  children,
  className,
  ref,
}) => {
  const buttonContext = useButtonContext();
  return (
    <span className={className} ref={ref}>
      {children}
    </span>
  );
};

export type { ButtonRootProps, ButtonIconProps };
