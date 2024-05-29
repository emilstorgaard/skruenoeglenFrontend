<script>
	export let data;
</script>

<div class="flex flex-wrap gap-8 justify-center container mx-auto">
	{#each data.images as image}
		<div>
			<img
				class="h-auto max-w-full rounded-lg max-h-40 md:max-h-80"
				alt="image{image.id}"
				src="{data.API_HOST}/posts/image/{image.id}"
			/>
		</div>
	{/each}
</div>
