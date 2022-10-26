<script>
  export let size = `1rem`;
</script>

<icon class={`icon icon-${$$props.name}`} style="--size:{size};" />

<style>
  .icon {
    font-size: var(--size);
  }
</style>
