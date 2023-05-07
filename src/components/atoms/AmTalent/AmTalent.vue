<template>
  <div
    id="am_talent"
    class="shadow-md border border-gray-100 rounded-md flex flex-col pt-4 pb-4 pl-8 pr-8"
  >
    <div id="am_talent-image" class="m-auto p-6">
      <slot></slot>
    </div>
    <div id="am_talent-description" class="flex flex-col mt-4 items-start">
      <span class="font-serif text-2xl font-semibold">{{ nameOfTalent }}</span>
      <p class="mt-2 text-gray-400 lg:max-w-xl">{{ occupation }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AmTalent',
  props: {
    nameOfTalent: {
      type: String,
      required: true
    },
    occupation: {
      type: String,
      required: true
    }
  }
}
</script>
