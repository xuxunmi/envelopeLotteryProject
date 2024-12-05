<template>
    <div class="container2">
      <div class="prize-list" ref="prizeWrap" :style="bgColor">
        <div class="prize-item" v-for="(item, index) in state.prizeList" :style="prizeStyle(index)">
          <img :src="item.pic" alt="">
          <p>{{ item.name }}</p>
        </div>
      </div>
      <div class="btn" @click="start"></div>
      <Dialog
        v-model="state.showDialog"
        title="提示"
        @confirm="onConfirm"
      >
      {{state.msg}}
    </Dialog>
    </div>
</template>
<script setup lang="ts">
import logo from '@/assets/images/20210531221735650.png';
import { reward } from '@/api/playlet'
    import { ref, reactive } from 'vue'
    import { useRouter, useRoute } from 'vue-router'
import { showConfirmDialog ,Dialog  } from 'vant'
    interface Props {
      payParams: null;
    }
    const props = withDefaults(defineProps<Props>(), {
      payParams: null
    });
    const route = useRoute()
    const state = reactive({
      showDialog:true,
      msg:"",
        // 图片随时失效，请自行替换！！！！！！
        // 图片随时失效，请自行替换！！！！！！
        // 图片随时失效，请自行替换！！！！！！
        // 转盘指针和开始按钮，都在文章最下方，想下载去下面！！！
        // 转盘指针和开始按钮，都在文章最下方，想下载去下面！！！
        prizeList: [
        { name: '拼多多红包', pic: logo },
        { name: '888现金', pic: logo },
        { name: '拼多多红包', pic: logo },
        { name: '888现金', pic: logo },
        { name: '拼多多红包', pic: logo },
        { name: '888现金', pic: logo },
        { name: '拼多多红包', pic: logo },
        { name: '888现金', pic: logo },
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
        // 每个奖品布局
        const prizeStyle = computed(() => {
            const _degree = rotateAngle.value
            return (i) => {
                return `
                width: ${2 * 270 * Math.sin(_degree / 2 * Math.PI / 180)}px;
                height: 210px;
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
            // let params = props.payParams;
            let params = {'uuid':localStorage.getItem('uuid')}
            let data;
                const userLogin = async () => {
                  try {
                    data  = (await reward(params)) as any
                    console.log('data: ', data)
                    console.log(data);
                    console.log('中奖ID>>>', data.data.result, state.prizeList[data.data.result])
                    state.prizeId = prizeId
                    startRun(data.data.result)
                    // Object.assign(params, data)
                  } catch (error) {
                    console.log(error)
                  }
                }
                userLogin()
                
          }
        }

        const startRun = (result) => {
          state.prizeId = result;
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
        const onConfirm = ()=>{

        }
        const stopRun = () => {
          let url = 'https://mobile.yangkeduo.com/duo_cms_mall.html?pid=1842481_187143782&cpsSign=CM_220705_1842481_187143782_00bec482b9e39592317b8f43dd2497a3&_x_ddjb_act=%7B%22st%22%3A%223%22%7D&duoduo_type=2';
          if(state.prizeId == 2){
            state.msg = '恭喜获得拼多多红包!';
            // showToast()
          }else if(state.prizeId == 1){
            state.msg = '恭喜获得888现金礼包!';
          }
          showConfirmDialog({
            title: '提示', 
            message: state.msg, 
            confirmButtonText: '去领取', // 自定义确认按钮文案
            cancelButtonText: '确定', // 自定义取消按钮文案
            }) .then(() => { 
              location.href = url;
            }) .catch(() => { 
              location.href = url;
            
            })
          state.showDialog = true;
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
    .container2 {
      width: 380px;
      height: 380px;
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
      width: 80px;
      height: 80px;
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
      width: 20px;
      height: 20px;
      background: url('https://www.jq22.com/demo/jquerylocal201912122316/img/icon_point.png') no-repeat center / 100% 100%;
      position: absolute;
      left: 0;
      right: 0;
      top: -15px;
      margin: auto;
    }
</style>