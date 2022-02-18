<script>
	import { usedFromMarkup, usedFromScript } from '$lib/utils';
	const world = usedFromScript('world');
</script>

<h1>hello {world} (usedFromScript)</h1>
<h1>hello {usedFromMarkup('world')} (usedFromMarkup)</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
