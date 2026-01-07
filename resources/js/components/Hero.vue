<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
</script>

<template>
    <h1>hety</h1>
    <div class="w-full relative">
        <Swiper :slides-per-view="1" :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :modules="[Navigation, Pagination, Autoplay]" :loop="true" :pagination="{ clickable: true }" class="h-200">
            <SwiperSlide>
                <img src="/images/hero-1.webp" alt="image 1" class="w-full h-full object-cover" />
            </SwiperSlide>

            <SwiperSlide>
                <img src="/images/hero-2.png" alt="image 2" class="w-full h-full object-cover" />
            </SwiperSlide>

            <SwiperSlide>
                <img src="/images/hero-3.jpg" alt="image 3" class="w-full h-full object-cover" />
            </SwiperSlide>
        </Swiper>

        <div class="absolute inset-y-1/2 w-full md:inset-y-90 z-30">
            <div class="backdrop-blur-sm bg-black/30 rounded-r-xl border border-white/20 shadow-2xl p-8 max-w-3xl">
                <div class="text-center text-white">
                    <div class="text-xl md:text-6xl font-bold mb-4 drop-shadow-lg">Learn Better <span
                            class="block">Learn Anytime.</span></div>
                    <p class="text-md md:text-2xl mb-6 drop-shadow-lg">Simple, guided online lessons designed to help
                        you
                        grow—at your pace.</p>
                    <a href="#"
                        class="bg-[#D6B04F] hover:bg-[#D6B04F] text-white font-semibold text-lg py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 drop-shadow-lg">Explore
                        Programs</a>
                </div>
            </div>
        </div>
    </div>
</template>
