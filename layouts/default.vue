<template>
	<div class="flex flex-col h-screen">
		<NuxtLink to="/" class="absolute top-5 left-5 text-2xl">Pokemons</NuxtLink>
		<NuxtLink
			to="/_tailwind/"
			target="_blank"
			class="rounded px-5 py-1 absolute right-5 top-5 bg-sky-600 hover:bg-sky-700 text-white opacity-5 hover:opacity-50 transition"
		>
			Tailwind viewer
		</NuxtLink>
		<main class="flex flex-col justify-center grow items-center mx-auto">
			<slot />
		</main>
		<AppFooter />
	</div>
</template>