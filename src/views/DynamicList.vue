<template>
  <div class="dynamic-list-page">
    <h1>动态列表页面</h1>
    <DynamicList />
  </div>
</template>

<script setup>
import DynamicList from '../components/DynamicList.vue'
</script>

<style scoped>
.dynamic-list-page {
  padding: 2rem;
}

h1 {
  color: #42b983;
  margin-bottom: 2rem;
  text-align: center;
}
</style>

