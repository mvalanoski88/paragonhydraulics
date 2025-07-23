<template>
    <section :id="sectionId">
      <div class="container">
        <div v-if="pageTitle" class="row flex-column flex-md-row align-items-center">
          <div class="col-12 col-md-6 text-center text-md-start p-3 mb-2 mb-lg-0">
            <h1>{{ pageTitle }}</h1>
          </div>
          <div class="col-12 col-md-6 p-0">
            <h2>{{ pageHeading }}</h2>
          </div>
        </div>
        <div v-else class="row">
          <div class="col-12 text-center z-3">
              <h1 class="home-hero-text">{{ pageHeading }}</h1>
              <CtaButton class="mt-3 btn text-uppercase" :link="link" :text="text" />
          </div>
          <!--
          <div class="z-2" id="heroOverlay"></div>
          <video autoplay muted loop>
            <source src="/container_hero_compressed.mp4" type="video/mp4">
          </video>
          -->
        </div>
      </div>
    </section>
  </template>
  
<script>
  import CtaButton from './CtaButton.vue';

  export default {
    name: 'pagehero',
    components: {CtaButton},
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
video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  margin: 0;
  padding: 0;
  object-fit: cover;
}
</style>