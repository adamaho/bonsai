import { Component } from "solid-js";

import { Button } from "@bonsai/solid-button";

import * as styles from "./App.css";

const App: Component = () => {
  return (
    <div className={styles.app}>
      <Button.Root isLoading>
        <Button.Content className={styles.buttonContent}>
          <Button.Icon className={styles.buttonIcon}>A</Button.Icon>
          <Button.Text className={styles.buttonText}>hello</Button.Text>
          <Button.Loading className={styles.buttonLoadingContent}>
            <span>loading</span>
          </Button.Loading>
        </Button.Content>
      </Button.Root>
    </div>
  );
};

export default App;
