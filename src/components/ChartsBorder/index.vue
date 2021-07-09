<template>
    <div class="charts-border">
        <component v-bind:is="border">
            <div />
        </component>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        border: {
            type: String,
            default: 'dv-border-box-12'
        }
    }
}
</script>

<style lang="scss" scoped>
.charts-border {
    height: 100%;
    width: 100%;
}
</style>