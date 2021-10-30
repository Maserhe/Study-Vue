<template>
  <div>
    <h1>App 根组件</h1>
    <hr />

    <div class="brother-box">
      <!-- 3. 使用组件 -->
      <my-left></my-left>
      <my-right></my-right>

    </div>
  </div>
</template>

<script>
// 1. 导入需要的组件
import MyLeft from './Left.vue'
import MyRight from './Right.vue'

export default {
  name: 'MyApp',
  // 2. 注册组件
  components: {
    MyLeft,
    MyRight,
  },

  // private: {} 提供数据  不会响应变化。color : computed(() => this.color),
  // inject: () 接收数据  响应的获取数据， 应该使用 color.value


}
</script>

<style lang="less" scoped>
.brother-box {
  display: flex;
  > div {
    border: 1px solid #ccc;
    flex: 1;
    margin: 10px;
    padding: 10px;
    height: 300px;
  }
}
</style>
