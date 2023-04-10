<template>
  <div class="content">
    <div class="context_header">
      <div class=" header_left">系统监控</div>
      <div class="header_center"></div>
      <div class="header_right" ref="circle"></div>
    </div>
    <div class="context_main">
      context
      <br>
      cccontext
      <br>
      cccontext
      <br>
      cccontext
      <br>
      cc
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, onUnmounted, ref, nextTick} from "vue";


let timer=ref(0)
onMounted(() => {
  nextTick(()=>{
    const circle = ref<HTMLDivElement | null>(null);
    if(circle.value){
    timer.value=setInterval(() => {
      circle.value!.style.backgroundColor = circle.value!.style.backgroundColor === 'blue' ? '#3ee565' : '#09abce'; // 每秒修改圆形的颜色
    }, 1000);
    }
  });
})

// 在组件销毁时清除定时器
onUnmounted(()=>{
  return clearInterval(timer.value);
})

</script>

<style scoped>
.content{
  width: 100%;
  height: 600px;
}

.context_header{
  background-color: rgba(211, 200, 200,0.5);
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 10px 10px 0 0;
}

.context_main{
  background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
  height: 100%;
  padding: 10px;
  overflow-y: auto;
}

.header_left{
  margin-left: 1%;
}

.header_right{
  background-color: #1655de;
  height: 50%;
  width: 20px;
  margin-right: 1%;
  border-radius: 50%;
  position: relative;
}

.header_right::before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: white; /* 闪烁圆点的颜色 */
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -4px;
  margin-left: -4px;
  animation: blink 2s linear infinite;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.header_center{
  flex: 1;
}
</style>