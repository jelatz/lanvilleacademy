<template>
  <div :class="[baseClasses, $attrs.class]">
    <!-- Optional Image -->
    <div v-if="imageUrl" class="overflow-hidden">
      <img 
        :src="imageUrl" 
        :alt="imageAlt" 
        :class="imageClasses"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Card Content -->
    <div :class="contentPaddingClasses">
      <!-- Header Slot -->
      <div v-if="$slots.header" class="mb-4">
        <slot name="header"></slot>
      </div>

      <!-- Title -->
      <h3 v-if="title" :class="titleClasses" class="font-bold mb-2">
        {{ title }}
      </h3>

      <!-- Subtitle -->
      <p v-if="subtitle" class="text-sm text-gray-600 mb-3">
        {{ subtitle }}
      </p>

      <!-- Default Content Slot -->
      <div v-if="$slots.default">
        <slot></slot>
      </div>

      <!-- Footer Slot -->
      <div v-if="$slots.footer" class="mt-4">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  imageAlt?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  imageHeight?: string;
  hover?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'md',
  rounded: 'lg',
  shadow: 'md',
  imageAlt: 'Card image',
  imageHeight: 'h-48',
  hover: false
});

const baseClasses = computed(() => {
  const variantClasses = {
    default: 'bg-white border border-gray-200',
    primary: 'bg-[#541517] text-white',
    secondary: 'bg-[#DDCDB1] text-black',
    outlined: 'bg-transparent border-2 border-gray-300'
  };

  const roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full'
  };

  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  };

  const hoverClass = props.hover ? 'transition-transform duration-300 hover:scale-105 hover:shadow-xl' : '';

  return `${variantClasses[props.variant]} ${roundedClasses[props.rounded]} ${shadowClasses[props.shadow]} ${hoverClass} overflow-hidden`;
});

const contentPaddingClasses = computed(() => {
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6'
  };

  return paddingClasses[props.padding];
});

const imageClasses = computed(() => {
  return props.imageHeight;
});

const titleClasses = computed(() => {
  return props.variant === 'primary' ? 'text-white' : 'text-gray-800';
});

defineOptions({
  inheritAttrs: false
});
</script>

<style scoped></style>


<!-- 
=== CARD COMPONENT USAGE EXAMPLES ===

=== Basic Card with Title ===
<Card title="Welcome" subtitle="Get started with our platform">
  <p>This is the card content.</p>
</Card>

=== Card with Image ===
<Card 
  title="Beautiful Landscape" 
  imageUrl="/path/to/image.jpg" 
  imageAlt="Landscape photo"
  imageHeight="h-64"
>
  <p>Explore the beauty of nature.</p>
</Card>

=== Card with Variants ===
<Card variant="primary" title="Primary Card">
  <p>This card uses the primary color scheme.</p>
</Card>

<Card variant="secondary" title="Secondary Card">
  <p>This card uses the secondary color scheme.</p>
</Card>

<Card variant="outlined" title="Outlined Card">
  <p>This card has a border outline.</p>
</Card>

=== Card with Hover Effect ===
<Card title="Hover Me" :hover="true">
  <p>This card scales up on hover.</p>
</Card>

=== Card with Custom Slots ===
<Card>
  <template #header>
    <div class="flex items-center gap-2">
      <span>🎓</span>
      <h2 class="text-xl font-bold">Course Title</h2>
    </div>
  </template>

  <p>Course description goes here.</p>

  <template #footer>
    <button class="bg-[#541517] text-white px-4 py-2 rounded">Enroll Now</button>
  </template>
</Card>

=== Card with Custom Classes ===
<Card 
  title="Custom Styled Card" 
  padding="lg" 
  rounded="xl" 
  shadow="xl"
  class="max-w-md mx-auto border-2 border-[#541517]"
>
  <p>This card has custom styling applied.</p>
</Card>

=== Grid of Cards ===
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
  <Card 
    v-for="item in items" 
    :key="item.id"
    :title="item.title"
    :imageUrl="item.image"
    :hover="true"
  >
    <p>{{ item.description }}</p>
    <template #footer>
      <a :href="item.link" class="text-[#541517] font-semibold">Learn More →</a>
    </template>
  </Card>
</div>

=== Card without Padding (for full-width content) ===
<Card padding="none" rounded="xl">
  <img src="/hero.jpg" alt="Hero" class="w-full h-64 object-cover">
  <div class="p-6">
    <h3 class="text-xl font-bold mb-2">Full Width Image</h3>
    <p>Content with custom padding inside.</p>
  </div>
</Card>
-->