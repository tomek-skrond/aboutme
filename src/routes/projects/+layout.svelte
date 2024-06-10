<script>
    import { selectedTags } from '../../stores/tags'; // Adjust the path as needed
    import { get } from 'svelte/store';
	/** @type {import('./$types').LayoutData} */
	export let data;

    // Check if a tag is selected
    function isSelected(tag) {
        return get(selectedTags).includes(tag);
    }

    // Function to toggle tag selection
    function toggleTag(tag) {
        selectedTags.update(tags => {
            if (tags.includes(tag)) {
                return tags.filter(t => t !== tag);
            } else {
                return [...tags, tag];
            }
        });
    }

    // Get all currently selected tags
    function getSelectedTags() {
        console.log(selectedTags)
        return get(selectedTags);
    }

</script>

<div class="w-full flex justify-center" style="margin-top: 25px;">
    <div class="flex flex-col items-center w-max">
        <div class="p-5 rounded-md flex flex-wrap justify-center">
            {#each data.alltags as tag}
            <span 
            class="tag bg-blue-100 text-blue-800 text-xs font-medium mx-2 my-1 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 rounded border cursor-pointer"
            class:selected="{ isSelected(tag) }"
            on:click={() => toggleTag(tag)}>
                {tag}
            </span>
        {/each}
        </div>
        <div>
            Selected tags:
            {#each $selectedTags as tag}
            <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">{tag}</span>
            {/each}
        </div>
    </div>
</div>


<style>
    /* .tag {
        background-color: #f0f4f7;
        border-color: #cbd5e0;
        color: #4a5568;
    } */

    .tag.selected {
        background-color: #68d391;
        border-color: #68d391;
        color: #ffffff;
    }

    .tag:hover {
        background-color: #e2e8f0;
        border-color: #cbd5e0;
        color: #2d3748;
    }
</style>
<slot></slot>