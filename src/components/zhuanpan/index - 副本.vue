<template>
    <div class="container">
      <div class="prize-list" ref="prizeWrap" :style="bgColor">
        <div class="prize-item" v-for="(item, index) in prizeList" :style="prizeStyle(index)">
          <img :src="item.pic" alt="">
          <p>{{ item.name }}</p>
        </div>
      </div>
      <div class="btn" @click="start"></div>
    </div>
</template>
<script setup lang="ts">
    import { ref, reactive } from 'vue'
    import { useRouter, useRoute } from 'vue-router'
    const route = useRoute()
    const prizeList = reactive([
        { name: '秒杀资格', pic: '@/assets/images/20210531221735650.png' },
        { name: '20 金币', pic: '@/assets/images/20210531221735650.png' },
        { name: '谢谢参与', pic: '@/assets/images/20210531221735650.png' },
        { name: '手机一部', pic: '@/assets/images/20210531221735650.png' },
        { name: '智能耳机', pic: '@/assets/images/20210531221735650.png' },
        { name: '谢谢参与', pic: '@/assets/images/20210531221735650.png' },
        { name: '笔记本', pic: '@/assets/images/20210531221735650.png' },
        { name: '谢谢参与', pic: '@/assets/images/20210531221735650.png' }
    ]);
    const state = reactive({
        // 图片随时失效，请自行替换！！！！！！
        // 图片随时失效，请自行替换！！！！！！
        // 图片随时失效，请自行替换！！！！！！
        // 转盘指针和开始按钮，都在文章最下方，想下载去下面！！！
        // 转盘指针和开始按钮，都在文章最下方，想下载去下面！！！
        prizeList: [
        { name: '秒杀资格', pic: '@/assets/images/1da888.webp' },
        { name: '20 金币', pic: 'https://img-blog.csdnimg.cn/2021053122215511.png' },
        { name: '谢谢参与', pic: 'https://img-blog.csdnimg.cn/20210531222451675.png' },
        { name: '手机一部', pic: 'https://img-blog.csdnimg.cn/20210531222703412.png' },
        { name: '智能耳机', pic: 'https://img-blog.csdnimg.cn/20210531222921707.png' },
        { name: '谢谢参与', pic: 'https://img-blog.csdnimg.cn/20210531222451675.png' },
        { name: '笔记本', pic: 'https://img-blog.csdnimg.cn/20210531223304410.png' },
        { name: '谢谢参与', pic: 'https://img-blog.csdnimg.cn/20210531222451675.png' }
        ], // 后台配置的奖品数据
        isRunning: false, // 是否正在抽奖
        baseRunAngle: 360 * 5, // 总共转动角度 至少5圈
        prizeId: 0, // 中奖id
    })
    const prizeWrap = ref(null)
    // 平均每个奖品角度
    const rotateAngle = computed(() => {
          const _degree = 360 / state.prizeList.length
          return _degree
        })

        // 要执行总角度数
        const totalRunAngle = computed(() => {
          return state.baseRunAngle + 360 - state.prizeId * rotateAngle.value - rotateAngle.value / 2
        })

        // 计算绘制转盘背景
        const bgColor = computed(() => {
          const _len = state.prizeList.length
          // 奖品格子颜色,改一下颜色就知道在哪里了
          const colorList = ['#5352b3', '#363589']
          let colorVal = ''
          for (let i = 0; i < _len; i++) {
            colorVal += `${colorList[i % 2]} ${rotateAngle.value * i}deg ${rotateAngle.value * (i + 1)}deg,`
          }
          return `
            background: conic-gradient(${colorVal.slice(0, -1)});
          `
        })
        // 每个奖品布局
        const prizeStyle = computed(() => {
          const _degree = rotateAngle.value
          return (i) => {
            return `
              width: ${1 * 270 * Math.sin(_degree / 1 * Math.PI / 90)}px;
              height: 200px;
              transform: rotate(${_degree * i + _degree / 2}deg);
              transform-origin: 50% 100%;
            `
          }
        })

        onMounted(() => {
          prizeWrap.value.style = `${bgColor.value} transform: rotate(-${rotateAngle.value / 2}deg)`
        })

        onUnmounted(() => {
          prizeWrap.value.removeEventListener('transitionend', stopRun)
        })

        // 获取随机数
        const getRandomNum = () => {
          const num = Math.floor(Math.random() * state.prizeList.length)
          return num        
        }

        const start = () => {
          if (!state.isRunning) {
            state.isRunning = true

            console.log('开始抽奖，后台请求中奖奖品')
            // 请求返回的奖品编号 这里使用随机数
            const prizeId = getRandomNum()
            console.log('中奖ID>>>', prizeId, state.prizeList[prizeId])
            state.prizeId = prizeId
            startRun()
          }
        }

        const startRun = () => {
          console.log(state.isRunning, totalRunAngle.value)
          // 设置动效
          prizeWrap.value.style = `
            ${bgColor.value}
            transform: rotate(${totalRunAngle.value}deg);
            transition: all 4s ease;
          `
          // 监听transition动效停止事件
          prizeWrap.value.addEventListener('transitionend', stopRun)
        }

        const stopRun = (e) => {
          console.log(e)
          state.isRunning = false
          prizeWrap.value.style = `
            ${bgColor.value}
            transform: rotate(${totalRunAngle.value - state.baseRunAngle}deg);
          `
        }
</script>
<style lang="less" scoped>

* {  margin: 0; padding: 0; box-sizing: border-box; }
    [v-cloak] {
      display: none;
    }
    .container {
      width: 300px;
      height: 300px;
      /*background: #98d3fc url('https://www.jq22.com/demo/vue-luck-draw-pdmm202010260015/img/bg.a4b976d5.png') no-repeat center / 100% 100%;*/
      /*background: conic-gradient( 
       red 6deg, orange 6deg 18deg, yellow 18deg 45deg, 
       green 45deg 110deg, blue 110deg 200deg, purple 200deg);*/
      margin: 100px auto;
      position: relative;
    }
    .prize-list {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 10px solid #e6e6e6;
      overflow: hidden;
    }
    .prize-item {
      /*border: 2px solid red;*/
      position: absolute;
      left: 0;
      right: 0;
      top: -10px;
      height: 50px;
      margin: auto;
    }
    .prize-item img {
      width: 30%;
      height: 20%;
      margin: 40px auto 10px;
      display: block;
    }
    .prize-item p {
      color: #fff;
      font-size: 12px;
      text-align: center;
      line-height: 20px;
    }
    .btn {
      width: 160px;
      height: 160px;
      background: url('https://www.jq22.com/demo/jquerylocal201912122316/img/btn_lottery.png') no-repeat center / 100% 100%;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      cursor: pointer;
    }
    .btn::before {
      content: "";
      width: 41px;
      height: 39px;
      background: url('https://www.jq22.com/demo/jquerylocal201912122316/img/icon_point.png') no-repeat center / 100% 100%;
      position: absolute;
      left: 0;
      right: 0;
      top: -33px;
      margin: auto;
    }
</style>