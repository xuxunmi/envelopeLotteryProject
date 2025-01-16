<template>
  <router-view v-if="isRefresh" />
</template>

<script lang="ts" setup>
// 无感刷新页面
const isRefresh = ref(true)
const reload = (): void => {
  isRefresh.value = false
  nextTick(() => {
    isRefresh.value = true
  })
}
</script>

<style></style>
