<template>
  <h1>  h1标题 </h1>
  <h2> lalalalal </h2>
  {{username}}

  <p>{{count}} </p>
  <button @click="count +=1"></button>

  <hr>
  <pri></pri>

  <Header count=12 str="张三"></Header>

  <br>
  <custiom-event @countChange="getCount"></custiom-event>
</template>


<script>
import HelloWorld from './components/HelloWorld.vue'
import Private from './components/Private.vue'
import Header from './components/Header.vue'
import CustiomEvent from './components/CustomEvent.vue'

// 组件中不能直接写数据， 要写在函数中直接返回就行了。
export default {
  // 当前组件名称， 组件名称大写 // 计算属性不需要加（）， 使用效果比funcation 要快
  name: 'App',

  // 引用了那些组件
  components: {
    HelloWorld,
    "pri":Private,
    Header,
    CustiomEvent
  },
  data() {
    return {
      username:'zs',
      count: 0
    }
  },
  // 组件的函数
  methods: {
    addCount() {
      this.count += 1
    },
    getCount(count) {
      console.log("触发了事件处理函数" + count)
    }
  }

}
</script>

// 对组件可以适当进行美化
<style scoped>
 h1 {
   background: red;
 }

</style>
