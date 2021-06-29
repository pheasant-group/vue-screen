<template>
    <div class="charts-border">
        <component v-bind:is="border">
            <dv-charts v-bind="$attrs" />
        </component>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        border: {
            type: String,
            default: 'dv-border-box-8'
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