<template>
    <NuxtLink :to="`${props.link}`">{{ props.text }}</NuxtLink>
</template>
<script setup>
const props = defineProps({
    link: String,
    text: String
})
</script>
<style>
</style>