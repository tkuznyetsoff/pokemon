<template>
	<div class="flex flex-col h-screen grow items-center justify-center mx-auto">
		<p>{{ error.statusCode }}</p>
		<button class="rounded block py-2 px-5 bg-slate-600 hover:bg-slate-700 text-white" @click="handleError">Clear errors</button>
	</div>
</template>

<script setup lang="ts">
	defineProps<{
		error: { statusCode: number }
	}>()

	const handleError = () => clearError({ redirect: '/' })

</script>