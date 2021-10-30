<template>


  <count v-model:number="count"></count>
  父组件   {{count}}
  <button @click="count += 1">按钮</button>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Count from './components/Count.vue'

export default {
  name: 'App',
  data() {
    return{
      count: 0
    }
  },
  components: {
    // HelloWorld
    Count,
  }
}
</script>
