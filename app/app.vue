<template>
    <Nav />
    <NuxtPage />
    <Footer />
</template>

<script setup>

import { provide } from 'vue';

provide('address', '3809 Cook Blvd., Chesapeake, VA 23323')

useHead({
  script: [
    {
      async: true,
      src: "https://www.googletagmanager.com/gtag/js?id=G-SBLQH60YKN",
    },
    { children: "window.dataLayer = window.dataLayer || [];\n" +
        "function gtag(){dataLayer.push(arguments);}\n" +
        "gtag('js', new Date());\n" +
        "\n" +
        "gtag('config', 'G-SBLQH60YKN');"
    },
  ]
})

useSeoMeta({
  ogImage: 'https://dpiilk2o4fzzt.cloudfront.net/img/phogimage.jpg',
})

</script>
<style>
  .page-enter-from,
  .page-leave-to {
    transition: all 0.3s ease-out;
    opacity: 0;
    filter: blur(2rem);
  }
</style>
