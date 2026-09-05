<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    href = '#',
    children,
    ...restProps
  } = $props();
</script>

<a {href} class="anchor" tabindex="0" {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</a>