<template>
  <div id="am_networking_womans" class="flex flex-col justify-center md:flex-row md:items-center md:pr-16 md:pl-16 md:pt-12 md:pb-20 md:gap-10">
    <IconNetworkingWomans class="w-96 pl-4 pr-4 lg:min-w-fit" />
    <div id="am_networking_womans-description" class="flex flex-col items-start md:w-2/4 gap-2 pr-4 pl-4 pt-4 pb-8">
      <span class="font-serif text-2xl">Lorem ipsum dolor sit amet consectetur</span>
      <span class="text-sm text-gray-600"
        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor
        aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</span
      >
      <button class="bg-black text-white text-sm pl-6 pr-6 pb-1 pt-1 rounded-md mt-5">
        Learn More
      </button>
    </div>
  </div>
</template>

<script>
import IconNetworkingWomans from '../../icons/IconNetworkingWomans.vue'

export default {
  name: 'AmNetworkWomans',
  components: {
    IconNetworkingWomans
  }
}
</script>
