<template>
  <div
    id="am_header_home"
    class="bg-neutral-800 text-white flex items-center justify-between flex-col-reverse pr-4 pl-4 pt-4 pb-8 md:flex-row md:pr-16 md:pl-16 md:pt-6 md:pb-20"
  >
    <div id="am_header_home-description" class="items-start justify-center flex-col max-w-md">
      <span class="font-mono flex text-md">Welcome</span>
      <span class="font-serif text-4xl">Lorem ipsum dolor sit amet consectetur</span>
      <p class="mt-5 text-gray-400 lg:max-w-xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor
        aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
      </p>
      <button class="bg-white text-black text-sm pl-6 pr-6 pb-1 pt-1 rounded-md mt-5">
        Explore
      </button>
    </div>
    <div id="am_header_home-image" class="float-left">
      <IconPeopleNetworking class="w-96 lg:w-full" />
    </div>
  </div>
</template>

<script>
import IconPeopleNetworking from '@/components/icons/IconPeopleNetworking.vue'

export default {
  components: {
    IconPeopleNetworking
  }
}
</script>
