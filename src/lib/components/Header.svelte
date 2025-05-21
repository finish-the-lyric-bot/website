<script lang="ts">
	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/docs', label: 'Docs' },
		{ href: 'https://github.com/myferr/finish-the-lyric', label: 'GitHub' },
		{ href: '/awesome-people', label: 'Contributors' },
		{ href: '/status', label: 'Status' }
	];
</script>

<header
	class="bg-background/75 supports-[backdrop-filter]:bg-background/60 z-50 w-full border-b border-white/10 backdrop-blur"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
		<a href="/" class="flex items-center gap-2">
			<img
				src="/i/BotLogo.png"
				alt="Finish The Lyric"
				width="35"
				class="rounded-xl transition duration-300 hover:scale-105"
			/>
			<span class="text-lg font-semibold text-white">Finish The Lyric</span>
		</a>

		<nav class="hidden items-center gap-8 text-sm font-medium md:flex">
			{#each navLinks as { href, label }}
				<a {href} class="hover:text-primary underline-offset-4 transition hover:underline"
					>{label}</a
				>
			{/each}
		</nav>

		<div class="flex items-center gap-2">
			<button on:click={() => (window.location.href = '/add-bot')} class="btn preset-tonal">
				<img src="/i/guilded-logo.svg" alt="Guilded" class="mr-1 size-6" /> Invite
			</button>
		</div>
	</div>
</header>
