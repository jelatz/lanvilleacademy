<template>
  <div class="min-h-dvh mx-auto">
    <!-- HERO -->
    <Section variant="default" padding="xl">
      <Hero imageSrc="/images/hero-main.jpg">
        <div>
          <div class="bg-accent w-24 h-2 mb-10"></div>
          <h1 class="text-5xl lg:text-6xl font-bold leading-tight mb-6">Unlock Your Potential <span
              class="text-accent lg:block font-bold mt-1">Learn Limitlessly</span>
          </h1>
          <p class="leading-relaxed max-w-lg text-black text-lg lg:text-xl mb-8">Unlock your
            ptoential
            with world-class online tutorials. Expert instructors, flexible
            schedules, and personalized learning paths designed for your success.</p>
          <div class="flex flex-col lg:flex-row gap-4 w-full">
            <button
              class="bg-primary px-6 py-2 rounded text-white hover:-translate-y-2 hover:bg-[#0f2b60] transition-all duration-500">Explore
              Courses
              <ArrowRight class="w-6 h-6 inline-block" />
            </button>
            <button
              class="bg-transparent ring-1 ring-primary px-6 py-2 rounded text-primary hover:bg-[#0f2b60] hover:text-white transition-all">Watch
              Demo</button>
          </div>
        </div>
      </Hero>
    </Section>

    <!-- STATS -->
    <Section variant="default" padding="xl">
      <Stats :stats="stats" />
    </Section>

    <!-- WHY CHOOSE LANVILLE -->
    <Section variant="primary" padding="xl">
      <div class="max-w-384 mx-auto">
        <div class="bg-accent w-24 h-2 mb-10"></div>
        <h1 class="text-5xl lg:text-6xl font-bold leading-tight mb-6">Why Choose <span
            class="text-accent">Lanville?</span></h1>
        <p class="leading-relaxed max-w-lg text-white text-lg lg:text-xl mb-8">We combine cutting-edge technology
          with expert instruction to create an unparalleled learning experience.
        </p>

        <Card :cards="cardsWithIcons" iconClass="w-16 h-16 bg-accent p-4 rounded-lg hover:bg-[#f4b147]" />
      </div>
    </Section>

    <!-- CURATED COURSES FOR EVERY PATH -->
    <Section variant="default" padding="xl">
      <div class="max-w-384 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="order-2 lg:order-1"><img src="/images/courses-hero.jpg" alt="laptop"
            class="w-full rounded-lg shadow-2xl"></div>
        <div class="order-1 lg:order-2">
          <div class="bg-accent w-24 h-2 mb-10"></div>
          <h1 class="text-5xl lg:text-6xl font-bold leading-tight mb-6">Curated <span
              class="text-accent font-bold mt-1">Courses</span> for Every Path
          </h1>
          <p class="text-lg text-muted-foreground mb-8 leading-relaxed">From beginner fundamentals to
            advanced specializations, our carefully designed curriculum covers the skills you need to succeed in today's
            competitive landscape.
          </p>
          <div class="space-y-4 mb-8 *:flex *:items-start *:gap-4">
            <div>
              <div class="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-1"><span
                  class="text-black text-sm font-bold">✓</span></div>
              <div>
                <h4 class="font-bold text-lg">Technology & Programming</h4>
                <p class="text-white">Master coding, web development, and software engineering</p>
              </div>
            </div>
            <div>
              <div class="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-1"><span
                  class="text-black text-sm font-bold">✓</span></div>
              <div>
                <h4 class="font-bold text-lg">Business & Entrepreneurship</h4>
                <p class="text-white">Build skills for leadership, marketing, and business growth</p>
              </div>
            </div>
            <div>
              <div class="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-1"><span
                  class="text-black text-sm font-bold">✓</span></div>
              <div>
                <div>
                  <h4 class="font-bold text-lg">Creative Arts & Design</h4>
                  <p class="text-blawhiteck">Develop creative talents in design, music, and visual arts.</p>
                </div>
              </div>
            </div>
            <button
              class="bg-accent px-6 py-2 rounded text-black hover:-translate-y-2 hover:bg-[#f4b147] transition-all duration-500">Browse
              All Courses
              <ArrowRight class="w-6 h-6 inline-block" />
            </button>
          </div>
        </div>
      </div>
    </Section>

    <!-- READY TO START LEARNING -->
    <Section variant="default" padding="xl">
      <div class="max-w-384 mx-auto rounded-lg p-12 md:p16 text-center bg-gray-400">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-primary">Ready to Start Learning?</h1>
        <p class="text-white">Join hundreds of students already transforming their careers with Lanville Academy.</p>

        <div
          class="flex justify-center flex-col space-y-3 lg:space-y-0 **:w-full mt-5 items-center lg:space-x-4 lg:flex-row lg:w-96 lg:mx-auto">
          <button
            class="bg-primary rounded px-6 py-2 text-white hover:-translate-y-1 hover:bg-[#0f2b60] transition-all duration-500 flex items-center justify-center text-nowrap">
            Enroll Now
            <ArrowRight class="w-6 h-6" />
          </button>

          <button
            class="bg-transparent ring-1 ring-primary px-6 py-2 rounded text-primary hover:bg-[#0f2b60] hover:text-white transition-all">Schedule
            a Demo</button>
        </div>
      </div>
    </Section>
  </div>
</template>

<script setup lang="ts">
import Hero from "@/components/Hero.vue";
import Section from "@/components/Section.vue";
import "swiper/css";
import "swiper/css/pagination";
import Stats from "@/components/Stats.vue";
import Card from "@/components/Card.vue";
// Icons
import { BookOpen, Zap, Award, Users, Globe, ArrowRight } from "lucide-vue-next";

// Stats (Statistics Section)
const stats = [
  { id: 1, value: '100+', label: 'Active Learners' },
  { id: 2, value: '50+', label: 'Courses Available' },
  { id: 3, value: '98%', label: 'Satisfaction Rate' }
];

// Cards (Why Choose Lanville Section)
const cardsWithIcons = [
  {
    id: 1,
    title: "Expert Instructors",
    icon: BookOpen,
    description: "Learn from industry professionals"
  },
  {
    id: 2,
    title: "Flexible Learning",
    icon: Zap,
    description: "Access thousands of courses"
  },
  {
    id: 3,
    title: "Community",
    icon: Award,
    description: "Join a vibrant learning community"
  },
  {
    id: 4,
    title: "Community Support",
    icon: Users,
    description: "Connect with fellow learners, get help from instructors, and collaborate on real-world projects"
  },
  {
    id: 5,
    title: "Global Access",
    icon: Globe,
    description: "Access quality education from anywhere in the world with our mobile-friendly platform and offline mode."
  },
  {
    id: 6,
    title: "Career Support",
    icon: Zap,
    description: "Get personalized career guidancem, job placement assistance, and industry connections to advance your career."
  }
];


</script>

<style scoped>
.container {
  max-width: 80rem;
  margin: 0 auto;
}
</style>
