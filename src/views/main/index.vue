<template>
  <div class="main">
    <div class="context">
      <div class="card">
        <Card :device="hostInfo"></Card>
        <Card/>
        <Card/>
      </div>
      <div class="table_trend">
        ss
      </div>
      <div class="warning_info">
        <div class="warning_info_left">
          dd
        </div>
        <div class="warning_info_right">
          dd
        </div>
      </div>
    </div>

    <div class="context_right">
      right context
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref,provide, reactive, watch, onMounted,onBeforeMount } from "vue";
import Card from "@/components/card/index.vue";
let img=import('@/assets/img/pc.svg')

let hostInfo:API.device=reactive({
  deviceName:"主机",
  deviceNum:12,
  deviceImgSrc:img,
})


provide('device',hostInfo)




</script>

<style lang="less" scoped>
.main {
  display: flex;
}

.context {
  height: 100vh;
  display: flex;
  flex: 2;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-between;
  background-color: rgb(240, 242, 245);
}

.context_right {
  background-color: cornflowerblue;
  flex: 1;
  height: 100vh;
}

.table_trend {
  background-color: #ad45e3;
  height: 400px;
  margin: 20px 20px 0 0;
}

.card {
  display: flex;
  justify-content: space-between;
}

.warning_info {
  height: 400px;
  display: flex;
  margin:20px 20px 0 0;
}

.warning_info_left {
  flex: 1;
  background: cornflowerblue;
}

.warning_info_right {
  flex: 1;
  background-color: chartreuse;
}
</style>