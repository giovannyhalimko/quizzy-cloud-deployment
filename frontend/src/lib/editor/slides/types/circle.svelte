<!--
SPDX-FileCopyrightText: 2023 Marlon W (Platonic)

SPDX-License-Identifier: MPL-2.0
-->

<script lang="ts">
	export let data: string;
	export let editor = true;

	if (!data) {
		data = '#ed333b';
	}
</script>

<div class="rounded-full w-full h-full flex justify-center p-2" style="background-color: {data}">
	{#if editor}
		<input type="color" bind:value={data} class="m-auto hover:cursor-pointer" />
	{/if}
</div>
