<template>
  <div class="w-full pr-6 pl-6 md:pr-16 md:pl-16 pt-10 md:pt-36 pb-20 flex flex-col justify-center items-center gap-4">
    <div class="w-full">
      <label for="input" class="block font-medium text-gray-700">Name</label>
      <input
        type="text"
        id="input"
        name="input"
        placeholder="Your name"
        class="mt-1 p-1 block w-full rounded-md border-solid border-2 border-slate-950 focus:border-lime-600"
      />
    </div>
    <div class="w-full">
      <label for="input" class="block font-medium text-gray-700">Email</label>
      <input
        type="text"
        id="input"
        name="input"
        placeholder="Your email"
        class="mt-1 p-1 block w-full rounded-md border-solid border-2 border-slate-950 focus:border-lime-600"
      />
    </div>
    <div class="w-full">
      <label for="input" class="block font-medium text-gray-700">Message</label>
      <textarea
        id="input"
        name="input"
        placeholder="Your message"
        class="mt-1 p-1 block w-full rounded-md border-solid border-2 border-slate-950 focus:border-lime-600"
      ></textarea>
    </div>
    <button class="bg-black text-white text-sm pl-6 pr-6 pb-2 pt-2 rounded-md mt-10 w-full">
      Submit
    </button>
  </div>
</template>

<script>
export default {
  name: 'AmFormContact',
  components: {}
}
</script>
