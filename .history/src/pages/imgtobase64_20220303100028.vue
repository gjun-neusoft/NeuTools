<template>
   <div>
        <div class="title">
            <i class="el-icon-arrow-right">字符串脱敏</i>
        </div>
        <div class="wrapper">
            <h3 class="sub-title">字符串脱敏 stringEncryption</h3>
            <div class="desc">
                <p>
                    方法名称： stringEncryption(Target, Start, End, Str)
                </p>
                    <p>参数：{</p>
                    <p>　Target：目标脱敏字符串，必填项；</p>
                    <p>　Start： 头部需要脱敏字符个数，选填，默认值：0；</p>
                    <p>　End：尾部需要脱敏字符个数，选填，默认值：Target长度；</p>
                    <p>　Str：脱敏占位符，选填，默认值："*"</p>
                <p>}</p>
            </div>
            <div class="form">
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
                    <el-input v-model="input" placeholder="Please input"></el-input>
                </div>
                <div class="input-box">
                    <el-button class="btn" type="primary" @click="handleRun">执行</el-button>
                </div>
                <div class="result">
                    <span class="ret">结果: </span> 
                    {{ret}}
                </div>
            </div>
        </div>
   </div>
</template>

<script setup>

</script>
<style lang='scss' scoped>

</style>
