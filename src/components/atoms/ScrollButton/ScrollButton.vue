<template>
  <button v-show="showButton" @click="scrollToTop" class="scroll-to-top-button">
    <span class="material-icons">arrow_upward</span>
  </button>
</template>
<script>
export default {
  name: 'ScrollButton',
  data() {
    return {
      showButton: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    handleScroll() {
      this.showButton = window.scrollY > 0
    }
  }
}
</script>
<style>
.scroll-to-top-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99;
  background-color: #55555550;
  border-radius: 4px;
  padding: 10px 10px 5px 10px;
}
</style>
