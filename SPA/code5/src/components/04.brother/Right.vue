<template>
  <div>
    <h3>数据接收方 --- num 的值为：{{ num }}</h3>
  </div>
</template>

<script>
import bus from './eventBus.js'

export default {
  name: 'MyRight',
  data() {
    return {
      num: 0,
    }
  },
  // 生命周期函数， 在创建的时候就进行创建。
  created() {

    // 数据接收方
    bus.on('countChange', count => {
      this.num = count
    })
  },

  // 对子组件提供的数据。
  provide: {

  }
}
</script>

<style lang="less" scoped></style>
