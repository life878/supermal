<template>
  <div id="home">
    <home-nav class="homeNav">
      <template v-slot:center>购物街</template>
    </home-nav>

    <scroll
      class="content"
      ref="scrollDom"
      :statusNumber="3"
      @scroll="contentScroll"
      :ispullUpLoad="true"
      @pullingUp="upMore"
    >
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <feature-view></feature-view>
      <tab-control
        :titles="titles"
        class="tab-control"
        @goodsIndex="goodsValue"
      ></tab-control>
      <goods-list :goods-list="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="BackTop" v-show="isBackTopShow"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childrenComp/HomeSwiper";
import HomeRecommend from "./childrenComp/HomeRecommend";
import FeatureView from "./childrenComp/FeatureView";

import HomeNav from "components/common/NavBar/HomeNav";
import TabControl from "components/content/TabControl/TabControl";
import goodsList from "components/content/goods/goodsList";
import scroll from "components/common/scroll/scroll";
import BackTop from "components/common/BackTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "home",
  components: {
    HomeSwiper,
    HomeRecommend,
    HomeNav,
    FeatureView,
    TabControl,
    goodsList,
    scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentGoods: "pop",
      isBackTopShow: false
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  computed: {
    showGoods() {
      return this.goods[this.currentGoods];
    }
  },
  methods: {
    /**
      事件监听
    */
    goodsValue(index) {
      switch (index) {
        case 0:
          this.currentGoods = "pop";
          break;
        case 1:
          this.currentGoods = "new";
          break;
        case 2:
          this.currentGoods = "sell";
      }
    },
    BackTop() {
      this.$refs.scrollDom.scrollTop(0, 0);
    },
    contentScroll(position) {
      this.isBackTopShow = -position.y > 1000;
    },
    upMore() {
      this.getHomeGoods(this.currentGoods);
      this.$refs.scrollDom.finishPullUp();
    },

    /**
      网络请求
    */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;

      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    }
  }
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.homeNav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  z-index: 9;
  left: 0;
  top: 0;
  width: 100%;
}

.tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
}

/* .content {
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */

.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
}
</style>
