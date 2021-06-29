<template>
    <div class="main">
        <Charts-border :border="setting.globalBorder" :option="option1" class="charts-border-item" />
        <Charts-border :border="setting.globalBorder" :option="option2" class="charts-border-item" />
        <Charts-border :border="setting.globalBorder" :option="option3" class="charts-border-item" />
        <Charts-border :border="setting.globalBorder" :option="option4" class="charts-border-item" />
        <Charts-border :border="setting.globalBorder" :option="option5" class="charts-border-item" />
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
            option1: {
                title: {
                    text: '周销售额趋势'
                },
                xAxis: {
                    name: '第二周',
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    name: '销售额',
                    data: 'value'
                },
                series: [
                    {
                        data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
                        type: 'line',
                        smooth: true,
                        lineArea: {
                            show: true
                        }
                    }
                ]
            },
            option2: {
                title: {
                    text: '周销售额趋势'
                },
                xAxis: {
                    name: '第二周',
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    name: '销售额',
                    data: 'value'
                },
                series: [
                    {
                        data: [2339, 1899, 2118, 1790, 3265, 4465, 3996],
                        type: 'bar',
                        gradient: {
                            color: ['#67e0e3', '#37a2da']
                        }
                    }
                ]
            },
            option3: {
                title: {
                    text: '畅销饮料占比饼状图'
                },
                legend: {
                    data: ['同比', '环比'],
                    orient: 'vertical'
                },
                series: [
                    {
                        name: '同比',
                        type: 'pie',
                        data: [
                            { name: '可口可乐', value: 93 },
                            { name: '百事可乐', value: 32 },
                            { name: '哇哈哈', value: 65 },
                            { name: '康师傅', value: 44 },
                            { name: '统一', value: 52 },
                        ],
                        radius: '30%',
                        outsideLabel: {
                            show: false
                        },
                        insideLabel: {
                            show: true
                        }
                    },
                    {
                        name: '环比',
                        type: 'pie',
                        data: [
                            { name: '可口可乐', value: 93 },
                            { name: '百事可乐', value: 32 },
                            { name: '哇哈哈', value: 65 },
                            { name: '康师傅', value: 44 },
                            { name: '统一', value: 52 },
                        ],
                        radius: ['40%', '50%']
                    }
                ]
            },
            option4: {
                radar: {
                    indicator: [
                        { name: '西峡', max: 300 },
                        { name: '周口', max: 300 },
                        { name: '南阳', max: 300 },
                        { name: '驻马店', max: 300 },
                        { name: '郑州', max: 300 },
                        { name: '洛阳', max: 300 }
                    ]
                },
                series: [
                    {
                        type: 'radar',
                        data: [111, 256, 178, 152, 266, 132]
                    }
                ]
            },
            option5: {
                series: [
                    {
                        type: 'gauge',
                        startAngle: -Math.PI / 2,
                        endAngle: Math.PI * 1.5,
                        arcLineWidth: 10,
                        data: [
                            { name: 'A', value: 25, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'] },
                            { name: 'B', value: 45, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'], radius: '53%' },
                            { name: 'C', value: 65, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'], radius: '46%' },
                            { name: 'D', value: 35, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'], radius: '39%' },
                            { name: 'E', value: 25, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'], radius: '32%' }
                        ],
                        axisLabel: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        pointer: {
                            show: false
                        },
                        dataItemStyle: {
                            lineCap: 'round'
                        },
                        backgroundArc: {
                            show: false
                        },
                        details: {
                            show: true,
                            formatter: '{name}占比{value}%',
                            position: 'start',
                            offset: [-10, 0],
                            style: {
                                fill: '#1ed3e5',
                                fontSize: 13,
                                textAlign: 'right',
                            }
                        }
                    }
                ]
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.main {
    display: flex;
    flex-wrap: wrap;
    .charts-border-item {
        flex: 0 0 25%;
        height: 30vh;
    }
}
</style>