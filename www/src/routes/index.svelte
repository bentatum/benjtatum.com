<script>
  import TwitterIcon from "../components/TwitterIcon.svelte";
  import ClincIcon from "../components/ClincIcon.svelte";
  import ResamplIcon from "../components/ResamplIcon.svelte";
  import Avatar from "../components/Avatar.svelte";
  import IconButton from "../components/IconButton.svelte";
  import QuestionMarkIcon from "../components/QuestionMarkIcon.svelte";
  import { tweened } from "svelte/motion";
  import * as easing from "svelte/easing";

  const ICON_SIZE_SM = 25;
  const ICON_SIZE_LG = 35;

  const tweenOpts = {
    duration: 1000,
    easing: easing.elasticOut
  };

  let clincIconSize = tweened(ICON_SIZE_SM, tweenOpts);
  let twitterIconSize = tweened(ICON_SIZE_SM, tweenOpts);
  let resamplIconSize = tweened(ICON_SIZE_SM, tweenOpts);

  function onMouseEnter(iconSize) {
    iconSize.set(ICON_SIZE_LG);
  }

  function onMouseLeave(iconSize) {
    iconSize.set(ICON_SIZE_SM);
  }
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
    z-index: 1;
  }

  .avatar-link {
    outline: none;
    margin-bottom: calc(var(--space) * 2);
    user-select: none;
  }

  /* .help {
    font-size: 4rem;
  } */
</style>

<div class="content">
  <a href="/" class="avatar-link">
    <Avatar src="/ben-tatum.jpeg" style="box-shadow: var(--shadow)" />
  </a>
  <nav>
    <IconButton
      href="https://clinc.com"
      target="_blank"
      color="primary"
      on:mouseenter={() => onMouseEnter(clincIconSize)}
      on:mouseleave={() => onMouseLeave(clincIconSize)}>
      <ClincIcon size={$clincIconSize} />
    </IconButton>
    <IconButton
      href="https://twitter.com/benjtatum"
      target="_blank"
      color="primary"
      on:mouseenter={() => onMouseEnter(twitterIconSize)}
      on:mouseleave={() => onMouseLeave(twitterIconSize)}>
      <TwitterIcon size={$twitterIconSize} />
    </IconButton>
    <IconButton
      href="https://resampl.com"
      target="_blank"
      color="primary"
      on:mouseenter={() => onMouseEnter(resamplIconSize)}
      on:mouseleave={() => onMouseLeave(resamplIconSize)}>
      <ResamplIcon size={$resamplIconSize} />
    </IconButton>
  </nav>
</div>
