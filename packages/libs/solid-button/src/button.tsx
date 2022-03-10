import { Component, createContext, onMount, useContext } from "solid-js";

const ButtonContext = createContext();

const ButtonContextProvider: Component = ({ children }) => {
  const foo = "bar";
  return (
    <ButtonContext.Provider value={{ foo }}>
      {children}
    </ButtonContext.Provider>
  );
};

const useButtonContext = () => {
  return useContext(ButtonContext);
}

const Button: Component = ({ children }) => {
  return (
    <button>
      {children}
    </button>
  );
};

const ButtonText: Component = ({ children }) => {

  const context = useButtonContext();

  onMount(() => {
    console.log(context);
  });

  return (
    <span>
      {children}
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