<template>
  <div class="app-container">
    <div class="app-container__bg relative">
      <img class="red-envelope relative" src="@/assets/images/bg-image1.webp" alt="" />
      <div class="open-wrapper" @click="handleOpenRedEnvelope">
        <img src="@/assets/images/open.webp" alt="" />
      </div>
      <div class="finger-wrapper">
        <img class="finger-click" src="@/assets/images/finger-click.webp" alt="" />
      </div>
    </div>
    <div class="right-fixed1-chunk" @click="handleRuleOpen">
      <img class="rule" src="@/assets/images/rule.webp" alt="" />
    </div>
    <div class="right-fixed2-chunk" @click="handleGoCustomerService">
      <img class="customer-service" src="@/assets/images/customer-service.webp" alt="" />
    </div>
    <div class="record-description-wrapper">
      <div class="record1">沈阳达信网络科技有限公司</div>
      <div class="record2" />
      <div class="record3">辽ICP备2023010590号</div>
    </div>
    <!-- 弹窗 -->
    <div v-if="dialogVisible" class="rule-description-wrapper" @click="handleRuleClose">
      <div class="rule-content-wrapper">
        <p>一、活动时间</p>
        <p>即日起至 2024 年 12 月 31 日。</p>
        <p>二、活动说明</p>
        <p>1、凡在本公司H5网站中，付费购买微短剧的用户，均可在付费后的结果页上观看9部微短剧剧集；</p>
        <p>
          2、凡在本公司H5网站中，付费购买微短剧的用户，均限时免费赠送一次幸运大转盘活动的参加机会，用户可自主自愿选择参加或不参加；
        </p>
        <p>
          3、若用户选择参加本次幸运大转盘活动，则用户需赞同本次活动规则，否则视为无效参加，即视为用户未参加本次活动，无法获得任意惊喜（奖品）；
        </p>
        <p>4、用户参加幸运大转盘活动的入口在购买微短剧后的结果页网站中。</p>
        <p>三、活动规则</p>
        <p>1. 如用户自愿免费参加一次幸运大转盘的活动，有机会获得以下奖品：</p>
        <p>【奖品及中奖概率说明】</p>
        <p>惊喜一：88元至2888元不等的现金红包,整场活动的中奖概率不低于1/99999；</p>
        <p>
          惊喜二：0.01元至80元不等的拼多多购物抵扣券，用户可在购买拼多多平台的部分商品时进行抵扣使用，可抵扣的商品及金额由拼多多平台自行决定，与本公司无关。整场活动的中奖概率接近99998/99999；
        </p>
        <p>
          2.
          用户参加幸运大转盘活动后，抽中现金红包的用户可在直接弹出的页面进行领取（特别说明：抽中现金红包的用户，需自主填写正确的手机号码或联系客服人员进行领取）。用户提交后，由本公司统一核验真实性，本公司将在核验真实性后的12个月内，为属实抽中惊喜一的用户，完成奖品发放。抽中惊喜二（拼多多购物抵扣券）的用户，可在页面直接跳转，领取拼多多购物抵扣券，进入拼多多平台中使用。
        </p>
        <p>
          3.
          本次活动为用户自愿参与，用户在幸运大转盘活动中获得奖品后，如退出活动页面，可能导致奖品丢失，无法领取，因此请在获得奖品后及时进行领取，避免损失。若因用户自主退出等原因，导致奖品丢失或无法领取等情况的发生，与本公司无关；
        </p>
        <p>
          四、参加活动用户的使用设备不同，参与步骤可能存在不同，参与活动的具体操作步骤，请以进入活动页面时的页面实时展示为准。
        </p>
        <p>五、本次活动在活动期限内真实有效。</p>
        <p>
          六、本次幸运大转盘活动为概率性事件，秉持公正公开的原则，禁止任何作弊行为，本次活动的最终解释权归本公司所有。
        </p>
      </div>
      <div class="rule-record-wrapper">辽ICP备2023010590号</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { login } from '@/api/playlet'

defineOptions({
  name: 'SmokeRedEnvelope'
})

//#endregion
const router = useRouter()
const route = useRoute()
const channelKey = route.query.channel_key
const payParams = reactive({
  channel_key: '',
  channel_number: '',
  uuid: ''
})

console.log('route: ', route.query, channelKey, payParams)

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

userLogin()

const timer = ref()
const dialogVisible = ref(false)

const handleRuleOpen = () => {
  dialogVisible.value = true
  clearTimeout(timer.value)
}

const handleRuleClose = () => {
  dialogVisible.value = false
  handleTimerGo()
}

const handleGoCustomerService = () => {
  window.open(
    'https://tuia.qiyukf.com/client?k=895e029b6bd533c9e14a2706b28bd3be&wp=1&robotShuntSwitch=1&robotId=127637&gid=397581826',
    '_self'
  )
}

const handleOpenRedEnvelope = () => {
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
}

// 每次进入页面都先清空定时器
clearTimeout(timer.value)

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
  }, 3000)
}

watch(
  () => route.path,
  to => {
    if (to === '/smokeRedEnvelope') {
      clearTimeout(timer.value)
      // handleTimerGo();
    }
  },
  {
    immediate: true
  }
)
</script>

<style lang="less" scoped>
.app-container {
  background: url('@/assets/images/bg-image2.webp') no-repeat;
  background-size: cover;
  height: 100vh;
  overflow: hidden;

  .app-container__bg {
    .red-envelope {
      margin: 0 auto;
    }
    .open-wrapper {
      position: absolute;
      top: 0;
      right: 0;
      width: 15px;
    }
    .open-wrapper {
      position: absolute;
      top: 315px;
      left: 50%;
      width: 125px;
      height: 125px;
      margin-left: -62.5px;
      -webkit-animation: scaleDraw 1s ease-in-out infinite;
      animation: scaleDraw 1s ease-in-out infinite;
    }
    @keyframes scaleDraw {
      0% {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
      }
      50% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
      100% {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
      }
    }
    .finger-wrapper {
      position: absolute;
      top: 365px;
      left: 67%;
      margin-left: -35px;
      width: 70px;
    }
  }
  .right-fixed1-chunk,
  .right-fixed2-chunk {
    position: fixed;
    right: 0px;
    top: 0;
    width: 15px;
    cursor: pointer;
  }
  .right-fixed1-chunk {
    top: 30px;
  }
  .right-fixed2-chunk {
    top: 105px;
  }
  .record-description-wrapper {
    position: absolute;
    left: 0;
    bottom: 3%;
    width: 100%;
    height: 100px;
    text-align: center;
    font-size: 15px;
    color: #fff;
    .record1 {
      letter-spacing: 1px;
    }
    .record2 {
      letter-spacing: 2px;
    }
    .record3 {
      width: 180px;
      line-height: 2;
      margin: 40px auto 0;
      font-size: 12px;
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: 4px;
    }
  }

  .rule-description-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    padding: 0 2px;
    background-color: #fff;
    font-size: 16px;
    z-index: 9;
    .rule-record-wrapper {
      width: 180px;
      margin: 180px auto 10px;
      font-size: 12px;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: 4px;
      text-align: center;
      transition: all 0.5s ease-in;
    }
  }
}
</style>
