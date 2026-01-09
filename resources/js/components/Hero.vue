<script setup lang="ts">
interface Props {
    imageSrc: string;
    imageAlt?: string;
    reverse?: boolean;
    imageClass?: string;
    fullHero?: boolean;
}

withDefaults(defineProps<Props>(), {
    imageAlt: 'Hero image',
    reverse: false,
    imageClass: 'w-full rounded-lg shadow-xl'
});
</script>

<template>
    <div v-if="fullHero" class="w-full min-h-[600px] bg-cover bg-center"
        :style="{ backgroundImage: `url(${imageSrc})` }">
        <slot />
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center max-w-384 mx-auto">
        <!-- Content Slot -->
        <div :class="{ 'order-2 lg:order-1': reverse, 'order-1': !reverse }">
            <slot />
        </div>

        <!-- Image -->
        <div :class="{ 'order-1 lg:order-2': reverse, 'order-2': !reverse }">
            <img :src="imageSrc" :alt="imageAlt" :class="imageClass">
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
