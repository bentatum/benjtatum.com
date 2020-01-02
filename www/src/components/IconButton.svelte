<script>
  export let href = "";
  export let variant = "text";
  export let target = "";
</script>

<style>
  .icon-button {
    border-radius: 100%;
    width: 40px;
    height: 40px;
    padding: var(--space);
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .icon-button:focus {
    outline: none;
  }
  .text:hover,
  .text:focus {
    background-color: rgba(0, 0, 0, var(--hover-opacity));
  }

  @media (prefers-color-scheme: dark) {
    .text:hover,
    .text:focus {
      background-color: rgba(255, 255, 255, var(--hover-opacity));
    }
  }
</style>

{#if href.length}
  <a
    role="button"
    {href}
    {target}
    class="icon-button"
    class:text={variant === 'text'}>
    <slot />
  </a>
{:else}
  <button class="icon-button" class:text={variant === 'text'}>
    <slot />
  </button>
{/if}
