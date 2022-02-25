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
            <div class="ret">

            </div>
        </div>
   </div>
</template>

<script setup>
    import {ref} from 'vue'
    let input = ref('')
    const handleRun = () => {
        let str = input.value
        let ret = stringEncryption(str)
        console.log(ret)
    }
    const stringEncryption = (string, start=2, end=2, str='*') => {
        let start_str = '', mid_str = '', end_str = '';
        if(string.length < start || string.length < end || string.length < (start + end)) {
            console.error('字符串长度小于加密长度')
            return false
        }
        for(let i=0; i < start; i++){
            start_str += str;
        }
        for(let i=0; i < end; i++){
            end_str += str;
        }
        mid_str = string.slice(start,string.length - end)
        return start_str + mid_str + end_str
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
</style>
