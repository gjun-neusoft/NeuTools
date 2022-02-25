<template>
<div>
    <el-menu default-active="2" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="index" v-for="(item, index) in menu_data">
            <i :class="item.icon"></i>
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
