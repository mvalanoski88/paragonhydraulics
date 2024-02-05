<template>
    <main>
        <PageHero sectionId="home"
                  pageHeading="OEM Technical Representation for crane equipment and comprehensive solutions for shipboard mechanical systems"
                  link="contactus"
                  text="Contact Us"/>
        <section>
            <div class="p-0 m-0">
                <div class="row m-0 flex-column flex-md-row" style="background-color: rgba(0, 0, 0, 0.85);">
                    <div class="col-12 col-md-8 align-self-center p-1" style="position: relative;">
                        <p>Based in Chesapeake, Virginia, we are a veteran-owned firm dedicated to marine hydraulics repair.</p>
                        <p>Our services extend to the installation and maintenance of cranes, cargo handling equipment, deck and hull machinery, and marine hydraulics.</p>
                        <p>Additionally, we provide OEM Technical Representation for crane equipment and comprehensive solutions for the installation and repair of various shipboard mechanical systems.</p>
                        <div id="americanFlag" class="image-bg"></div>
                    </div>
                    <div style="position: relative; min-height: 350px;" class="col-12 col-md-4 p-0">
                        <div id="homeCrane" class="image-bg"></div>
                    </div>
                </div>
            </div>
        </section>
        <section id="customers" class="justify-content-center">
            <div class="container p-5 m-0">
                <div class="row">
                    <div class="col-12">
                        <SectionHeader class="text-center" heading="Some of our customers" :style="'light'" />
                        <div class="row mt-0 mt-md-5">
                            <div v-for="(logo, index) in logos" :key="index" class="d-flex justify-content-center mb-4 mb-md-0 col-6 col-md-3">
                                <img :src="getLogoSrc(logo)" :alt="logo.altText" />
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

const { isDesktopOrTablet } = useDevice()

const logos = ref([
                {name : "usnavy", altText : "US Navy Logo"},
                {name : "uscoastguard", altText : "US Coast Guard Logo"},
                {name : "usmilitarysealifecommand", altText : "US Navy Marine Sealift Command Logo"},
                {name : "navsea", altText : "NAVSEA Logo"},
            ])
const getLogoSrc = (logo) => {
     return isDesktopOrTablet ? `https://s3.amazonaws.com/assets.paragonhydraulics.com/img/${logo.name}.png`
                         : `https://s3.amazonaws.com/assets.paragonhydraulics.com/img/${logo.name}.webp`;
}

</script>

<style lang="scss" scoped>

</style>