<script setup>
import AmFormContact from '../components/molecules/AmFormContact/AmFormContact.vue'
import AmMap from '../components/molecules/AmMap/AmMap.vue'
</script>

<template>
  <main class="pt-36">
    <div class="flex flex-col items-center">
      <span class="font-serif text-2xl font-extrabold">Contact Us</span>
      <span class="max-w-xs text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
    </div>
    <div class="flex flex-col-reverse items-center pt-6">
      <AmFormContact class="w-96" />
      <AmMap class="pr-6 pl-6" />
    </div>
  </main>
</template>
