<template>
    <div class="container">
        <div class="top-menu">
            <!-- <div @click="goChasing">在追</div> -->
            <div @click="goVideo" class="active">剧单</div>
        </div>
        <div class="box" ref="scrollRef">
            <p style="margin-left: 20px;color:#fff;font-weight: 700;font-size: 20px;">新剧场</p>
            <div class="duanju" v-for="(item,index) in state.videoList" @click="goVideoDetail(item.video_id)">
                <img :src="item.logo_img" alt="" style="height: 203px;">
                <p style="color: #fff;text-align: center;height: 60px;margin-top: 20px;">{{item.video_title}}</p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getVideo,getVideoDetail } from '@/api/playlet'
const getUrlParams = (url)=> {
  const paramsRegex = /[?&]+([^=&]+)=([^&]*)/gi;
  const params = {};
  let match;
  while (match = paramsRegex.exec(url)) {
    params[match[1]] = match[2];
  }
  return params;
}
const state = reactive({
    videoList:[],
    page:1
});
const scrollRef = ref();
onMounted(async () => {
    await videoList()
    console.log('scrollRef',scrollRef.value)
    if (scrollRef.value) {
        // 给元素添加滚动监听器
        scrollRef.value.addEventListener('scroll', handleScroll, true)
    
        // 如果你需要在组件卸载时移除监听器，可以返回一个清理函数
        // return () => {
        // scrollRef.value.removeEventListener('scroll', handleScroll, true)
        // }
    }
})
const handleScroll = async (e: any) => {
    console.log(e);
    scrollTopVal.value = e.target.scrollTop
    let offsetHeight = e.target.offsetHeight
    let scrollHeight = e.target.scrollHeight
    if (scrollTopVal.value + offsetHeight >= scrollHeight-100) {
        console.log(123);
    }
}
const videoList = ()=>{
    getVideo({page:state.page}).then((res)=>{
        console.log(res);
        let list = res.data.videoList;
        for(var i in list){
            state.videoList.push(list[i]);
        }
    })
}
// videoList();
const goVideoDetail = (video_id)=>{
    location.href = '/player?video_id='+video_id;
    // router.push({
    //     path: `/player`,
    //     query: {
    //         video_id: video_id,
    //     }
    // })
    // getVideoDetail({video_id:video_id}).then((res)=>{
        
    // })
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