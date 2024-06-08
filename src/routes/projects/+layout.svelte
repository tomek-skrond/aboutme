<script>
	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<div class="submenu">
	<ul class="flex flex-wrap">
		{#each data.sections as section}
			<li class="project p-2">
				<div class="container flex flex-col items-center justify-center">
					<a href="/projects/{section.slug}" class="mb-2">{section.title}</a>
					<div class="container tag-container flex flex-wrap justify-center">
						<!-- Additional content like tags can go here -->
						<span class="tag bg-blue-100 text-blue-800 text-xs font-medium mx-2 my-1 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">Default</span>
						<span class="tag bg-blue-100 text-blue-800 text-xs font-medium mx-2 my-1 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">Default</span>
						<span class="tag bg-blue-100 text-blue-800 text-xs font-medium mx-2 my-1 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">Default</span>
						<span class="tag bg-blue-100 text-blue-800 text-xs font-medium mx-2 my-1 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">Default</span>
						<span class="tag bg-blue-100 text-blue-800 text-xs font-medium mx-2 my-1 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">Default</span>
						<span class="tag bg-blue-100 text-blue-800 text-xs font-medium mx-2 my-1 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">Default</span>
						<span class="tag bg-blue-100 text-blue-800 text-xs font-medium mx-2 my-1 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">Default</span>
						<span class="tag bg-blue-100 text-blue-800 text-xs font-medium mx-2 my-1 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">Default</span>
						<span class="tag bg-blue-100 text-blue-800 text-xs font-medium mx-2 my-1 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">Default</span>
						<span class="tag bg-blue-100 text-blue-800 text-xs font-medium mx-2 my-1 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">Default</span>
						<span class="tag bg-blue-100 text-blue-800 text-xs font-medium mx-2 my-1 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">Default</span>

					</div>
				</div>
			</li>
		{/each}
	</ul>
</div>

<slot></slot>

<style>
	.project {
		font-size: 15px;
		background-color: rgb(48, 43, 66);
		/* border-radius: 5px; */
		height: 100%;
		text-align: center;
		justify-content: center;
	}
	.project:hover {
		opacity: 0.5;
	}
	
	.tag-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	
	.tag {
		width: 100px;
		margin: 0.25rem; /* Ensure there's spacing between tags */
	}

	/* Ensure the items are displayed as tiles in rows */
	.submenu ul {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem; /* Add some space between the items */
	}
	
	.submenu li {
		display: flex;
		width: calc(20% - 1rem); /* Five items per row with space */
		height: 300px;
		border-radius: 10px;
		box-sizing: border-box; /* Ensures padding and borders are included in the width and height */
	}
	
	/* Media query for phone resolution */
	@media (max-width: 768px) {
		.submenu li {
			width: 100%; /* Full width for each item in a column layout */
		}
	}
</style>
