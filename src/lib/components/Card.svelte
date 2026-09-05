<script lang="ts">
    let {children} = $props()
</script>


<div class="card w-auto m-4 preset-filled-surface-100-900 p-4 corner-shape-bevel">
    {@render children()}
</div>