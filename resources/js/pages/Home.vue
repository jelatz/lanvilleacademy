<template>
  <div class="min-h-dvh mx-auto">
    <!-- HERO -->
    <Section variant="default" padding="xl">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center max-w-384 mx-auto">
        <div>
          <div class="bg-[#f2c744] w-24 h-2 mb-10"></div>
          <h1 class="text-5xl lg:text-6xl font-bold leading-tight mb-6">Learn Without <span
              class="text-[#f2c744] lg:block font-bold mt-1">Limits</span>
          </h1>
          <p class="leading-relaxed max-w-lg text-[#c4b484] text-lg lg:text-xl mb-8">Unlock your
            ptoential
            with world-class online tutorials. Expert instructors, flexible
            schedules, and personalized learning paths designed for your success.</p>
          <div class="flex flex-col lg:flex-row gap-4 w-full">
            <button
              class="bg-[#f2c744] px-6 py-2 rounded text-black hover:-translate-y-2 hover:bg-[#cea11a] transition-all duration-500">Explore
              Courses
              <ArrowSmallRightIcon class="w-6 h-6 inline-block" />
            </button>
            <button
              class="bg-transparent ring-1 ring-[#f2c744] px-6 py-2 rounded text-[#f2c744] hover:bg-[#f2c744] hover:text-black transition-all">Watch
              Demo</button>
          </div>
        </div>
        <div>
          <img src="/images/hero-main.jpg" alt="laptop" class="w-full rounded-lg shadow-2xl">
        </div>
      </div>
    </Section>

    <!-- STATS -->
    <Section variant="default" padding="xl">
      <div>

        <Stats />
      </div>
    </Section>

    <!-- WHY CHOOSE LANVILLE -->
    <Section variant="default" padding="xl">
      <div>
        <div class="bg-[#f2c744] w-24 h-2 mb-10"></div>
        <h1 class="text-5xl lg:text-6xl font-bold leading-tight mb-6">Why Choose Lanville?</h1>
        <p class="leading-relaxed max-w-lg text-[#c4b484] text-lg lg:text-xl mb-8">We combine cutting-edge technology
          with expert instruction to create an unparalleled learning experience.
        </p>

        <Card :cards="cardsWithIcons" />
      </div>
    </Section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Section from "@/components/Section.vue";
import "swiper/css";
import "swiper/css/pagination";
import Stats from "@/components/Stats.vue";
import Card from "@/components/Card.vue";
// Icons
import { ArrowSmallRightIcon, BookOpenIcon, AcademicCapIcon, UsersIcon } from "@heroicons/vue/24/outline";

// Cards (Why Choose Lanville Section)
const cardsWithIcons = [
  {
    id: 1,
    title: "Expert Instructors",
    icon: BookOpenIcon,
    description: "Learn from industry professionals"
  },
  {
    id: 2,
    title: "Rich Content",
    icon: BookOpenIcon,
    description: "Access thousands of courses"
  },
  {
    id: 3,
    title: "Community",
    icon: UsersIcon,
    description: "Join a vibrant learning community"
  }
];


</script>

<style scoped>
.container {
  max-width: 80rem;
  margin: 0 auto;
}
</style>
