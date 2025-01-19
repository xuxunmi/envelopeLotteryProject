<template>
  <div class="app-container">
    <div class="monthly-collar-activity">
      <div class="head-wrapper">
        <van-swipe
          style="height: 170px"
          :autoplay="1000"
          :show-indicators="false"
          :touchable="true"
          :loop="true"
          lazy-render
        >
          <van-swipe-item v-for="item in carouselList" :key="item.id">
            <div class="flex justify-between items-center h-full">
              <img style="width: 100%; height: 100%" :src="item.imgUrl" alt="" />
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="main-content">
        <ul class="cont-top-img">
          <li class="item item1">
            <div class="negative negative1" />
            <img src="@/assets/images/monthlyCollarActivity/zgyd.webp" alt="" />
          </li>
          <li class="item item2">
            <div class="negative negative2" />
            <img src="@/assets/images/monthlyCollarActivity/zgdx.webp" alt="" />
          </li>
          <li class="item item3">
            <div class="negative negative3" />
            <img src="@/assets/images/monthlyCollarActivity/zglt.webp" alt="" />
          </li>
        </ul>
        <div class="billsty-container">
          <div class="title">话费月月领会员活动</div>
          <div class="input-wrapper">
            <van-field v-model="formData.phoneValue" placeholder="请输入手机号" />
          </div>
          <div class="tip-wrapper">
            *按月领取您的话费权益，每月领取<span>{{ formData.amount }}</span
            >元，共领取<span>{{ formData.monthNum }}</span
            >个月
          </div>
          <div class="billsty-title">
            领取月份
            <div class="text">
              <span class="text-value">夜间充值成功率较低，请尽量在白天领取</span>
            </div>
          </div>
          <div class="billsty-month">
            <ul class="month-list">
              <li v-for="item in monthList" :key="item.id" class="month-item" @click="handleMonthClick(item)">
                <div :class="item.isCompleted ? 'item-selected' : 'item'">
                  {{ item.isCompleted ? item.complete : item.month }}
                </div>
              </li>
            </ul>
          </div>
          <div class="billsty-title">话费面额</div>
          <div class="billsty-money">
            <div class="money-top">20元</div>
          </div>
          <div class="billsty-btn" @click="handleReceiveBtn">立即领取</div>
        </div>
        <div class="videoSty-container">
          <ul class="videoSty-list">
            <li v-for="item in videoStyList" :key="item.id" class="videoSty-item">
              <img class="videoSty-img" :src="item.imgUrl" alt="" />
              <div class="videoSty-name">{{ item.name }}</div>
              <div class="videoSty-jj">{{ item.jj }}</div>
              <div class="videoSty-price">
                <span class="youhui">
                  优惠价￥<span style="font-size: 15px">{{ item.price1 }}</span>
                </span>
                <span class="yuanjia">{{ item.price2 }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="custom-service service" @click="dialogVisible = true">联系客服</div>
      <div class="custom-service report" @click="handleReport">投诉举报</div>
    </div>

    <!-- 客服弹窗 -->
    <van-dialog v-model:show="dialogVisible" title="客服" :show-confirm-button="false">
      <div class="rules-one">4008057838</div>
      <div class="btn" @click="dialogVisible = false">我知道了</div>
    </van-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { login } from '@/api/playlet'
import imgage1 from '@/assets/images/monthlyCollarActivity/1.webp'
import imgage2 from '@/assets/images/monthlyCollarActivity/2.webp'
import imgage3 from '@/assets/images/monthlyCollarActivity/3.webp'

import imgage4 from '@/assets/images/monthlyCollarActivity/wyhd.webp'
import imgage5 from '@/assets/images/monthlyCollarActivity/txhd.webp'
import imgage6 from '@/assets/images/monthlyCollarActivity/blblhd.webp'
import imgage7 from '@/assets/images/monthlyCollarActivity/aqyhd.webp'

defineOptions({
  name: 'monthlyCollarActivity'
})

const route = useRoute()
const router = useRouter()

// 联系客服
const dialogVisible = ref(false)

// console.log("route: ", route);

//#region 数据
// 轮播列表
const carouselList = ref([
  {
    id: 1,
    imgUrl: imgage1
  },
  {
    id: 2,
    imgUrl: imgage2
  },
  {
    id: 3,
    imgUrl: imgage3
  }
])

// 月份列表
const monthList = ref([
  {
    id: 1,
    month: '第1月',
    complete: '已完成',
    isCompleted: true
  },
  {
    id: 2,
    month: '第2月',
    complete: '已完成',
    isCompleted: false
  },
  {
    id: 3,
    month: '第3月',
    complete: '已完成',
    isCompleted: false
  },
  {
    id: 4,
    month: '第4月',
    complete: '已完成',
    isCompleted: false
  },
  {
    id: 5,
    month: '第5月',
    complete: '已完成',
    isCompleted: false
  },
  {
    id: 6,
    month: '第6月',
    complete: '已完成',
    isCompleted: false
  },
  {
    id: 7,
    month: '第7月',
    complete: '已完成',
    isCompleted: false
  },
  {
    id: 8,
    month: '第8月',
    complete: '已完成',
    isCompleted: false
  },
  {
    id: 9,
    month: '第9月',
    complete: '已完成',
    isCompleted: false
  },
  {
    id: 10,
    month: '第10月',
    complete: '已完成',
    isCompleted: false
  }
])

// 视频列表
const videoStyList = ref([
  {
    id: 1,
    imgUrl: imgage4,
    name: '网易云音乐黑胶VIP1个月',
    jj: '会员曲库 无损音质 免费下载',
    price1: '10.90',
    price2: '18.00'
  },
  {
    id: 2,
    imgUrl: imgage5,
    name: '腾讯视频腾讯视频VIP1个月',
    jj: '畅享院线大片 体验高清画质',
    price1: '20.60',
    price2: '30.00'
  },
  {
    id: 3,
    imgUrl: imgage6,
    name: '哔哩哔哩大会员1个月',
    jj: '热门番剧 国产动画 潮流娱乐社团',
    price1: '15.50',
    price2: '25.00'
  },
  {
    id: 4,
    imgUrl: imgage7,
    name: '爱奇艺黄金会员1个月',
    jj: '热播聚集实时观看',
    price1: '19.20',
    price2: '30.00'
  }
])
//#endregion

//#region 表单
const formData = reactive({
  phoneValue: '15502104373', // 手机号
  amount: '20', // 金额
  monthNum: '10' // 月数量
})
//#endregion

//#region 请求
const userLogin = async () => {
  try {
    const params = {
      channel_key: ''
    }
    const { data } = (await login(params)) as any
    console.log('data: ', data)
    router.push({
      path: `/smokeRedEnvelope`,
      query: {
        uuid: data.uuid,
        channel_key: data.channel_key
      }
    })
  } catch (error) {
    console.log(error)
  }
}
// userLogin()

//#endregion

//#region 处理事件
const handleMonthClick = (item: any) => {
  console.log('item: ', item)
  showToast({
    message: '已领取，请下个月再来',
    forbidClick: true,
    duration: 2000
  })
}

// 处理立即领取
const handleReceiveBtn = () => {
  console.log('立即领取')
}

// 处理投诉举报
const handleReport = () => {
  router.push({
    path: '/monthlyCollarActivity/report',
    query: {
      userPhone: formData.phoneValue
    }
  })
}
//#endregion
</script>

<style lang="less" scoped>
.app-container {
  .monthly-collar-activity {
    position: relative;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    .head-wrapper {
      height: 190px;
      margin: 0 auto;
      background-color: #f5f5f5;
      border-radius: 4px;
    }
    .main-content {
      position: absolute;
      top: 145px;
      width: 100%;
      padding: 15px;
      background-color: #f5f5f5;
      border-radius: 15px;
      .cont-top-img {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #3089f7;
        height: 56px;
        margin-bottom: 5px;
        border-radius: 8px;
        padding: 10px 15px;
        .item {
          width: 85px;
          margin: 5px;
          .negative {
            background-size: 100% 100%;
            background-position: 0% 0%;
          }
        }
        .item1 {
          height: 16px;
          .negative1 {
            background: url('@/assets/images/monthlyCollarActivity/zgyd.webp') no-repeat;
          }
        }
        .item2 {
          height: 24px;
          .negative2 {
            background: url('@/assets/images/monthlyCollarActivity/zgdx.webp') no-repeat;
          }
        }
        .item3 {
          height: 26px;
          .negative3 {
            background: url('@/assets/images/monthlyCollarActivity/zglt.webp') no-repeat;
          }
        }
      }
      .billsty-container {
        margin-bottom: 15px;
        padding: 10px 15px;
        background-color: #fff;
        border-radius: 15px;
        .title {
          margin-bottom: 1px;
          text-align: center;
          color: #3089f7;
          font-size: 15px;
          font-weight: 700;
        }
        .input-wrapper {
          border-bottom: 0.5px solid #dadbde;
          :deep(.van-field) {
            padding: 6px 9px 4px;
            .van-field__control {
              color: rgb(48, 49, 51);
              font-size: 20px;
              text-align: left;
            }
          }
        }
        .tip-wrapper {
          margin: 5px 0px;
          color: red;
          font-size: 13px;
        }
        .billsty-title {
          margin: 10px 0;
          font-size: 15px;
          color: #333;
          font-weight: 700;
          .text {
            display: flex;
            flex-direction: row;
            align-items: center;
            flex-wrap: nowrap;
            width: 100%;
            .text-value {
              text-decoration: none;
              font-weight: normal;
              overflow-wrap: normal;
              text-overflow: ellipsis;
              font-size: 15px;
              color: #f9ae3d;
            }
          }
        }
        .billsty-month {
          .month-list {
            display: flex;
            flex-wrap: wrap;
            .month-item {
              width: 55px;
              height: 37px;
              margin: 5px 5px 5px 3px;
              line-height: 37px;
              font-size: 13px;
              text-align: center;
              border-radius: 8px;
              .item {
                color: #3089f7;
                border: 1px solid rgba(48, 137, 247, 0.6);
                background-color: rgba(48, 137, 247, 0.06);
                border-radius: 8px;
              }
              .item-selected {
                color: #373737;
                border: 1px solid hsla(0, 0%, 91%, 0.6);
                background-color: #fff;
                border-radius: 8px;
              }
            }
          }
        }
        .billsty-money {
          width: 100px;
          padding: 15px 5px 15px 5px;
          color: #3089f7;
          border: 1px solid rgba(48, 137, 247, 0.6);
          background-color: rgba(48, 137, 247, 0.06);
          font-size: 14px;
          text-align: center;
          border-radius: 8px;
          .money-top {
            font-size: 19px;
          }
        }
        .billsty-btn {
          height: 48px;
          margin: 15px 0;
          line-height: 48px;
          background: linear-gradient(90deg, #3089f7, #357cff);
          border-radius: 8px;
          font-size: 17px;
          color: #fff;
          text-align: center;
        }
      }
      .videoSty-container {
        .videoSty-list {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          flex-wrap: wrap;
          margin: 15px 0 60px 0;
          .videoSty-item {
            width: 167px;
            margin-bottom: 10px;
            .videoSty-img {
              width: 167px;
              border-radius: 15px;
            }
            .videoSty-name {
              width: 165px;
              margin: 3px auto 6px;
              font-size: 14px;
              color: #333;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis /* 使用省略号表示文本被截断 */;
            }
            .videoSty-jj {
              width: 155px;
              padding: 2px 4px;
              background: linear-gradient(270deg, #fff6e3, #ffe9c3);
              font-size: 12px;
              color: #a8490c;
              border-radius: 2px;
              white-space: nowrap;
              overflow: hidden /* 隐藏溢出的内容 */;
            }
            .videoSty-price {
              .youhui {
                margin-right: 10px;
                color: #ff1010;
                font-size: 12px;
              }
              .yuanjia {
                text-decoration: line-through;
                font-size: 12px;
                color: #999;
              }
            }
          }
        }
      }
    }
    .custom-service {
      position: fixed;
      right: -1px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 2px;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 10px 0 0 10px;
      color: #fff;
      -webkit-writing-mode: vertical-rl;
      writing-mode: vertical-rl;
      text-align: center;
      letter-spacing: 4px;
      z-index: 999;
    }
    .service {
      top: 236px;
      font-size: 12px;
    }
    .report {
      top: 106px;
      font-size: 22px;
      background-color: #f00;
    }
  }
  :deep(.van-dialog) {
    top: 50%;
    border-radius: 12px;
    .van-dialog__header {
      font-size: 19px;
      font-weight: 600;
    }
    .van-dialog__content {
      padding: 10px 12px 20px;
      .rules-one {
        padding: 0 35px 21px;
        width: 309px;
        font-family:
          PingFang SC-Semibold,
          PingFang SC;
        background: #fff;
        border-radius: 12px;
      }
      .btn {
        width: 238px;
        height: 38px;
        margin: 0 auto;
        line-height: 38px;
        background-color: #ff1b47;
        text-align: center;
        font-size: 14px;
        font-weight: 600;
        color: #fff;
        border-radius: 42px;
      }
    }
  }
  :deep(.van-overlay) {
    background-color: rgba(12, 13, 15, 0.6196078431372549);
  }
}
</style>
