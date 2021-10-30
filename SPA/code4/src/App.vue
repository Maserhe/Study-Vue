<template>
  
  <div>
    <h1>App 根组件</h1>
    <todo-input @add="addTask"></todo-input>
    <todo-list :list="taskList"></todo-list>
    <todo-button v-model:active="activeBtn" @chooseBtn="btnChoice"></todo-button>
    <hr>
    <watch-listener></watch-listener>
  </div>

  <!-- 使用计算属性直接获取特定数据 -->
  <!--  -->
</template>

<script>
import TodoList from './components/TodoList.vue'
import TodoInput from './components/TodoInput.vue'
import TodoButton from './components/TodoButton.vue'
import WatchListener from './components/WatchListener.vue'

export default {

  name: 'App',
  data() {
    return {
      nextId: 4,
      todoList: [
        { id: 1, task: "早起", done: false },
        { id: 2, task: "早起", done: false },
        { id: 3, task: "早起", done: true },
      ],
      activeBtn: 0
    }
  },
  components: {
    TodoList,
    TodoInput,
    TodoButton,
    WatchListener,

  },
  methods: {
    addTask(task) {
      console.log(task)
      this.todoList.push({
        id: this.nextId ++,
        task: task,
        done: false,
      })
    },
    btnChoice(index) {
      console.log(index)
      this.activeBtn = index
    }
  },
  computed: {
    
    taskList() {
      switch(this.activeBtn) {
        case 0:
          return this.todoList
        case 1:
          return this.todoList.filter(x => x.done === true)
        case 2:
          return this.todoList.filter(x => x.done === false)    
      }
    }
  }
}
</script>

<style>

</style>