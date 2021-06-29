<template>
    <div class="drawer-container">
        <div>
            <h3 class="drawer-title">设置</h3>
            <div class="drawer-item">
                <span>标题</span>
                <el-input
                    placeholder="请输入标题"
                    v-model="title"
                    clearable
                    size="small"
                    @change="value => changeSetting('title', value)"
                ></el-input>
            </div>
            <div class="drawer-item">
                <span>背景颜色</span>
                <Color-picker
                    style="float: right;height: 26px;margin: -3px 8px 0 0;"
                    :color="bgColor"
                    key="bgColor"
                    @change="value => changeSetting('bgColor', value)"
                ></Color-picker>
            </div>
            <div class="drawer-item">
                <span>字体颜色</span>
                <Color-picker
                    style="float: right;height: 26px;margin: -3px 8px 0 0;"
                    :color="fontColor"
                    key="fontColor"
                    @change="value => changeSetting('fontColor', value)"
                ></Color-picker>
            </div>
            <div class="drawer-item">
                <span>全局边框</span>
                <el-select
                    v-model="globalBorder"
                    placeholder="请选择"
                    @change="value => changeSetting('globalBorder', value)"
                >
                    <el-option
                        v-for="item in globalBorderOptions"
                        :key="item"
                        :label="item"
                        :value="item"
                    ></el-option>
                </el-select>
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
            title: '',
            bgcolor: '',
            fontColor: '',
            globalBorder: '',
            globalBorderOptions: Array.from({ length: 12 }, (item, index) => `dv-border-box-${index + 1}`)
        }
    },
    computed: {
        ...mapGetters([
            'setting'
        ])
    },
    created() {
        this.title = this.setting.title
        this.bgColor = this.setting.bgColor
        this.fontColor = this.setting.fontColor
        this.globalBorder = this.setting.globalBorder
    },
    methods: {
        changeSetting(key, value) {
            this.$store.dispatch('setting/changeSetting', { key, value })
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
        display: flex;
        justify-content: space-between;
        span {
            width: 100px;
            display: flex;
            align-items: center;
            justify-content: right;
        }
    }
}
</style>
  