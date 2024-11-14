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
          <p>沈阳达信网络科技有限公司</p>
          <p>地址：辽宁省沈阳市沈北新区道义北大街59-1号C区412-A313</p>
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

    <!--
		1、订单可以通过post方式或get方式提交，建议使用post方式；
		   提交支付请求可以使用http或https方式，建议使用https方式。
		2、通联收银宝网关地址、商户号及key值，在接入测试时由通联提供；
		   通联收银宝网关地址、商户号，在接入生产时由通联提供，key值在通联收银宝商服服务平台上设置,https://vsp.allinpay.com。
	-->
    <!--================= post 方式提交支付请求 start =====================-->
    <!--================= 测试地址,生产地址请参考在线接口文档https://aipboss.allinpay.com/know/devhelp/main.php?pid=20=====================-->
    <!--=================  =====================-->
    <form id="paymentForm" :action="paymentServerUrl" method="post">
      <input id="cusid" type="hidden" name="cusid" :value="paymentForm.cusid" />
      <input id="appid" type="hidden" name="appid" :value="paymentForm.appid" />
      <input
        id="version"
        type="hidden"
        name="version"
        :value="paymentForm.version"
      />
      <input
        id="randomstr"
        type="hidden"
        name="randomstr"
        :value="paymentForm.randomstr"
      />
      <input
        id="trxamt"
        type="hidden"
        name="trxamt"
        :value="paymentForm.trxamt"
      />
      <input id="reqsn" type="hidden" name="reqsn" :value="paymentForm.reqsn" />
      <input
        id="charset"
        type="hidden"
        name="charset"
        :value="paymentForm.charset"
      />
      <input
        id="returl"
        type="hidden"
        name="returl"
        :value="paymentForm.returl"
      />
      <input
        id="notify_url"
        type="hidden"
        name="notify_url"
        :value="paymentForm.notify_url"
      />
      <input id="body" type="hidden" name="body" :value="paymentForm.body" />
      <input
        id="remark"
        type="hidden"
        name="remark"
        :value="paymentForm.remark"
      />
      <input
        id="randomstr"
        type="hidden"
        name="randomstr"
        :value="paymentForm.randomstr"
      />
      <input
        id="validtime"
        type="hidden"
        name="validtime"
        :value="paymentForm.validtime"
      />
      <input
        id="limit_pay"
        type="hidden"
        name="limit_pay"
        :value="paymentForm.limit_pay"
      />
      <input
        id="asinfo"
        type="hidden"
        name="asinfo"
        :value="paymentForm.asinfo"
      />
      <input
        id="ishide"
        type="hidden"
        name="ishide"
        :value="paymentForm.ishide"
      />
      <input
        id="signtype"
        type="hidden"
        name="signtype"
        :value="paymentForm.signtype"
      />
      <input id="sign" type="hidden" name="sign" :value="paymentForm.sign" />

      <div class="weui-btn-area">
        <input
          class="weui-btn weui-btn_default"
          type="submit"
          value="跳转至收银宝H5收银台 >>"
        />
      </div>
      <!--================= post 方式提交支付请求 end =====================-->
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import imgage1 from "@/assets/images/24012515281(2).webp";
import imgage2 from "@/assets/images/24012515281(3).webp";
import imgage3 from "@/assets/images/24012515281(4).webp";
import imgage4 from "@/assets/images/24012515281(8).webp";
import imgage5 from "@/assets/images/24012515281(10).webp";
import { pay } from "@/api/playlet";

defineOptions({
  name: "watchdramaSmokeRedEnvelope"
});

const router = useRouter();
const route = useRoute();
const payParams = reactive(route.query);
// 支付信息
const paymentForm = ref<any>({});
// 支付地址
const paymentServerUrl = ref();

console.log("route: ", route.query, payParams);

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

const handleGetNowBtn = async () => {
  console.log(" 立即领取 ");
  try {
    const params = {
      channel_key: payParams.channel_key,
      uuid: payParams.uuid
    };
    const { data } = (await pay(params)) as any;
    console.log("data: ", data);
    const paramsPay = data.params;
    const serverUrl = data.serverUrl;

    const div = document.createElement("formdiv");
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
    `;
    document.body.appendChild(div);
    document.forms["formPay"].setAttribute("target", "_self");
    document.forms["formPay"].submit();
    div.remove();

    // Object.assign(paymentForm.value, data.params);
    // paymentServerUrl.value = data.serverUrl;
    // console.log("paymentForm.value: ", paymentForm.value);
    // console.log("paymentServerUrl: ", paymentServerUrl.value);
    // console.dir(document.getElementById("paymentForm"));
    // const paymentFormElement = document.getElementById(
    //   "paymentForm"
    // ) as HTMLFormElement;
    // 唤起支付
    // paymentFormElement.submit();
    // router.push({
    //   path: `/WatchShortDramas`,
    //   query: {}
    // });
  } catch (error) {
    console.log(error);
  }
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
    height: 100%;
    margin: auto;
    background: url("@/assets/images/24012515281(1).webp") no-repeat;
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
      margin: 40px auto 130px;
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
