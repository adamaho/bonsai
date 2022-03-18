import { Component, JSX, mergeProps, splitProps } from "solid-js";
import { createSignal } from "solid-js";

import { Button, ButtonText } from "@bonsai/solid-button";

import { Slot } from "@bonsai/solid-slot";

interface FooProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  tester?: string;
}

const Foo: Component<FooProps> = (props) => {
  const [local, rest] = splitProps(props, ['asChild']);
  const Component = local.asChild ? Slot : 'button';

  return (
    <Component {...mergeProps(rest)} />
  );
};

const App: Component = () => {
  const [isLoading, setIsLoading] = createSignal(false);
  const [isDisabled, setIsDisabled] = createSignal(false);

  return (
    <>
      <Button isLoading={isLoading()} isDisabled={isDisabled()}>
        <ButtonText>helloaaa</ButtonText>
      </Button>
      <Foo asChild tester="foo">
        <a>hello</a>
      </Foo>
      <button onClick={() => setIsLoading((prev) => !prev)}>
        toggle loading
      </button>
      <button onClick={() => setIsDisabled((prev) => !prev)}>
        toggle disabled
      </button>
    </>
  );
};

export default App;
