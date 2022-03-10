import { Component, createContext, onMount, useContext } from "solid-js";

const ButtonContext = createContext();

const ButtonContextProvider: Component = (props) => {
  return (
    <ButtonContext.Provider value={{ foo: "bar" }}>
      {props.children}
    </ButtonContext.Provider>
  );
};

const useButtonContext = () => {
  return useContext(ButtonContext);
}

const Button: Component = (props) => {
  return (
    <button>
      {props.children}
    </button>
  );
};

const ButtonText: Component = (props) => {

  const context = useButtonContext();

  // expect this context to not be undefined.

  onMount(() => {
    console.log(context);
  });

  return (
    <span>
      {props.children}
    </span>
  );
};

const Root = Button;
const Text = ButtonText;
const Context = ButtonContextProvider;

export {
  ButtonContextProvider,
  Button,
  ButtonText,
  //
  Context,
  Root,
  Text
};