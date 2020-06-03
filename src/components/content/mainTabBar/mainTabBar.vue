<template>
  <tab-bar>
      <tab-bar-item path="/home">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/home.svg" alt="">
        </template>

        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/home_active.svg" alt="">
        </template>
        
        <template v-slot:item-font>
          <div>首页</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/category">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/category.svg" alt="">
        </template>

        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/category_active.svg" alt="">
        </template>
        
        <template v-slot:item-font>
          <div>分类</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/car">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/shopcart.svg" alt="">
        </template>

        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/shopcart_active.svg" alt="">
        </template>
        
        <template v-slot:item-font>
          <div>购物</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/profile">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/profile.svg" alt="">
        </template>

        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/profile_active.svg" alt="">
        </template>
        
        <template v-slot:item-font>
          <div>个人</div>
        </template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import tabBar from 'components/common/tabbar/tabBar'
import tabBarItem from 'components/common/tabbar/tabBarItem'
export default {
  components: {
    tabBar,
    tabBarItem,
  }
}
</script>

<style scoped>

</style>
