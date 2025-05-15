<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div>
	<header class="absolute mx-auto w-full pt-12">
		<div
			class="w-xl z-10 mx-auto flex items-center justify-between rounded-xl border border-white/15 bg-white/5 p-2 backdrop-blur-sm"
		>
			<div>
				<a href="/" class="flex items-center gap-2">
					<img
						src="/bot-logo.png"
						alt="Finish The Lyric"
						width="35"
						class="rounded-xl border-neutral-500 duration-500 hover:scale-105"
					/>
					<p class="font-bold">Finish The Lyric</p></a
				>
			</div>
			<div class="flex gap-12">
				<a href="https://docs.finishthelyric.pages.dev" class="hover:text-sky-300 hover:underline"
					>Docs</a
				>
				<a
					href="https://github.com/myferr/finish-the-lyric"
					class="hover:text-sky-300 hover:underline">GitHub</a
				>
			</div>
			<button class="btn gap-none flex items-center bg-sky-500 px-2 py-0.5">
				<img src="/guilded.svg" alt="Guilded.gg" class="size-7" /> Invite
			</button>
		</div>
	</header>
	<main>
		{@render children()}
	</main>
</div>
