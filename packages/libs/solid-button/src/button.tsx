import {
  createContext,
  onMount,
  useContext,
  children,
  Show,
  createComputed,
  splitProps,
} from "solid-js";
import type { Component, JSX, ComponentProps } from "solid-js";

import { Dynamic } from "solid-js/web";
import { createStore } from "solid-js/store";

/** ------------------------------------------------------------
 * Common Types
 -------------------------------------------------------------*/
type ButtonContextValue = [
  {
    buttonText: string;
    isDisabled: boolean;
    isLoading: boolean;
  },
  {
    updateButtonText: (buttonText: string) => void;
  }
];

/** ------------------------------------------------------------
 * Button Context
 -------------------------------------------------------------*/
const ButtonContext = createContext<ButtonContextValue>();

const useButtonContext = () => {
  return useContext(ButtonContext);
};

/** ------------------------------------------------------------
 * Button
 -------------------------------------------------------------*/
type ButtonElementProps = JSX.ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProps extends ButtonElementProps {
  isDisabled?: boolean;
  isLoading?: boolean;
  ref?: HTMLButtonElement;
}

const Button: Component<ButtonProps> = (props) => {

  const [local, rest] = splitProps(props, ["isDisabled", "isLoading", "ref"]);

  const [state, setState] = createStore({
    buttonText: "",
    isDisabled: local?.isDisabled || false,
    isLoading: local?.isLoading || false,
  });

  const store: ButtonContextValue = [
    state,
    {
      updateButtonText: (buttonText: string) => {
        setState("buttonText", buttonText);
      },
    },
  ];

  // update the loading state based on props
  createComputed(() => {
    setState("isLoading", local?.isLoading || false);
  });

  // update the loading state based on props
  createComputed(() => {
    setState("isDisabled", local?.isDisabled || false);
  });

  return (
    <ButtonContext.Provider value={store}>
      <button
        {...rest}
        aria-label={state.buttonText}
        data-state-loading={state.isLoading}
        disabled={state.isDisabled}
        ref={local.ref}
      >
        {props.children}
      </button>
    </ButtonContext.Provider>
  );
};

/** ------------------------------------------------------------
 * Button Text
 -------------------------------------------------------------*/
type ButtonTextElementProps = ComponentProps<typeof Dynamic> &
  JSX.HTMLAttributes<HTMLSpanElement>;

interface ButtonTextProps extends ButtonTextElementProps {
  children: string;
  ref?: HTMLSpanElement;
}

const ButtonText: Component<ButtonTextProps> = (props) => {
  const context = useButtonContext();

  const buttonText = children(() => props.children);

  createComputed(() => {
    context?.[1].updateButtonText(buttonText() as string);
  });

  return (
    <Dynamic {...props} component={props.component || "span"} ref={props?.ref}>
      {buttonText}
    </Dynamic>
  );
};

/** ------------------------------------------------------------
 * Button Loading
 -------------------------------------------------------------*/
type ButtonLoadingElementProps = ComponentProps<typeof Dynamic> &
  JSX.HTMLAttributes<HTMLSpanElement>;

interface ButtonLoadingProps extends ButtonLoadingElementProps {
  ref?: HTMLSpanElement;
}

const ButtonLoading: Component<ButtonLoadingProps> = (props) => {
  const context = useButtonContext();

  return (
    <Show when={context?.[0].isLoading} fallback={null}>
      <Dynamic {...props} component={props.component || "span"} ref={props.ref}>
        {props.children}
      </Dynamic>
    </Show>
  );
};

/** ------------------------------------------------------------
 * exports
 -------------------------------------------------------------*/
const Root = Button;
const Text = ButtonText;
const Loading = ButtonLoading;

export {
  Button,
  ButtonText,
  ButtonLoading,
  //
  Root,
  Text,
  Loading,
};

export type { ButtonProps, ButtonTextProps, ButtonLoadingProps };
