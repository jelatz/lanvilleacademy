<template>
  <div class="min-h-dvh w-full relative">
    <Swiper :slides-per-view="1" :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :modules="[Navigation, Pagination, Autoplay]" :loop="true" :pagination="{ clickable: true }" class="min-h-dvh">
      <SwiperSlide>
        <img src="/images/hero-1.webp" alt="image 1" class="w-full h-dvh object-cover" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/images/hero-2.png" alt="image 2" class="w-full h-dvh object-cover" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/images/hero-3.jpg" alt="image 3" class="w-full h-dvh object-cover" />
      </SwiperSlide>
    </Swiper>

    <div class="absolute inset-0 bg-black/50 z-20"></div>


    <div class="absolute inset-0 flex items-center justify-center  z-30">
      <div class="rounded-r-xl p-8 max-w-3xl">
        <div class="text-center text-white">
          <div class="text-xl md:text-6xl font-bold mb-4 drop-shadow-lg">Empowering Students Through <span
              class="block">Quality Online Tutorials</span></div>
          <p class="text-md md:text-2xl mb-6 drop-shadow-lg">Simple, guided online lessons designed to help
            you
            grow—at your pace.</p>
          <a href="#"
            class="bg-[#541517] hover:bg-[#3e0f11] text-white font-semibold text-lg py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 drop-shadow-lg">Explore
            Programs</a>
        </div>
      </div>
    </div>
  </div>
  <div class="max-full mx-auto">
    <!-- OUR POPULAR PROGRAMS SECTION-->
    <Section variant="default" padding="xl">
      <div class="container">
        <h1 class="text-center text-4xl font-bold mb-10">
          Our Popular Programs
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          <Card v-for="program in popularPrograms" :key="program.id" :title="program.title" :imageUrl="program.imageUrl"
            :imageAlt="program.imageAlt" imageHeight="h-64" shadow="xl" class="min-h-110" :hover="true">
            <p class="line-clamp-6">
              {{ program.description }}
            </p>

            <button
              class="block ml-auto px-3 py-2 mt-4 bg-[#541517] text-white rounded hover:bg-[#3e0f11] transition duration-300 cursor-pointer"
              @click="handleSeeMore(program.id)">
              See more
            </button>
          </Card>
        </div>
      </div>
    </Section>

    <!-- HOW IT WORKS -->
    <Section variant="secondary" padding="xl">
      <div class="container">
        <h1 class="text-center text-4xl font-bold mb-10">
          Choose a Subject to Learn
        </h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure alias ad maxime natus consequatur officia
          adipisci magni, iusto error molestias laboriosam similique itaque! Adipisci, molestiae. Dolorem ea voluptatem
          alias minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad odio illum ipsum animi
          voluptatem excepturi, tempore cum maxime a aut consequuntur! Sequi molestias enim amet harum nemo, doloremque
          voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quos cupiditate libero. Magni
          fuga saepe nam. Hic atque quis aut at rerum corrupti? Voluptas itaque rem saepe, sint dolor accusamus!
          Consectetur, molestias labore dolores eligendi sapiente pariatur quas alias ea quaerat explicabo inventore
          deleniti aliquam mollitia natus maiores sed vel? Sunt vero aspernatur nesciunt ipsum quod libero laudantium ex
          laboriosam!</p>


      </div>
    </Section>

    <!-- WHY CHOOSE US -->
    <Section variant="default" padding="xl">
      <div class="container">
        <h1 class="text-center text-4xl font-bold mb-20">
          Why Choose Us
        </h1>
        <div class="flex flex-col md:flex-row justify-center gap-40">
          <img src="/public/images/img2.png" alt="img1">
          <img src="/public/images/img2.png" alt="img2">
          <img src="/public/images/img3.png" alt="img3">
        </div>
      </div>
    </Section>

    <!-- TESTIMONIALS -->
    <Section variant="default" padding="xl">
      <div class="container">
        <h1 class="text-center text-4xl font-bold mb-10">
          Testimonials
        </h1>
      </div>
    </Section>

    <!-- LATEST BLOG POSTS -->
    <Section variant="default" padding="xl">
      <div class="container">
        <h1 class="text-center text-4xl font-bold mb-10">
          Latest Blog Posts
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          <Card v-for="BlogPost in latestBlogPosts" :key="BlogPost.id" :title="BlogPost.title"
            :imageUrl="BlogPost.imageUrl" :imageAlt="BlogPost.imageAlt" imageHeight="h-64" shadow="xl" class="min-h-110"
            :hover="true">
            <p class="line-clamp-6">
              {{ BlogPost.description }}
            </p>

            <button
              class="block ml-auto px-3 py-2 mt-4 bg-[#541517] text-white rounded hover:bg-[#3e0f11] transition duration-300 cursor-pointer"
              @click="handleSeeMore(BlogPost.id)">
              See more
            </button>
          </Card>
        </div>
      </div>
    </Section>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Hero from "@/components/Hero.vue";
