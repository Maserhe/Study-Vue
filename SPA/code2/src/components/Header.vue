<template>
  <div>
      <h1>根组件</h1>


        数字： {{count}}

        zi{{str}}

  </div>


</template>

<script>
export default {
    name:'Header',
    props: {
        // 基础的类型校验， Number, String Array, Object, Date, Funcation, Boolean, Symbol
        count: String,
        // 声明多种类型， 可以添加 【 Number, String]
        // props 必添 项。

        str: {
            type: String,
            required: true,
        }
    }
}
</script>

<style scoped>

</style>>
