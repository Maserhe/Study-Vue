<template>
  
    <!-- 阻止默认提交 -->
    <form class="form-inline" @submit.prevent="onFormSubmit">

        <div class="input-group mb-2 mr-sm-2">
        <div class="input-group-prepend">
        <div class="input-group-text">任务</div>

        </div>
            <input type="text" class="form-control" placeholder="请输入任务信息"  v-model.trim="task" style="width: 356px"/>
        </div>
        

        <button type="submit" class="btn btn-primary mb-2">添加新任务</button>
    </form>


</template>

<script>
export default {
    name: "TodoInput",
    emits: ['add'],
    data() {
        return {
            task: "",
        }
    },
    methods: {
        add() {
            this.$emit('add')
        },
        onFormSubmit() {
            if (!this.task) return alert("任务不能为空")
            this.$emit('add', this.task)
            // 清空数据
            this.task=''
        }
    }
}
</script>

<style>

</style>