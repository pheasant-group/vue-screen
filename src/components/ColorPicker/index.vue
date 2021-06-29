<template>
    <div class="color-picker">
        <el-color-picker
            v-model="colors"
            show-alpha
            :predefine="['#409EFF', '#1890ff', '#304156', '#212121', '#11a983', '#13c2c2', '#6959CD', '#f5222d',]"
            class="theme-picker"
            popper-class="theme-picker-dropdown"
        />
        <!-- <el-select v-model="defaultColorPicker" placeholder="请选择颜色选择器样式">
            <el-option v-for="item in colorPickerOptions" :key="item" :label="item" :value="item"></el-option>
        </el-select>-->
        <!-- <component v-bind:is="defaultColorPicker" v-model="colors" @input="updateValue"></component> -->
    </div>
</template>
  
  <script>
// import {
// Chrome,
// Material,
// Compact,
// Grayscale,
// Swatches,
// Slider,
// Sketch,
// Photoshop,
// Twitter
// } from 'vue-color'
export default {
    name: 'ColorPicker',
    components: {
        // Chrome, 
        // Material, 
        // Compact, 
        // Grayscale, 
        // Swatches, 
        // Slider, 
        // Sketch, 
        // Photoshop, 
        // Twitter
    },
    props: {
        color: {
            type: String,
            default: '#000'
        }
    },
    data() {
        return {
            // defaultColorPicker: 'Chrome',
            // colorPickerOptions: ['Material', 'Compact', 'Grayscale', 'Swatches', 'Slider', 'Sketch', 'Chrome', 'Photoshop', 'Twitter'],
            // colors: {
            //     hex: '#030409e6',
            //     hsl: {
            //         h: 150,
            //         s: 0.5,
            //         l: 0.2,
            //         a: 0.9
            //     },
            //     hsv: {
            //         h: 150,
            //         s: 0.66,
            //         v: 0.30,
            //         a: 0.9
            //     },
            //     rgba: {
            //         r: 159,
            //         g: 96,
            //         b: 43,
            //         a: 0.9
            //     },
            //     a: 0.9
            // },
            colors: ''
        }
    },
    created() {
        this.colors = this.color
    },
    watch: {
        colors: {
            handler: function(value) {
                console.log(value);
                this.$emit('change', value)
            },
            deep: true
        }
    },
    methods: {
        // updateValue(value) {
        //     this.colors = value
        // }
    }
}
</script>
  
<style>
.theme-message,
.theme-picker-dropdown {
    z-index: 99999 !important;
}

.theme-picker .el-color-picker__trigger {
    height: 26px !important;
    width: 26px !important;
    padding: 2px;
}

.theme-picker-dropdown .el-color-dropdown__link-btn {
    display: none;
}
</style>
  