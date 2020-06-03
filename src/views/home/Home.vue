<template>
  <div id="home">
    <home-nav class="homeNav">
      <template v-slot:center>购物街</template>
    </home-nav>

    <home-swiper :banners="banners"></home-swiper>

    <home-recommend :recommends="recommends"></home-recommend>
  </div>
</template>

<script>
import HomeNav from "components/common/NavBar/HomeNav";
import HomeSwiper from './childrenComp/HomeSwiper'
import HomeRecommend from './childrenComp/HomeRecommend'

import { getHomeMultidata } from "network/home";

export default {
  name: "home",
  components: {
    HomeNav,
    HomeSwiper,
    HomeRecommend
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      // console.log(this.banners);
    });
  }
};
</script>

<style scoped>
.homeNav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
