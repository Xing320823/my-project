<template>
    <div class="module-page">
      <h1 class="title">组织管理</h1>
      <table class="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>名称</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
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
          { id: 1, name: '组织 A', description: '这是一个组织' },
          { id: 2, name: '组织 B', description: '这是另一个组织' }
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
  