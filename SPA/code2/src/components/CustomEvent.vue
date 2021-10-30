<template>
    <h1>根组件</h1>

    <p>count 的直 {{ count }}</p>
    <button @click="add"> "add" </button>
</template>

<script>
export default {
    name:'CustiomEvent',
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        add() {
            this.count ++
            // 触发自定义事件
            this.$emit('countChange', this.count)
        }
    },
    emits: ['countChange'],
}
</script>

<style>

</style>