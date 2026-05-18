<template>
    <main>
        <PageHero sectionId="services"
                pageTitle="Our Services"
                pageHeading="Paragon offers an extensive array of shipboard services, emphasizing expertise in hydraulic crane and deck equipment repair, installation, and technical representation" />
        <section>
            <div class="p-0 m-0">
                <div class="flex flex-col md:flex-row flex-wrap m-0 blue">
                    <div style="min-height: 350px;" class="relative flex w-full md:w-1/2 p-0 items-center order-2 lg:order-1">
                        <div class="blue m-3 lg:m-12 relative z-[2]">
                            <p class="text-base lg:text-lg p-8 text-center italic">While based in Virginia, our professional services have a global reach, catering to ports, bases, and shipyards worldwide.</p>
                        </div>
                        <div id="harborCrane" class="image-bg"></div>
                    </div>
                    <div class="w-full md:w-1/2 self-center p-4 lg:p-5 order-1 lg:order-2">
                        <p class="text-xl lg:text-3xl my-4 lg:my-6">Paragon Hydraulics recognized a significant gap in technical oversight for shipboard cargo and boat handling equipment, leading to substantial inefficiencies and associated costs for the US Navy.</p>
                        <p class="text-xl lg:text-3xl my-4 lg:my-6">Our services extend to the installation and maintenance of cranes, cargo handling equipment, deck and huwe provide OEM Technical Representation for crane equipment and comprehensive solutions for the installation and repair of various shipboard mechanical systems.</p>
                        <p class="text-xl lg:text-3xl my-4 lg:my-6">With increasing threat of global conflict, the United States Navy must stay capable and ready to defend. Paragon Hydraulics assists in completing that mission the right way.</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="techServices" class="flex justify-center">
            <div class="pt-6 lg:pb-4">
                <div class="flex flex-wrap">
                    <div class="w-full flex flex-col items-center">
                        <SectionHeader heading="General technical services" :style="'light'" />
                        <div class="flex flex-wrap lg:w-3/4 p-3 mt-3 lg:mt-5 lg:justify-center">
                            <ul class="flex-1 lg:flex lg:flex-wrap services-provided">
                                <li v-for="service in servicesProvided" class="flex lg:items-start lg:w-1/2 mb-2 lg:mb-4 items-center text-base lg:text-3xl">
                                    <Icon icon="iconamoon:shield-yes-bold" class="basis-[10%] w-auto text-base lg:text-2xl"/>
                                    <span class="basis-[90%]">{{ service.name }}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="flex flex-wrap p-1 lg:p-3 mt-12 bg-paragon-red w-full opacity-90">
                            <div class="p-0 w-full">
                                <div class="flex flex-wrap mt-3">
                                    <h4 class="text-center w-full underline">who we provide services to</h4>
                                </div>
                                <div class="flex flex-wrap mt-4">
                                    <ul class="flex-1 lg:flex lg:flex-wrap clients text-center">
                                        <li v-for="name in serviceClients" class="lg:w-1/4 py-2 lg:py-3 text-xl lg:text-2xl">
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
import { Icon } from '@iconify/vue';

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

const config = useRuntimeConfig();
const route = useRoute();

useHead({
    link: [{rel: 'canonical', href: `${config.public.siteUrl}${route.path}`,},],
}),

useSeoMeta({
  title: 'Paragon Hydraulics | Services',
  ogTitle: 'Paragon Hydraulics | Services',
  description: 'Paragon offers an extensive array of shipboard services, emphasizing expertise in hydraulic crane and deck equipment repair, installation, and technical representation.',
  ogDescription: 'Paragon offers an extensive array of shipboard services, emphasizing expertise in hydraulic crane and deck equipment repair, installation, and technical representation.',
})


</script>
<style>

</style>