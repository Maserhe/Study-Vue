<template>
  
  <div class="mt-3 btn-container">
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn" :class="active === 0? 'btn-primary':'btn-secondary'" @click="chooseBtn(0)">全部</button>
      <button type="button" class="btn" :class="active === 1? 'btn-primary':'btn-secondary'" @click="chooseBtn(1)">已完成</button>
      <button type="button" class="btn" :class="active === 2? 'btn-primary':'btn-secondary'" @click="chooseBtn(2)">未完成</button>
    </div>
  </div>

</template>

<script>
export default {
    name: 'TodoButton',
    props: ['active', ],
    emits: ['chooseBtn', ],
    methods: {
        chooseBtn(index) {
            this.$emit('chooseBtn', index)
        }
    }
}
</script>

<style lang="less" scoped>
.btn-container {
  width: 400px;
  text-align: center;
}

.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

</style>
