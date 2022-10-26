<script>
  export let size = `1rem`;
  export let weight = `400`;
  export let margin = `0`;
</script>

<p class="heading" style="--size:{size};--weight:{weight};--margin:{margin};">
  {#if $$slots.number}
    <slot name="number" />
  {/if}
  {#if $$slots.unit}
    <slot name="unit" />
  {/if}
  {#if !$$slots.unit && !$$slots.number}
    <slot />
  {/if}
</p>

<style>
  .heading {
    font-size: var(--size);
    font-weight: var(--weight);
    margin: var(--margin);
  }
</style>
