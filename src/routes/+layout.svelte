<script lang="ts">
	import '../app.css';
	import { docs } from '../docs';
</script>

<div class="flex h-screen">
	<!-- Sidebar -->
	<aside class="flex w-64 flex-col border-r border-white/15 bg-white/5 p-6">
		<div class="mb-10 flex items-center gap-3">
			<img
				src="/bot-logo.png"
				alt="Finish The Lyric"
				width="35"
				class="rounded-xl border border-neutral-500 duration-500 hover:scale-105"
			/>
			<p class="text-lg font-bold">Finish The Lyric</p>
		</div>

		<nav class="flex flex-col gap-6 text-sm">
			{#each docs as section}
				<div>
					<p class="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-400">
						{section.label}
					</p>
					<div class="flex flex-col gap-1 border-l border-sky-400 pl-4">
						{#each section.items as link}
							<a
								href={link.href}
								class="rounded-lg px-2 py-1 text-sm text-white transition hover:bg-white/10"
							>
								{link.label}
							</a>
						{/each}
					</div>
				</div>
			{/each}
		</nav>
	</aside>

	<!-- Main content -->
	<main class="prose prose-invert dark:prose-invert max-w-full flex-1 overflow-y-auto p-10">
		<slot />
	</main>
</div>
