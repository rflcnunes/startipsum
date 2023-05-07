<template>
  <div id="am_body_home" class="pr-16 pl-16 pt-6 pb-20">
    <AmPartnersDescription />
    <AmCompanies />
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
