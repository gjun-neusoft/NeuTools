<template>
   <div>
        <div class="title">
            <i class="el-icon-arrow-right">字体串脱敏</i>
        </div>
        <div class="wrapper">
            <el-input v-model="input" placeholder="Please input" />
            <el-button type="primary">确认</el-button>
        </div>
   </div>
</template>

<script setup>
    import {ref} from 'vue'
    let input = ref('')
</script>
<style lang='scss' scoped>
    .title{
        padding-left: 20px;
        height: 45px;
        line-height: 45px;
        background-color: rgb(253,253,253);
        color: #888;
        border-bottom: 1px solid #eee;
        font-size: 14px;
    }
    .wrapper{
        margin: 20px;
        padding: 20px;
        min-height: calc(100vh - 146px);
        background-color: #fff;
    }
</style>
