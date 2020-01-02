<script>
  import { tweened, spring } from "svelte/motion";
  import * as easing from "svelte/easing";
  import { longpress } from "../lib/longpress.js";

  // let endX = window.innerWidth / 2;
  // let endY = window.innerHeight / 2;
  let dotCoords = spring(
    { x: 0, y: 0 },
    {
      stiffness: 1,
      damping: 1
    }
  );
  let outlineCoords = spring(
    { x: 0, y: 0 },
    {
      stiffness: 0.03,
      damping: 0.5
    }
  );

  const OUTLINE_SIZE_SM = 75;
  const OUTLINE_SIZE_LG = 150;
  const OUTLINE_SIZE_XL = 200;

  let outlineSize = tweened(OUTLINE_SIZE_SM, {
    duration: 500,
    easing: easing.elasticOut
  });

  let cursorVisible = false;

  function onMouseMove({ pageX: x, pageY: y }) {
    dotCoords.set({ x, y });
    outlineCoords.set({ x, y });
  }

  function onMouseOver({ pageX: x, pageY: y }) {
    cursorVisible = true;
    dotCoords.set({ x, y });
    outlineCoords.set({ x, y });
  }

  function onMouseOut({ pageX: x, pageY: y }) {
    dotCoords.set({ x, y });
    outlineCoords.set({ x, y });
    cursorVisible = false;
  }
</script>

<style>
  /* :global(:root) {
    --cursor-color: orange;
  }

  :global(body),
  :global(a) {
    cursor: none;
  } */

  svg {
    height: 100%;
    width: 100%;
    position: absolute;
  }

  circle {
    fill: orange;
  }
</style>

<svelte:body
  on:mousemove={onMouseMove}
  on:mouseover={onMouseOver}
  on:mouseout={onMouseOut} />

<svg>
  <circle
    cx={$outlineCoords.x}
    cy={$outlineCoords.y}
    r={$outlineSize}
    style="opacity:{cursorVisible ? 0.1 : 0};" />
  <circle
    cx={$dotCoords.x}
    cy={$dotCoords.y}
    r={4}
    use:longpress={1000}
    on:longpress={() => outlineSize.set(OUTLINE_SIZE_XL)}
    on:mousedown={() => outlineSize.set(OUTLINE_SIZE_LG)}
    on:mouseup={() => outlineSize.set(OUTLINE_SIZE_SM)} />
</svg>
