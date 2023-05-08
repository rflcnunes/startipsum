<script setup>
import AmFormContact from '../components/molecules/AmFormContact/AmFormContact.vue'
import AmMap from '../components/molecules/AmMap/AmMap.vue'
</script>

<template>
  <main class="pt-36 md:flex md:flex-col md:items-center">
    <div class="flex flex-col items-center">
      <span class="font-serif text-2xl font-extrabold">Contact Us</span>
      <span class="max-w-xs text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
    </div>
    <div class="flex flex-col-reverse items-center pt-6 md:grid md:grid-flow-col md:w-full md:grid-cols-1 md:pl-36 md:pr-36">
      <AmFormContact class="w-96 md:max-w-xl" />
      <AmMap class="pr-6 pl-6" />
    </div>
  </main>
</template>
