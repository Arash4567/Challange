<template>
  <div class="flex items-center justify-center w-full h-[100vh] overflow-hidden">
    <div class="p-5 text-center rounded-lg shadow-md">
      <h1 class="font-bold text-center text-9xl">{{ error?.statusCode }}</h1>
      <h1 class="my-5 text-xl text-center">Oops! {{ error?.message }}</h1>
      <button class="p-3 text-white bg-green-500 border rounded-lg" @click="clearHandleError()">Go home</button>
    </div>
  </div>
</template>

<script setup>
defineProps(['error'])

const clearHandleError = () => {
  clearError({ redirect: '/' })
}
</script>

<style lang="scss" scoped>

</style>