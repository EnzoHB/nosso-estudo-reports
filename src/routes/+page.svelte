<script>
    import Logo from '$lib/logo.svelte';
	import Report from '$lib/Report.svelte';

	export const prerender = true

	let { data } = $props();
	let entries = JSON.parse(data.entries);

	let lastest = entries[0]
	let pastWeek = entries[6]

	const options = {
		weekday: 'long',
		year: "numeric",
		month: "long",
  		day: "numeric",
	}

	// svelte-ignore non_reactive_update
	// @ts-ignore
	let from = new Date(pastWeek[0]).toLocaleDateString('pt-BR', options)
	// svelte-ignore non_reactive_update
	// @ts-ignore
	let to = new Date(lastest[0]).toLocaleDateString('pt-BR',  options)

	from = from[0].toUpperCase() + from.substring(1);
	to = to[0].toUpperCase() + to.substring(1);

</script>

<div class='container'>
	<div class='front'>
		<div class='header'>
			<Logo/>
			<h1>Relatório Semanal</h1>
			<h2>Nosso Estudo</h2>
		</div>
		<div class='explainer'>
			{from} à {to}
		</div>
	</div>
	{#each entries as entry, index}
		<Report {entry} {index}/>
	{/each}
</div>

<style>

	@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
		font-family: 'Inter', serif;
	}

	.front {
		display: flex;
		flex-direction: column;
		gap: 40px;

		border: solid;
		border-color: #f2f2f2;
		border-radius: 10px;
		border-width: 1px;

		width:80%;
		padding: 40px;

		font-size: smaller;
	}

	h1 {
		margin: 0px;
		margin-top: 4px;
	}

	h2 {
		margin: 0;
		font-weight: 400;
	}
</style>