<template>
    <div class="flex flex-wrap justify-center">
        <h3 :style="textColor">{{ heading }}</h3>
    </div>
</template>
<script>

export default {
    props: {
        heading: String,
        style: {
            type: String,
            validator(value) {
                return['dark', 'light'].includes(value)
                }
            }
    },

    computed: {
        textColor() {
            return {
                color: this.style === 'dark' ? '#051535' : '#FFFFFF'            
            }
        }
    }
}
</script>
<style>
</style>