<template>
  <div class="homeRecommend">
    <div v-for="item in recommends" :key="item.image" class="cRecommend">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .homeRecommend {
    display: flex;
    padding: 10px 0 15px 0;
    border-bottom: 8px solid #eee;
  }

  .homeRecommend .cRecommend {
    flex: 1;
    text-align: center;
    font-size: 14px;
  }

  .homeRecommend .cRecommend img {
    width: 85%;
    margin-bottom: 8px;
  }
</style>
