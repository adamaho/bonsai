import { Component, onMount } from "solid-js";

import Button from "@bonsai/solid-button";

import * as styles from "./App.css";

const App: Component = () => {
  return (
    <Button.Context>
      <Button.Root className={styles.button}>
        <Button.Icon>A</Button.Icon>
        <Button.Text>hello</Button.Text>
        <Button.Icon>B</Button.Icon>
      </Button.Root>
    </Button.Context>
  );
};

export default App;
