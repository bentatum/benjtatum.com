<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let viewBox;
  export let fill;
  export let style;
  export let size = 40;
</script>

<style>
  svg {
    user-select: none;
    height: 1em;
    width: 1em;
    display: inline-block;
    fill: currentColor;
    flex-shrink: 0;
  }
</style>

<svg
  style="height:{size}px;width:{size}px;{style || ''}"
  {viewBox}
  {fill}
  on:mouseover={e => dispatch('mouseover', e)}
  on:mouseenter={e => dispatch('mouseenter', e)}
  on:mouseleave={e => dispatch('mouseleave', e)}>
  <slot />
</svg>
