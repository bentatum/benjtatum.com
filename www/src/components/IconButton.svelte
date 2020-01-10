<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let href = "";
  export let variant = "text";
  export let target = "";
  export let color = "";
</script>

<style>
  .icon-button {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    background: transparent;
    color: var(--text-color);
    border: 0;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    padding: var(--space);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .icon-button:focus {
    outline: none;
  }

  .variant-text:hover,
  .variant-text:focus {
    background-color: var(--color-grey-a1);
  }

  .variant-text.color-primary:hover,
  .variant-text.color-primary:focus {
    background-color: var(--color-primary-a1);
  }

  @media (prefers-color-scheme: dark) {
    .variant-text:hover,
    .variant-text:focus {
      background-color: var(--color-white-a1);
    }
  }
</style>

{#if href.length}
  <a
    role="button"
    {href}
    {target}
    class="icon-button"
    class:color-primary={color === 'primary'}
    class:variant-text={variant === 'text'}
    on:focusin={e => dispatch('focusin', e)}
    on:focusout={e => dispatch('focusout', e)}
    on:mouseenter={e => dispatch('mouseenter', e)}
    on:mouseleave={e => dispatch('mouseleave', e)}>
    <slot />
  </a>
{:else}
  <button
    class="icon-button"
    class:color-primary={color === 'primary'}
    class:variant-text={variant === 'text'}
    on:focusin={e => dispatch('focusin', e)}
    on:focusout={e => dispatch('focusout', e)}
    on:mouseenter={e => dispatch('mouseenter', e)}
    on:mouseleave={e => dispatch('mouseleave', e)}>
    <slot />
  </button>
{/if}
