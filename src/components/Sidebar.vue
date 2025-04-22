<template>
    <div class="sidebar">
      <div class="sidebar-header">
        <h2>系统管理</h2>
      </div>
      <ul class="sidebar-menu">
        <li>
          <router-link to="/organization">组织管理</router-link>
        </li>
        <li>
          <router-link to="/identity">身份管理</router-link>
        </li>
        <li>
          <router-link to="/permission">权限管理</router-link>
        </li>
        <li>
          <router-link to="/log">日志管理</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sidebar'
  }
  </script>
  
  <style scoped>
  .sidebar {
    width: 250px;
    height: 100vh;
    background-color: #2c3e50; /* 深色背景 */
    color: #fff;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
  }
  
  .sidebar-header {
    margin-bottom: 30px;
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 10px;
  }
  
  .sidebar-header h2 {
    font-size: 2rem;
    color: #1890ff;
    font-weight: bold;
    font-family: 'Arial', sans-serif; /* 主标题避免黑体或宋体 */
  }
  
  .sidebar-menu {
    list-style: none;
    padding: 0;
  }
  
  .sidebar-menu li {
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 10px;
  }
  
  .sidebar-menu a {
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.3s, transform 0.3s;
    font-family: '黑体', sans-serif; /* 导航栏字体为黑体 */
  }
  
  .sidebar-menu a:hover {
    color: #1890ff;
    transform: translateX(10px);
  }
  
  .router-link-active {
    color: #1890ff;
    font-weight: bold;
  }
  </style>
  