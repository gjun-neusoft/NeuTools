<template>
<div>
    <el-menu default-active="2" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="1" v-for="(inedx, item) in menu_data" :key="index">
            <i class="el-icon-menu"></i>
            <span>{{item.name}}</span>
        </el-menu-item>
        

    </el-menu>
</div>
</template>

<script setup>
import {ref} from 'vue'
let menu_data = ref([
    {'name': '导航一', 'icon': 'el-icon-menu'},
    {'name': '导航二', 'icon': 'el-icon-menu'},
    {'name': '导航三', 'icon': 'el-icon-menu'},
    {'name': '导航四', 'icon': 'el-icon-menu'}
])
const handleOpen = (key, keyPath) => {
    console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
@import '../common/mixin.scss';
</style>
