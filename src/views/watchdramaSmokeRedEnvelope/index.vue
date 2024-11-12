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
                  <img
                    style="width: 21px; height: 21px"
                    :src="item.imgUrl"
                    alt=""
                  />
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
        <div class="button-chunk animation_scaling" @click="handleGetNowBtn">
          立即领取
        </div>
        <div class="payment-select-chunk">
          <div class="paySelect-component">
            <div class="adm-space adm-space-vertical" />
          </div>
        </div>
      </div>
      <div class="copyright-chunk">
        <div class="copyright-info">
          <p>版权信息</p>
          <p>秦皇岛绍颖科技工作室</p>
          <p>地址：河北省秦皇岛市海港区燕山大街街道报业大厦5楼515</p>
          <p>京ICP备2022030667号-1</p>
        </div>
      </div>
    </div>
    <div class="right-fixed-chunk-1" @click="dialogVisible = true">
      <img src="@/assets/images/24012515281(6).webp" alt="" />
    </div>
    <div class="right-fixed-chunk-2" @click="handleCustomerService">
      <img src="@/assets/images/24012515281(7).webp" alt="" />
    </div>

    <van-dialog
      v-model:show="dialogVisible"
      :show-confirm-button="false"
      width="340px"
    >
      <div class="adm-modal-content">
        <div>
          <h1>活动规则</h1>
          <p>一、活动时间:即日起至 2024 年12月 31 日:</p>
          <p>二、具体规则</p>
          <p>
            1、用户付费购买短剧后，可在结果页（继续看剧入口）观看 10 集短剧；
          </p>
          <p>
            2、用户付费购买短剧后，限时赠送幸运大转盘机会一次，用户自主选择是否参加；
          </p>
          <p>
            3、参加幸运大转盘活动的用户，有机会获得以下惊喜： 惊喜一：88 元至
            2888 元不等的现金红包，中奖概率 1/99999; 惊喜二： 20
            元以内拼多多购物抵扣券一张，中奖概率 99998/99999；
          </p>
          <p>
            4、用户在幸运大转盘获得奖品后，请勿退出活动，退出可能导致奖品丢失，请在获得奖品后及时兑换或领取；
          </p>
          <p>
            5、抽中现金红包的用户，可在弹出页面填写手机号或联系在线客服领奖；抽中拼多多购物抵扣券的用户，可在活动页面跳转至拼多多领取并使用。
          </p>
        </div>
        <div class="adm-modal-footer" @click="dialogVisible = false">
          我知道了
        </div>
      </div>
    </van-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import imgage1 from "@/assets/images/24012515281(2).webp";
import imgage2 from "@/assets/images/24012515281(3).webp";
import imgage3 from "@/assets/images/24012515281(4).webp";
import imgage4 from "@/assets/images/24012515281(8).webp";
import imgage5 from "@/assets/images/24012515281(10).webp";

defineOptions({
  name: "watchdramaSmokeRedEnvelope"
});

const router = useRouter();

const dialogVisible = ref(false);

const winnersInfoList = ref([
  {
    id: 1,
    name: "蒋**",
    money: "288",
    desc1: "看短剧抽中了",
    desc2: "元红包",
    imgUrl: imgage1
  },
  {
    id: 2,
    name: "林**",
    money: "288",
    desc1: "看短剧抽中了",
    desc2: "元红包",
    imgUrl: imgage2
  },
  {
    id: 3,
    name: "张**",
    money: "88",
    desc1: "看短剧抽中了",
    desc2: "元红包",
    imgUrl: imgage3
  },
  {
    id: 4,
    name: "徐**",
    money: "888",
    desc1: "看短剧抽中了",
    desc2: "元红包",
    imgUrl: imgage4
  },
  {
    id: 5,
    name: "陈**",
    money: "78",
    desc1: "看短剧抽中了",
    desc2: "元红包",
    imgUrl: imgage5
  }
]);

const handleGetNowBtn = () => {
  console.log(" 立即领取 ");
  router.push({
    path: `/WatchShortDramas`,
    query: {}
  });
};

const handleCustomerService = () => {
  window.open(
    "https://hwpage.liuyuekeji.cn/complaint/mvzZ3?from=tajqdjhbl07&addType=15&a_cid=&a_oId=&a_tuiaId=&device=&a_deviceId=&imeiMd5=&idfaMd5=&oaidMd5=",
    "_self"
  );
};
</script>

<style lang="less" scoped>
.app-container {
  .bg-chunk {
    width: 100%;
    height: auto;
    margin: auto;
    background: url("@/assets/images/24012515281(1).webp") no-repeat;
    background-size: cover;
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
      margin-top: 24px;
      text-align: center;
      color: #e03733;
      font-size: 76px;
      font-weight: bold;
      span {
        font-size: 26px;
        font-weight: initial;
      }
      .price-chunk {
        background: url("@/assets/images/24012515281(5).webp") no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: -7px;
        right: 40px;
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
      height: 230px;
      margin: 135px auto auto;
      background: url("@/assets/images/24012515281(9).webp") no-repeat;
      background-size: 100% 100%;
      overflow: hidden;
      &::before {
        content: "";
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
      margin: 15px auto 100px;
      color: #fff;
      font-size: 9px;
      text-align: center;
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
        width: 316px;
        line-height: 50px;
        margin-top: 20px;
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
