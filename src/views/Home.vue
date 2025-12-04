<template>
  <div class="home">
    <header>
      <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125" />
      <div class="wrapper">
        <HelloWorld msg="欢迎使用 Vue 3 + Vue Router!" />
      </div>
    </header>
  </div>
</template>

<script setup>
import HelloWorld from '../components/HelloWorld.vue'

</script>

<style scoped>
.home {
  line-height: 1.5;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  margin-bottom: 2rem;
}

.wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}

.navigation {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
}

@media (min-width: 1024px) {
  .home {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>

