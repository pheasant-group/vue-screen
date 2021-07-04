<template>
    <div class="drawer-container">
        <div class="drawer-box">
            <h3 class="drawer-title">设置(立即生效)</h3>
            <div class="drawer-item">
                <span>标题:</span>
                <el-input
                    placeholder="请输入标题"
                    v-model="title"
                    clearable
                    size="small"
                    @change="value => changeSetting('title', value)"
                ></el-input>
            </div>
            <div class="drawer-item">
                <span>背景颜色:</span>
                <Color-picker
                    style="float: right;height: 26px;margin: -3px 8px 0 0;"
                    :color="bgColor"
                    key="bgColor"
                    @change="value => changeSetting('bgColor', value)"
                ></Color-picker>
            </div>
            <div class="drawer-item">
                <span>字体颜色:</span>
                <Color-picker
                    style="float: right;height: 26px;margin: -3px 8px 0 0;"
                    :color="fontColor"
                    key="fontColor"
                    @change="value => changeSetting('fontColor', value)"
                ></Color-picker>
            </div>
            <div class="drawer-item">
                <span>全局边框:</span>
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
            <h3 class="drawer-title">图表设置(刷新生效)</h3>
            <div class="charts-item">
                <div class="drawer-item">
                    <span>color:</span>
                    <Color-picker
                        style="float: right;height: 26px;margin: -3px 8px 0 0;"
                        :color="chartscolor[0]"
                        key="fontColor"
                        @change="value => changeSetting('chartscolor', value)"
                    ></Color-picker>
                </div>
                <span
                    class="description"
                >color属性用来配置图表颜色，配置的颜色将自动覆盖默认配色，颜色支持hex|rgb|rgba，不支持如'red'等描述颜色。</span>
            </div>
            <div class="charts-item">
                <div class="drawer-item">
                    <span>title:</span>
                    <el-input
                        v-model="chartstitle"
                        type="textarea"
                        autosize
                        @change="value => changeSetting('chartstitle', value)"
                    ></el-input>
                </div>
                <span class="description">title用来显示图表的标题，你可以配置该项来设置其位置和样式</span>
            </div>
            <div class="charts-item">
                <div class="drawer-item">
                    <span>legend:</span>
                    <el-input
                        v-model="chartslegend"
                        type="textarea"
                        autosize
                        @change="value => changeSetting('chartslegend', value)"
                    ></el-input>
                </div>
                <span class="description">legend为图表提供图例标签功能，它允许用户隐藏/显示series中的某个子图表</span>
            </div>
            <div class="charts-item">
                <div class="drawer-item">
                    <span>xAxis:</span>
                    <el-input
                        v-model="chartsxAxis"
                        placeholder="请输入颜色"
                        type="textarea"
                        autosize
                        @change="value => changeSetting('chartsxAxis', value)"
                    ></el-input>
                </div>
                <span class="description">xAxis用来配置x坐标轴，它的值可以为对象，也可以为一个数组，为数组时即多个x坐标轴(至多2个)</span>
            </div>
            <div class="charts-item">
                <div class="drawer-item">
                    <span>yAxis:</span>
                    <el-input
                        v-model="chartsyAxis"
                        placeholder="请输入颜色"
                        type="textarea"
                        autosize
                        @change="value => changeSetting('chartsyAxis', value)"
                    ></el-input>
                </div>
                <span class="description">yAxis用来配置y坐标轴，它的值可以为对象，也可以为一个数组，为数组时即多个y坐标轴(至多2个)</span>
            </div>
            <div class="charts-item">
                <div class="drawer-item">
                    <span>chartsgrid:</span>
                    <el-input
                        v-model="chartsxAxis"
                        placeholder="请输入颜色"
                        type="textarea"
                        autosize
                        @change="value => changeSetting('chartsxAxis', value)"
                    ></el-input>
                </div>
                <span class="description">grid是配合坐标系工作的，通过配置它，你可以设置坐标系的宽高大小</span>
            </div>
            <div class="footer">
                <el-button type="primary" @click.native="resize" size="mini">恢复默认</el-button>
                <el-button type="primary" @click.native="reload" size="mini">刷新生效</el-button>
                <el-button type="primary" @click.native="reload" size="mini">上传后台</el-button>
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
            globalBorderOptions: Array.from({ length: 12 }, (item, index) => `dv-border-box-${index + 1}`),
            chartscolor: '',
            chartstitle: {},
            chartslegend: {},
            chartsxAxis: {},
            chartsyAxis: {},
            chartsgrid: {},
            chartsradarAxis: {},
            chartsline: {},
            chartsbar: {},
            chartspie: {},
            chartsradar: {},
            chartsgauge: {},
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
        this.chartscolor = Array.isArray(this.setting.chartscolor) ? this.setting.chartscolor : [this.setting.chartscolor]
        this.chartstitle = JSON.stringify(this.setting.chartstitle, null, 4)
        this.chartslegend = JSON.stringify(this.setting.chartslegend, null, 4)
        this.chartsxAxis = JSON.stringify(this.setting.chartsxAxis, null, 4)
        this.chartsyAxis = JSON.stringify(this.setting.chartsyAxis, null, 4)
        this.chartsgrid = JSON.stringify(this.setting.chartsgrid, null, 4)
    },
    methods: {
        changeSetting(key, value) {
            if (key === 'chartscolor') {
                value = [value]
            } else if (key.indexOf("charts") !== -1) {
                value = JSON.parse(value);
            }
            console.log(key, value)
            this.$store.dispatch('setting/changeSetting', { key, value })
        },
        resize() {
            localStorage.clear()
        },
        reload() {
            location.reload()
        }
    }
}
</script>
  
  <style lang="scss" scoped>
.drawer-container {
    padding: 5px 20px;
    font-size: 14px;
    line-height: 1.5;
    word-wrap: break-word;
    height: 98vh;
    overflow: auto;
    .drawer-title {
        margin-bottom: 12px;
        color: rgba(0, 0, 0, 0.85);
        font-size: 16px;
        line-height: 22px;
        font-weight: bold;
    }

    .drawer-item {
        color: rgba(0, 0, 0, 1);
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
    .charts-item {
        .description {
            color: rgba(0, 0, 0, 0.65);
        }
    }
    .footer {
        position: sticky;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: space-between;
    }
}
</style>
  