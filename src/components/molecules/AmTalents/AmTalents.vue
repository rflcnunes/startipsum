<template>
  <div id="am_talents" class="flex flex-col md:flex-row gap-5">
    <AmTalent nameOfTalent="Peg Legge" occupation="CEO">
      <IconPeg />
    </AmTalent>
    <AmTalent nameOfTalent="Richard Guerra" occupation="CEO">
      <IconRichard />
    </AmTalent>
    <AmTalent nameOfTalent="Alexandra Stolz" occupation="CEO">
      <IconAlexandra />
    </AmTalent>
    <AmTalent nameOfTalent="Janet Bray" occupation="DEVELOPER">
      <IconJanet />
    </AmTalent>
  </div>
</template>

<script>
import AmTalent from '../../atoms/AmTalent/AmTalent.vue'
import IconAlexandra from '../../icons/IconAlexandra.vue'
import IconJanet from '../../icons/IconJanet.vue'
import IconPeg from '../../icons/IconPeg.vue'
import IconRichard from '../../icons/IconRichard.vue'

export default {
  name: 'AmTalents',
  components: {
    AmTalent,
    IconAlexandra,
    IconJanet,
    IconPeg,
    IconRichard
  }
}
</script>
