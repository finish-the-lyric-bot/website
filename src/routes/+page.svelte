<div class="flex min-h-screen flex-col items-center justify-center text-center">
	<h1 class="text-3xl font-bold">
		Meet <span class="text-sky-400 underline">Finish The Lyric</span>
	</h1>
	<p class="mt-3 max-w-sm text-center">
		A fun entertainment bot on Guilded.gg to test your musical knowledge and finish lyrics!
	</p>
	<div class="mt-6 flex space-x-2 border-t border-neutral-800 pt-3">
		<button
			class="btn gap-none flex bg-sky-500"
			onclick={() => {
				window.location.href = '/add-bot';
			}}
		>
			<img src="/guilded.svg" alt="Guilded.gg" class="size-7" /> Add To Guilded
		</button>
		<button
			class="btn gap-none flex bg-sky-500"
			onclick={() => {
				window.location.href = 'https://docs.finishthelyric.pages.dev';
			}}
		>
			Documentation
		</button>
	</div>
</div>
