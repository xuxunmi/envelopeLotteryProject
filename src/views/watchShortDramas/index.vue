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
        <div class="title-fixed-chunk">
          <div class="left-chunk">继续看剧抽红包</div>
          <div class="right-chunk" @click="goBackWatchdramaSmokeRedEnvelope">看短剧抽888元红包</div>
        </div>
      </div>
    </header>
    <section>
      <div class="info-chunk">点击下方入口进入大转盘参与抽奖</div>
      <div class="award-entrance-img-chunk" @click="goShortDramasDrawredenvelopes">
        <img src="@/assets/images/2023062815161.webp" alt="" />
      </div>
      <div class="banner-img-chunk banner-chunk-1" @click="goBackWatchdramaSmokeRedEnvelope">
        <img src="@/assets/images/da222.webp" alt="" />
      </div>
      <p class="text">
        对结果有疑问？点此
        <span class="color icon-img" @click="handleCustomerService">投诉</span>
        或
        <span class="color" @click="handleCustomerService">联系人工客服</span>
      </p>
      <div class="subsidy-chunk">- 薅补贴 一个也不能少 -</div>
      <div class="banner-img-chunk banner-chunk-2" @click="goVideo">
        <img src="@/assets/images/1523.webp" alt="" />
      </div>
      <div class="banner-img-chunk banner-chunk-2" @click="goBackWatchdramaSmokeRedEnvelope">
        <img src="@/assets/images/12zhong1888.webp" alt="" />
      </div>
      <div class="banner-img-chunk banner-chunk-3" @click="goBackWatchdramaSmokeRedEnvelope">
        <img src="@/assets/images/22zhong888.webp" alt="" />
      </div>
      <div class="content-title-chunk">
        <div class="img-chunk">
          <img src="@/assets/images/202306281516.webp" alt="" />
        </div>
      </div>
      <div class="content-title-chunk-2">点击下方播放按钮继续看剧</div>
      <div class="banner-img-chunk banner-chunk-4" @click="goVideo">
        <img src="@/assets/images/1523.webp" alt="" />
      </div>
      <div class="banner-img-chunk banner-chunk-4" @click="goBackWatchdramaSmokeRedEnvelope">
        <img src="@/assets/images/da222.webp" alt="" />
      </div>
      <div class="banner-img-chunk banner-chunk-4" @click="goBackWatchdramaSmokeRedEnvelope">
        <img src="@/assets/images/33da888.webp" alt="" />
      </div>
      <div class="hot-recommend-chunk">热门推荐</div>
      <div class="banner-img-chunk banner-chunk-5" @click="goBackWatchdramaSmokeRedEnvelope">
        <img src="@/assets/images/1remen33.webp" alt="" />
      </div>
      <div class="banner-img-chunk banner-chunk-5" @click="goBackWatchdramaSmokeRedEnvelope">
        <img src="@/assets/images/1remen33.webp" alt="" />
      </div>
      <div class="banner-img-chunk banner-chunk-5" @click="goBackWatchdramaSmokeRedEnvelope">
        <img src="@/assets/images/1remen33.webp" alt="" />
      </div>
    </section>
    <footer>
      <div v-if="isVisable" class="bottom-chunk">
        <div class="bottom-fixed-chunk">
          <div class="left-chunk" @click="pointClick('result-top')">返回顶部</div>
          <div class="right-chunk" @click="goBackWatchdramaSmokeRedEnvelope">看热播剧抽888元红包</div>
        </div>
      </div>
    </footer>
    <div class="right-fixed1-chunk" @click="goBackWatchdramaSmokeRedEnvelope">
      <div class="circle-bg-chunk">
        <span class="top">红包</span>
        <span>抽奖</span>
      </div>
      <div class="circle-bg-chunk">
        <span class="top">短剧</span>
        <span>抽奖</span>
      </div>
      <div class="circle-bg-chunk">
        <span class="top">短剧</span>
        <span>红包</span>
      </div>
    </div>
    <div class="right-fixed2-chunk" @click="goBackWatchdramaSmokeRedEnvelope">
      <img src="@/assets/images/xuanfu41.webp" alt="" />
    </div>
    <div class="left-fixed1-chunk" @click="dialogVisible = true">
      <img src="@/assets/images/202304231756.webp" alt="" />
    </div>
    <div class="zhuanpan" v-if="showZhuanpan">
      <zhuanpan :payParams="payParams" />
    </div>
    <van-dialog v-model:show="dialogVisible" :show-confirm-button="false" width="340px">
      <div class="adm-modal-content">
        <div>
          <h1>活动规则</h1>
          <p>一、活动时间:即日起至 2024 年12月 31 日:</p>
          <p>二、具体规则</p>
          <p>1、用户付费购买短剧后，可在结果页（继续看剧入口）观看海量免费短剧，短剧网站https://bao.sydaxin.top/video；</p>
          <p>2、用户付费购买短剧后，限时赠送幸运大转盘机会一次，用户自主选择是否参加；</p>
          <p>
            3、参加幸运大转盘活动的用户，有机会获得以下惊喜： 惊喜一：88 元至 888 元不等的现金红包，中奖概率 1/99999;
            惊喜二： 20 元以内拼多多购物抵扣券一张，中奖概率 99998/99999；
          </p>
          <p>4、用户在幸运大转盘获得奖品后，请勿退出活动，退出可能导致奖品丢失，请在获得奖品后及时兑换或领取；</p>
          <p>
            5、抽中现金红包的用户，可在弹出页面填写手机号或联系在线客服领奖；抽中拼多多购物抵扣券的用户，可在活动页面跳转至拼多多领取并使用。
          </p>
        </div>
        <div class="adm-modal-footer" @click="dialogVisible = false">我知道了</div>
      </div>
    </van-dialog>
  </div>
