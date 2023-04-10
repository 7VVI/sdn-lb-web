<template>
  <div class="system-card">
    <div class="title">{{ title }}</div>
    <div class="time">{{ getTimeString(runningTime) }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const startTime = ref(Date.now()); // 记录系统启动的时间
    const runningTime = ref(0); // 记录系统运行的时间（毫秒）

    // 定时器，每 1000 毫秒更新 runningTime
    const timer = setInterval(() => {
      runningTime.value = Date.now() - startTime.value;
    }, 1000);

    // 在组件销毁时清除定时器
    watch(() => props.title, () => {
      clearInterval(timer);
    });


    // 把毫秒数转换为字符串，格式为：xx 小时 xx 分钟 xx 秒
    const getTimeString = (time: number): string => {
      const seconds = Math.floor(time / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      return `${hours.toString().padStart(2, '0')}:${(minutes % 60).toString().padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;
    };

    return {
      runningTime,
      getTimeString,
    };
  },
});
</script>

<style scoped>
.system-card {
  width: 200px;
  height: 100px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-align: center;
}

.title {
  font-weight: bold;
  font-size: 16px;
}

.time {
  font-size: 28px;
  margin-top: 10px;
}
</style>
