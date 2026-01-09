<template>
    <div>
        <Hero :imageSrc="'/images/hero-main.jpg'" :fullHero=true />
        <Section variant="default" padding="xl">
            <div class="max-w-384 mx-auto">
                <div class="bg-accent w-24 h-2 mb-10"></div>
                <h1 class="text-5xl lg:text-6xl font-bold leading-tight mb-6">Who we are?</h1>
                <p class="leading-relaxed text-black text-lg lg:text-xl mb-8">We combine cutting-edge
                    technology
                    with expert instruction to create an unparalleled learning experience.
                </p>

            </div>
        </Section>

        <!-- Mission & Vision -->
        <Section variant="default" padding="xl">
            <div class="max-w-384 mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
                <!-- Mission -->
                <div>
                    <div class="bg-accent w-24 h-2 mb-8"></div>
                    <div class="flex items-center gap-4 mb-6">
                        <Target class="w-10 h-10 text-black" />
                        <h2 class="text-4xl font-bold text-black">Our Mission</h2>
                    </div>
                    <p class="text-lg text-black leading-relaxed">
                        To empower learners worldwide by providing accessible, high-quality education that bridges the
                        gap between ambition and achievement. We strive to create a platform where knowledge knows no
                        boundaries.
                    </p>
                </div>

                <!-- Vision -->
                <div>
                    <div class="bg-accent w-24 h-2 mb-8"></div>
                    <div class="flex items-center gap-4 mb-6">
                        <Eye class="w-10 h-10 text-black" />
                        <h2 class="text-4xl font-bold text-black">Our Vision</h2>
                    </div>
                    <p class="text-lg text-black leading-relaxed">
                        We envision a future where anyone, anywhere has the power to transform their life through
                        learning. We aim to be the global catalyst for personal and professional growth in the digital
                        age.
                    </p>
                </div>
            </div>
        </Section>

        <!-- CORE VALUES / PHILOSOPHY -->
        <Section variant="default" padding="xl">
            <div class="max-w-384 mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                <div class="text-center">
                    <Shield class="w-12 h-12 mx-auto text-accent mb-4" />
                    <h3 class="font-bold text-xl mb-2">Integrity</h3>
                    <p class="text-gray-700">We deliver honest, transparent, and reliable education.</p>
                </div>
                <div class="text-center">
                    <Heart class="w-12 h-12 mx-auto text-accent mb-4" />
                    <h3 class="font-bold text-xl mb-2">Passion</h3>
                    <p class="text-gray-700">We are committed to inspiring lifelong learners worldwide.</p>
                </div>
                <div class="text-center">
                    <Globe class="w-12 h-12 mx-auto text-accent mb-4" />
                    <h3 class="font-bold text-xl mb-2">Accessibility</h3>
                    <p class="text-gray-700">Education should be available to anyone, anywhere, anytime.</p>
                </div>
            </div>
        </Section>

        <!-- TEAM / FOUNDERS -->
        <Section variant="default" padding="xl">
            <div class="max-w-384 mx-auto">
                <div class="bg-accent w-24 h-2 mb-10"></div>
                <h2 class="text-4xl font-bold mb-8">Meet Our Team</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div class="text-center">
                        <img src="/images/logo.png" alt="John Doe" class="w-40 h-40 rounded-full mx-auto mb-4" />
                        <h3 class="font-bold text-lg">John Doe</h3>
                        <p class="text-gray-600">Co-founder & CEO</p>
                    </div>
                    <div class="text-center">
                        <img src="/images/logo.png" alt="Jane Smith" class="w-40 h-40 rounded-full mx-auto mb-4" />
                        <h3 class="font-bold text-lg">Jane Smith</h3>
                        <p class="text-gray-600">Head of Curriculum</p>
                    </div>
                </div>
            </div>
        </Section>

        <!-- STATISTICS -->
        <!-- <Section variant="default" padding="xl">
            <div class="max-w-384 mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div>
                    <h3 class="text-4xl font-bold text-accent">10k+</h3>
                    <p class="text-gray-700">Students Trained</p>
                </div>
                <div>
                    <h3 class="text-4xl font-bold text-accent">50+</h3>
                    <p class="text-gray-700">Courses Available</p>
                </div>
                <div>
                    <h3 class="text-4xl font-bold text-accent">30+</h3>
                    <p class="text-gray-700">Countries Reached</p>
                </div>
            </div>
        </Section> -->

        <!-- <Section variant="default" padding="xl">
            <div class="max-w-384 mx-auto">
                <h2 class="text-4xl font-bold mb-8">What Our Students Say</h2>
                <div class="space-y-8">
                    <div class="flex items-start gap-4">
                        <img src="/images/logo.png" alt="Student 1" class="w-12 h-12 rounded-full" />
                        <div>
                            <p class="text-gray-700 italic">"This platform changed my career. The courses are
                                top-notch!"</p>
                            <p class="font-bold mt-1">– Alex R.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section> -->

        <Section variant="default" padding="xl" class="text-center">
            <h2 class="text-3xl font-bold mb-4">Ready to start learning?</h2>
            <Link href="/courses" class="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary transition">
            Browse Courses
            </Link>
        </Section>


    </div>
</template>

<script setup lang="ts">
import Hero from "@/components/Hero.vue";
import Section from "@/components/Section.vue";
import { Target, Eye } from "lucide-vue-next";
</script>

<style scoped></style>