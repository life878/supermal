<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  data() {
    return {
      scroll: null
    };
  },
  props: {
    statusNumber: {
      type: Number,
      default() {
        return 0;
      }
    },
    ispullUpLoad: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  mounted() {
    // 创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.statusNumber,
      // eventPassthrough: 'vertical'
      // 解决图片不能查看的问题
      preventDefaultException: {
        className: /(^|\s)test(\s|$)/
      },
      pullUpLoad: this.ispullUpLoad
    });
    // 监听事件
    this.scroll.on("scroll", position => {
      this.$emit("scroll", position);
    });
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
  methods: {
    scrollTop(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    }
  }
};
</script>

<style scoped></style>
