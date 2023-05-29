<template>
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-8">
      <div class="w-full mb-6 lg:mb-0">
        <h1 class="sm:text-4xl text-5xl font-bold font-medium title-font mb-2 text-gray-900">{{ title }}</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
    </div>
    <article class="relative">
      <div class="py-8 md:px-4 lg:px-10 lg:w-1/2 inline-block">
        <slot />
      </div>
      <img class="object-contain w-full lg:w-1/2 inline-block absolute top-0 -z-10 right-0 md:relative max-h-[600px]" :src="img" alt="">
    </article>
  </div>
</template>

<script setup>
import joinUs from "@/assets/imgs/join-us.png";
import {ref} from "vue";
defineProps({
  title: {
    type: String,
    default: "联系我们"
  },
});
const img = ref(joinUs);
</script>