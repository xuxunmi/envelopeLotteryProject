<template>
    <div class="container">
        <div class="top-menu">
            <div @click="goChasing">在追</div>
            <div @click="goVideo" class="active">剧单</div>
        </div>
        <div class="box">
            <p style="margin-left: 20px;color:#fff;font-weight: 700;font-size: 20px;">新剧场</p>
            <div class="duanju">
                <img src="https://hwdj.liuyuekeji.cn/assets/24071817101-a7cf4262.jpeg" alt="">
                <p style="color: #fff;text-align: center;">神豪归来</p>
            </div>
            <div class="duanju">
                <img src="https://hwdj.liuyuekeji.cn/assets/24071817101-a7cf4262.jpeg" alt="">
                <p style="color: #fff;text-align: center;">神豪归来</p>
            </div>
            <div class="duanju">
                <img src="https://hwdj.liuyuekeji.cn/assets/24071817101-a7cf4262.jpeg" alt="">
                <p style="color: #fff;text-align: center;">神豪归来</p>
            </div>
            <div class="duanju">
                <img src="https://hwdj.liuyuekeji.cn/assets/24071817101-a7cf4262.jpeg" alt="">
                <p style="color: #fff;text-align: center;">神豪归来</p>
            </div>
            <div class="duanju">
                <img src="https://hwdj.liuyuekeji.cn/assets/24071817101-a7cf4262.jpeg" alt="">
                <p style="color: #fff;text-align: center;">神豪归来</p>
            </div>
            <div class="duanju">
                <img src="https://hwdj.liuyuekeji.cn/assets/24071817101-a7cf4262.jpeg" alt="">
                <p style="color: #fff;text-align: center;">神豪归来</p>
            </div>
            <div class="duanju">
                <img src="https://hwdj.liuyuekeji.cn/assets/24071817101-a7cf4262.jpeg" alt="">
                <p style="color: #fff;text-align: center;">神豪归来</p>
            </div>
            <div class="duanju">
                <img src="https://hwdj.liuyuekeji.cn/assets/24071817101-a7cf4262.jpeg" alt="">
                <p style="color: #fff;text-align: center;">神豪归来</p>
            </div>
            <div class="duanju">
                <img src="https://hwdj.liuyuekeji.cn/assets/24071817101-a7cf4262.jpeg" alt="">
                <p style="color: #fff;text-align: center;">神豪归来</p>
            </div>
            <div class="duanju">
                <img src="https://hwdj.liuyuekeji.cn/assets/24071817101-a7cf4262.jpeg" alt="">
                <p style="color: #fff;text-align: center;">神豪归来</p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const getUrlParams = (url)=> {
  const paramsRegex = /[?&]+([^=&]+)=([^&]*)/gi;
  const params = {};
  let match;
  while (match = paramsRegex.exec(url)) {
    params[match[1]] = match[2];
  }
  return params;
}
const router = useRouter()
const goVideo = () => {
    let params = getUrlParams(location.href)
    router.push({
        path: `/video`,
        query: {
            uuid: params.uuid,
            channel_key: params.channel_key
        }
    })
}

const goChasing = () => {
    let params = getUrlParams(location.href)
    console.log(params);
    router.push({
            path: `/chasing`,
            query: {
            uuid: params.uuid,
            channel_key: params.channel_key
        }
    })
}
</script>
<style>
    html{
        background: #000;
    }
    body{
        background: #000;
    }
    .top-menu{
        display: flex;
        justify-content: center;
    }
    .top-menu div{
        color:#fff;
        font-size: 18px;
        /* display: inline; */
        padding:20px 40px
    }
    .active{
        font-weight: 700;
    }
    .duanju{
        width: 100px;
        display: inline-block;
        margin-left: 20px;
        margin-top: 10px;
        /* width: 200px; */
    }
</style>