import { Component } from "solid-js";

import * as Button from "@bonsai/solid-button";

import * as styles from "./App.css";

const App: Component = () => {
  return (
    <div className={styles.app}>
      <Button.Root isLoading className={styles.buttonContent}>
        <Button.Icon className={styles.buttonIcon}>A</Button.Icon>
        <Button.Text className={undefined}>hello</Button.Text>
        <Button.Loading className={styles.buttonLoadingContent}>
          <span>loading</span>
        </Button.Loading>
      </Button.Root>
    </div>
  );
};

export default App;
