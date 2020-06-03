<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.tab-bar {
  display: flex;
  width: 100%;
  height: 49px;
  background-color: #f2f2f2;
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0;
  box-shadow: 0px -2px 3px rgba(0, 0, 0, .07);
  font-size: 14px;
}
</style>
