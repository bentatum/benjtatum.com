<style>
  :global(:root) {
    --link-color: orange;
    --bg-color: white;
    --text-color: black;
    --hover-opacity: 0.15;
    --font-weight-heavy: 500;
    --space: 8px;
    --screen-sm: 300px;
    --screen-md: 750px;
  }

  @media (prefers-color-scheme: dark) {
    :global(:root) {
      --bg-color: black;
      --text-color: white;
    }
  }

  :global(body) {
    padding: 0;
    color: var(--text-color);
    background-color: var(--bg-color);
  }

  :global(a),
  :global(a:hover),
  :global(a:visited) {
    color: var(--link-color);
  }

  main {
    margin: auto;
    max-width: var(--screen-sm);
  }
</style>

<script>
import Cursor from '../components/Cursor.svelte'
</script>

<Cursor />

<main>
  <slot />
</main>
