<template>
  <div class="content">
    <h1>感谢您的信任，了解更多详细情况，请拨打</h1>
    <h1><span class="copyable">15138238214</span></h1>
  </div>
</template>

<script setup>
</script>

<style scoped>
.content {
  margin-left: 5vw;
  padding: 20px;
  height: 100vh;
  width: 80vw;
  overflow: hidden; /* 禁止滚动 */
  box-sizing: border-box;
}

.content {
  margin-top: 20vh;
  text-align: center; /* 文字居中 */
  user-select: none;
}

/* 只允许数字部分选中 */
.copyable {
  user-select: text;
  cursor: text;
  color: blue;
}
</style>