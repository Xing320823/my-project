<template>
    <div class="module-page">
      <h1 class="title">权限管理</h1>
      <table class="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>角色</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.role }}</td>
            <td>{{ item.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        data: [
          { id: 1, role: '管理员', description: '拥有所有权限' },
          { id: 2, role: '普通用户', description: '拥有部分权限' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .module-page {
    padding: 20px;
  }
  
  .title {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .data-table {
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    border: 1px solid #ddd;
  }
  
  .data-table th,
  .data-table td {
    padding: 10px;
    border: 1px solid #ddd;
  }
  
  .data-table th {
    background-color: #f5f5f5;
    text-align: left;
  }
  </style>
  