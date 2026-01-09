<template>
    <div :class="[baseClasses, $attrs.class]">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
    variant?: 'default' | 'primary' | 'secondary';
    padding?: 'sm' | 'md' | 'lg' | 'xl';
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'default',
    padding: 'md'
});

const baseClasses = computed(() => {
    const variantClasses = {
        default: 'bg-white border-b border-gray-600 ',
        primary: 'bg-primary text-white',
        secondary: 'bg-[#D6B04F] text-black'
    };

    const paddingClasses = {
        sm: 'p-4',
        md: 'p-8',
        lg: 'p-12',
        xl: 'p-16'
    };

    return `${variantClasses[props.variant]} ${paddingClasses[props.padding]}`;
});

defineOptions({
    inheritAttrs: false
});
</script>

<style scoped></style>



<!-- 
This Section.vue component allows you to create reusable sections with different background variants and padding sizes. You can use it in your views by passing the desired props and adding custom classes if needed.
    === With props only ===
    <Section variant="primary" padding="lg">
        <h1>Who We Are</h1>
    </Section>

    === With props and custom classes ===
    <Section variant="secondary" padding="sm" class="rounded-lg shadow-md max-w-4xl mx-auto">
        <h1>Our Mission</h1>
    </Section>

    === Custom classes only ===
    <Section class="border-2 border-red-500 mt-10">
        Content here
    </Section>
-->