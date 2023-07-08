<template>
	<NuxtLayout>
		<p class="mb-2">{{ error.statusCode }}</p>
		<button class="rounded block py-2 px-5 bg-slate-600 hover:bg-slate-700 text-white" @click="handleError">Clear errors</button>
	</NuxtLayout>
</template>

<script setup lang="ts">
	defineProps<{
		error: { statusCode: number }
	}>()

	const handleError = () => clearError({ redirect: '/' })

</script>