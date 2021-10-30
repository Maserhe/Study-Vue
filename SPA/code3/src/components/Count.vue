<template>
  <h1>app </h1>
  <hr>
  <h2>子组件 显示: {{number}}</h2>
  <button @click="add"> 子组件增加</button>
</template>

<script>
export default {
    name: "Count",
    props: ['number',],
    emits: ['update:number'],
    methods: {
        add() {
            // 自定义事件
            this.$emit('update:number', this.number + 1)
        }
    }
}
</script>

<style>

</style>