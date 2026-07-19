<template>
  <main>
    <PageHero
      sectionId="home"
      pageHeading="OEM Technical Representation for crane equipment and comprehensive solutions for shipboard mechanical systems"
      link="contactus"
      text="Contact Us"
    />

    <section>
      <div class="p-0 m-0 w-full">
        <div class="flex flex-col md:flex-row m-0 flex-wrap" style="background-color: rgba(0,0,0,0.85);">

          <div class="relative w-full md:w-7/12 self-center p-5 lg:p-8">
            <p class="text-xl lg:text-4xl my-5">
              Based in Chesapeake, Virginia, we are a veteran-owned firm dedicated to marine hydraulics repair.
              Our services extend to the installation and maintenance of cranes, cargo handling equipment,
              deck and hull machinery, and marine hydraulics.
            </p>

            <p class="text-xl lg:text-4xl my-5">
              Additionally, we provide OEM Technical Representation for crane equipment and comprehensive
              solutions for the installation and repair of various shipboard mechanical systems.
            </p>

            <div id="americanFlag" class="image-bg"></div>
          </div>

          <div class="relative w-full md:w-5/12 p-0" style="min-height:350px;">
            <div id="homeCrane" class="image-bg"></div>
          </div>

        </div>
      </div>
    </section>

    <section id="customers" class="flex justify-center">
      <div class="container m-0">
        <div class="flex flex-wrap p-4">
          <div class="w-full">

            <SectionHeader
              class="text-center"
              heading="Some of our customers"
              :style="'light'"
            />

            <div class="flex flex-wrap mt-0 md:mt-5">

              <div
                v-for="(logo, index) in logos"
                :key="index"
                class="flex justify-center mb-4 md:mb-0 w-1/2 md:w-1/4"
              >
                <img class="w-full lg:w-3/4" :src="getLogoSrc(logo)" :alt="logo.altText" />
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { useRuntimeConfig } from '#app';

const { isDesktopOrTablet } = useDevice()
const config = useRuntimeConfig();
const route = useRoute();

const logos = ref([
                {name : "usnavy", altText : "US Navy Logo"},
                {name : "uscoastguard", altText : "US Coast Guard Logo"},
                {name : "usmilitarysealifecommand", altText : "US Navy Marine Sealift Command Logo"},
                {name : "navsea", altText : "NAVSEA Logo"},
            ])
const getLogoSrc = (logo) => {
     return isDesktopOrTablet ? `${config.public.awsUrl}${logo.name}.png`
                         : `${config.public.awsUrl}${logo.name}.webp`;
}


useHead({
    link: [{rel: 'canonical', href: `${config.public.siteUrl}${route.path}`,},],
}),

useSeoMeta({
  title: 'Marine Hydraulics & Shipboard Crane Repair | Paragon Hydraulics',
  ogTitle: 'Marine Hydraulics & Shipboard Crane Repair | Paragon Hydraulics',
  description:
  'Paragon Hydraulics LLC is comprised of a dedicated team of exceptionally skilled and motivated professionals boasting a collective experience of over 50 years in ship repair. Our team actively contributes to various programs for the Navy, Army, Coast Guard, MSC, and commercial industries.',
  ogDescription: 'Paragon Hydraulics LLC is comprised of a dedicated team of exceptionally skilled and motivated professionals boasting a collective experience of over 50 years in ship repair. Our team actively contributes to various programs for the Navy, Army, Coast Guard, MSC, and commercial industries.'
})

</script>

<style lang="scss" scoped>

</style>