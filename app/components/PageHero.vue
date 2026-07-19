<template>
    <section :id="sectionId">
      <div v-if="pageTitle" class="flex flex-col md:flex-row items-center text-center">
        <div class="basis-full lg:basis-1/3 text-center md:text-start p-3 mb-2 lg:mb-0">
          <h1>{{ pageTitle }}</h1>
        </div>
        <div class="basis-full lg:basis-2/3 p-0">
          <h2>{{ pageHeading }}</h2>
        </div>
      </div>
      <div v-else class="flex">
        <div class="text-center z-3">
            <h1 class="home-hero-text mb-10 lg:mb-8">{{ pageHeading }}</h1>
            <a class="btn py-3 lg:py-6 px-10 lg:px-14 uppercase font-bold" :href="link" :id="`${link}Cta`">{{ text }}</a>
        </div>
        <!--
        <div class="z-2" id="heroOverlay"></div>
        <video autoplay muted loop>
          <source src="/container_hero_compressed.mp4" type="video/mp4">
        </video>
        -->
      </div>
    </section>
  </template>
  
<script>
  export default {
    name: 'pagehero',
    props: {
        link:{
            type: String,
        }, 
        text:{
            type: String,
        },
        pageTitle: {
            type: String,
            required: false,
        },
        pageHeading: {
            type: String,
            required: true,
        },
        sectionId: {
            type: String,
            required: true
        }
    },
  };
</script>
<style lang="scss" scoped>
#heroOverlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.574);
}
</style>