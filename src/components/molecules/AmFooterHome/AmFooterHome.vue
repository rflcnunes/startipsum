<template>
  <div
    id="am_footer_home"
    class="w-full bg-neutral-800 text-white flex flex-col items-center justify-center pt-10 pb-10 md:flex-row md:justify-between md:pr-48 md:pl-48 md:pt-14 md:pb-10"
  >
    <div id="am_footer_home-icons" class="flex flex-row gap-5 mb-5">
      <IconMiniFacebook />
      <IconMiniInstagram />
      <IconMiniTwitter />
      <IconMiniPinterest />
      <IconMiniWhatsApp />
      <IconMiniYouTube />
    </div>
    <div>
      <span>@ Startipsum, 2023. All rights reserved.</span>
    </div>
  </div>
</template>

<script>
import IconMiniFacebook from '../../icons/IconMiniFacebook.vue'
import IconMiniInstagram from '../../icons/IconMiniInstagram.vue'
import IconMiniPinterest from '../../icons/IconMiniPinterest.vue'
import IconMiniTwitter from '../../icons/IconMiniTwitter.vue'
import IconMiniWhatsApp from '../../icons/IconMiniWhatsApp.vue'
import IconMiniYouTube from '../../icons/IconMiniYouTube.vue'

export default {
  name: 'AmFooterHome',
  components: {
    IconMiniFacebook,
    IconMiniInstagram,
    IconMiniTwitter,
    IconMiniPinterest,
    IconMiniWhatsApp,
    IconMiniYouTube
  }
}
</script>
