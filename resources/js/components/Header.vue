<template>
    <header class="w-full md:px-3 shadow-md bg-white">
        <div class="p-4 w-full md:max-w-384 mx-auto flex justify-between items-center">
            <a href="/"><img src="/images/logo.png" alt="Logo" class="w-48 md:w-64"></a>
            <button class="bg-primary px-6 py-2 rounded text-white">Get Started</button>
        </div>
        <nav class="relative w-full">
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
                class="hidden md:flex gap-10 w-full justify-center text-md md:text-xl py-2 text-xl text-black md:justify-center md:items-center font-normal tracking-widest *:hover:text-accent">
                <li class="*:p-3 *:w-full *:text-center *:block *:relative *:transition-all *:duration-300 **:after:content-[''] **:after:absolute **:after:bottom-0 **:after:left-0 **:after:w-0 **:after:h-0.5 **:after:bg-current **:after:transition-all **:after:duration-300 **:hover:after:w-full "
                    :class="isActive('Home') ? 'text-accent underline' : 'text-black'">
                    <Link :href="route('home')">Home</Link>
                </li>
                <li class="*:p-3 *:w-full *:text-center *:block *:relative *:transition-all *:duration-300 **:after:content-[''] **:after:absolute **:after:bottom-0 **:after:left-0 **:after:w-0 **:after:h-0.5 **:after:bg-current **:after:transition-all **:after:duration-300 **:hover:after:w-full"
                    :class="isActive('About') ? 'text-accent underline' : 'text-black'">
                    <Link :href="route('about')">About Us</Link>
                </li>
                <li class="*:p-3 *:w-full *:text-center *:block *:relative *:transition-all *:duration-300 **:after:content-[''] **:after:absolute **:after:bottom-0 **:after:left-0 **:after:w-0 **:after:h-0.5 **:after:bg-current **:after:transition-all **:after:duration-300 **:hover:after:w-full"
                    :class="isActive('Services') ? 'text-accent underline' : 'text-black'">
                    <Link :href="route('services')">Services</Link>
                </li>
                <li class="*:p-3 *:w-full *:text-center *:block *:relative *:transition-all *:duration-300 **:after:content-[''] **:after:absolute **:after:bottom-0 **:after:left-0 **:after:w-0 **:after:h-0.5 **:after:bg-current **:after:transition-all **:after:duration-300 **:hover:after:w-full"
                    :class="isActive('Subjects') ? 'text-accent underline' : 'text-black'">
                    <Link to="">Subjects</Link>
                </li>
                <li class="*:p-3 *:w-full *:text-center *:block *:relative *:transition-all *:duration-300 **:after:content-[''] **:after:absolute **:after:bottom-0 **:after:left-0 **:after:w-0 **:after:h-0.5 **:after:bg-current **:after:transition-all **:after:duration-300 **:hover:after:w-full"
                    :class="isActive('Contact') ? 'text-accent underline' : 'text-black'">
                    <Link to="">Contact Us</Link>
                </li>
            </ul>

            <!-- Mobile menu -->

            <ul v-show="isMenuOpen"
                class="md:hidden flex flex-col space-y-4 bg-[#1B1B1A] text-white border-t border-gray-200 absolute top-full left-0 right-0 z-50 shadow-lg">
                <li><a :href="route('home')"
                        class="block p-3 text-center hover:bg-[#541517] hover:text-white transition-colors"
                        :class="isActive('Home') ? 'bg-accent' : 'text-white'" @click="isMenuOpen = false">Home</a></li>
                <li><a :href="route('about')"
                        class="block p-3 text-center hover:bg-[#541517] hover:text-white transition-colors"
                        :class="isActive('About') ? 'bg-accent' : 'text-white'" @click="isMenuOpen = false">About Us</a>
                </li>
                <li><a :href="route('services')"
                        class="block p-3 text-center hover:bg-[#541517] hover:text-white transition-colors"
                        :class="isActive('Services') ? 'bg-accent' : 'text-white'"
                        @click="isMenuOpen = false">Services</a></li>
                <li><a href="" class="block p-3 text-center hover:bg-[#541517] hover:text-white transition-colors"
                        :class="isActive('Subjects') ? 'bg-accent' : 'text-white'"
                        @click="isMenuOpen = false">Subjects</a></li>
                <li><a href="" class="block p-3 text-center hover:bg-[#541517] hover:text-white transition-colors"
                        :class="isActive('Contact') ? 'bg-accent' : 'text-white'" @click="isMenuOpen = false">Contact
                        Us</a></li>
            </ul>
        </nav>


    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Link, usePage } from '@inertiajs/vue3'

const page = usePage();

const isActive = (routeName: string) => {
    return page.component === routeName ? true : false;
}

const isMenuOpen = ref(false);
</script>