<script lang="ts">
	const docsSections = [
		{
			label: 'Introduction',
			links: [
				{
					label: 'Finish The Lyric',
					href: '/docs'
				},
				{
					label: 'Self-hosting',
					href: '/docs/self-hosting'
				}
			]
		},
		{
			label: 'Commands',
			links: [
				{
					label: 'Overview',
					href: '/docs/commands'
				},
				{
					label: 'Economy',
					href: '/docs/commands/economy'
				},
				{
					label: 'General',
					href: '/docs/commands/general'
				},
				{
					label: 'Customization',
					href: '/docs/commands/customization'
				}
			]
		}
	];

	let { children } = $props();
</script>

<div class="bg-surface-950 text-surface-100 flex min-h-screen">
	<aside class="border-surface-800 bg-surface-900 hidden w-64 flex-col border-r px-4 py-6 sm:flex">
		<h2 class="mb-6 px-2 text-xl font-bold">📚 Docs</h2>
		{#each docsSections as section}
			<div class="mb-12">
				<p class="text-surface-300 text-xs font-bold uppercase">{section.label}</p>
				<nav class="border-surface-300 border-l-3 space-y-2">
					{#each section.links as item}
						<a
							href={item.href}
							class={`hover:bg-surface-800 block rounded-md px-3 py-2 text-sm transition-colors`}
						>
							{item.label}
						</a>
					{/each}
				</nav>
			</div>
		{/each}
	</aside>

	<main class="prose mx-auto max-w-4xl flex-1 px-6 py-10">
		{@render children()}
	</main>
</div>

<style>
	:global(html, body) {
		margin: 0;
		padding: 0;
	}
</style>
