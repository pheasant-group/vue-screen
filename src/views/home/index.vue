<template>
    <div class="home" :style="{ backgroundColor: setting.bgColor }">
        <dv-full-screen-container>
            <Header :title="setting.title" />
            <Main />
            <right-panel v-if="setting.showSetting">
                <Setting />
            </right-panel>
        </dv-full-screen-container>
    </div>
</template>

<script>
import Header from '@/components/header.vue'
import RightPanel from '@/components/RightPanel'
import Setting from '@/views/config/setting.vue'
import Main from './main.vue'
import { mapGetters } from 'vuex'

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
    padding: 10px;
    box-sizing: border-box;
}
</style>