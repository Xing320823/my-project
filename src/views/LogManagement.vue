<template>
    <div class="module-page">
      <h1 class="title">日志管理</h1>
      <table class="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>操作</th>
            <th>时间</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.action }}</td>
            <td>{{ item.time }}</td>
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
          { id: 1, action: '登录', time: '2023-10-01 12:00' },
          { id: 2, action: '创建用户', time: '2023-10-02 14:30' }
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
  