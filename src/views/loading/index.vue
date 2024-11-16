<template>
  <div class="app-container">
    <img src="@/assets/svg/balls.svg" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { login } from '@/api/playlet'

defineOptions({
  name: 'loading'
})

const route = useRoute()
const router = useRouter()

// console.log("route: ", route);

const channelKey = route.query.channel_key
// console.log("channelKey: ", channelKey);

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

userLogin()
</script>

<style lang="less" scoped>
.app-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  img {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // margin-left: -50px;
    // margin-top: -50px;
  }
}
</style>
