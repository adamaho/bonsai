import { Component, onMount } from 'solid-js';

import {Button} from "@bonsai/solid-button";

import * as styles from "./App.css";

const App: Component = () => {

  let foo: HTMLButtonElement | undefined;

  onMount(() => {
    console.log(foo);
  });

  return (
    <Button.Root className={styles.button} ref={foo} />
  );
};

export default App;
