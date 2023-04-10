<template>
  <div>
    <button @click="fetchContent">获取文件内容</button>
    <div v-if="state.fileContent">{{ state.fileContent }}</div>
  </div>
</template>

<script setup lang="ts">
import {ref,reactive} from "vue";
import {HttpManager} from "../../api";

const state = reactive({
  fileContent: ''
})

const fetchContent = async () => {
  try {
    const response = await HttpManager.getFileContent();
    const reader = new FileReader()
    reader.addEventListener('loadend', () => {
      state.fileContent = reader.result as string
      console.log(state.fileContent)
    })
    reader.readAsText(response)
  } catch (error) {
    console.error(error)
  }
}

</script>

<style scoped>

</style>