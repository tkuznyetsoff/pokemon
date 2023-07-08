<template>
	<div>
		<NuxtLink to="/" class="hover:underline">Back to index</NuxtLink>
		<p v-if="pending">Loading...</p>
		<template v-else-if="pokemon">
			<p class="text-2xl">{{ pokemon.name }}</p>
			<img :src="pokemon.sprites.front_default" alt="image" />

			<NuxtLink :to="`/${params.id}/abilities`" class="mr-3 underline">Abilities</NuxtLink>
			<NuxtLink :to="`/${params.id}/stats`" class="underline">Stats</NuxtLink>

			<NuxtPage :pokemon="pokemon" />
		</template>
	</div>
</template>

<script setup lang="ts">
	import { Pokemon } from '@/types';

	const { params } = useRoute();
	const { data: pokemon, pending, error } = await useFetch<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${params.id}`);

	if (error.value) {
		showError({ statusCode: error.value.statusCode });
	}
</script>