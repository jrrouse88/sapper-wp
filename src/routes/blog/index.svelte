<script context="module">
	export async function preload() {
		try {
			return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
				return { posts };
			});
		} catch(e) {
			this.error(500, 'Posts preload error: ' + e.message);
		}
	}
</script>

<script>
	export let posts;
	let error = '';
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
	{:else if (posts.length < 1)}
		<div class="error">Sorry, looks like there are no posts.</div>
	{:else}
		{#each posts as post}
			<!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event -->
			<li><a rel=prefetch href="/{post.slug}">{post.title.rendered}</a></li>
		{/each}
	{/if}
</ul>
