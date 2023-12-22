<template>
  <div class="wrapper">
    <IconWebpack class="icon" />
    <h1>Webpack + Esbuild config</h1>
  </div>
</template>
<script setup lang="ts">
import IconWebpack from '@/assets/icons/IconWebpack.svg';
</script>
<style scoped>
.wrapper {
  max-width: 920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f5f5;
}
.icon {
  max-width: 320px;
  max-height: 320px;
}
</style>
