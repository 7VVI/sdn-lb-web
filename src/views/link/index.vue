<template>
  <div class="iframe-container">
  <iframe class="iframe" src="http://127.0.0.1:8080/ui/pages/topology.html" width="100%" height="620px"></iframe>
  </div>
</template>

<script lang="ts" setup>
import {onMounted,ref} from "vue";
import LogPanel from "@/components/log/logDashbord.vue";

</script>

<style scoped>
/* 设置容器样式 */
.iframe-container{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* 设置 iframe 样式 */
.iframe-container iframe {

}
</style>