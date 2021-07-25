<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { Circle, Shape } from '$lib/shapes';
	import { createForm, Form, Field } from 'svelte-forms-lib';

	interface FormValues {
		height: string;
		width: string;
		shapes: Array<Circle>;
		newShape: string;
	}

	let initialValues: FormValues = {
		height: '20',
		width: '20',
		shapes: [new Circle({ cx: 5, cy: 5, r: 5, fill: '#000' })],
		newShape: ''
	};

	const { form, handleChange } = createForm<FormValues>({
		initialValues,
		onSubmit() {}
	});

	const getNewShape = () => {
		switch ($form.newShape) {
			case 'circle':
			default:
				return new Circle({ cx: 5, cy: 5, r: 5, fill: 'pink' });
		}
	};

	console.log($form.shapes);

	const add = () => {
		$form.shapes = $form.shapes.concat(getNewShape());
	};
</script>

<svelte:head>
	<title>Ben J Tatum</title>
</svelte:head>

<svg height="100%" width="100%" class="h-screen">
	<pattern
		id="pattern-circles"
		x="0"
		y="0"
		width={$form.width}
		height={$form.height}
		patternUnits="userSpaceOnUse"
	>
		{#each $form.shapes as { element, ...props }}
			{#if element === 'circle'}
				<circle {...props} />
			{/if}
		{/each}
	</pattern>
	<rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
</svg>

<div class="fixed right-10 bottom-10 bg-white shadow-xl h-96 w-96 rounded">
	<Form>
		<div>
			<label for="height">Height</label>
			<input
				name="height"
				bind:value={$form.height}
				on:change={handleChange}
				on:blur={handleChange}
				type="range"
			/>
		</div>

		<div>
			<label for="width">Width</label>
			<input
				name="width"
				bind:value={$form.width}
				on:change={handleChange}
				on:blur={handleChange}
				type="range"
			/>
		</div>

		{#each $form.shapes as { element }, i}
			{#if element === 'circle'}
				<div class="grid grid-cols-5">
					<div>&#x25CF;</div>
					<input
						name={`shapes[${i}].r`}
						bind:value={$form.shapes[i].r}
						on:change={handleChange}
						on:blur={handleChange}
						placeholder="r"
						type="number"
					/>
					<input
						name={`shapes[${i}].cx`}
						bind:value={$form.shapes[i].cx}
						on:change={handleChange}
						on:blur={handleChange}
						placeholder="cx"
						type="number"
					/>
					<input
						name={`shapes[${i}].cy`}
						bind:value={$form.shapes[i].cy}
						on:change={handleChange}
						on:blur={handleChange}
						placeholder="cy"
						type="number"
					/>
					<input
						name={`shapes[${i}].fill`}
						bind:value={$form.shapes[i].fill}
						on:change={handleChange}
						on:blur={handleChange}
						placeholder="fill"
						type="color"
					/>
				</div>
			{/if}
		{/each}

		<select on:change={handleChange} name="newShape">
			<option value="circle">Circle</option>
		</select>

		<button on:click={add}>Add new shape </button>
	</Form>
</div>
