import type { Component } from "solid-js";
import { createSignal } from "solid-js";

import { Button, ButtonText } from "@bonsai/solid-button";

import { Slot } from "@bonsai/solid-slot";

const App: Component = () => {
  const [isLoading, setIsLoading] = createSignal(false);
  const [isDisabled, setIsDisabled] = createSignal(false);

  return (
    <>
      <Button isLoading={isLoading()} isDisabled={isDisabled()}>
        <ButtonText>helloaaa</ButtonText>
      </Button>
      <Slot>
        <p>asd</p>
      </Slot>
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
