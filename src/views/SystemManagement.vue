<template>
  <div class="system-management">
    <h1 class="title">系统管理</h1>
    <div class="modules-container">
      <div
        v-for="(module, index) in modules"
        :key="index"
        class="module-card"
        @click="navigateTo(module.route)"
      >
        <h3>{{ module.title }}</h3>
        <p>{{ module.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modules: [
        { title: '组织管理', description: '管理组织结构和用户权限', route: '/organization' },
        { title: '身份管理', description: '管理用户身份信息', route: '/identity' },
        { title: '权限管理', description: '配置系统权限', route: '/permission' },
        { title: '日志管理', description: '查看系统操作日志', route: '/log' }
      ]
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route) // 跳转到指定路由
    }
  }
}
</script>

<style scoped>
.system-management {
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
  font-family: Arial, sans-serif;
}

.title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 40px;
  color: #333;
}

.modules-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.module-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.module-card h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
}

.module-card p {
  font-size: 1rem;
  color: #666;
}

.module-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
  .module-card {
    width: 100%;
  }
}
</style>
