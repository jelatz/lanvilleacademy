<script setup lang="ts">
interface Stat {
    id: number;
    value: string;
    label: string;
}

interface Props {
    stats: Stat[];
    containerClass?: string;
    statItemClass?: string;
    valueClass?: string;
    labelClass?: string;
}

withDefaults(defineProps<Props>(), {
    stats: () => [
        { id: 1, value: '50K+', label: 'Active Learners' },
        { id: 2, value: '50+', label: 'Courses Available' },
        { id: 3, value: '98%', label: 'Satisfaction Rate' }
    ],
    containerClass: 'grid grid-cols-1 md:grid-cols-3 gap-12 mx-auto max-w-384',
    statItemClass: 'text-left',
    valueClass: 'text-4xl md:text-5xl font-bold text-[#f2c744] mb-2',
    labelClass: 'text-[#c4b484] '
});
</script>

<template>
    <div :class="containerClass">
        <div v-for="stat in stats" :key="stat.id" :class="statItemClass">
            <h1 :class="valueClass">{{ stat.value }}</h1>
            <p :class="labelClass">{{ stat.label }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>