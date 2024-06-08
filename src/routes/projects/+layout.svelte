<script>
	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<h1>Projects</h1>

<div class="submenu">
	{#each data.sections as section}
		<a href="/projects/{section.slug}">{section.title}</a>
	{/each}
</div>

<slot></slot>