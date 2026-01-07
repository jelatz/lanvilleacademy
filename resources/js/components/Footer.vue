<template>
    <footer class="p-4 bg-blue-950">
        <h1 class="text-xl text-center text-white">{{ title }} &copy; {{ date }}</h1>
    </footer>
</template>

<script setup>
const title = "Lanville Academy";
const date = new Date().getFullYear();
</script>
