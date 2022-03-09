<script lang="ts">
  let klass: string = "";
  export { klass as class };
</script>

<span class={klass}>
  <slot />
</span>