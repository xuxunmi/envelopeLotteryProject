<template>
  <div class="app-container">
    <div class="report-container">
      <div class="tips-wrapper">
        <div class="tips-txt">
          <span>请注意留下可联系号码，方便我们联系</span>
        </div>
        <div class="icon" @click="handleGoBackbtn">
          <van-icon name="cross" />
        </div>
      </div>
      <van-form ref="reportFrom" @failed="onFailed">
        <van-cell-group inset>
          <van-field
            v-model="formData.phoneValue"
            name="patternPhone"
            placeholder="请填写手机号"
            :rules="[{ pattern: patternPhone, message: '手机号格式不正确！' }]"
            label="联系号码："
          />
          <van-field name="content" :rules="[{ required: true, message: '请填写投诉内容！' }]" label="投诉内容：">
            <template #input>
              <van-field
                v-model="formData.content"
                class="custom-field"
                name="content"
                rows="3"
                autosize
                type="textarea"
                border
                placeholder="请填写投诉内容"
              />
            </template>
          </van-field>
        </van-cell-group>
        <!-- <div style="margin: 16px">
          <van-button round block type="primary" native-type="submit"> 提交 </van-button>
        </div> -->
      </van-form>
      <div class="footer">
        <div class="sumbit-btn" @click="handleSumbit(reportFrom)">提交</div>
      </div>
    </div>
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
const userPhone = route.query.userPhone as string
console.log('route: ', route.query, userPhone)

// 联系客服
const dialogVisible = ref(false)

// console.log("route: ", route);

//#region 表单
const reportFrom = ref()
const patternPhone = /^1[34578]\d{9}$/
const formData = reactive({
  phoneValue: userPhone, // 手机号
  content: '' // 投诉内容
})
const onFailed = errorInfo => {
  console.log('failed', errorInfo)
}
//#endregion

//#region 处理事件
const handleGoBackbtn = () => {
  console.log('router: ', router)
  // 返回上一层
  router.go(-1)
}

// 处理提交按钮
const handleSumbit = formEl => {
  console.log('formEl: ', formEl)
  formEl
    .validate()
    .then(() => {
      console.log('验证通过')
    })
    .catch(() => {
      console.log('验证失败')
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
    .tips-wrapper {
      display: flex;
      align-items: center;
      position: relative;
      height: 49px;
      background-color: #ff3a2f;
      font-size: 12px;
      font-weight: 400;
      color: #fff;
      line-height: 16px;
      padding-right: 10px;
      padding-left: 15px;
      .tips-txt {
        padding-right: 20px;
      }
      .icon {
        position: absolute;
        right: 20px;
        top: 10px;
        .van-icon {
          color: #000;
        }
      }
    }
    :deep(.van-form) {
      .custom-field {
        border: 1px solid;
        padding: 3px 5px;
      }
    }
    .footer {
      display: flex;
      justify-content: center;
      .sumbit-btn {
        position: fixed;
        bottom: 15px;
        width: 345px;
        height: 45px;
        line-height: 45px;
        background-color: #ff3a2f;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        color: #fff;
        border: beige;
        border-radius: 10px;
      }
    }
  }
}
</style>
