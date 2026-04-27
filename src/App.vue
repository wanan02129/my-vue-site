<template>
  <div class="app">
    <Sidebar />
    <router-view />
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

.app {
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/background/111.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* background-attachment: fixed;  🚨 关键：背景不动 */
}

</style>