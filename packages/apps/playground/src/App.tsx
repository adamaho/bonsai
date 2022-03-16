import type { Component } from "solid-js";
import { createSignal } from "solid-js";

import { Button, ButtonText, ButtonLoading } from "@bonsai/solid-button";

const App: Component = () => {
  const [isLoading, setIsLoading] = createSignal(false);
  const [isDisabled, setIsDisabled] = createSignal(false);

  return (
    <>
      <Button isLoading={isLoading()} isDisabled={isDisabled()}>
        <ButtonText>helloaaa</ButtonText>
        <ButtonLoading>Loading</ButtonLoading>
      </Button>
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
