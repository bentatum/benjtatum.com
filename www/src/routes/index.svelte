<script>
  import TwitterIcon from "../components/TwitterIcon.svelte";
  import ClincIcon from "../components/ClincIcon.svelte";
  import ResamplIcon from "../components/ResamplIcon.svelte";
  import Avatar from "../components/Avatar.svelte";
  import IconButton from "../components/IconButton.svelte";
</script>

<style>
  .content {
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  nav {
    display: grid;
    grid-gap: 2em;
    grid-auto-flow: column;
    align-items: center;
  }

  :global(nav .icon-button) {
    color: var(--text-color);
    font-size: 1rem;
    height: 5vh;
    width: 5vw;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-property: font-size, background-color;
    transition-duration: 100ms;
    transition-timing-function: ease-in-out;
    z-index: 1;
  }

  :global(nav .icon-button:hover),
  :global(nav .icon-button:focus) {
    color: var(--link-color);
    font-size: 2rem;
    z-index: 2;
    outline: none;
  }
  .avatar-link {
    outline: none;
    margin-bottom: calc(var(--space) * 2);
    user-select: none;
  }
</style>

<div class="content">
  <a href="/" class="avatar-link">
    <Avatar src="/ben-tatum.jpeg" style="box-shadow: var(--shadow)" />
  </a>
  <nav>
    <IconButton href="https://clinc.com" target="_blank">
      <ClincIcon />
    </IconButton>
    <IconButton href="https://twitter.com/benjtatum" target="_blank">
      <TwitterIcon />
    </IconButton>
    <IconButton href="https://resampl.com" target="_blank">
      <ResamplIcon />
    </IconButton>
  </nav>
</div>
