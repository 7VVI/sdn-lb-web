<template>
  <div class="main">
    <div class="context">
      <div class="card">
        <Card :device="hostInfo" :style="{'background-color':'rgba(81, 176, 234,0.8)'}"></Card>
        <Card :device="switchInfo" :style="{'background-color':'rgba(132, 216, 182,0.8)'}"></Card>
        <Card :device="controllerInfo" :style="{'background-color':'rgba(113, 90, 233,0.8)'}"></Card>
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
     负载均衡
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref,provide, reactive, watch, onMounted,onBeforeMount } from "vue";
import Card from "@/components/card/index.vue"
declare var require :any;

let hostInfo:API.device=reactive({
  deviceName:"主机",
  deviceNum:12,
  deviceImgSrc:require('@/assets/img/pc.svg'),
})

let switchInfo:API.device=reactive({
  deviceName:"交换机",
  deviceNum:4,
  deviceImgSrc:require('@/assets/img/ovs.svg'),
})

let controllerInfo:API.device=reactive({
  deviceName:"控制器",
  deviceNum:1,
  deviceImgSrc:require('@/assets/img/SDN.svg'),
})

provide('device',hostInfo)




</script>

<style lang="less" scoped>
.main {
  display: flex;
  margin-top: 20px;
}

.context {
  height: 100vh;
  display: flex;
  flex: 3;
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
  margin-right: 10px;
}

.warning_info_right {
  flex: 1;
  background-color: chartreuse;
  margin-left: 10px;
}
</style>