<template>
  <div class="goodsList">
    <goods-list-item v-for="item in goodsList.list" :key="item.acm" :goodslistitem="item"></goods-list-item>
  </div>
</template>

<script>
import goodsListItem from './goodsListItem'
  export default {
    components: {
      goodsListItem
    },
    props: {
      goodsList: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .goodsList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>