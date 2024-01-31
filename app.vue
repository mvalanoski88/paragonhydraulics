<template>
    <Nav />
    <NuxtPage />
    <Footer />
</template>

<script setup>

useHead({
  link: [
    {
      href: "https://s3.amazonaws.com/assets.paragonhydraulics.com/other/Bebas.ttf",
      rel: 'preload',
      as: 'font',
      type: "font/ttf",
      crossorigin: true

    },
  ],
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
  title: 'Paragon Hydraulics',
  ogTitle: 'Paragon Hydraulics',
  description: 'Paragon Hydraulics LLC comprises a dedicated team of exceptionally skilled and motivated professionals boasting a collective experience of over 50 years in ship repair. Our team actively contributes to various programs for the Navy, Army, Coast Guard, MSC, and commercial industries.',
  ogDescription: 'Paragon Hydraulics LLC comprises a dedicated team of exceptionally skilled and motivated professionals boasting a collective experience of over 50 years in ship repair. Our team actively contributes to various programs for the Navy, Army, Coast Guard, MSC, and commercial industries.',
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