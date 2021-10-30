export <template>
  <h1>局部注册的组件</h1>
  {{msg}}

  <div>

      <h1 style="{color: aactive}">牛啊牛啊</h1>

  </div>
</template>

<script>
export default {
    name:'private',
    data() {
        return {
            msg: 'aaaa',
            active: 'red',
        }
    }
}
</script>

<style>

</style>
