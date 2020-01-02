<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function onMouseOver(event) {
    dispatch("mouseover", event);
  }

  export let viewBox;
  export let fill;
</script>

<style>
  svg {
    user-select: none;
    height: 1em;
    width: 1em;
    display: inline-block;
    fill: currentColor;
    flex-shrink: 0;
    /* font-size: 1rem; */
  }
</style>

<svg
  {viewBox}
  {fill}
  on:mouseover={e => dispatch('mouseover', e)}
  on:mouseenter={e => dispatch('mouseenter', e)}
  on:mouseleave={e => dispatch('mouseleave', e)}>
  <slot />
</svg>
