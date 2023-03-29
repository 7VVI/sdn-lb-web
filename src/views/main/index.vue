<template>
<div class="context">
    <div class="trend_card">卡片1</div>
    <div class="trend_card">卡片2</div>
    <div class="trend_card">卡片2</div>
    <div class="trend_card">卡片3</div>
</div>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>

.context{
  height: 100vh;
  display: flex;
  background-color: aquamarine;
}

.trend_card{
  padding: 10px 20px;
  height: 150px;
  margin: 20px;
  border-radius: 20px;
  border: 2px solid red;
  flex: 1;
  background-color: #a93838;
  display: flex;
}

</style>