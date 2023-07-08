<template>
	<form @submit.prevent="onSubmit" class="flex flex-col gap-6">
		<label class="flex flex-col gap-2">
			<p class="cursor-pointer">Enter pokemon id:</p>
			<input class="p-2 border" :class="{ 'border-red-700': v$.pokemonId.$error }" v-model="pokemonId" />
		</label>
		<button type="submit" class="rounded block py-2 bg-slate-600 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-white" :disabled="v$.$error">View pokemon</button>
	</form>
</template>

<script setup lang="ts">
	import { useVuelidate } from '@vuelidate/core';
	import { minLength, required, numeric } from '@vuelidate/validators';

	const router = useRouter();
	const pokemonId = ref('');
	const rules = computed(() => ({
		pokemonId: {
			required,
			numeric,
			minLength: minLength(1)
		},
	}));
	const v$ = useVuelidate(rules, { pokemonId }, { $lazy: true });

	async function onSubmit() {
		if (await v$.value.$validate()) {
			router.push(`/${pokemonId.value}`);
		};
	};
</script>