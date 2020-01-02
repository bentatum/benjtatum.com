<script>
  export let variant = "text";
  export let href = "";
</script>

<style>
  .button {
    font-size: 1rem;
    font-weight: var(--font-weight-heavy);
    border-radius: 4px;
    padding: 6px 8px;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    border: 0;
    outline: 0;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 150ms ease-in-out;
    text-decoration: none;
    letter-spacing: 1px;
  }

  .button:hover {
    background-color: rgba(0, 0, 0, var(--hover-opacity));
  }

  .text {
    background-color: transparent;
  }
  .text:hover {
    background-color: rgba(255, 255, 255, var(--hover-opacity));
  }

  @media (prefers-color-scheme: dark) {
    .button {
      color: var(--text-color);
    }
  }
</style>

{#if href.length}
  <a {href} class="button" class:text={variant === 'text'} role="button">
    <slot />
  </a>
{:else}
  <button class="button" class:text={variant === 'text'}>
    <slot />
  </button>
{/if}
