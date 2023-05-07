<template>
  <div id="am_networking_womans" class="flex flex-col justify-center md:flex-row md:items-center md:pr-16 md:pl-16 md:pt-12 md:pb-20 md:gap-14">
    <IconNetworkingWomans class="w-96 p-4 lg:min-w-fit" />
    <div id="am_networking_womans-description" class="flex flex-col items-start md:max-w-2xl gap-2 pr-4 pl-4 pt-4 pb-8">
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
