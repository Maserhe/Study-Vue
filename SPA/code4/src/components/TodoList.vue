<template>
  
    <div>
        <ul class="list-group">
            <!-- 列表组 -->
            <li class="list-group-item d-flex justify-content-between align-items-center"  v-for="(item, i) in list" :key="item.id">
                <!-- 复选框 -->
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" :id="item.id" v-model="item.done"/>
                    <label class="custom-control-label" :for="item.id" :class="item.done? 'delete': ''">{{item.task}}</label>
                </div>


                <!-- 徽标 -->
                <span class="badge badge-success badge-pill" v-if="item.done">完成</span>
                <span class="badge badge-warning badge-pill" v-else>未完成</span>
            </li>
        </ul>

    </div>

</template>

<script>
export default {
    name:"TodoList",
    props: {
        list: {
            type: Array,
            required: true,
            default: [],
        }
    }

}
</script>

<style lang="less" scoped>
    .list-group {
        width: 400px;
    }

    .delete {
        color: gray;
        font-style: italic;
        text-decoration: line-through;

    }
</style>