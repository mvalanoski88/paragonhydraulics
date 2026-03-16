<template>
    <main>
        <PageHero sectionId="aboutus"
                  pageTitle="About Us"
                  pageHeading="Our team of skilled engineers and technicians brings a wealth of experience to every project. From conceptualization to execution, we leverage our expertise to deliver robust and reliable mechanical solutions" />
        <section id="meetUs" class="justify-center">
            <div class="flex p-4 lg:p-8">
                <div class="text-center">
                    <p class="text-xl lg:text-3xl my-4 lg:my-6">Paragon Hydraulics LLC comprises a dedicated team of exceptionally skilled and motivated professionals boasting a collective experience of over 50 years in ship repair. Our team actively contributes to various programs for the Navy, Army, Coast Guard, MSC, and commercial industries.</p>
                    <p class="text-xl lg:text-3xl my-4 lg:my-6">Specializing in worldwide hull and deck machinery, Paragon Hydraulics is renowned for providing top-tier support and solutions. We are unwaveringly committed to cultivating, sustaining, and nurturing a workforce of utmost professionalism and high expertise, setting the benchmark in the ship repair, maintenance, and modernization industry.</p>
                    <p class="text-xl lg:text-3xl my-4 lg:my-6">Your success is our priority. We work closely with our clients to understand their challenges and provide customized hydraulic solutions that enhance efficiency, reduce downtime, and optimize performance.</p>
                </div>
            </div>
        </section>
    </main>
</template>
<script setup>
const config = useRuntimeConfig();
const route = useRoute();

useHead({
    link: [{rel: 'canonical', href: `${config.public.siteUrl}${route.path}`,},],
}),

useSeoMeta({
  title: 'Paragon Hydraulics | About Us',
    description:
        'Our team of skilled engineers and technicians brings a wealth of experience to every project. From conceptualization to execution, we leverage our expertise to deliver robust and reliable mechanical solutions.',
})
</script>