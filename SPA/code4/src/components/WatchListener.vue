<template>
    <div>
        <h1>监听器</h1>
        <input type="text" class="form-control" v-model.trim="username">

    </div>


</template>

<script>
import axios from 'axios'

export default {
    name: "WatchListener",

    data() {
        return {
            username: '',

        }
    },
    watch: {
        username(newVal, oldVal) {
            console.log(newVal, oldVal)
            // const res = axios.get('https://www.esbok.cn/api/finduser/' + newVal)
            // console.log(res)
        },
    }
}
</script>

<style>

</style>