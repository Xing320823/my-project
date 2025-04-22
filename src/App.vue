<template>
  <div class="app-container">
    <!-- 左侧导航栏 -->
    <Sidebar />
    <!-- 右侧显示区域 -->
    <div class="content-area">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'

export default {
  components: {
    Sidebar
  }
}
</script>

<style scoped>
.app-container {
  display: flex;
}

.content-area {
  flex: 1;
  margin-left: 250px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.95);
  position: relative;
  min-height: 100vh;
  border-left: 2px solid #ddd;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
}

/* 背景文字样式 */
.content-area::before {
  content: '地址灾害监测预警平台';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 80px;
  color: rgba(0, 0, 0, 0.1);
  z-index: -1;
  font-weight: bold;
  pointer-events: none;
  font-family: 'Arial', sans-serif; /* 避免黑体或宋体 */
}
</style>
