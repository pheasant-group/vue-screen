<template>
    <div class="main">
        <div class="main-top">
            <div class="main-left">
                <Charts-border
                    :border="setting.globalBorder"
                    :option="option1"
                    class="charts-border-item"
                />
                <Charts-border
                    :border="setting.globalBorder"
                    :option="option2"
                    class="charts-border-item"
                />
            </div>
        </div>
    </div>
</template>

<script>
import ChartsBorder from '@/components/ChartsBorder'
import { mapGetters } from 'vuex'

export default {
    name: 'Header',
    components: {
        ChartsBorder
    },
    computed: {
        ...mapGetters([
            'setting'
        ])
    },
    data() {
        return {
            globalBorder: 'dv-border-box-8',
        }
    }
}
</script>

<style lang="scss" scoped>
.main {
    .charts-border-item {
        width: 100%;
        height: calc((100vh - 100px) / 3);
    }
    .main-top {
        display: flex;
        justify-content: space-between;
        .main-left,
        .main-right {
            flex: 1;
        }
        .main-center {
            flex: 2;
        }
    }
    .main-bottom {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
}
</style>