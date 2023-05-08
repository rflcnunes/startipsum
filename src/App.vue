<script setup>
import { RouterView } from 'vue-router'
import AmNavbar from './components/molecules/AmNavbar/AmNavbar.vue'
import AmFooterHome from './components/molecules/AmFooterHome/AmFooterHome.vue'
import ScrollButton from './components/atoms/ScrollButton/ScrollButton.vue'
</script>

<template>
  <header class="fixed w-full bg-neutral-800 z-50">
    <AmNavbar />
  </header>

  <RouterView class="relative pt-16" />
  <ScrollButton />

  <footer>
    <AmFooterHome />
  </footer>
</template>