import Section from "@/components/Section.vue";
import Card from "@/components/Card.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Program {
  id: number;
  title: string;
  imageUrl: string;
  imageAlt: string;
  description: string;
}

interface BlogPost {
  id: number;
  title: string;
  imageUrl: string;
  imageAlt: string;
  description: string;
}

const popularPrograms = ref<Program[]>([
  {
    id: 1,
    title: "Beautiful Landscape",
    imageUrl: "/images/hero-2.png",
    imageAlt: "Landscape photo",
    description: "Explore the beauty of nature. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sunt, at, soluta fugiat sit veniam incidunt porro laborum, dolore repellendus corrupti saepe quaerat cupiditate iure dolorum accusamus dolorem iste sed. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis repudiandae beatae ipsam. Porro fugiat ea illum necessitatibus odio sed? Omnis commodi suscipit, nostrum quisquam perspiciatis eos. Culpa expedita ipsam perferendis?"
  },
  {
    id: 2,
    title: "Beautiful Landscape",
    imageUrl: "/images/hero-2.png",
    imageAlt: "Landscape photo",
    description: "Explore the beauty of nature. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sunt, at, soluta fugiat sit veniam incidunt porro laborum, dolore repellendus corrupti saepe quaerat cupiditate iure dolorum accusamus dolorem iste sed. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis repudiandae beatae ipsam. Porro fugiat ea illum necessitatibus odio sed? Omnis commodi suscipit, nostrum quisquam perspiciatis eos. Culpa expedita ipsam perferendis?"
  },
  {
    id: 3,
    title: "Beautiful Landscape",
    imageUrl: "/images/hero-2.png",
    imageAlt: "Landscape photo",
    description: "Explore the beauty of nature. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sunt, at, soluta fugiat sit veniam incidunt porro laborum, dolore repellendus corrupti saepe quaerat cupiditate iure dolorum accusamus dolorem iste sed. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis repudiandae beatae ipsam. Porro fugiat ea illum necessitatibus odio sed? Omnis commodi suscipit, nostrum quisquam perspiciatis eos. Culpa expedita ipsam perferendis?"
  }
]);

const handleSeeMore = (programId: number) => {
  // Navigate to program detail or show modal
  console.log(`Viewing program ${programId}`);
  // Example: router.push(`/programs/${programId}`)
};

const latestBlogPosts = ref<BlogPost[]>([
  {
    id: 1,
    title: "Latest in Tech",
    imageUrl: "/images/hero-3.jpg",
    imageAlt: "Tech photo",
    description: "Stay updated with the latest trends in technology. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sunt, at, soluta fugiat sit veniam incidunt porro laborum, dolore repellendus corrupti saepe quaerat cupiditate iure dolorum accusamus dolorem iste sed."
  },
  {
    id: 2,
    title: "Latest in Tech",
    imageUrl: "/images/hero-3.jpg",
    imageAlt: "Tech photo",
    description: "Stay updated with the latest trends in technology. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sunt, at, soluta fugiat sit veniam incidunt porro laborum, dolore repellendus corrupti saepe quaerat cupiditate iure dolorum accusamus dolorem iste sed."
  },
  {
    id: 3,
    title: "Latest in Tech",
    imageUrl: "/images/hero-3.jpg",
    imageAlt: "Tech photo",
    description: "Stay updated with the latest trends in technology. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sunt, at, soluta fugiat sit veniam incidunt porro laborum, dolore repellendus corrupti saepe quaerat cupiditate iure dolorum accusamus dolorem iste sed."
  }
]);
</script>

<style scoped>
.container {
  max-width: 80rem;
  margin: 0 auto;
}
</style>
