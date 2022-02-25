<template>
<div>
    <el-menu default-active="2" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span>导航一</span>
        </el-menu-item>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span>导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span>导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span>导航四</span>
        </el-menu-item>
    </el-menu>
</div>
</template>

<script setup>
import {
    defineComponent
} from 'vue'

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
