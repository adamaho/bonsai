import { Component, createContext, onMount, useContext, children } from "solid-js";
import { createStore } from "solid-js/store";

/** ------------------------------------------------------------
 * Common Types
 -------------------------------------------------------------*/
type ButtonContextValue = [{
  buttonText: string
}, {
  updateButtonText: (buttonText: string) => void;
}]

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
const Button: Component = (props) => {

  const [state, setState] = createStore({
    buttonText: ""
  });

  const store: ButtonContextValue = [
    state,
  {
    updateButtonText: (buttonText: string) => {
      setState("buttonText", buttonText);
    }
  }];

  return (
    <ButtonContext.Provider value={store}>
      <button aria-label={state.buttonText}>{props.children}</button>
    </ButtonContext.Provider>
  );
};

/** ------------------------------------------------------------
 * Button Text
 -------------------------------------------------------------*/
interface ButtonTextProps {
  children: string;
}
 
const ButtonText: Component<ButtonTextProps> = (props) => {
  const context = useButtonContext();

  const buttonText = children(() => props.children);

  onMount(() => {
    if (context) {
      context[1].updateButtonText(buttonText() as string);
    }
  });

  return <span>{buttonText}</span>;
};


/** ------------------------------------------------------------
 * exports
 -------------------------------------------------------------*/

const Root = Button;
const Text = ButtonText;

export {
  Button,
  ButtonText,
  //
  Root,
  Text,
};
