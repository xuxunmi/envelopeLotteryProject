<template>
  <div class="app-container">
    <div class="bg-chunk">
      <div class="title-chunk">
        <div>您将获得</div>
        <div>看精彩短剧+抽888元红包机会</div>
      </div>
      <div class="original-price">
        <span class="icon-chunk">¥</span>888
        <div class="price-chunk">
          <div class="text">·解锁·</div>
          <div class="price">99.90元</div>
        </div>
      </div>
      <div class="payment-chunk">
        <div class="use-comment-chunk">
          <!-- :duration="100" -->
          <van-swipe
            style="height: 25px"
            vertical
            :autoplay="600"
            :show-indicators="false"
            :touchable="false"
            :loop="true"
          >
            <van-swipe-item v-for="item in winnersInfoList" :key="item.id">
              <div class="flex justify-between items-center h-full">
                <div class="flex items-center h-full">
                  <img style="width: 21px; height: 21px" :src="item.imgUrl" alt="" />
                  <span style="margin-left: 5px">{{ item.name }}</span>
                </div>
                <div>
                  {{ item.desc1 }}
                  <span style="color: red">{{ item.money }}</span>
                  {{ item.desc2 }}
                </div>
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
        <div class="button-chunk animation_scaling" @click="handleGetNowBtn">立即领取</div>
        <div class="payment-select-chunk">
          <div class="paySelect-component">
            <div class="adm-space adm-space-vertical" />
          </div>
        </div>
      </div>
      <div class="copyright-chunk">
        <div class="copyright-info">
          <p>版权信息</p>
          <p>武汉云点点网络科技有限公司</p>
          <p>客服电话:<span class="phone">13650803912</span></p>
          <p>地址：武汉市洪山区书城路名士1号S-1商业第2层1号房</p>
          <p>辽ICP备2023010590号</p>
        </div>
      </div>
    </div>
    <div class="right-fixed-chunk-1" @click="dialogVisible = true">
      <img src="@/assets/images/24012515281(6).webp" alt="" />
    </div>
    <div class="right-fixed-chunk-2" @click="handleCustomerService">
      <img src="@/assets/images/24012515281(7).webp" alt="" />
    </div>

    <van-dialog v-model:show="dialogVisible" :show-confirm-button="false" width="340px">
      <div class="adm-modal-content">
        <div>
          <h1>活动规则</h1>
          <p>一、活动时间:即日起至 2024 年12月 31 日:</p>
          <p>二、具体规则</p>
          <p>1、用户付费购买短剧后，可在结果页（继续看剧入口）观看 10 集短剧；</p>
          <p>2、用户付费购买短剧后，限时赠送幸运大转盘机会一次，用户自主选择是否参加；</p>
          <p>
            3、参加幸运大转盘活动的用户，有机会获得以下惊喜： 惊喜一：88 元至 2888 元不等的现金红包，中奖概率 1/99999;
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
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { record,alipay,check_alipay,login } from '@/api/playlet'
import imgage1 from '@/assets/images/24012515281(2).webp'
import imgage2 from '@/assets/images/24012515281(3).webp'
import imgage3 from '@/assets/images/24012515281(4).webp'
import imgage4 from '@/assets/images/24012515281(8).webp'
import imgage5 from '@/assets/images/24012515281(10).webp'
import { pay } from '@/api/playlet'
import { showConfirmDialog   } from 'vant'

defineOptions({
  name: 'watchdramaSmokeRedEnvelope'
})

const router = useRouter()
const route = useRoute()
const payParams = reactive(route.query)
// 支付信息
const paymentForm = ref<any>({})
// 支付地址
const paymentServerUrl = ref()
const timer = ref()
console.log('route: ',payParams)
let channelKey = payParams.channel_key;
const dialogVisible = ref(false)
const a_oId = route.query.a_oId?route.query.a_oId:'';
localStorage.setItem('a_old',a_oId);
// const qcjParamStr = localStorage.getItem('qcjParamsStr');
const qcjParamStr = payParams.qcjParamsStr;
const userLogin = async () => {
  try {
    const params = {
      channel_key: channelKey
    }
    const { data } = (await login(params)) as any
    console.log('data: ', data)
    Object.assign(payParams, data)
    handleTimerGo()
  } catch (error) {
    console.log(error)
  }
}
userLogin();
console.log("payParams:",payParams);
// localStorage.setItem('uuid',payParams.uuid);
// localStorage.getItem('qcjParamsStr');
const winnersInfoList = ref([
  {
    id: 1,
    name: '蒋**',
    money: '288',
    desc1: '看短剧抽中了',
    desc2: '元红包',
    imgUrl: imgage1
  },
  {
    id: 2,
    name: '林**',
    money: '288',
    desc1: '看短剧抽中了',
    desc2: '元红包',
    imgUrl: imgage2
  },
  {
    id: 3,
    name: '张**',
    money: '88',
    desc1: '看短剧抽中了',
    desc2: '元红包',
    imgUrl: imgage3
  },
  {
    id: 4,
    name: '徐**',
    money: '888',
    desc1: '看短剧抽中了',
    desc2: '元红包',
    imgUrl: imgage4
  },
  {
    id: 5,
    name: '陈**',
    money: '78',
    desc1: '看短剧抽中了',
    desc2: '元红包',
    imgUrl: imgage5
  }
])
const userRecord = async () => {
  try {
    const { data } = (await record(route.query)) as any
    console.log('data: ', data)
  } catch (error) {
    console.log(error)
  }
}

