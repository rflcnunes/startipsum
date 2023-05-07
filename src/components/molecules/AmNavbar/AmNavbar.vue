<template>
  <nav
    id="am-navbar"
    class="w-full bg-zinc-900 text-white flex items-center justify-between pr-16 pl-16 pt-6 pb-6"
    :class="desktopClasses"
  >
    <IconLogo class="w-28 sm:w-24" />
    <div v-if="mq.current === 'sm' || mq.current === 'xs'" class="sm:hidden">
      <div class="text-white cursor-pointer material-icons" @click="showDropdown = !showDropdown">menu</div>
    </div>
    <div class="sm:flex sm:items-center sm:justify-between">
      <ul
        v-if="showDropdown"
        class="fixed top-0 left-0 h-screen w-full bg-gray-900 z-50 flex flex-col justify-center items-center"
      >
        <li v-for="(item, index) in items" :key="index" class="px-3 py-2">
          <RouterLink :to="item.path" class="hover:underline" @click="showDropdown = false">{{
            item.name
          }}</RouterLink>
        </li>
      </ul>
      <ul class="hidden sm:flex flex-wrap">
        <li v-for="(item, index) in items" :key="index" id="am-navbar__item" class="px-3 py-2">
          <RouterLink :to="item.path" id="am-navbar__link" class="font-sans hover:underline">{{
            item.name
          }}</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import IconLogo from '../../icons/IconLogo.vue'

export default {
  name: 'AmNavbar',
  inject: ["mq"],
  components: {
    RouterLink,
    IconLogo,
  },
  setup() {
    const items = ref([
      { name: 'Home', path: '/' },
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'Services', path: '/services' },
      { name: 'Contact', path: '/contact' }
    ])

    const showDropdown = ref(false)

    return {
      items,
      showDropdown
    }
  }
}
</script>
