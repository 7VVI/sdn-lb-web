<template>

  <div class="trend_card" :style="styleProp">
    <div class="flowers"></div>
    <div class="flowers_2"></div>
    <div class="device_name"><span>{{ device.deviceName }}</span></div>
    <div class="device_num"><span>{{ device.deviceNum }}</span></div>
    <div class="device_image"><img :src="device.deviceImgSrc" alt="xx" class="image_device"></div>
  </div>

</template>

<script lang="ts" setup>
import type {PropType} from "vue";
import {inject, toRefs} from 'vue'

const deviceInfo=defineProps({
  device: {
    type: Object as PropType<API.device>,
    default: () => {
    }
  },
  styleProp: {
    type: Object as () => Record<string, string>,
    required: true,
    default:"@/assets/img/pc.svg"
  },
});

const {device}=toRefs(deviceInfo)


</script>

<style scoped>


.trend_card {
  position: relative;
  padding: 10px 20px;
  height: 130px;
  margin-right: 20px;
  border-radius: 10px;
  flex: 1;
  background-color: rgba(79, 176, 233, 0.95);
  display: flex;
  overflow: hidden;
}

.flowers {
  background-color: rgba(241, 236, 232, 0.39);
  width: 100px;
  height: 50px;
  position: relative;
  top: 70%;
  right: 50px;
  border-radius: 50px 50px 0 0;
}

.flowers_2 {
  background-color: rgba(211, 243, 236, 0.3);
  width: 60px;
  height: 30px;
  position: relative;
  top: 86%;
  right: 70px;
  border-radius: 30px 30px 0 0;
}

.device_name {
  font-weight: bold;
  display: inline;
  font-size: 22px;
  color: white;
  font-style: italic;
  align-self: flex-start;
  position: absolute;
  right: 65%;
  top: 10%;
  text-align: center;
}

.device_num {
  font-weight: bold;
  display: flex;
  font-size: 25px;
  color: white;
  font-style: italic;
  align-self: flex-start;
  position: absolute;
  right: 68%;
  top: 60%;
  align-items: center;
  align-content: center;
}

.device_image {
  width: 20%;
  background-color: rgba(215, 236, 252, 0.2);
  align-self: center;
  position: absolute;
  right: 15%;
  height: 40%;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  border: 2px solid #f6eded;
  border-radius: 10px;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.1);
}

.image_device {
  width: 100%;
  height: 100%;
}


</style>