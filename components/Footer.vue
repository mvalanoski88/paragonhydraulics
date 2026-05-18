<template>
  <footer class="p-4" style="background-color:#d3d3d3;">
    
    <div class="w-full">
      <div class="flex flex-col md:flex-row justify-between m-0">

        <!-- Logos -->
        <div class="w-full md:w-1/3">
          <div class="w-full flex items-center justify-center md:justify-start">

            <NuxtLink to="/">
              <img
                :src="`${config.public.awsUrl}phlogo_black.webp`"
                width="175"
                alt="Paragon Hydraulics Logo"
              />
            </NuxtLink>

            <img
              class="mx-0 md:mx-2"
              :src="`${config.public.awsUrl}vsralogo_bw.webp`"
              width="110"
              alt="VSRA Logo"
            />

          </div>
        </div>

        <!-- Footer text -->
        <div class="w-full md:w-5/12 lg:w-2/3 flex items-center justify-center md:justify-end p-0 m-0">
          
          <div class="flex flex-wrap footer-text uppercase">

            <div class="flex p-0 justify-center lg:justify-end w-full">
              <span>Iso 9001-2015 compliant</span>
            </div>

            <div class="flex p-0 justify-center lg:justify-end w-full">
              <span>
                <a
                  class="no-underline"
                  :href="!isDesktopOrTablet ? 'tel:757-973-3773' : null"
                >
                  757-973-3773
                </a>
                |
                <a
                  class="no-underline"
                  href="https://maps.app.goo.gl/HDFT6u3Lu4PESYWZA"
                >
                  711 falcon ave, chesapeake va, 23324
                </a>
              </span>
            </div>

            <div class="flex flex-col md:flex-row p-0 w-full m-0">
              <div class="flex p-0 items-center justify-center lg:justify-end w-full">
                <Icon class="text-2xl" icon="ic:twotone-build-circle" />
                <span>Built & Managed by&nbsp;</span>
                <a class="underline"
                  href="https://oceanfrontcreative.com/?utm_source=ParagonHydraulics&utm_medium=referral"
                  target="_blank"
                >
                  Oceanfront Creative
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>

  </footer>
</template>
<script setup>
import { Icon } from '@iconify/vue';

const config = useRuntimeConfig();
const { isDesktopOrTablet } = useDevice()

</script>
<style lang="scss" scoped>
div.footer-text {
   @media (max-width:1500px) and (min-width:760x) {
      text-align: right;
    }
    @media (max-width:500px) {
      text-align: center !important;
      flex-direction: column;
    }
}
</style>