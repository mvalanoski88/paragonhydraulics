<template>
    <div class="d-flex flex-column contact-card p-0 m-0 mx-5 mb-5 mb-lg-0">
        <div class="row">
            <div class="col-12">
                <img :src="imageUrl" alt="" width="320" height="380" />
            </div>
        </div>
        <div class="row">
            <div class="col-12 contact-details">
                <div class="my-3 text-center"><span class="text-uppercase">{{ name }}</span><br></div>
                <span v-if="title" class="px-3"><Icon icon="clarity:id-badge-solid" />Title: {{ title }}</span><br>
                <span v-if="phonenum" class="px-3"><Icon icon="ion:call-sharp" />Phone: {{ phonenum }}</span><br>
                <span v-if="email" class="px-3"><Icon icon="tabler:mail-up" />Email: {{ email }}</span>
            </div>
        </div>
    </div>
</template>
<script setup>
import { Icon } from '@iconify/vue';

const props = defineProps({
    name: String,
    title: String,
    phonenum: String,
    email: String,
    imageUrl: String
})

</script>
<style>
</style>