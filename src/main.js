import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 创建 Vue 实例
createApp(App)
  .use(router) // 使用路由
  .mount('#app') // 挂载到 #app 元素
