<template>
  <div id="am_companies" class="pr-16 pl-16 pt-6 pb-20 grid xl:grid-flow-col gap-11 md:grid-flow-row">
    <IconGoogle />
    <IconMicrosoft />
    <IconAirbnb />
    <IconFacebook />
    <IconSpotify />
  </div>
</template>

<script>
import IconAirbnb from '../../icons/IconAirbnb.vue'
import IconFacebook from '../../icons/IconFacebook.vue'
import IconGoogle from '../../icons/IconGoogle.vue'
import IconMicrosoft from '../../icons/IconMicrosoft.vue'
import IconSpotify from '../../icons/IconSpotify.vue'

export default {
  name: 'AmCompanies',
  components: {
    IconGoogle,
    IconMicrosoft,
    IconAirbnb,
    IconFacebook,
    IconSpotify
  }
}
</script>
