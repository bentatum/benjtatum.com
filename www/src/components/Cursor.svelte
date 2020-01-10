<script>
  import { tweened, spring } from "svelte/motion";
  import * as easing from "svelte/easing";
  import { longpress } from "../lib/longpress.js";
  import { onMount } from "svelte";

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

  const OUTLINE_SIZE = 75;
  const DOT_SIZE = 2;
  const LIMIT = 500;

  let outlineSize = tweened(OUTLINE_SIZE, {
    duration: 1000,
    easing: easing.elasticInOut
  });

  let dotSize = tweened(DOT_SIZE, {
    duration: 200
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

  function onMouseDown() {
    dotSize.set($dotSize + 1);
    outlineSize.set($outlineSize * 1.5);
  }

  $: if ($outlineSize >= LIMIT) {
    dotSize.set(DOT_SIZE);
    outlineSize.set(OUTLINE_SIZE);
  }

  function onLongPress() {
    dotSize.set($dotSize * 2);
    outlineSize.set($outlineSize * 2);
  }

  onMount(() => {
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;
    dotCoords.set({ x, y });
    outlineCoords.set({ x, y });
  });
</script>

<style>
  :global(body),
  :global(a) {
    cursor: none !important;
  }

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
    r={$outlineSize > 0 ? $outlineSize : 0}
    style="opacity:0.075;" />
  <circle
    cx={$dotCoords.x}
    cy={$dotCoords.y}
    r={$dotSize > 0 ? $dotSize : 0}
    use:longpress={2000}
    on:longpress={onLongPress}
    on:mousedown={onMouseDown} />
</svg>
