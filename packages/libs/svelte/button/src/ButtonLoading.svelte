<script lang="ts">
  import { getContext } from "svelte";

  /**
   * Define the props
   */
  let klass: string = "";
  export { klass as class };

  /**
   * Subscribe to context
  */
  const [{ isLoading }] = getContext("bonsaiButtonContext");
</script>

{#if $isLoading}
  <span class={klass}>
    <slot />
  </span>
{/if}