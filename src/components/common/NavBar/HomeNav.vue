<template>
  <div class="homeNav">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .homeNav {
    display: flex;
    height: 44px;
  }

  .left {
    flex: 1;
  }

  .center {
    flex: 1;
    line-height: 44px;
    text-align: center;
  }

  .right {
    flex: 1;
  }
</style>