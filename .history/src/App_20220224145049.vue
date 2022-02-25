<template>
<div>
      <div id="head">
          NeuTools
      </div>
      <div class="content">
        <div id="slide-menu">
          <el-menu :default-active="active_index" router @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" v-for="item in menu_data">
            <el-menu-item :index="item.index">
              <i :class="item.icon"></i>
              <span>{{item.name}}</span>
            </el-menu-item>
          </el-menu>
        </div>
        <div class="view">
          <router-view></router-view>
        </div>
      </div>
  </div>
</template>
<script setup>
  import {ref} from 'vue'
  let menu_data = ref([
      {'index': '/string','name': '字符串脱敏', 'icon': 'el-icon-menu'},
      {'index': '/number','name': '数值', 'icon': 'el-icon-menu'}
  ])
  let active_index = ref('2')
  const handleSelect = (key, keyPath) => {
      active_index.value = key
  }

</script>
<style lang="scss" scope>
@import './common/common.scss';


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
  border-bottom: 1px solid #eee;
}
.content{
  padding-left: 200px;
  position:relative;
}

#slide-menu{
  position:absolute;
  left:0;
  width: 200px;
  height: calc(100vh - 146px);
  background-color: #545c64;
  text-align: left;
  .el-menu{
      border: none;
  }
}
</style>
