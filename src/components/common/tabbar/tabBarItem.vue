<template>
    <div class="tab-bar-item" @click="pathClick">
      <div v-if="!isAcitve">
        <slot name="item-icon"></slot>
      </div>
      <div v-else>
        <slot name="item-icon-active"></slot>
      </div>
      <div :style="isColorActive">
        <slot name="item-font"></slot>
      </div>
    </div>
</template>

<script>
  export default {
    props: {
      path: String,
      isColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
        // isAcitve: true
      }
    },
    methods: {
      pathClick() {
        this.$router.replace(this.path).catch(err => err)
      }
    },
    computed: {
      isAcitve() {
        // console.log(this.$route.path);
        // console.log(this.path);
        return this.$route.path.indexOf(this.path) !== -1
      },
      isColorActive() {
        return this.isAcitve ? {color: this.isColor} : {}
      }
    },
  }
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  padding: 2px 0;
  box-sizing: border-box;
}

.tab-bar-item img {
  width: 22px;
}
</style>
