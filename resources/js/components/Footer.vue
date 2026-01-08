<template>
    <footer class="p-4 bg-[#1B1B1A]">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 max-w-384 mx-auto">
            <div>
                <img src="/images/logo-white.png" alt="logo" class="h-10 w-auto mb-4">
                <p class="text-md text-gray-500">Empowering learners worldwide with quality education and career
                    advancement opportunities.</p>
            </div>
            <div>
                <h1 class="font-bold mb-4 text-white">Platform</h1>
                <ul class="text-gray-500">
                    <li>Courses</li>
                    <li>Pricing</li>
                    <li>Certificates</li>
                </ul>
            </div>
            <div>
                <h1 class="font-bold mb-4 text-white">Company</h1>
                <ul class="text-gray-500">
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <h1 class="font-bold mb-4 text-white">Legal</h1>
                <ul class="text-gray-500">
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                    <li>Cookie Policy</li>
                </ul>
            </div>
        </div>
        <div
            class="border-t w-full max-w-384 mx-auto border-gray-600 flex flex-col text-white items-center pt-8 md:flex-row md:justify-between">
            <p class="mb-8">© {{ date }} Lanville Academy. All rights reserved.</p>
            <div class="flex gap-4">
                <a href="https://www.facebook.com/lanvilleacademy">
                    <Facebook />
                </a>
                <a href="https://www.linkedin.com/lanvilleacademy">
                    <Linkedin />
                </a>
                <a href="https://www.twitter.com/lanvilleacademy">
                    <Twitter />
                </a>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { Facebook, Linkedin, Twitter } from 'lucide-vue-next';
const title = "Lanville Academy";
const date = new Date().getFullYear();
</script>
