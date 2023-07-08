<template>
	<div class="mt-3">
		<p>Stats:</p>
		<table class="border border-collapse">
			<thead>
				<tr>
					<th class="px-2 border">name</th>
					<th class="px-2 border">base_stat</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(stats, index) in pokemon.stats" :key="index">
					<td class="px-2 border">{{ stats.stat.name }}</td>
					<td class="px-2 border">{{ stats.base_stat }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup lang="ts">
	import { Pokemon } from '@/types';

	defineProps<{
		pokemon: Pokemon
	}>()
</script>