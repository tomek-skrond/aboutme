<script>
	/** @type {import('./$types').LayoutData} */
	export let data;
	import { selectedTags } from '../../stores/tags';
	import { derived } from 'svelte/store';

    // Derived store to filter sections based on selected tags
    const filteredSections = derived(selectedTags, $selectedTags => {
        if ($selectedTags.length === 0) return data.sections;

        return data.sections.filter(section => 
            $selectedTags.every(tag => section.tags.includes(tag))
        );
    });
	
</script>

<div class="submenu">
	<ul class="flex flex-wrap">
        {#each $filteredSections as section}
			<li class="project p-2 mt-5">
				<div class="container flex flex-col items-center justify-center">
					<a href="https://{section.platform}/{section.githubName}/{section.slug}" class="mb-2">{section.title}</a>
					<div class="container tag-container flex flex-wrap justify-center">
						<!-- Additional content like tags can go here -->
                        {#each section.tags as tag}
                        <span class="tag bg-blue-100 text-blue-800 text-xs font-medium mx-2 my-1 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">{tag}</span>
                    	{/each}
					</div>
				</div>
			</li>
		{/each}
	</ul>
</div>


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
		overflow: auto; /* Allow scrolling if tags overflow */
		scrollbar-width: thin; /* Firefox */
		scrollbar-color: #888 #222; /* Firefox */
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
		width: calc(20% - 1rem); /* Ensure items take up 20% of the row */
		height: 300px;
		border-radius: 10px;
		box-sizing: border-box; /* Ensures padding and borders are included in the width and height */
		overflow: hidden; /* Prevent overflow */
	}
	
	/* Media query for phone resolution */
	@media (max-width: 768px) {
		.submenu li {
			width: 100%; /* Full width for each item in a column layout */
		}
	}
</style>
