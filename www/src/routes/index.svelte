<script>
  import TwitterIcon from "../components/TwitterIcon.svelte";
  import ClincIcon from "../components/ClincIcon.svelte";
  import ResamplIcon from "../components/ResamplIcon.svelte";
  import Avatar from "../components/Avatar.svelte";
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
    grid-gap: 1em;
    grid-auto-flow: column;
  }

  nav a {
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

  nav a:hover, nav a:focus {
    color: var(--link-color);
    font-size: 3rem;
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
    <a href="https://clinc.com" target="_blank">
      <ClincIcon />
    </a>
    <a href="https://twitter.com/benjtatum" target="_blank">
      <TwitterIcon />
    </a>
    <a href="https://resampl.com" target="_blank">
      <ResamplIcon />
    </a>
  </nav>
</div>
