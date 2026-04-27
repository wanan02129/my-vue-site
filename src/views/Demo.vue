<template>
  <div class="demo">
    <!-- 只有在 /demo 才显示卡片 -->
    <div v-if="$route.path === '/demo'" class="grid">
      <div
        v-for="item in items"
        :key="item.id"
        class="item"
        :style="{ backgroundImage: `url(${item.img})` }"
        @click="go(item.link)"
      >
        <span class="title">{{ item.title }}</span>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { items } from '@/stores/demo.js'

const router = useRouter()

const go = (link) => {
  if (link.startsWith('http')) {
    window.open(link)
  } else {
    router.push(link)
  }
}
</script>

<style scoped>
.demo {
  width: 80vw;
  height: 100%;
  padding-left: 5vw;

  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
}

.grid {
  display: flex;
  flex-wrap: wrap;
}

.item {
  width: 14vw;
  height: 20vh;
  border-radius: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  cursor: pointer;

  background-size: cover;
  background-position: center;

  position: relative;
  overflow: hidden;
}

.item::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.3);
}

.title {
  position: relative;
  z-index: 1;
  font-size: 18px;
  font-weight: bold;
}

.item:hover {
  transform: scale(1.05);
  transition: 0.3s;
}

.item:nth-child(5n+1) {
  margin-left: 0;
  margin-top: 5vh;
}

.item:not(:nth-child(5n+1)) {
  margin-left: 2.5vw;
  margin-top: 5vh;
}
</style>