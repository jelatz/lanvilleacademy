<script setup lang="ts">
import type { Component } from 'vue';

interface Card {
  id: number;
  title: string;
  imageUrl?: string;
  imageAlt?: string;
  icon?: Component;
  description: string;
}

interface Props {
  cards: Card[];
  containerClass?: string;
  cardClass?: string;
  imageClass?: string;
  iconClass?: string;
  titleClass?: string;
  descriptionClass?: string;
}

withDefaults(defineProps<Props>(), {
  cards: () => [
    { id: 1, title: "Expert Instructors", imageUrl: "", imageAlt: "", description: "This is sample" },
    { id: 2, title: "Expert Instructors", imageUrl: "", imageAlt: "", description: "This is sample" },
    { id: 3, title: "Expert Instructors", imageUrl: "", imageAlt: "", description: "This is sample" },
    { id: 4, title: "Expert Instructors", imageUrl: "", imageAlt: "", description: "This is sample" },
    { id: 5, title: "Expert Instructors", imageUrl: "", imageAlt: "", description: "This is sample" },
    { id: 6, title: "Expert Instructors", imageUrl: "", imageAlt: "", description: "This is sample" },
  ],
  containerClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12",
  cardClass: "",
  imageClass: "w-full h-auto",
  iconClass: "w-16 h-16 bg-[#242424] p-4 rounded-lg",
  titleClass: "text-2xl font-bold mt-8 mb-2",
  descriptionClass: "text-gray-600"
})
</script>

<template>
  <div :class="containerClass">
    <div v-for="card in cards" :key="card.id" :class="cardClass">
      <!-- Render Icon if provided -->
      <component v-if="card.icon" :is="card.icon" :class="iconClass" />
      <!-- Render Image if provided -->
      <img v-else-if="card.imageUrl" :src="card.imageUrl" :alt="card.imageAlt || card.title" :class="imageClass" />

      <h1 :class="titleClass">{{ card.title }}</h1>
      <p :class="descriptionClass">{{ card.description }}</p>
    </div>
  </div>
</template>

<style lang="css" scoped></style>