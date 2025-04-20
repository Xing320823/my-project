<template>
    <div class="module-page">
      <h1 class="title">身份管理</h1>
      <table class="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>用户名</th>
            <th>邮箱</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.username }}</td>
            <td>{{ item.email }}</td>
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
          { id: 1, username: '用户 A', email: 'userA@example.com' },
          { id: 2, username: '用户 B', email: 'userB@example.com' }
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
  