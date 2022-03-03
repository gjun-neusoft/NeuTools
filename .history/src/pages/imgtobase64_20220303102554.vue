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
                    <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        multiple
                        :auto-upload = 'false'
                        :limit="1"
                        :on-exceed="handleExceed"
                        :file-list="fileList"
                        :on-change = "onChange"
                    >
                        <el-button type="primary">Click to upload</el-button>
                        <template #tip>
                        <div class="el-upload__tip">
                            jpg/png files with a size less than 500kb
                        </div>
                        </template>
                    </el-upload>
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
    import { getBase64Image } from '../common/common.js'
    import { UploadFile } from 'element-plus/es/components/upload/src/upload.type'
    import {ref} from 'vue'
    let fileList = ref([]),
        ret = ref('')
    const onChange = function (file) {
        console.log(file)
    }
    const handleExceed = function () {

    }
    const handleRun = function () {
        
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
        height: 60px;
        line-height: 60px;
        border: 1px solid #eee;
        color: #888;
        .ret{
            display: inline-block;
            width: 80px;
            height: 40px;
            line-height: 40px;
            text-align: center;
        }

    }
</style>
