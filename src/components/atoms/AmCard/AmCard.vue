<template>
  <div class="shadow-md border border-gray-100 rounded-md flex flex-col items-center p-6 gap-2">
    <span class="font-mono text-sm">{{ plan }}</span>
    <div class="flex items-center gap-2">
      <span class="font-extrabold text-2xl pb-2">${{ valueForMonth }}</span>
      <span class="text-gray-400 text-sm">/month</span>
    </div>
    <p class="text-gray-400 text-sm max-w-xs text-center">{{ description }}</p>
    <div class="p-4">
      <ul class="flex flex-col gap-2">
        <li v-for="(feature, index) in features" :key="index" class="flex gap-2">
          <i class="material-icons text-green-400">check</i>
          <span>{{ feature }}</span>
        </li>
      </ul>
    </div>
    <button class="bg-black text-white text-sm pl-6 pr-6 pb-2 pt-2 rounded-md mt-10">
      Learn More
    </button>
  </div>
</template>

<script>
export default {
  name: 'AmCard',
  components: {},
  props: {
    plan: {
      type: String,
      required: true
    },
    valueForMonth: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    features: {
      type: Array,
      required: true
    }
  }
}
</script>
