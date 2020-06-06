<template>
  <div class="tabControl">
    <div v-for="(item, index) in titles" :key="item" class="title" :class="{current: index == currentIndex}" @click="currentItem(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      currentItem(index) {
        this.currentIndex = index
        return this.$emit('goodsIndex', index)
        // console.log(index);
      }
    }
  }
</script>

<style scoped>
  .tabControl {
    display: flex;
    text-align: center;
    z-index: 9;
  }

  .tabControl .title {
    padding: 10px 0;
    flex: 1;
  }

  .tabControl .current span {
    padding: 5px;
    border-bottom: 2px solid var(--color-high-text);
  }
</style>