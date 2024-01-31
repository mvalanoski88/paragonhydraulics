<template>
    <main>
        <section id="services">
            <div class="d-flex align-items-center">
                <div class="row flex-column flex-md-row align-items-center">
                    <div class="col-12 col-md-4 text-center text-md-start p-3">
                        <h2>OUR SERVICES</h2>
                    </div>
                    <div class="col-12 col-md-8 p-0">
                        <h1>Paragon offers an extensive array of shipboard services, emphasizing expertise in hydraulic crane and deck equipment repair, installation, and technical representation</h1>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="p-0 m-0">
                <div class="row m-0 flex-column flex-md-row blue">
                    <div style="position: relative; min-height: 350px;" class="d-flex col-12 col-md-6 p-0 align-items-center">
                        <div class="blue m-5" style="position: relative;  z-index: 2;">
                            <p class="small-copy">While based in Virginia, our professional services have a global reach, catering to ports, bases, and shipyards worldwide.</p>
                        </div>
                        <div id="harborCrane" class="image-bg"></div>
                    </div>
                    <div class="col-12 col-md-6 align-self-center p-1">
                        <p>Paragon Hydraulics recognized a significant gap in technical oversight for shipboard cargo and boat handling equipment, leading to substantial inefficiencies and associated costs for the US Navy.</p>
                        <p>Our services extend to the installation and maintenance of cranes, cargo handling equipment, deck and huwe provide OEM Technical Representation for crane equipment and comprehensive solutions for the installation and repair of various shipboard mechanical systems.</p>
                        <p>With increasing threat of global conflict, the United States Navy must stay capable and ready to defend. Paragon Hydraulics assists in completing that mission the right way.</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="techServices">
            <div class="p-0 p-md-5 m-4">
                <div class="row">
                    <div class="col-12 d-flex flex-column align-items-center">
                        <SectionHeader heading="General technical services" :style="'light'" />
                        <div class="row mt-5">
                            <ul class="services-provided">
                                <li v-for="name in servicesProvided">
                                    {{ name.name }}
                                </li>
                            </ul>
                        </div>
                        <div class="row w-75 red">
                        <div class="col-12">
                            <div class="row mt-3">
                                <h4 class="text-center">who we provide services to</h4>
                            </div>
                            <div class="row mt-4">
                                <ul class="text-center">
                                    <li class="clients" v-for="name in serviceClients">
                                        {{ name.name }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script setup>
const serviceClients = [
                {name : "United States Navy"},
                {name : "Military Sealift Command"},
                {name : "Commercial Marine and Offshore"},
                {name : "NAVSEA"},
                {name : "MARMC"},
                {name : "United States Coast Guard"},
                {name : "SWARMC"},
                {name : "Ship Repair Contractor/Vendors"},
            ]
const servicesProvided = [
                {name : "Hydraulic crane and davit repair, removal, installation, and technical representative services"},
                {name : "Hydraulic crane preventative maintenance"},
                {name : "Hydraulic cylinder repair and testing"},
                {name : "Hydraulic door and ramp repair"},
                {name : "Cargo handling equipment repair (5y inspection)"},
                {name : "Pump and motor overhauls and alignments"},
                {name : "Mechanical equipment repair, removal, and installation"},
                {name : "Shipboard equipment inspections and operational testing"},
                {name : "Engineering services"},
                {name : "24/7 Emergency equipment repair globally"},
                {name : "Training programs"},
                {name : "009-90 support"},
                {name : "Operations support"},
                {name : "Remote technical support"},
                {name : "GFM Storage"},
                {name : "Hull and deck machinery"},
            ]

</script>
<style lang="scss" scoped>
ul {
    padding-inline: 3rem;
    columns: 3;
    @media (max-width:800px) {
        columns:2
    }
    @media (max-width:500px) {
        columns:1
    }

    li {
        margin: 0;
    }
    li.clients::marker {
        content: '' !important;
    }

    &.services-provided {
        text-align: center;
        list-style: inside;

        @media (max-width:500px) {
            text-align: left;
    }
    }
}
</style>