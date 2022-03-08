<script lang="ts">
  import { getContext } from "svelte";

  /**
   * Subscribe to context
  */
  const [{ isLoading }] = getContext("bonsaiButtonContext");
</script>

{#if $isLoading}
  <slot />
{/if}