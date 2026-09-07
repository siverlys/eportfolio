<script lang="ts">
    import Card from "$lib/components/Card.svelte";
import { ArrowDown, ArrowUp } from "@lucide/svelte";
    import { Collapsible } from "@skeletonlabs/skeleton-svelte";


    let open = $state(false)
    let open2 = $state(false)
    let open3 = $state(false)
    let open4 = $state(false)
</script>

<Card class="preset-filled-surface-200-800 flex">
    <h1 class="h1 m-auto self-center">Min kompetanse</h1>
</Card>


<Collapsible onclick={() => {open = !open}} {open}  class="card w-auto m-4 preset-filled-surface-100-900 p-4 corner-shape-bevel">
	<div class="w-full flex justify-between items-center">
		<p class="font-bold">Hardware/OS</p>
		<Collapsible.Trigger class="btn-icon hover:preset-tonal">
            {#if open}
			    <ArrowUp class="size-4" />
            {:else}
                <ArrowDown class="size-4" />
            {/if}
		</Collapsible.Trigger>
	</div>
	<Collapsible.Content class="flex w-full ml-8">
		<ul class="list-disc flex-1">
            <li class="list-item">
            Mikrokontrollere
                <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
                    <li class="list-item">PIC16</li>
                    <li class="list-item">Arduino</li>
                    <li class="list-item">ESP32</li>
                </ul>
            </li>

            <li class="list-item">
            PLS
                <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
                    <li class="list-item">Wago (e!cockpit ST, Codesys ST)</li>
                    <li class="list-item">Siemens (Simatic ST)</li>
                </ul>
            </li>

            <li class="list-item">
            Operativsystemer
                <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
                    <li class="list-item">Windows</li>
                    <li class="list-item">Linux</li>
                    <li class="list-item">Busybox</li>
                </ul>
            </li>
        </ul>
	</Collapsible.Content>
</Collapsible>


<Collapsible onclick={() => {open2 = !open2}} open={open2}  class="card w-auto m-4 preset-filled-surface-100-900 p-4 corner-shape-bevel">
	<div class="w-full flex justify-between items-center">
		<p class="font-bold">Programmeringsspråk</p>
		<Collapsible.Trigger class="btn-icon hover:preset-tonal">
            {#if open2}
			    <ArrowUp class="size-4" />
            {:else}
                <ArrowDown class="size-4" />
            {/if}
		</Collapsible.Trigger>
	</div>
	<Collapsible.Content class="flex w-full ml-8">
		<ul class="list-disc">
            <li class="list-item">C/C++</li>
            <li class="list-item">Rust</li>
            <li class="list-item">Java</li>
            <li class="list-item">Python</li>
            <li class="list-item">Javascript</li>
            <li class="list-item">Structured Text</li>
        </ul>
	</Collapsible.Content>
</Collapsible>


<Collapsible onclick={() => {open3 = !open3}} open={open3}  class="card w-auto m-4 preset-filled-surface-100-900 p-4 corner-shape-bevel">
	<div class="w-full flex justify-between items-center">
		<p class="font-bold">Prosjekttyper</p>
		<Collapsible.Trigger class="btn-icon hover:preset-tonal">
            {#if open3}
			    <ArrowUp class="size-4" />
            {:else}
                <ArrowDown class="size-4" />
            {/if}
		</Collapsible.Trigger>
	</div>
	<Collapsible.Content class="flex w-full ml-8">
		<ul class="list-disc">
            <li class="list-item">Spill</li>
            <li class="list-item">Persiennestyring</li>
            <li class="list-item">HVAC</li>
            <li class="list-item">Innloggingssystemer</li>
            <li class="list-item">IoT</li>
        </ul>
	</Collapsible.Content>
</Collapsible>


<Collapsible onclick={() => {open4 = !open4}} open={open4}  class="card w-auto m-4 preset-filled-surface-100-900 p-4 corner-shape-bevel">
	<div class="w-full flex justify-between items-center">
		<p class="font-bold">Protokoller/standarder</p>
		<Collapsible.Trigger class="btn-icon hover:preset-tonal">
            {#if open4}
			    <ArrowUp class="size-4" />
            {:else}
                <ArrowDown class="size-4" />
            {/if}
		</Collapsible.Trigger>
	</div>
	<Collapsible.Content class="flex w-full ml-8">
		<ul class="list-disc">
            <li class="list-item">LoRaWAN</li>
            <li class="list-item">MODBUS</li>
            <li class="list-item">WebSockets</li>
            <li class="list-item">REST</li>
            <li class="list-item">MQTT</li>
        </ul>
	</Collapsible.Content>
</Collapsible>