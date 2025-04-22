<template>
  <div class="system-management">
    <h1 class="title">系统管理</h1>
    <p>请从左侧导航栏选择模块查看详情。</p>
  </div>
</template>

<script>
export default {
  name: 'SystemManagement'
}
</script>

<style scoped>
.system-management {
  padding: 20px;
  background: #f5f5f5; /* 浅色背景 */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
  font-family: 'Arial', sans-serif; /* 避免黑体或宋体 */
}
</style>
