<template>
   <div>
        <div class="title">
            <i class="el-icon-arrow-right">字体串脱敏</i>
        </div>
        <div class="wrapper">
            <div class="input-box">
                <span>头部脱敏字符个数</span>
                <el-input v-model="start" placeholder="输入头部脱敏字符个数"></el-input>
                
            </div>
            <div class="input-box">
                <span>尾部脱敏字符个数</span>
                <el-input v-model="end" placeholder="输入尾部脱敏字符个数"></el-input>
            </div>
            <div class="input-box">
                <span>输入需要脱敏的字符串</span>
                <div class="input">
                    <el-input v-model="input" placeholder="Please input"></el-input>
                </div>
                <el-button class="btn" type="primary" @click="handleRun">确认</el-button>
            </div>
            <div class="result">
               结果： {{ret}}
            </div>
        </div>
   </div>
</template>

<script setup>
    import {ref} from 'vue';
    import {stringEncryption} from '../common/common';
    let input = ref(''),
        ret = ref(''),
        start = ref(0),
        end = ref(0);

    const handleRun = () => {
        let str = input.value, 
            st = Number(start.value), 
            ed = Number(end.value);
            console.log(st, ed)
        ret.value = stringEncryption(str, st, ed)
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
        margin-bottom: 20px;
        display: flex;
        flex-direction: row;
        span{
            margin: 0 10px;
            display: block;
            text-align: right;
            width:300px;
            height:40px;
            line-height: 40px;
            font-size: 14px;
            color:#888;
        }
        .input{
            flex-grow: 1;
        }
    }
    .btn{
        width: 100px;
        
    }
    .result{
        padding: 20px;
        height: 60px;
        line-height: 60px;
        border: 1px solid #eee;
        color: #888;

    }
</style>
