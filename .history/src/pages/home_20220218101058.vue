<template>
   <div>
        <el-row class="tac">
            <el-col :span="12">
                <h5 class="mb-2">Default colors</h5>
            <el-menu
                active-text-color="#ffd04b"
                background-color="#545c64"
                class="el-menu-vertical-demo"
                default-active="2"
                text-color="#fff"
                @open="handleOpen"
                @close="handleClose"
            >
                <el-submenu index="1">
                    <el-menu-item-group title="Group One">

                    <template #title>
                        
                        <span>Tools Menu</span>
                    </template>
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item one</el-menu-item>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-arrow-right"></i>
                    <span>Navigator Two</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <i class="el-icon-arrow-right"></i>
                    <span>Navigator Three</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-arrow-right"></i>
                    <span>Navigator Four</span>
                </el-menu-item>
            </el-menu>
            </el-col>
        </el-row>
   </div>
</template>

<script setup>

import { defineComponent } from 'vue'

    const handleOpen = (key, keyPath) => {
    console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
    }

</script>
<style lang='scss' scoped>
    @import '../common/mixin.scss';

</style>
