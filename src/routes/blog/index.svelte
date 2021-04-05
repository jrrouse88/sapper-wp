<script context="module">
	export async function preload() {
		try {
			const res = await this.fetch('blog.json');
			if(res.ok) {
				const posts = await res.json();
				console.log(posts);
				return posts;
			} else {
				const msg = await res.text;
				this.error(res.statusCode, 'Posts preload: ' + msg)
			}
		} catch(e) {
			this.error(500, 'Posts preload error: ' + e.message);
		}
	}
</script>

<script>
	export let posts = [];

	let error = '';
	console.log(posts);
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
	{#if error}
		<div class="error">Error: {error}</div>
	{:else}
		{#each posts as post}
			<!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event -->
			<li>{post.title.rendered}</li>
		{/each}
	{/if}
</ul>
