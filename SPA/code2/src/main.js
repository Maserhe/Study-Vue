// 引入函数
import { createApp } from 'vue'

// 导入待渲染的页面
import App from './App.vue'

import './index.css'

// 打包文件的入口  将app.vue 渲染到 index.html
// createApp 返回的 spa  
// 指定要控制的区域
createApp(App).mount('#app')

// commount 是全局注册 commpoent("组件名”， 组件)
// mount 局部注册
