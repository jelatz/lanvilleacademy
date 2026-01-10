<template>
    <div>
        <Hero :imageSrc="'/images/hero-main.jpg'" :fullHero=true />
        <Section variant="default" padding="xl">
            <div class="max-w-384 mx-auto">
                <div class="bg-accent w-24 h-2 mb-10"></div>
                <h1 class="text-5xl lg:text-6xl font-bold leading-tight mb-6">Who we are?</h1>
                <p class="leading-relaxed text-black text-lg lg:text-xl mb-8">Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Assumenda fuga maxime aliquid libero pariatur nobis reiciendis esse molestias
                    dolorem consectetur. Aliquid rem sit quae mollitia cumque in maiores pariatur omnis?
                    Quidem nisi enim reprehenderit eaque excepturi est, quam iure amet distinctio. Repellat beatae
                    dolorum architecto eveniet itaque fugiat ut tenetur quaerat libero, error perferendis iure dolor?
                    Sit reprehenderit error delectus!
                    Non soluta reprehenderit distinctio, iste porro fugit ea ducimus itaque rerum fugiat id quod enim.
                    Nisi aliquid ut labore minus accusamus alias libero quaerat amet vel eligendi? Ullam, ipsum rerum.
                    Dolore doloremque officia quia excepturi, ad, temporibus voluptas fuga magni impedit nemo iusto sunt
                    placeat neque, non inventore nisi error ut aliquid illum accusamus. Ipsum facilis at qui quibusdam
                    labore?
                    Et ipsum perferendis tempora voluptatum architecto, nesciunt fugiat cupiditate autem consequuntur,
                    nemo praesentium. Ullam quidem vel delectus laudantium! Molestias a eaque nobis? Magni velit enim
                    vero non, maxime aut. Iste.
                </p>

            </div>
        </Section>

        <!-- Mission & Vision -->
        <Section variant="default" padding="xxxl" class="border-t border-gray-600">
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
                        boundaries. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit ullam tempore veniam
                        explicabo natus enim commodi molestiae maiores ratione impedit et optio ab facilis
                        necessitatibus, labore error dolore! Eaque, commodi.
                        Voluptatem vitae illum, pariatur reiciendis, ab laborum voluptatum natus, saepe error commodi
                        blanditiis nulla quisquam dignissimos labore rerum dolore nemo eius! Nobis cupiditate voluptatum
                        delectus nemo? Possimus quo sit odio?
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
                        age. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus modi, neque minima
                        impedit, ipsam, voluptas ratione aliquam expedita suscipit ullam quos mollitia sit fugiat quo
                        veritatis est saepe explicabo! Aperiam!
                        Facilis beatae, unde at natus magni perferendis! Ab pariatur consequuntur ea earum fuga
                        blanditiis quidem accusantium, inventore aliquam a hic laudantium reprehenderit voluptates
                        quaerat nostrum placeat voluptate. Accusantium, laborum quod!
                    </p>
                </div>
            </div>
        </Section>

        <!-- CORE VALUES / PHILOSOPHY -->
        <Section variant="default" padding="xl">
            <div class="max-w-384 mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                <div class="text-center">
                    <Shield class="w-12 h-12 mx-auto text-accent mb-4" />
                    <h3 class="font-bold text-2xl mb-2">Integrity</h3>
                    <p class="text-gray-700">We deliver honest, transparent, and reliable education.</p>
                </div>
                <div class="text-center">
                    <Heart class="w-12 h-12 mx-auto text-accent mb-4" />
                    <h3 class="font-bold text-2xl mb-2">Passion</h3>
                    <p class="text-gray-700">We are committed to inspiring lifelong learners worldwide.</p>
                </div>
                <div class="text-center">
                    <Globe class="w-12 h-12 mx-auto text-accent mb-4" />
                    <h3 class="font-bold text-2xl mb-2">Accessibility</h3>
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

        <!-- READY TO START LEARNING -->
        <Section variant="default" padding="xxxl">
            <div class="max-w-384 mx-auto rounded-lg p-12 md:p16 text-center bg-accent/65 shadow-2xl">
                <h1 class="text-4xl md:text-5xl font-bold mb-4 text-primary">Ready to Start Learning?</h1>
                <p class="text-primary text-xl ">Join hundreds of students already transforming their careers with
                    Lanville
                    Academy.</p>

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
import { Target, Eye, Shield, Heart, Globe, ArrowRight } from "lucide-vue-next";


</script>
<style scoped></style>