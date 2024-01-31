<template>
<footer style="background-color: #d3d3d3;" class="p-4">
   <div class="w-100">
      <div class="row d-flex flex-column flex-md-row m-0">
         <div class="col-12 col-md-4">
            <div class="row">
               <div class="col-12 d-flex d-lg-block align-items-center justify-content-center justify-content-md-start">
                    <NuxtLink to="/"><img src="https://s3.amazonaws.com/assets.paragonhydraulics.com/img/phlogo_black.png" width="175" alt="Paragon Hydraulics Logo"/></NuxtLink>
                    <img class="mx-0 mx-md-2" src="https://s3.amazonaws.com/assets.paragonhydraulics.com/img/vsralogo_bw.png" width="110" alt="VSRA Logo" />
                </div>
            </div>
         </div>
         <div class="col-12 col-md-8 d-flex align-items-center justify-content-center justify-content-md-end p-0">
            <span class="d-flex footer-text text-uppercase mx-5">Iso 9001-2015 compliant | 757-973-3773 |711 falcon ave, chesapeake va, 23324</span>
         </div>
      </div>
   </div>
</footer>
</template>
<script setup>

</script>
<style lang="scss" scoped>
span.footer-text {
   @media (max-width:1500px) and (min-width:760x) {
      text-align: right;
    }
    @media (max-width:500px) {
      text-align: center;
    }
}
</style>