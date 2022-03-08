<script type="ts">
  import {Button} from "@bonsai/svelte-button";

  import * as styles from "./index.css";

  let isDisabled = false;
  let isLoading = false;

  const handleDisable = () => {
    isDisabled = !isDisabled;
  };

  const handleLoading = () => {
    isLoading = !isLoading;
  };
</script>

<svelte:head>
  <title>Bonsai Playground</title>
</svelte:head>

<Button.Root class={styles.button} isDisabled={isDisabled} isLoading={isLoading}>
  <Button.Text text="hello world" />
  <Button.Loading>
    loading
  </Button.Loading>
</Button.Root>

<div>
  <button on:click={handleLoading}>set loading</button>
  <button on:click={handleDisable}>set disabled</button>
</div>
