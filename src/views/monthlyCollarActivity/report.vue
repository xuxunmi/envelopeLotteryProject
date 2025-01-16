<template>
  <div class="app-container">
    <div class="report-container">投诉举报</div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

defineOptions({
  name: 'monthlyCollarActivityReport'
})

const route = useRoute()
const router = useRouter()
const userPhone = route.query.userPhone
console.log('route: ', route.query, userPhone)

// 联系客服
const dialogVisible = ref(false)

// console.log("route: ", route);

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
      channel_key: channelKey
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
//#endregion
</script>

<style lang="less" scoped>
.app-container {
  .report-container {
    position: relative;
    width: 100%;
    height: 100vh;
  }
}
</style>
