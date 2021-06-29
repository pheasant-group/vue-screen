<template>
    <div class="drawer-container">
        <div>
            <h3 class="drawer-title">设置</h3>
            <div class="drawer-item">
                <span>背景颜色</span>
                <Color-picker
                    style="float: right;height: 26px;margin: -3px 8px 0 0;"
                    :color="setting.bgcolor"
                    @change="changeBgColor"
                ></Color-picker>
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapGetters } from 'vuex'
import ColorPicker from '@/components/ColorPicker/index.vue'

export default {
    components: {
        ColorPicker
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters([
            'setting'
        ])
    },
    methods: {
        changeBgColor(value) {
            this.$store.dispatch('setting/changeSetting', {
                key: 'bgColor',
                value: value
            })
        }
    }
}
</script>
  
  <style lang="scss" scoped>
.drawer-container {
    padding: 24px;
    font-size: 14px;
    line-height: 1.5;
    word-wrap: break-word;
    overflow: hidden;
    height: 100%;

    .drawer-title {
        margin-bottom: 12px;
        color: rgba(0, 0, 0, 0.85);
        font-size: 14px;
        line-height: 22px;
    }

    .drawer-item {
        color: rgba(0, 0, 0, 0.65);
        font-size: 14px;
        padding: 12px 0;
    }

    .drawer-switch {
        float: right;
    }
}
</style>
  