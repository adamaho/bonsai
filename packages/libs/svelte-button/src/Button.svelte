<script lang="ts">
  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  /**
   * Define the props
   */
  let klass: string = "";
  export { klass as class };
  export let isDisabled: boolean = false;
  export let isLoading: boolean = false;

  /**
   * Define the stores
   */
  let _buttonText = writable("");
  let _isLoading = writable(isLoading);

  /**
   * Define the button context
   */
  setContext("bonsaiButtonContext", [
    {
      isLoading: _isLoading
    },
    {
      setButtonText: (text: string) => {
        $_buttonText = text;
      }
    }
  ]);


  /**
   * When isLoading changes, update the store and context
  */
  $: {
    $_isLoading = isLoading;
  }
</script>

<button
  class={klass}
  disabled={isDisabled} 
  aria-label={$_buttonText}
  data-state-loading={isLoading}
>
  <slot />
</button>