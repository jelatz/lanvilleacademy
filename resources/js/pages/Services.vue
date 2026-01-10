<script setup lang="ts">
import Hero from "@/components/Hero.vue"
import Section from "@/components/Section.vue"
import Card from "@/components/Card.vue"

const services = [
    {
        id: 1,
        title: "Online Tutorial",
        imageUrl: "/images/hero-main.jpg",
        description: "Personalized online tutorials designed to help students master core subjects at their own pace.",
    },
    {
        id: 2,
        title: "Test Preparation",
        imageUrl: "/images/hero-main.jpg",
        description: "Focused exam reviews and practice sessions to help students perform confidently in tests.",
    },
    {
        id: 3,
        title: "Homework Assistance",
        imageUrl: "/images/hero-main.jpg",
        description: "Guided homework support that helps students understand concepts, not just finish tasks.",
    },
]
</script>

<template>
    <!-- HERO -->
    <Hero :imageSrc="'/images/hero-main.jpg'" :fullHero="true" />

    <!-- SERVICES INTRO -->
    <Section variant="default" padding="xxxl">
        <div class="max-w-394 mx-auto">
            <h1 class="text-5xl font-bold">
                Our <span class="text-accent">Services</span>
            </h1>

            <h2 class="text-2xl font-semibold mt-5">
                Online Learning Support for
                <span class="text-accent">Elementary</span> to
                <span class="text-accent">College Students</span>
            </h2>

            <p class="text-lg mt-4 text-gray-700">
                We provide reliable <strong>online tutorial services</strong>, <strong>test preparation</strong>, and
                <strong>homework assistance</strong> designed to help students improve grades, build confidence, and
                succeed academically—from <strong>Elementary</strong> to <strong>College</strong>.
            </p>

            <Card :cards="services" imageClass="w-fit"
                containerClass="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20 max-w-6xl mx-auto" cardClass="shadow-xl" />
        </div>
    </Section>

    <!-- WHY CHOOSE US -->
    <Section variant="default" containerClass="py-16">
        <div class="max-w-394 mx-auto px-6">
            <h2 class="text-2xl md:text-3xl font-semibold text-center mb-10">
                Why Choose Our Online Tutorials?
            </h2>

            <ul class="grid gap-6 sm:grid-cols-2">
                <li class="group flex items-start gap-4 p-5 rounded-xl border bg-white shadow-sm
                           transition-all duration-300 hover:bg-primary hover:-translate-y-1">
                    <span class="shrink-0 text-primary text-xl group-hover:text-white">✓</span>
                    <p class="text-gray-700 group-hover:text-white">
                        One-on-one or small group sessions
                    </p>
                </li>

                <li class="group flex items-start gap-4 p-5 rounded-xl border bg-white shadow-sm
                           transition-all duration-300 hover:bg-primary hover:-translate-y-1">
                    <span class="shrink-0 text-primary text-xl group-hover:text-white">✓</span>
                    <p class="text-gray-700 group-hover:text-white">
                        Clear explanations and guided practice
                    </p>
                </li>

                <li class="group flex items-start gap-4 p-5 rounded-xl border bg-white shadow-sm
                           transition-all duration-300 hover:bg-primary hover:-translate-y-1">
                    <span class="shrink-0 text-primary text-xl group-hover:text-white">✓</span>
                    <p class="text-gray-700 group-hover:text-white">
                        Flexible schedules for busy students
                    </p>
                </li>

                <li class="group flex items-start gap-4 p-5 rounded-xl border bg-white shadow-sm
                           transition-all duration-300 hover:bg-primary hover:-translate-y-1">
                    <span class="shrink-0 text-primary text-xl group-hover:text-white">✓</span>
                    <p class="text-gray-700 group-hover:text-white">
                        Experienced and patient tutors
                    </p>
                </li>
            </ul>
        </div>
    </Section>

    <!-- CTA -->
    <Section variant="default" padding="xxxl">
        <div class="max-w-394 mx-auto rounded-xl p-12 md:p-16 text-center bg-accent/65 shadow-2xl">
            <h2 class="text-4xl md:text-5xl font-bold mb-4 text-primary">
                Ready to Start Learning?
            </h2>

            <p class="text-primary text-xl">
                Join hundreds of students already improving their academic performance with Lanville Academy.
            </p>

            <div class="flex flex-col lg:flex-row items-center justify-center gap-4 mt-8 lg:w-96 lg:mx-auto">
                <button class="bg-primary px-6 py-3 rounded text-white font-medium
                           hover:bg-[#0f2b60] hover:-translate-y-1 transition-all duration-300
                           flex items-center justify-center gap-2">
                    Enroll Now
                </button>

                <button class="ring-1 ring-primary px-6 py-3 rounded text-primary font-medium
                           hover:bg-primary hover:text-white transition-all duration-300">
                    Schedule a Demo
                </button>
            </div>
        </div>
    </Section>
</template>