userRecord()
const isWeiXin = ()=> {
  var ua = navigator.userAgent.toLowerCase()
  if (ua.indexOf('micromessenger') != -1) {
    return true
  } else {
    return false
  }
}
const handleGetNowBtn = async () => {
    try {
      const params = {
        channel_key: payParams.channel_key,
        uuid: payParams.uuid,
        qcjParamStr:qcjParamStr,
        a_oId:a_oId
      }
      if(isWeiXin() == true){
      
      const { data } = (await pay(params)) as any
      console.log('data: ', data)
      const paramsPay = data.params
      const serverUrl = data.serverUrl

      const div = document.createElement('formdiv')
      div.innerHTML = `
        <form name="formPay" action="${serverUrl}" method="post">
          <input type="hidden" name="cusid" id="cusid" value="${paramsPay.cusid}" />
          <input type="hidden" name="appid" id="appid" value="${paramsPay.appid}"/>
          <input type="hidden" name="version" id="version" value="${paramsPay.version}" />
          <input type="hidden" name="randomstr" id="randomstr" value="${paramsPay.randomstr}"/>
          <input type="hidden" name="trxamt" id="trxamt" value="${paramsPay.trxamt}" />
          <input type="hidden" name="reqsn" id="reqsn" value="${paramsPay.reqsn}"/>
          <input type="hidden" name="charset" id="charset" value="${paramsPay.charset}" />
          <input type="hidden" name="returl" id="returl" value="${paramsPay.returl}"/>
          <input type="hidden" name="notify_url" id="notify_url" value="${paramsPay.notify_url}"/>
          <input type="hidden" name="body" id="body" value="${paramsPay.body}" />
          <input type="hidden" name="validtime" id="validtime" value="${paramsPay.validtime}"/>
          <input type="hidden" name="signtype" id="signtype" value="${paramsPay.signtype}"/>
          <input type="hidden" name="sign" id="sign" value="${paramsPay.signMsg}" />

          <div class="weui-btn-area">
            <input class="weui-btn weui-btn_default" type="submit" value="跳转至收银宝H5收银台 >>" />
          </div>
        </form>
      `
      document.body.appendChild(div)
      document.forms['formPay'].setAttribute('target', '_self')
      document.forms['formPay'].submit()
      div.remove()
    }else{
      const { data } = (await alipay(params)) as any
      window.open(data.url);
      // let  data2
      let i = 1;
      let checkpay = ()=>{
        let payinterval = setInterval(()=>{
        i = i+1;
        if(i >= 110){
          console.log(i);
          clearInterval(payinterval);
          showConfirmDialog({
            title: '提示', 
            message: '是否已完成支付？', 
            confirmButtonText: '未支付', // 自定义确认按钮文案
            cancelButtonText: '已支付', // 自定义取消按钮文案
            }) .then(() => { 
              handleGetNowBtn();
            }).catch(() => { 
              i=1;
              checkpay();
            })
        }
        check_alipay({'order_sn':data.order_sn,'uuid':payParams.uuid}).then((data2)=>{
          console.log('data2: ', data2)
          if(data2.code == 1){
            clearInterval(payinterval);
            router.push({
              path: `/smokeRedEnvelope_res`,
              query: {
                uuid: data2.data.uuid,
                channel_key: data.channel_key,
                order_sn: data2.data.order_sn,
                a_oId: a_oId,
              }
            })
            // showConfirmDialog({
            //   title: '提示', 
            //   message: '已完成支付', 
            //   confirmButtonText: '去抽奖', // 自定义确认按钮文案
            //   cancelButtonText: '确定', // 自定义取消按钮文案
            //   }) .then(() => { 
            //     router.push({
            //       path: `/smokeRedEnvelope_res`,
            //       query: {
            //         uuid: data2.data.uuid,
            //         channel_key: data.channel_key,
            //         order_sn: data2.data.order_sn,
            //       }
            //     })
            //   }) .catch(() => { 
            //     router.push({
            //       path: `/smokeRedEnvelope_res`,
            //       query: {
            //         uuid: data2.data.uuid,
            //         channel_key: data.channel_key,
            //         order_sn: data2.data.order_sn,
            //       }
            //     })
            
            // })
          }
        })
        },500)
      }
      setTimeout(() => {
        checkpay();
      }, 2000);
    }
  } catch (error) {
    console.log(error)
  }
}
const handleTimerGo = () => {
  // 延时处理
  if (timer.value) clearTimeout(timer.value)
  timer.value = setTimeout(() => {
    const fingerClickElment = document.querySelector('.finger-click') as HTMLElement
    console.dir(fingerClickElment)
    if (fingerClickElment) {
      fingerClickElment.style.transform = 'rotate(-15deg)'
      fingerClickElment.style.transition = 'transform 0.3s linear'
      setTimeout(() => {
        router.push({
          path: `/watchdramaSmokeRedEnvelope`,
          query: {
            uuid: payParams.uuid,
            channel_key: payParams.channel_key
          }
        })
      }, 500)
    }
  }, 100)
}
const handleCustomerService = () => {
  window.open(
    // 'https://hwpage.liuyuekeji.cn/complaint/mvzZ3?from=tajqdjhbl07&addType=15&a_cid=&a_oId=&a_tuiaId=&device=&a_deviceId=&imeiMd5=&idfaMd5=&oaidMd5=',
    'https://work.weixin.qq.com/kfid/kfc6182f27dc2fe4960',
    '_self'
  )
}
</script>

