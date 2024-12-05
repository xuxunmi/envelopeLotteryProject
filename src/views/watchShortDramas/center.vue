<template>
    <div id="result-top" class="app-container">
      <header>
        <div class="top-chunk">
          <div class="top-fixed-chunk">
            <span class="left-text-chunk" @click="goBackWatchdramaSmokeRedEnvelope">返回</span>
            <span class="dot-three-chunk" @click="goBackWatchdramaSmokeRedEnvelope">
              <span class="dot" />
              <span class="dot" />
              <span class="dot" />
            </span>
          </div>
        </div>
        <div class="title-chunk">
          <!-- <div class="title-fixed-chunk">
            <div class="left-chunk">继续看剧抽红包</div>
            <div class="right-chunk" @click="goBackWatchdramaSmokeRedEnvelope">看短剧抽888元红包</div>
          </div> -->
        </div>
      </header>
      <section>
        <div class="info-chunk">看短剧和红包抽奖请点击复制</div>
        <div class="award-entrance-img-chunk" @click="copyUrl">
          <img src="@/assets/images/2023062815161.webp" alt="" />
        </div>
        <div class="banner-img-chunk banner-chunk-1" style="text-align: -webkit-center;" >
          <!-- <img src="@/assets/images/da222.webp" alt="" /> -->
          <p style="font-size: 20px;text-align: center;">请点击“点我抽奖”，复制链接到浏览器打开，完成红包抽奖和观看海量短剧</p>
        </div>
      </section>
      </div>
  </template>
  
  <script setup lang="ts">
  import zhuanpan from "@/components/zhuanpan/index.vue";
