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
                    <template #title>
                        <el-icon><location /></el-icon>
                        <span>Tools Menu</span>
                    </template>
                    <el-menu-item-group title="Group One">
                        <el-menu-item index="1-1">item one</el-menu-item>
                        <el-menu-item index="1-2">item one</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                        <el-menu-item index="1-3">item three</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <template #title>item four</template>
                        <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                    <el-icon><icon-menu /></el-icon>
                    <span>Navigator Two</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <el-icon><document /></el-icon>
                    <span>Navigator Three</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <el-icon><setting /></el-icon>
                    <span>Navigator Four</span>
                </el-menu-item>
            </el-menu>
            </el-col>
        </el-row>
   </div>
</template>

<script setup>
import {
  location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue';
components: {
    location
}
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
