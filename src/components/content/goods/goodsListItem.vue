<template>
  <div class="goodslistitem">
    <a :href="goodslistitem.link">
      <img :src="goodslistitem.show.img" alt />
      <p class="goodsTitle">{{goodslistitem.title}}</p>
      <span class="goodsprice">{{goodslistitem.price}}</span>
      <span class="goodscfav">{{goodslistitem.cfav}}</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    goodslistitem: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.goodslistitem {
  position: relative;
  width: 48%;
  margin-bottom: 10px;
  text-align: center;
}

.goodslistitem img {
  width: 100%;
  border-radius: 5px;
}

.goodsTitle {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 5px;
}

.goodsprice {
  color: var(--color-tint);
}

.goodscfav {
  display: inline-block;
  margin-left: 10px;
}

.goodscfav::before {
  content: "";
  width: 13px;
  height: 13px;
  display: inline-block;
  /* bottom: 4px;
  right: 55px; */
  /* z-index: 999; */
  background: url("~assets/img/common/collect.svg");
  background-size: contain;
}
</style>