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
<script setup>
import {ref} from 'vue'
let menu_data = ref([
    {'index': '/', 'name': '字符串脱敏', 'icon': 'el-icon-menu'},
    {'index': '/string','name': '数值', 'icon': 'el-icon-menu'}
])
let active_index = ref('2')
const handleSelect = (key, keyPath) => {
    active_index.value = key
}

</script>
<style>
@import './common/common.scss';

.container{
    padding: 0;
}
#head{
    padding: 0 20px;
    height: 60px;
    line-height: 60px;
    text-align: left;
    font-size: 22px;
    font-weight: bold;
    box-sizing: border-box;
    color: #348fe4;
    background-color: rgb(253,253,253);
    border-bottom: 1px solid #ccc;
}
#slide-menu{
    width: 200px;
    height: 100vh;
    background-color: #545c64;
    text-align: left;
    .el-menu{
        border: none;
    }
}
</style>
