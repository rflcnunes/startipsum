<script setup>
import { RouterView } from 'vue-router'
import AmNavbar from './components/molecules/AmNavbar/AmNavbar.vue'
import AmFooterHome from './components/molecules/AmFooterHome/AmFooterHome.vue'
import ScrollButton from './components/atoms/ScrollButton/ScrollButton.vue'
</script>

<template>
  <header>
    <AmNavbar />
  </header>

  <RouterView />
  <ScrollButton />

  <footer>
    <AmFooterHome />
  </footer>
</template>
