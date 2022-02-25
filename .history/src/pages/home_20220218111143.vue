<template>
<div>
    <el-menu :default-active="active_index" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" v-for="item in menu_data">
        <el-menu-item :index="item.index">
            <i :class="item.icon"></i>
            <span>{{item.name}}</span>
        </el-menu-item>
    </el-menu>
</div>
</template>

<script setup>
import {ref} from 'vue'
let menu_data = ref([
    {'index': 1, 'name': '字符串脱敏', 'icon': 'el-icon-menu'},
    {'index': 2,'name': '导航二', 'icon': 'el-icon-menu'},
    {'index': 3,'name': '导航三', 'icon': 'el-icon-menu'},
    {'index': 4,'name': '导航四', 'icon': 'el-icon-menu'}
])
let active_index = ref('2')
const handleSelect = (key, keyPath) => {
    active_index.value = key
}

</script>

<style lang="scss" scoped>
@import '../common/mixin.scss';
</style>