import { showToast } from "vant";
  import { defineComponent } from "vue";
  import { ref, reactive } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  
  defineOptions({
    name: 'watchShortDramas'
  })
  
  const router = useRouter()
  const route = useRoute()
  const payParams = reactive(route.query)
  console.log('route: ', route.query, payParams)
  let a_oId = localStorage.getItem('a_oId');
  if(!a_oId){
    a_oId = route.query.a_oId;
  }
  const dialogVisible = ref(false)
  const showZhuanpan = ref(false)
  const pointClick = (id: string) => {
    const el = document.querySelector(`#${id}`) as HTMLDivElement
    console.log('pointClick', el)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  
  const goShortDramasDrawredenvelopes = () => {
    showZhuanpan.value = true;
    // setTimeout(()=>{
    //   console.log(1);
    // },100)
    // router.push({
    //   path: `/shortDramasDrawredenvelopes`,
    //   query: {
    //     orderNo: payParams.orderNo,
    //     uuid: payParams.uuid,
    //     channel_key: payParams.channel_key
    //   }
    // })
  }
    const copyUrl = () =>{
        let url = 'https://bao.sydaxin.top/smokeRedEnvelope_res?orderNo='+payParams.orderNo+'&uuid='+payParams.uuid+'&channel_key='+payParams.channel_key+'&a_oId='+a_oId;
        copyTextToClipboard(url);
        showToast('复制成功！')
    }
  const goBackWatchdramaSmokeRedEnvelope = () => {
    router.push({
      path: `/watchdramaSmokeRedEnvelope`,
      query: {
        uuid: payParams.uuid,
        channel_key: payParams.channel_key
      }
    })
  }
    const copyTextToClipboard = (text)=> {
    // 获取元素内容
    // 创建一个临时的输入框来存储文本
    const input = document.createElement('input');
    input.value = text;
    
    // 将输入框添加到页面，但不显示
    document.body.appendChild(input);
    input.select(); // 选择输入框的内容
    
    // 执行复制操作
    const isSuccessful = document.execCommand('copy');
    
    // 清除临时输入框
    document.body.removeChild(input);
    
    // 返回操作结果
    return isSuccessful;
    }
  
  const goVideo = () => {
    router.push({
      path: `/video`,
      query: {
        uuid: payParams.uuid,
        channel_key: payParams.channel_key
      }
    })
  }
  
  const handleCustomerService = () => {
    window.open(
      'https://hwpage.liuyuekeji.cn/complaint/mvzZ3?from=tajqdjhbl07&addType=15&a_cid=&a_oId=&a_tuiaId=&device=&a_deviceId=&imeiMd5=&idfaMd5=&oaidMd5=',
      '_self'
    )
  }
  
  //监听窗口滚动
  const isVisable = ref(false)
  // body不能设置100%高度，不然会影响页面会影响滚动事件的触发条件
  const windowScrollListener = () => {
    //获取操作元素最顶端到页面顶端的垂直距离
    const scrollTop = window.pageXOffset || document.body.scrollTop || document.documentElement.scrollTop
    console.log('scrollTop: ', scrollTop)
    if (scrollTop >= 360) {
      isVisable.value = true //大于360时显示元素
    } else {
      isVisable.value = false //小于360时隐藏元素
    }
  }
  
  window.addEventListener('scroll', () => {
    requestAnimationFrame(windowScrollListener)
  })
  
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', windowScrollListener)
  })
  
  </script>
  
  <style lang="less" scoped>
  .zhuanpan{
    background: rgba(0,0,0,.5);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
  }
  .app-container {
    header {
      .top-chunk {
        width: 100%;
        height: 44px;
        .top-fixed-chunk {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 44px;
          margin: auto;
          background-color: #fff;
          z-index: 1;
          .left-text-chunk {
            display: flex;
            align-items: center;
            color: #3c3737;
            font-size: 18px;
            margin-left: 18px;
            &::before {
              content: '';
              display: block;
              width: 11px;
              height: 11px;
              border-left: 0.03rem solid #3c3737;
              border-top: 0.03rem solid #3c3737;
              -webkit-transform: rotate(-45deg);
              transform: rotate(-45deg);
            }
          }
          .dot-three-chunk {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 26.5px;
            .dot {
              display: block;
              width: 4px;
              height: 4px;
              margin-left: 5px;
              background: #3c3737;
              border-radius: 50%;
            }
          }
        }
      }
      .title-chunk {
        width: 100%;
        height: 40px;
        .title-fixed-chunk {
          position: fixed;
          top: 44px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 40px;
          margin: auto;
          background-color: #fff;
          line-height: 40px;
          border: 0.5px solid #c91c18;
          font-size: 16px;
          font-weight: 400;
          text-align: center;
          z-index: 1;
          .left-chunk,
          .right-chunk {
            width: 50%;
            height: 40px;
            cursor: pointer;
          }
          .left-chunk {
            background-color: #c91c18;
            color: #fff;
          }
          .right-chunk {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #c91c18;
            &::before {
              content: '';
              display: block;
              width: 12px;
              height: 14px;
              margin-right: 10px;
              background: url('@/assets/images//202303221116.webp') no-repeat;
              background-size: 100% 100%;
            }
          }
        }
      }
    }
    section {
      padding-bottom: 74.5px;
      .info-chunk {
        display: flex;
        align-items: center;
        width: 100%;
        height: 30px;
        background: rgba(255, 228, 234, 0.5);
        color: #999;
        font-size: 14px;
        font-weight: 400;
        line-height: 30px;
        padding-left: 30px;
        &::before {
          content: '';
          display: block;
          width: 15.5px;
          height: 12.5px;
          margin-right: 13px;
          background: url('@/assets/images/202304231754.webp') no-repeat;
          background-size: 100% 100%;
        }
      }
      .award-entrance-img-chunk {
        width: 100%;
        margin: 7px auto auto;
      }
      .banner-img-chunk {
        width: 360px;
        margin: auto;
      }
      .banner-chunk-1,
      .banner-chunk-2 {
        margin-top: 14px;
      }
      .banner-chunk-3 {
        margin-top: 10px;
      }
      .banner-chunk-4 {
        margin-top: 20px;
      }
      .banner-chunk-5 {
        margin-top: 19.5px;
      }
      .text {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 11.5px;
        color: #525252;
        font-size: 14px;
        line-height: 14px;
        text-align: center;
        white-space: nowrap;
        .icon-img {
          display: flex;
          justify-content: center;
          align-items: center;
          &::before {
            content: '';
            display: block;
            width: 14px;
            height: 12px;
            background: url('@/assets/images/202304241640.webp') no-repeat;
            background-size: 100% 100%;
          }
        }
        .color {
          color: #549cff;
        }
      }
      .subsidy-chunk {
        width: 100%;
        height: 36.5px;
        line-height: 36.5px;
        margin: 20.5px auto auto;
        background-color: #ffe4ea;
        color: #c91c18;
        font-size: 14px;
        text-align: center;
      }
      .content-title-chunk {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 42.5px;
        margin: 24px auto auto;
        background-color: #fef1fa;
        .img-chunk {
          width: 165px;
        }
      }
      .content-title-chunk-2 {
        width: 100%;
        height: 51.5px;
        line-height: 16px;
        padding-top: 9px;
        background: url('@/assets/images/202304231761.webp') no-repeat;
        background-size: 100% 100%;
        color: #fff;
        font-size: 16px;
        font-weight: 400;
        text-align: center;
      }
      .hot-recommend-chunk {
        width: 100%;
        height: 39px;
        line-height: 39px;
        margin: 20px auto auto;
        background-color: rgba(225, 221, 227, 0.3);
        color: #c91c18;
        font-size: 18px;
        font-weight: 400;
        text-align: center;
      }
    }
    footer {
      .bottom-chunk {
        width: 100%;
        height: 55.5px;
        .bottom-fixed-chunk {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 55.5px;
          line-height: 55.5px;
          margin: auto;
          background-color: #fff;
          border: 0.5px solid #c91c18;
          font-size: 18px;
          text-align: center;
          .left-chunk {
            width: 109.5px;
            height: 55.5px;
            color: #c91c18;
          }
          .right-chunk {
            display: flex;
            justify-content: center;
            align-items: center;
            width: calc(100% - 109.5px);
            height: 55.5px;
            background-color: #c91c18;
            color: #fff;
            &::before {
              content: '';
              display: block;
              width: 19px;
              height: 14px;
              margin-right: 10px;
              background: url('@/assets/images/202304231770.webp') no-repeat;
              background-size: 100% 100%;
            }
          }
        }
      }
    }
    .right-fixed1-chunk {
      position: fixed;
      right: 0px;
      top: 180px;
    }
    .circle-bg-chunk {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 41px;
      height: 41px;
      margin-bottom: 10px;
      background: url('@/assets/images/202304231757.webp') 0% 0% / 100% 100% no-repeat;
      .top {
        margin-bottom: 2px;
      }
      span {
        color: rgb(255, 255, 255);
        display: block;
        font-size: 12px;
        line-height: 12px;
      }
    }
    .right-fixed2-chunk {
      position: fixed;
      right: 0;
      top: 404px;
      width: 23.5px;
    }
    .left-fixed1-chunk {
      position: fixed;
      top: 213.5px;
      left: 0;
      width: 23.5px;
      z-index: 9;
    }
  
    :deep(.van-dialog) {
      // top: 42%;
      border-radius: 8px;
      .van-dialog__content {
        padding: 20px 12px 20px;
        .adm-modal-content {
          font-size: 15px;
          h1 {
            text-align: center;
          }
        }
        .adm-modal-footer {
          width: 90%;
          line-height: 50px;
          margin: 20px auto 0;
          background-color: #1677ff;
          font-size: 18px;
          color: #fff;
          border-radius: 4px;
          text-align: center;
        }
      }
    }
  }
  </style>
  