import { Component, createSignal, createEffect } from "solid-js";

import * as Button from "@bonsai/solid-button";

import { Bookmark } from "./components";

import * as styles from "./App.css";

const App: Component = () => {

  const [isLoading, setLoading] = createSignal(false);
  const [isDisabled, setDisabled] = createSignal(false);

  return (
    <div className={styles.app}>
      <Button.Root className={styles.button} isLoading={isLoading()} isDisabled={isDisabled()}>
        <Button.Icon className={styles.buttonIcon}>
          <Bookmark />
        </Button.Icon>
        <Button.Text className={styles.buttonText}>Bookmark</Button.Text>
        <Button.Loading className={styles.buttonLoadingContent}>
          loading
        </Button.Loading>
      </Button.Root>
      <div>
        <button onClick={() => setLoading((prev) => !prev)}>toggle loading</button>
        <button onClick={() => setDisabled((prev) => !prev)}>toggle disabled</button>
      </div>
    </div>
  );
};

export default App;