<style lang="less" scoped>
.app-container {
  .bg-chunk {
    width: 100%;
    height: 100%;
    margin: auto;
    background: url('@/assets/images/24012515281(1).webp') no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
    position: relative;
    .title-chunk {
      font-size: 16px;
      font-weight: 700;
      margin-top: 100px;
      color: #ff4523;
      text-align: center;
    }
    .original-price {
      position: relative;
      margin-top: 45px;
      text-align: center;
      color: #e03733;
      font-size: 76px;
      font-weight: bold;
      span {
        font-size: 26px;
        font-weight: initial;
      }
      .price-chunk {
        background: url('@/assets/images/24012515281(5).webp') no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: -10px;
        right: 45px;
        width: 75px;
        height: 60px;
        padding: 12px 10px 16px;
        .text,
        .price {
          color: #fdebc9;
          text-align: center;
        }
        .text {
          font-size: 12px;
        }
        .price {
          font-size: 14px;
        }
      }
    }
    .payment-chunk {
      width: 367px;
      height: 220px;
      margin: 140px auto auto;
      background: url('@/assets/images/24012515281(9).webp') no-repeat;
      background-size: 100% 100%;
      overflow: hidden;
      &::before {
        content: '';
        display: table;
      }
      .use-comment-chunk {
        width: 317px;
        height: 20px;
        margin: 35px auto auto;
      }
      .button-chunk {
        width: 310px;
        height: 60px;
        margin: 21px auto auto;
        background-color: #e73b1b;
        border-radius: 30px;
        color: #fff;
        font-size: 28px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        -webkit-animation: scaleDraw 1s ease-in-out infinite;
        animation: scaleDraw 1s ease-in-out infinite;
      }
      @keyframes scaleDraw {
        0% {
          -webkit-transform: scale(1);
          transform: scale(1);
        }
        50% {
          -webkit-transform: scale(1.1);
          transform: scale(1.1);
        }
        100% {
          -webkit-transform: scale(1);
          transform: scale(1);
        }
      }
    }
    .copyright-chunk {
      margin: 40px auto 100px;
      color: #fff;
      font-size: 9px;
      text-align: center;
        .copyright-info {
          .phone {
            letter-spacing: 1px;
          }
      }
    }
  }
  .right-fixed-chunk-1,
  .right-fixed-chunk-2 {
    position: fixed;
    right: 0;
    width: 21px;
  }
  .right-fixed-chunk-1 {
    top: 27.5px;
  }
  .right-fixed-chunk-2 {
    top: 148.5px;
  }

  :deep(.van-dialog) {
    top: 42%;
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