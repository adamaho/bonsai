import type { Component } from 'solid-js';

import { ButtonContextProvider, Button, ButtonText } from "@bonsai/solid-button"; 

const App: Component = () => {
  return (
    <ButtonContextProvider>
      <Button>
        <ButtonText>
          helloaaa
        </ButtonText>
      </Button>
    </ButtonContextProvider>
  );
};

export default App;
