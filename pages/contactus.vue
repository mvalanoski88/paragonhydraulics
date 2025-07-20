<template>
    <main>
        <section id="contactus">
            <div class="container mt-5 mt-lg-0">
                <div class="row flex-column flex-md-row align-items-center">
                    <div class="col-12 col-md-5 text-center text-md-start">
                        <h1>CONTACT US</h1>
                    </div>
                    <div class="col-12 col-md-7 p-0">
                        <div class="row">
                            <div class="col-1 d-flex align-items-centers">
                                <p class="text-uppercase text-align-left">
                                    <Icon icon="zondicons:location" />
                                </p>
                            </div>
                            <div class="col-11 d-flex align-items-centers">
                                <p class="text-uppercase text-align-left lh-sm">711 falcon ave | chesapeake va, 23324</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-1 d-flex align-items-center">
                                <p class="text-uppercase">
                                    <Icon icon="tabler:mail-up" />
                                </p>
                            </div>
                            <div class="col-11 d-flex align-items-center">
                                <p class="text-uppercase">
                                    <a href="mailto:rfq@paragonhydraulics.com?subject=RFQ Request">rfq@paragonhydraulics.com</a>
                                </p>
                            </div>
                        </div>
                        <div v-if="isDesktopOrTablet" class="row">
                            <div class="col-1 d-flex align-items-center">
                                <p class="text-uppercase">
                                    <Icon icon="ion:call-sharp" />
                                </p>
                            </div>
                            <div class="col-11 d-flex align-items-center">
                                <p class="text-uppercase">
                                    757-937-3773
                                </p>
                            </div>
                        </div>
                        <div v-else class="row">
                            <div class="col-1 d-flex align-items-center">
                                <p class="text-uppercase">
                                    <Icon icon="tabler:phone-call" />
                                </p>
                            </div>
                            <div class="col-11 d-flex align-items-center">
                                <p class="text-uppercase">
                                    <a href="tel:757-937-3773">757-937-3773</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="iframeLoaded" class="row mt-3 mt-lg-4">
                    <div class="col-12 d-flex justify-content-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.518442376843!2d-76.2819904!3d36.7821183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89baa361505b8a3b%3A0x5183a2f8d4d3755!2sParagon%20Hydraulics!5e0!3m2!1sen!2sus!4v1752897307929!5m2!1sen!2sus"
                                :width="iframeWidth"
                                :height="iframeHeight"
                                allowfullscreen=""
                                @load="iframeLoaded"
                                referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
                <div v-else class="row">
                    <div class="col-12 d-flex justify-content-center">
                        <p class="text-center">Loading map...</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="contactForm" class="justify-content-center">
            <div class="contact-us-form m-0 mb-5 p-0 mt-4 mt-md-5">
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

function iframeLoaded() {
  loaded.value = true
}
const { isDesktopOrTablet } = useDevice()

const iframeWidth = computed(() => {
  return isDesktopOrTablet ? 1800 : 300
})

const iframeHeight = computed(() => {
  return isDesktopOrTablet ? 350 : 250
})

</script>
<style lang="scss" scoped>

svg {
    font-size: 2.5rem;

    @media (max-width:800px) {
            font-size: 1.55rem;
        }
}

p {
    padding: 0.5rem;
}

section#contactForm {
    background-color: #6F8695;
}

</style>