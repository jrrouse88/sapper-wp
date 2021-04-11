<script context="module">
  export async function preload(page, session) {
    try {
      let { slug } = page.params;
      return this.fetch(`blog/${slug}.json`).then(r => r.json()).then(article => {
        return { article };
      })
    } catch(e) {
      this.error(500, 'Posts preload error: ' + e.message);
    }
  }
</script>

<script>
  export let article;
  let error = '';
</script>

<style></style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

{#if error}
  <h1 class="error">Error: {error}</h1>
{:else}
  <h1>{article[0].title.rendered}</h1>
  {@html article[0].content.rendered}
{/if}
