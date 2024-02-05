<template>
    <section :id="sectionId">
      <div class="d-flex align-items-center">
        <div v-if="pageTitle" class="row flex-column flex-md-row align-items-center">
          <div class="col-12 col-md-4 text-center text-md-start p-3">
            <h1>{{ pageTitle }}</h1>
          </div>
          <div class="col-12 col-md-8 p-0">
            <h2>{{ pageHeading }}</h2>
          </div>
        </div>
        <div v-else class="text-center">
            <h1 class="home-hero-text">{{ pageHeading }}</h1>
            <CtaButton class="btn text-uppercase" :link="link" :text="text" />
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