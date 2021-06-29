<template>
    <div class="color-picker">
        <el-select v-model="defaultColorPicker" placeholder="请选择颜色选择器样式">
            <el-option v-for="item in colorPickerOptions" :key="item" :label="item" :value="item"></el-option>
        </el-select>
        <component v-bind:is="defaultColorPicker" v-model="colors" @input="updateValue"></component>
    </div>
</template>
  
  <script>
import { Material, Compact, Grayscale, Swatches, Slider, Sketch, Chrome, Photoshop, Twitter } from 'vue-color'
export default {
    name: 'ColorPicker',
    components: {
        Material, Compact, Grayscale, Swatches, Slider, Sketch, Chrome, Photoshop, Twitter
    },
    data() {
        return {
            defaultColorPicker: 'Twitter',
            colorPickerOptions: ['Material', 'Compact', 'Grayscale', 'Swatches', 'Slider', 'Sketch', 'Chrome', 'Photoshop', 'Twitter'],
            colors: {
                hex: '#194d33e6',
                hsl: {
                    h: 150,
                    s: 0.5,
                    l: 0.2,
                    a: 0.9
                },
                hsv: {
                    h: 150,
                    s: 0.66,
                    v: 0.30,
                    a: 0.9
                },
                rgba: {
                    r: 159,
                    g: 96,
                    b: 43,
                    a: 0.9
                },
                a: 0.9
            },
        }
    },
    watch: {
        colors: {
            handler: function(value) {
                console.log(value)
            },
            deep: true
        }
    },
    methods: {
        updateValue(value) {
            this.colors = value
        }
    }
}
</script>
  
  <style lang="scss" scoped>
.color-picker {
    display: flex;
}
</style>
  