<template>
  <div class="sidebar">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/demo">样品图</router-link>
      </li>
      <li>
        <router-link to="/services">Services</router-link>
      </li>
      <li>
        <router-link to="/contact">联系方式</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
</script>

<style scoped>
.sidebar {
  width: 10vw;
  flex-shrink: 0;
  height: 100vh;
  background: rgba(51, 51, 51, 0.8);
}

/* 去掉默认样式 */
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  height: 15vh;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center;     /* 垂直居中 */
}

a {
  color: white;
  text-decoration: none;
  font-size: 16px;

  transition: all 0.5s ease;
  display: inline-block;     /* 为了 transform 生效更稳定 */
}

a:hover {
  color: pink;
}

.router-link-active {
  color: red;
  font-weight: bold;
  transform: scale(1.2);
}
</style>