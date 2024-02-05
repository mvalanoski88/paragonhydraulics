<template>
    <div class="row mx-0">
        <div class="text-center col-12">
            <span :style="textColor">{{ heading }}</span>
        </div>
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
<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';

span {
    @include size-height(7rem, 5rem);
    color: $paragon-white;

    @media (max-width:1000px) {
        @include size-height(3rem, 4.15rem);

    }
}
</style>