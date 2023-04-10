<template>
  <div class="container">
    <h1>Log Viewer</h1>
    <div class="btn-group">
      <button :class="{ active: selectedLog === 'access.log' }" @click="selectLog('access.log')">Access.log</button>
      <button :class="{ active: selectedLog === 'error.log' }" @click="selectLog('error.log')">Error.log</button>
    </div>
    <div class="log-content">
      <pre>{{ logContent }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      selectedLog: 'access.log',
      logContent: ''
    }
  },
  created() {
    // 创建 WebSocket 连接
    const socket = new WebSocket('ws://localhost:3000')

    // 监听连接打开事件
    socket.addEventListener('open', (event: Event) => {
      console.log('WebSocket connected')
    })

    // 监听消息事件
    socket.addEventListener('message', (event: MessageEvent) => {
      const data: string = event.data
      this.logContent += data
    })

    // 监听连接关闭事件
    socket.addEventListener('close', (event: CloseEvent) => {
      console.log('WebSocket disconnected')
    })
  },
  methods: {
    // 选择日志文件
    selectLog(logName: string): void {
      this.selectedLog = logName
      this.logContent = ''

      // 向服务器发送请求获取日志内容
      const message = `get-log-content:${logName}`
      const socket = new WebSocket('ws://localhost:3000')
      socket.addEventListener('open', (event: Event) => {
        socket.send(message)
      })
      socket.addEventListener('message', (event: MessageEvent) => {
        const data: string = event.data
        this.logContent += data
      })
      socket.addEventListener('close', (event: CloseEvent) => {
        socket.close()
      })
    }
  }
})
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn-group {
  display: flex;
  margin-bottom: 16px;
}

.btn-group button {
  margin-right: 8px;
  font-size: 16px;
  padding: 6px 12px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.btn-group button.active {
  background-color: #333;
  color: #fff;
}

.log-content {
  width: 100%;
  max-height: 500px;
  overflow-y: auto;
  white-space: pre-wrap;
}
</style>
