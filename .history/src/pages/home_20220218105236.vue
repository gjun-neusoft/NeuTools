<template>
<div>
    <el-menu :default-active="active_index" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <template v-for="item in menu_data">
            <el-menu-item :index="index">
                <i :class="item.icon"></i>
                <span>{{item.name}}</span>
            </el-menu-item>
        </template>
        

    </el-menu>
</div>
</template>

<script setup>
import {ref} from 'vue'
let menu_data = ref([
    {'index': '1', 'name': '导航一', 'icon': 'el-icon-menu'},
    {'index': '2','name': '导航二', 'icon': 'el-icon-menu'},
    {'index': '3','name': '导航三', 'icon': 'el-icon-menu'},
    {'index': '4','name': '导航四', 'icon': 'el-icon-menu'}
])
let active_index = ref('2')
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
