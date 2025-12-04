<script setup>
</script>

<template>
  <div id="app">
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于</router-link>
      <router-link to="/dynamic-list">动态列表</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
}

nav {
  padding: 1rem 2rem;
  background-color: #2c3e50;
  display: flex;
  gap: 1rem;
  align-items: center;
}

nav a {
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

nav a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

nav a.router-link-active {
  background-color: #42b983;
  color: #fff;
}

main {
  padding: 2rem;
}
</style>
