<template>
  <div id="am_body_home" class="pr-16 pl-16 pt-6 pb-20 flex flex-col justify-center items-center">
    <AmPartnersDescription />
    <AmCompanies />
    <button class="bg-black text-white text-sm pl-6 pr-6 pb-1 pt-1 rounded-sm mt-10">Lean More</button>
  </div>
</template>

<script>
import AmPartnersDescription from '../../atoms/AmPartnersDescription/AmPartnersDescription.vue'
import AmCompanies from '../../atoms/AmCompanies/AmCompanies.vue'

export default {
  name: 'AmHeaderHome',
  components: {
    AmPartnersDescription,
    AmCompanies
  }
}
</script>
