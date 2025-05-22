<script lang="ts">
	import { onMount } from 'svelte';

	let status: string | null = null;
	let botIsRunning = false;

	const getStatus = async () => {
		try {
			const res = await fetch('/api/status');
			const data = await res.json();
			status = data.status;
			botIsRunning = status === 'Running';
		} catch (err) {
			status = 'Error fetching status';
			botIsRunning = false;
			console.error(err);
		}
	};

	onMount(() => {
		getStatus();
	});

	const columns = [
		{
			label: 'Navigation',
			links: [
				{ label: 'Home', href: '/' },
				{ label: 'Docs', href: '/docs' },
				{ label: 'Add Bot', href: '/add-bot' },
				{ label: 'Status', href: '/status' }
			]
		},
		{
			label: 'Community',
			links: [
				{ label: 'Contributors', href: '/awesome-people' },
				{ label: 'GitHub', href: 'https://github.com/finish-the-lyric-bot', external: true },
			]
		},
		{
			label: 'Have an issue?',
			links: [
				{
					label: 'Open an issue on GitHub',
					href: 'https://github.com/myferr/finish-the-lyric/issues/new',
					external: true
				}
			]
		}
	];
</script>

<div>
	<div
		class="text-surface-950 from-surface-100 via-surface-200 to-surface-300 mx-auto flex flex-col items-center justify-center gap-4 rounded-t-2xl bg-gradient-to-b px-4 pt-10 pb-14 text-center shadow-2xl shadow-white sm:px-6"
	>
		<h2 class="text-xl sm:text-2xl">What are you waiting on?</h2>
		<p class="text-surface-800 max-w-md text-sm sm:text-base">
			A feature-filled, actively updated and maintained, open-source Guilded bot
		</p>
		<button
			type="button"
			class="btn preset-filled-surface-500 shadow-surface-500 flex items-center gap-2 px-6 py-2.5 text-base shadow-2xl"
			on:click={() => (window.location.href = '/add-bot')}
		>
			<img src="/i/guilded-logo.svg" alt="Guilded logo" class="size-6" />
			Add to Guilded
		</button>
	</div>

	<!-- Footer -->
	<div class="bg-surface-300 text-surface-950 mx-auto w-full px-4 pt-10 sm:px-6 lg:px-12">
		<footer class="text-surface-50 mx-auto max-w-7xl">
			<!-- Columns -->
			<div class="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 md:grid-cols-4">
				<!-- About -->
				<div>
					<h3 class="mb-3 text-lg font-semibold text-white">Finish The Lyric</h3>
					<p class="text-sm">
						A fun music trivia bot with an economy system and leaderboard. Open-source &
						community-driven.
					</p>
				</div>

				<!-- Dynamic Footer Columns -->
				{#each columns as col}
					<div>
						<h4 class="text-md mb-3 font-semibold text-white">{col.label}</h4>
						<ul class="space-y-1 text-sm">
							{#each col.links as link}
								<li class="flex items-center gap-2">
									<a
										href={link.href}
										class="hover:text-white"
										rel={link.external ? 'noopener noreferrer' : undefined}
										target={link.external ? '_blank' : undefined}
									>
										{link.label}
									</a>

									{#if link.label === 'Status'}
										<!-- Replace this logic with a real status variable if you have one -->
										<span class="relative flex h-2 w-2" title="Bot status">
											<span
												class="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
												class:bg-blue-400={botIsRunning}
												class:bg-gray-400={!botIsRunning}
											></span>
											<span
												class="relative inline-flex h-2 w-2 rounded-full"
												class:bg-blue-500={botIsRunning}
												class:bg-gray-500={!botIsRunning}
											></span>
										</span>
									{/if}
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>

			<!-- Big Header -->
			<div class="mt-10 text-center">
				<h1
					class="bigheader from-surface-50 via-surface-200 to-surface-300 mt-12 bg-gradient-to-b bg-clip-text pb-8 text-[clamp(2rem,10vw,6rem)] text-transparent uppercase"
				>
					Finish The Lyric
				</h1>
			</div>
		</footer>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
	.bigheader {
		font-family:
			'Oswald',
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
	}
</style>
