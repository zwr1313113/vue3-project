<template>
  <div class="about">
    <h1>关于页面</h1>
    <p>这是一个使用 Vue Router 创建的关于页面。</p>
    <p>当前路由: {{ $route.path }}</p>
  </div>
</template>

<script setup>
</script>

<style scoped>
.about {
  padding: 2rem;
  text-align: center;
}

h1 {
  color: #42b983;
  margin-bottom: 1rem;
}

p {
  margin: 1rem 0;
  line-height: 1.6;
}
</style>

