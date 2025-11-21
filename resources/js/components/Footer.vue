<template>
    <header class="p-4">
        <h1 class="text-xl text-center">{{ title }} &copy; {{ date }}</h1>
    </header>
</template>

<script setup>
const title = "Lanville Academy";
const date = new Date().getFullYear();
</script>
