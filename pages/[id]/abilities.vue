<template>
	<div class="mt-3">
		<p>Abilities:</p>
		<ul>
			<li v-for="(ability, index) in pokemon.abilities" :key="index">- {{ ability.ability.name }}</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import { Pokemon } from '@/types';

	defineProps<{
		pokemon: Pokemon
	}>()
</script>