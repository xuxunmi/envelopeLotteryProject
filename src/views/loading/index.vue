<template>
  <div class="app-container">
    <img src="@/assets/svg/balls.svg" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

defineOptions({
  name: "Loading"
});
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
