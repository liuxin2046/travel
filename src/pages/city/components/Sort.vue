<template>
  <div class="item-list">
    <div
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >{{item}}</div>
  </div>
</template>
<script>
export default {
  name: "CitySort",
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop
  },
  methods: {
    handleLetterClick(e) {
      this.$emit("change", e.target.innerText)
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        } 
          this.timer = setTimeout(() => {
          const moveY = e.touches[0].clientY - 89
          const index = Math.floor((moveY - this.startY) / 20)
          if (index >= 0 && index <= this.letters.length) {
            this.$emit("change", this.letters[index])
            }
          }, 16);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl';

.item-list {
  position: absolute;
  top: 1.8rem;
  right: 0;
  bottom: 0;
  width: 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .item {
    line-height: 0.4rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>
  