<template>
    <header class="w-full md:px-3 absolute top-0 z-50  bg-white/60 md:bg-[#002042] backdrop-blur-sm shadow-md">
        <div
            class="pt-5 md:p-4 w-full mx-auto flex justify-between items-center flex-col space-y-5 md:flex-row md:space-y-0">
            <a href="/"><img src="/public/images/lanville_logo(1)_nobg.png" alt="Logo" class="w-96"></a>
            <nav class="relative w-full md:w-fit">
                <!-- Mobile hamburger button -->
                <button @click="isMenuOpen = !isMenuOpen"
                    class="md:hidden flex flex-col justify-center items-center w-8 h-8 mx-auto mb-4"
                    aria-label="Toggle menu">
                    <span class="block w-6 h-0.5 bg-gray-600 mb-1 transition-transform"
                        :class="{ 'rotate-45 translate-y-2': isMenuOpen }"></span>
                    <span class="block w-6 h-0.5 bg-gray-600 mb-1 transition-opacity"
                        :class="{ 'opacity-0': isMenuOpen }"></span>
                    <span class="block w-6 h-0.5 bg-gray-600 transition-transform"
                        :class="{ '-rotate-45 -translate-y-[4px]': isMenuOpen }"></span>
                </button>

                <!-- Desktop menu -->
                <ul
                    class="hidden md:flex gap-10 justify-center text-md md:text-xl py-2 text-xl font-normal text-white tracking-widest">
                    <li
                        class="*:p-3 *:w-full *:text-center *:block *:relative *:transition-all *:duration-300 **:after:content-[''] **:after:absolute **:after:bottom-0 **:after:left-0 **:after:w-0 **:after:h-0.5 **:after:bg-current **:after:transition-all **:after:duration-300 **:hover:after:w-full ">
                        <Link to="/">Home</Link>
                    </li>
                    <li
                        class="*:p-3 *:w-full *:text-center *:block *:relative *:transition-all *:duration-300 **:after:content-[''] **:after:absolute **:after:bottom-0 **:after:left-0 **:after:w-0 **:after:h-0.5 **:after:bg-current **:after:transition-all **:after:duration-300 **:hover:after:w-full">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li
                        class="*:p-3 *:w-full *:text-center *:block *:relative *:transition-all *:duration-300 **:after:content-[''] **:after:absolute **:after:bottom-0 **:after:left-0 **:after:w-0 **:after:h-0.5 **:after:bg-current **:after:transition-all **:after:duration-300 **:hover:after:w-full">
                        <Link to="">Programs</Link>
                    </li>
                    <li
                        class="*:p-3 *:w-full *:text-center *:block *:relative *:transition-all *:duration-300 **:after:content-[''] **:after:absolute **:after:bottom-0 **:after:left-0 **:after:w-0 **:after:h-0.5 **:after:bg-current **:after:transition-all **:after:duration-300 **:hover:after:w-full">
                        <Link to="">Contact Us</Link>
                    </li>
                </ul>

                <!-- Mobile menu -->
                <ul v-show="isMenuOpen"
                    class="md:hidden flex flex-col space-y-4 bg-white border-t border-gray-200 absolute top-full left-0 right-0 z-50 shadow-lg">
                    <li><a href="/" class="block p-3 text-center hover:bg-[#541517] hover:text-white transition-colors"
                            @click="isMenuOpen = false">Home</a></li>
                    <li><a href="/about"
                            class="block p-3 text-center hover:bg-[#541517] hover:text-white transition-colors"
                            @click="isMenuOpen = false">About Us</a></li>
                    <li><a href="" class="block p-3 text-center hover:bg-[#541517] hover:text-white transition-colors"
                            @click="isMenuOpen = false">Programs</a></li>
                    <li><a href="" class="block p-3 text-center hover:bg-[#541517] hover:text-white transition-colors"
                            @click="isMenuOpen = false">Contact Us</a></li>
                </ul>
            </nav>
        </div>


    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import logoName1 from '@/assets/images/logo-name1.png';
import { MapPinIcon } from '@heroicons/vue/24/solid'
import { Icon } from '@iconify/vue';

const isMenuOpen = ref(false);
const title: string = "Lanville Academy";
</script>