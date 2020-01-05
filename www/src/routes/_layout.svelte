<script>
  import Cursor from "../components/Cursor.svelte";
  import IconButton from "../components/IconButton.svelte";
  import QuestionMarkIcon from "../components/QuestionMarkIcon.svelte";
</script>

<style>
  :global(:root) {
    --hover-opacity: 0.05;
    --font-weight-heavy: 500;
    --space: 8px;
    --screen-sm: 300px;
    --screen-md: 750px;
    --color-white: #ffffff;
    --color-white-a1: #ffffff17;
    --color-white-a2: #ffffff29;
    --color-white-a3: #ffffff40;

    --color-grey: #818181;
    --color-grey-a1: #81818117;
    --color-grey-a2: #81818129;
    --color-grey-a3: #81818140;

    --color-primary: #ffa500;
    --color-primary-a1: #ffa50017;
    --color-primary-a2: #ffa50029;
    --color-primary-a3: #ffa50040;
    --link-color: var(--color-primary);
    --bg-color: white;
    --text-color: black;
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

<Cursor />

<main>
  <slot />
  <!-- <div class="help">
    <IconButton>
      <QuestionMarkIcon style="font-size:1.4rem;" />
    </IconButton>
  </div> -->
</main>
