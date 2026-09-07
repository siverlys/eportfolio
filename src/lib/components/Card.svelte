<script lang="ts">
  import type { ClassValue } from "svelte/elements";

    let props: {children: any, class?: ClassValue} = $props()
</script>


<div class={["card w-auto m-4 preset-filled-surface-100-900 p-4 corner-shape-bevel", props.class]}>
    {@render props.children()}
</div>