<script module>
    export { default as h1 } from "./md/h1.svelte";
    export { default as h2 } from "./md/h2.svelte";
    export { default as p} from "./md/p.svelte"
    export { default as a} from "./md/a.svelte"
</script>

<script lang="ts">
  let { children } = $props();
</script>

{#if children}
  {@render children()}
{/if}