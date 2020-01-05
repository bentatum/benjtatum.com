<script>
  import SvgIcon from "./SvgIcon.svelte";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  export let size;

  const duration = 2000;

  let X1_START = 7.60284887;
  let X1_END = X1_START * 1.25;

  let X3_START = 20.8063493;
  let X3_END = X3_START / 3;

  let x1 = tweened(X1_START, {
    duration,
    easing: cubicOut
  });

  let x3 = tweened(X3_START, {
    duration,
    easing: cubicOut
  });

  let interval;

  function onMouseEnter() {
    let tick = 0;
    x1.set(X1_END);
    x3.set(X3_END);
    interval = setInterval(() => {
      tick = tick === 1 ? 0 : 1;
      if (tick === 1) {
        x1.set(X1_START);
        x3.set(X3_START);
      } else {
        x1.set(X1_END);
        x3.set(X3_END);
      }
    }, duration);
  }

  function onMouseLeave() {
    x1.set(X1_START);
    x3.set(X3_START);
    clearInterval(interval);
  }
</script>

<SvgIcon
  {size}
  viewBox="0 0 76 76"
  fill="currentColor"
  on:mouseenter={onMouseEnter}
  on:mouseleave={onMouseLeave}
  on:focusin={onMouseEnter}
  on:focusout={onMouseLeave}>
  <rect x={$x1} y="6" width="47.6279297" height="15.6290163" rx="7.81450816" />
  <rect
    x="0.105859942"
    y="29.3200456"
    width="62.6219076"
    height="15.6290163"
    rx="7.81450816" />
  <rect
    x={$x3}
    y="52.5695313"
    width="39.3901432"
    height="15.6290163"
    rx="7.81450816" />
</SvgIcon>
