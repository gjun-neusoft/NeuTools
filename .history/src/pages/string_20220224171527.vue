<template>
   <div>
        <div class="title">
            <i class="el-icon-arrow-right">字体串脱敏</i>
        </div>
        <div class="wrapper">
            <div class="input-box">
                <div class="input">
                    <el-input v-model="input" placeholder="Please input"/>
                </div>
                <el-button class="btn" type="primary" @click="handleRun">确认</el-button>
            </div>
            <div class="result">
                {{ret}}
            </div>
        </div>
   </div>
</template>

<script setup>
    import {ref} from 'vue';
    import {stringEncryption} from '../common/common';
    let input = ref('');
    let ret = ref('');
    const handleRun = () => {
        let str = input.value
        ret.value = stringEncryption(str)
    }
    

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
    .input-box{
        display: flex;
        flex-direction: row;
        .input{
            flex-grow: 1;
        }
        .btn{
            width: 100px;
            
        }
    }
    .result{
        height: 60px;
        line-height: 60px;
    }
</style>
