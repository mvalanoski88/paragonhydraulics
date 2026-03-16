<template>
    <main>
        <section class="flex flex-col" id="emailSuccess">
            <h2 class="text-center">thank you for your request. our team will be in contact.</h2>
            <p class="text-black font-bold text-lg lg:text-xl">You will be redirected shortly.</p>
        </section>
    </main>
</template>

<script setup>
import { useRuntimeConfig  } from '#app'
import { onMounted } from 'vue';

const config = useRuntimeConfig();
const route = useRoute();

onMounted(async () => {
      setTimeout(() => {
        navigateTo('/', { replace: true })
      }, 5000)
})

useHead({
    link: [{rel: 'canonical', href: `${config.public.siteUrl}${route.path}`,},],
}),

useSeoMeta({
  title: 'Paragon Hydraulics | RFQ Success',
  robots: 'noindex, nofollow',
})
</script>

<style lang="scss" scoped>

</style>