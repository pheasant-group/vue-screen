<template>
    <div class="home">
        <dv-full-screen-container>
            <Header />
            <Main />
        </dv-full-screen-container>
    </div>
</template>

<script>
import Header from '@/components/header.vue'
import Main from '@/components/main.vue'

export default {
    name: 'Home',
    components: {
        Header,
        Main
    }
}
</script>

<style lang="scss" scoped>
.home {
    background-color: #030409;
    color: #fff;
    height: 100%;
    width: 100%;
}
</style>