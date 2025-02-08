<template>
    <video id="player-container-id" height="270" autoplay preload="auto" playsinline webkit-playsinline>
    </video>
    <div class="xuanji" style="margin-top: 20px;margin-left: 1em;">
      <p style="font-size: 24px;">{{ state.title }}</p>
      <p style="font-size: 24px;">选集</p>
    </div>
    
    <ul style="margin-top: 10px;">
        
        <li v-for="(item,index) in state.list" @click="selectVideo(index)" :class="item.idx == state.activeIndex?'active':''">{{ index+1 }}</li>
        <!-- <li class="active">1</li>
        <li>1</li>
        <li>1</li> -->
    </ul>
</template>
<style>
#player-container-id{
  width: 100vw;
}
  ul li{
    float: left;
    margin-left: 1em;
    padding:10px 20px;
    color:#000;
    background: #ccc;
    width: 60px;
    text-align: center;
    margin-top: 10px;
  }
  .active{
    color:#f40
  }
    /* color:#f40 */
</style>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getVideo,getVideoDetail } from '@/api/playlet'
import TCPlayer from 'tcplayer.js';
import 'tcplayer.js/dist/tcplayer.min.css';
// const router = useRouter();
const route = useRoute()
let video_id = route.query.video_id;
console.log(video_id);
let player;
let state = reactive({
  'list':[],
  'activeIndex':0,
  'title':"",
})
const selectVideo = (index)=>{
  state.activeIndex = index;
  state.title = state.list[index].episode_title,
  player.loadVideoByID({
    fileID: state.list[index].tcplayer_file_id, // 请传入需要播放的视频 filID 必须
    appID: state.list[index].tcplayer_app_id, // 请传入点播账号的 appID 必须
    psign: state.list[index].tcplayer_sign,
    autoplay:true,
  });
  // player = TCPlayer("player-container-id", {
  //   fileID: state.list[index].tcplayer_file_id,
  //   appID: state.list[index].tcplayer_app_id,
  //   psign: state.list[index].tcplayer_sign,
  //   licenseUrl:"https://license.vod2.myqcloud.com/license/v2/1314161253_1/v_cube.license"
  // });
}

const vdetail = async () =>{
  await getVideoDetail({video_id:video_id}).then((res)=>{
    let list = res.data.videoList.data;
    if(list.length > 0){
      for(var i in list){
        list[i]['idx'] = i;
      }
      state.list = list;
      state.title = list[0].episode_title,
      console.log("state.list",state.list);
      player = TCPlayer("player-container-id", {
        fileID: list[0].tcplayer_file_id,
        appID: list[0].tcplayer_app_id,
        psign: list[0].tcplayer_sign,
        autoplay:true,
        licenseUrl:"https://license.vod2.myqcloud.com/license/v2/1314161253_1/v_cube.license"
      });
      player.on('ended', function() {
        // 播放结束后，自动播放下一个视频
        let nextVideo = state.list[state.activeIndex+1];
        state.activeIndex = state.activeIndex+1;
        if(nextVideo){
          player.loadVideoByID({
            fileID: nextVideo.tcplayer_file_id, // 请传入需要播放的视频 filID 必须
            appID: nextVideo.tcplayer_app_id, // 请传入点播账号的 appID 必须
            psign: nextVideo.tcplayer_sign,
            autoplay:true,
          });
        }
    });
    }
    
  })
}

vdetail()
</script>