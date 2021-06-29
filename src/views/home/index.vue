<template>
    <div class="home" :style="{ backgroundColor: setting.bgColor }">
        <dv-full-screen-container>
            <Header />
            <Main />
            <right-panel v-if="setting.showSetting">
                <Setting />
            </right-panel>
        </dv-full-screen-container>
    </div>
</template>

<script>
import Header from '@/components/header.vue'
import Main from '@/components/main.vue'
import RightPanel from '@/components/RightPanel'
import { mapGetters } from 'vuex'
import Setting from '@/views/components/setting.vue'

export default {
    name: 'Home',
    components: {
        Header,
        Main,
        RightPanel,
        Setting
    },
    computed: {
        ...mapGetters([
            'setting'
        ])
    },
}
</script>

<style lang="scss" scoped>
.home {
    color: #fff;
    height: 100%;
    width: 100%;
}
</style>