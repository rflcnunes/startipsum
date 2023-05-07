<template>
  <div id="am_body_home" class="pr-16 pl-16 pt-6 pb-20 flex flex-col justify-center items-center">
    <AmPartnersDescription />
    <AmCompanies />
    <button class="bg-black text-white text-sm pl-6 pr-6 pb-1 pt-1 rounded-md mt-10">
      Lean More
    </button>
    <AmNetworkWomans />
    <AmNetworkMen />
    <AmTalentsDescription />
    <AmTalents />
    <button class="bg-black text-white text-sm pl-6 pr-6 pb-1 pt-1 rounded-md mt-10">
      View Team
    </button>
  </div>
</template>

<script>
import AmPartnersDescription from '../../atoms/AmPartnersDescription/AmPartnersDescription.vue'
import AmCompanies from '../../atoms/AmCompanies/AmCompanies.vue'
import AmNetworkWomans from '../../atoms/AmNetworkWomans/AmNetworkWomans.vue'
import AmNetworkMen from '../../atoms/AmNetworkMen/AmNetworkMen.vue'
import AmTalents from '../AmTalents/AmTalents.vue'
import AmTalentsDescription from '../../atoms/AmTalentsDescription/AmTalentsDescription.vue'

export default {
  name: 'AmHeaderHome',
  components: {
    AmPartnersDescription,
    AmCompanies,
    AmNetworkWomans,
    AmNetworkMen,
    AmTalentsDescription,
    AmTalents,
}
}
</script>
