<template>
  <nav
    id="am-navbar"
    class="w-full bg-neutral-800 text-white flex flex-row items-center justify-between pr-4 pl-4 pt-4 pb-4 md:pr-16 md:pl-16 md:pt-6 md:pb-20"
    :class="desktopClasses"
  >
    <IconLogo class="w-28 sm:w-24" />
    <div v-if="mq.current === 'sm' || mq.current === 'xs'" class="sm:hidden">
      <div class="text-white cursor-pointer material-icons" @click="showDropdown = !showDropdown">
        menu
      </div>
      <div v-if="showDropdown" class="fixed top-0 left-0 h-screen w-full z-50 bg-neutral-800">
        <div
          class="text-white cursor-pointer material-icons float-right p-4"
          @click="showDropdown = !showDropdown"
        >
          close
        </div>
        <ul class="mt-10">
          <li v-for="(item, index) in items" :key="index" class="px-3 py-2">
            <RouterLink :to="item.path" class="hover:underline" @click="showDropdown = false">{{
              item.name
            }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <ul v-else class="hidden sm:flex flex-wrap">
      <li v-for="(item, index) in items" :key="index" id="am-navbar__item" class="px-3 py-2">
        <RouterLink :to="item.path" id="am-navbar__link" class="font-sans hover:underline">{{
          item.name
        }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import IconLogo from '../../icons/IconLogo.vue'

export default {
  name: 'AmNavbar',
  inject: ['mq'],
  components: {
    RouterLink,
    IconLogo
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
