<template>
    <div class="top-header">
        <component v-bind:is="headerLeft" class="header-left-decoration"></component>
        <dv-decoration-5 class="header-center-decoration" />
        <dv-decoration-8 class="header-right-decoration" :reverse="true" />
        <div class="center-title">驻藏BD副食品筹措可视化大屏</div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        headerLeft: {
            type: String,
            default: 'dv-decoration-8'
        }
    }
}
</script>

<style lang="scss" scoped>
.top-header {
    position: relative;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    flex-shrink: 0;
    margin-bottom: 10px;

    .header-center-decoration {
        width: 40%;
        height: 60px;
        margin-top: 50px;
    }

    .header-left-decoration,
    .header-right-decoration {
        width: 30%;
        height: 60px;
    }

    .center-title {
        position: absolute;
        font-size: 30px;
        font-weight: bold;
        left: 50%;
        top: 15px;
        color: "#fdffff";
        transform: translateX(-50%);
    }
}
</style>