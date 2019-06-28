<template>
  <div class="collection">
      <button @click="back">点我返回</button>
    <h1>这是一级文物分类页</h1>
  </div>
</template>

<script>
export default {
    name: 'aaa',
    methods:{
      back(){this.$router.push('/')}
    },
  }
</script>
<style>
</style>
