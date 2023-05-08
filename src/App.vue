<script setup>
import { RouterView } from 'vue-router'
import AmNavbar from './components/molecules/AmNavbar/AmNavbar.vue'
import AmFooterHome from './components/molecules/AmFooterHome/AmFooterHome.vue'
</script>

<template>
  <header>
    <AmNavbar />
  </header>

  <RouterView />

  <footer>
    <AmFooterHome />
  </footer>
</template>
