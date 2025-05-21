<script lang="ts">
	const features = [
		{
			title: '🎵 Lyric Challenges',
			description:
				'Test your memory with real lyric snippets from popular songs. Type the next line to win!',
			image: '/screenshots/placeholder-image-1.png'
		},
		{
			title: '💰 In-Game Economy',
			description:
				"Earn coins, buy items, climb the leaderboard. It's trivia meets game progression.",
			image: '/screenshot1.webp'
		},
		{
			title: '📊 Leaderboard',
			description: 'Track your scores globally. Friendly competition makes it better!',
			image: '/screenshots/placeholder-image-3.png'
		},
		{
			title: '⚙️ Custom Server Config',
			description:
				'Set your own prefix, enable/disable features, and tailor the bot to your community.',
			image: '/screenshots/placeholder-image-4.png'
		},
		{
			title: '🚀 Frequent Updates',
			description: 'Actively maintained with new features, bug fixes, and seasonal events.',
			image: '/screenshots/placeholder-image-5.png'
		},
		{
			title: '🔓 Open-Source',
			description:
				'The bot, documentation, website, and API are 100% open-source and can be self-hosted.',
			image: '/favicon.png'
		}
	];
</script>

<div>
	<section class="px-6 py-20 text-center">
		<h2 class="text-3xl font-bold sm:text-4xl">What Makes It Fun?</h2>
		<p class="text-surface-400 mx-auto mt-2 max-w-xl">
			Finish The Lyric combines trivia, music, and a rewarding game economy—perfect for any
			community.
		</p>

		<div class="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each features as feature}
				<div
					class="border-surface-700 bg-surface-900 cursor-pointer rounded-xl border p-6 text-left shadow-lg duration-300 hover:scale-105"
				>
					<h3 class="mb-2 text-xl font-semibold">{feature.title}</h3>
					<p class="text-surface-400">{feature.description}</p>
				</div>
			{/each}
		</div>
	</section>
</div>
