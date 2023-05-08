<template>
  <div id="map" class="md:h-96 md:w-96 md:mt-10 h-72 w-80 z-10"></div>
</template>

<script>
import { ref, onMounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  setup() {
    const map = ref(null)

    onMounted(() => {
      map.value = L.map('map').setView([47.6205, -122.3493], 14)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 19
      }).addTo(map.value)

      L.marker([47.6205, -122.3493]).addTo(map.value)
    })

    return { map }
  }
}
</script>
