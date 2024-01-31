<template>
    <main>
        <section id="contactus">
            <div class="d-flex w-100 align-items-center justify-content-center">
                <div class="row w-100 flex-column flex-md-row align-items-center">
                    <div class="col-12 col-md-5 text-center text-md-start p-0">
                        <h2>CONTACT US</h2>
                    </div>
                    <div class="d-flex flex-column col-12 col-md-7 p-0 mt-4 mt-md-0">
                        <div class="row">
                            <div class="d-flex align-items-center p-0">
                                <p class="text-uppercase text-align-left">
                                    <Icon icon="zondicons:location" />711 falcon ave | chesapeake va, 23324
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="d-flex align-items-center p-0">
                                <p class="text-uppercase">
                                    <Icon icon="tabler:mail-up" /><a href="mailto:rfq@paragonhydraulics.com?subject=RFQ Request">rfq@paragonhydraulics.com</a>
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="d-flex align-items-center p-0">
                                <p v-if="viewportWidth > 500" class="text-uppercase"><Icon icon="ion:call-sharp" />757-973-3773</p>
                                <p v-else class="text-uppercase"><Icon icon="tabler:phone-call" /><a href="tel:757-973-3773">757-973-3773</a></p>
                            </div>
                        </div>
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
import { Icon } from '@iconify/vue';

</script>
<style lang="scss" scoped>

svg {
    font-size: 2.5rem;

    @media (max-width:500px) {
            font-size: 1.75rem;
        }
}

p {
    padding: 0.5rem;
}

section#contactForm {
    background-color: #6F8695;
}

</style>