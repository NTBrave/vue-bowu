<template>
  <div class="user">
    <button @click="back">点我返回</button>
    <h1>这是二级文物分类页</h1>
  </div>
</template>

<script>
export default {
  methods:{back(){this.$router.push('/')}},
};  

</script>