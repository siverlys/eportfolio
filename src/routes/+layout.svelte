<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

    import {AppBar, Dialog, Portal, Navigation} from "@skeletonlabs/skeleton-svelte"
    import { CalendarIcon, CircleUserIcon, MenuIcon, SearchIcon, X} from '@lucide/svelte';
    import { slide } from 'svelte/transition';
    import Footer from "$lib/components/Footer.svelte"

	let { children } = $props();

    let sidebar_open = $state(false)

    let navbar_elements = [
        {
            category_name: "teknoblogg",
            links: [
                {
                    label: "Nyeste innlegg",
                    href: "/blog/latest"
                },
                {
                    label: "Oversikt",
                    href: "/blog"
                }
            ]
        },
        {
            category_name: "",
            links: [
                {
                    label: "Hovedside",
                    href: "/"
                },
                {
                    label: "kompetanse",
                    href: "/skills"
                }
            ]
        }
    ]
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="flex h-screen flex-col overflow-hidden bg-surface-50-900">
    <AppBar class="bg-surface-200-800">
        <AppBar.Toolbar class="grid-cols-[auto_1fr_auto]">
            <AppBar.Lead>
                <button type="button" class="btn-icon btn-icon-lg hover:preset-tonal corner-shape-base" onclick={() => sidebar_open = !sidebar_open}>
                    {#if sidebar_open} <X /> {:else} <MenuIcon /> {/if}
                </button>
            </AppBar.Lead>
            <AppBar.Headline>
                <a href="/" class="text-2xl">Portefølje</a>
            </AppBar.Headline>
            <AppBar.Trail>
            </AppBar.Trail>
        </AppBar.Toolbar>
    </AppBar>

    <div class="flex flex-1 overflow-hidden">
    {#if sidebar_open}
        <aside class="transition-all duration-300" transition:slide={{duration: 300, axis: "x"}}>
            <Navigation layout="sidebar" class="grid grid-cols-[auto_1fr_auto] gap-4 preset-filled-surface-50-900">
                <Navigation.Header></Navigation.Header>
                <Navigation.Content></Navigation.Content>
                <Navigation.Footer></Navigation.Footer>
            </Navigation>
        </aside>
        {/if}
        <div class="flex flex-col justify-between flex-1 overflow-y-auto min-h-full">
            <main class="p-6 flex-1">
                {@render children()}
            </main>
            <footer class="flex flex-1 w-full preset-filled-surface-100-900 leading-none">
                <Footer/>
            </footer>
        </div>
    </div>
</div>