</template>

<script setup lang="ts">
import zhuanpan from "@/components/zhuanpan/index.vue";
import { defineComponent } from "vue";
import { tuia } from '@/api/playlet'
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'


defineOptions({
  name: 'watchShortDramas'
})

const router = useRouter()
const route = useRoute()
const payParams = reactive(route.query)
console.log('route: ', route.query, payParams)
const dialogVisible = ref(false)
const showZhuanpan = ref(false)
const pointClick = (id: string) => {
  const el = document.querySelector(`#${id}`) as HTMLDivElement
  console.log('pointClick', el)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
let channel_key = payParams.channel_key;
channel_key = channel_key.split('?');
if(channel_key.length > 1){
  payParams.channel_key = channel_key[0];
}
// let a_old = localStorage.getItem('a_old');
// if(!a_old){
  const a_oId = payParams.a_oId;
// }
console.log("a_oId",a_oId);
// const lettuia = async () => {
//   try {
//     let formData = new FormData();
//     formData.append('clickId',a_oId);
//     formData.append('channel',2);
//     // const params = {
//     //   clickId: a_old,
//     //   channel:2
//     // }
//     const { data } = (await tuia(formData)) as any
//     console.log('data: ', data)
//   } catch (error) {
//     console.log(error)
//   }
// }
// lettuia();
// console.log(channel_key);
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

const goBackWatchdramaSmokeRedEnvelope = () => {
  router.push({
    path: `/watchdramaSmokeRedEnvelope`,
    query: {
      uuid: payParams.uuid,
      channel_key: payParams.channel_key
    }
  })
}

const goVideo = () => {
  // location.href = 'https://h5.zjchjc.cn/#/?app_id=bc123';
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
    // 'https://hwpage.liuyuekeji.cn/complaint/mvzZ3?from=tajqdjhbl07&addType=15&a_cid=&a_oId=&a_tuiaId=&device=&a_deviceId=&imeiMd5=&idfaMd5=&oaidMd5=',
    'https://work.weixin.qq.com/kfid/kfc6182f27dc2fe4960',
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
