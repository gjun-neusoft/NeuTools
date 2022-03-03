<template>
    <div>
        <div class="title">
            <i class="el-icon-arrow-right">Img图片转Base64</i>
        </div>
        <div class="wrapper">
            <h3 class="sub-title">Img图片转Base64 getBase64Image</h3>
            <div class="desc">
                <p>
                    方法名称： getBase64Image(ImgUrl)
                </p>
                    <p>参数：{</p>
                    <p>　ImgUrl：图片地址，必填项；</p>
                <p>}</p>
            </div>
            <div class="form">
                <div class="input-box">
                    <el-button class="btn" type="primary" @click="handleRun">执行</el-button>
                </div>
                <div class="result">
                    
                    {{ret}}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { getBase64Image } from '../common/common.js'
    import {ref} from 'vue'
    let ret = ref('')
    let img = '../src/assets/2.jpeg'
    let image = new Image();
    image.src = img

    const handleRun = function () {
        ret.value = getBase64Image(image)
    }
    
</script>
<style lang='scss' scoped>
    .sub-title{
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #eee;
        color: #333
    }
    .desc{
        margin-bottom: 40px;
        padding: 0 20px 20px 20px;
        min-height: 200px; 
        color: #888;
        border-bottom: 1px solid #eee;
    }
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
        height: calc(100vh - 186px);
        background-color: #fff;
        overflow-y: auto;
    }
    .input-box{
        margin-bottom: 20px;
        display: flex;
        flex-direction: row;
        .img{
            width: 500px;
            height: 500px;
        }
    }
    .btn{
        margin: 0 auto;
        width: 100px;
        
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
    .result{
        padding: 20px;
        width: 500px;
        height: 60px;
        line-height: 60px;
        border: 1px solid #eee;
        color: #888;
        overflow-y: auto;
        

    }
</style>
