<template>
    <main>
        <section id="contactus">
            <div class="container mt-5 lg:mt-0">
                <div class="flex flex-col lg:flex-row items-start lg:items-center content-start flex-wrap">
                    <div class="basis-full lg:basis-2/5 text-center lg:text-left">
                        <h1>CONTACT US</h1>
                    </div>
                    <div class="basis-full lg:basis-3/5 flex flex-col gap-4 p-0">
                        <div class="flex flex-wrap items-center">
                            <div class="w-1/12 flex items-center">
                                <p class="uppercase text-left">
                                    <Icon icon="zondicons:location" />
                                </p>
                            </div>
                            <div class="w-11/12 flex items-center">
                                <p class="text-2xl lg:text-4xl mb-2 lg:mb-4 uppercase text-left leading-snug">711 falcon ave | chesapeake va, 23324</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap items-center">
                            <div class="w-1/12 flex items-center">
                                <p class="uppercase">
                                    <Icon icon="tabler:mail-up" />
                                </p>
                            </div>
                            <div class="w-11/12 flex items-center">
                                <a class="text-2xl lg:text-4xl mb-2 lg:mb-4 uppercase text-left leading-snug" href="mailto:rfq@paragonhydraulics.com?subject=RFQ Request">rfq@paragonhydraulics.com</a>
                            </div>
                        </div>
                        <div v-if="isDesktopOrTablet" class="flex flex-wrap items-center">
                            <div class="w-1/12 flex items-center">
                                <p class="uppercase">
                                    <Icon icon="ion:call-sharp" />
                                </p>
                            </div>
                            <div class="w-11/12 flex items-center">
                                <p class="text-2xl lg:text-4xl mb-2 lg:mb-4 uppercase text-left leading-snug">
                                    757-937-3773
                                </p>
                            </div>
                        </div>
                        <div v-else class="flex flex-wrap items-center">
                            <div class="w-1/12 flex items-center">
                                <p class="uppercase">
                                    <Icon icon="tabler:phone-call" />
                                </p>
                            </div>
                            <div class="w-11/12 flex items-center">
                                <a class="text-2xl lg:text-4xl mb-2 lg:mb-4 uppercase text-left leading-snug" id="mobilePhone" href="tel:757-937-3773">757-937-3773</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="iframeLoaded" class="flex flex-wrap mt-3 lg:mt-4">
                    <div class="w-full flex justify-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.518442376843!2d-76.2819904!3d36.7821183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89baa361505b8a3b%3A0x5183a2f8d4d3755!2sParagon%20Hydraulics!5e0!3m2!1sen!2sus!4v1752897307929!5m2!1sen!2sus"
                                :width="iframeWidth"
                                :height="iframeHeight"
                                allowfullscreen=""
                                @load="iframeLoaded"
                                referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
                <div v-else class="flex flex-wrap">
                    <div class="w-full flex justify-center">
                        <p class="text-center">Loading map...</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="contactForm" class="flex justify-center">
            <div class="contact-us-form m-0 mb-5 p-0 mt-4 md:mt-5">
                <SectionHeader class="mb-4" heading="Send Us an RFQ" :style="'dark'" />
                <ContactForm />
            </div>
        </section>
    </main>
</template>
<script setup>
import {ref, computed} from 'vue'
import { Icon } from '@iconify/vue';

const loaded = ref(false)
const config = useRuntimeConfig();
const route = useRoute();

function iframeLoaded() {
  loaded.value = true
}
const { isDesktopOrTablet } = useDevice()

const iframeWidth = computed(() => {
  return isDesktopOrTablet ? 1800 : 400
})

const iframeHeight = computed(() => {
  return isDesktopOrTablet ? 350 : 250
})

useHead({
    link: [{rel: 'canonical', href: `${config.public.siteUrl}${route.path}`,},],
}),

useSeoMeta({
  title: 'Request Marine Hydraulic & Shipboard Service | Paragon Hydraulics',
  ogTitle: 'Request Marine Hydraulic & Shipboard Service | Paragon Hydraulics',
  description: 'Paragon offers an extensive array of shipboard services, emphasizing expertise in hydraulic crane and deck equipment repair, installation, and technical representation.',
  ogDescription: 'Paragon offers an extensive array of shipboard services, emphasizing expertise in hydraulic crane and deck equipment repair, installation, and technical representation.',
})

</script>
<style lang="scss" scoped>

</style>