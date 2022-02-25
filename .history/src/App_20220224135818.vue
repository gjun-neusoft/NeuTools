<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <div id="head">
        NeuTools
    </div>
    <div id="slide-menu">
        <el-menu :default-active="active_index" router @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" v-for="item in menu_data">
            <el-menu-item :index="item.index">
                <i :class="item.icon"></i>
                <span>{{item.name}}</span>
            </el-menu-item>
        </el-menu>
    </div>
    <div>
        <router-view></router-view>
    </div>
  <router-view></router-view>
</template>

<style>
@import './common/common.scss';
#app {
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
