<script lang="ts">
  import { onMount, getContext} from "svelte";

  /**
   * Define props
   */
  export let text: string;
  let klass: string = "";
  export { klass as class };

  /** Get the button context */
  const [, {setButtonText}] = getContext("bonsaiButtonContext");

  /**
   * When the text mounts, set the text in context
  */
  onMount(() => {
    setButtonText(text);
  });
</script>

<span class={klass}>
  {text}
</span>