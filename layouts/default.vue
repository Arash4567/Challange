<template>
  <div>
    <Navbar/>
    <!-- output the page content -->
    <div>
      <slot />
    </div>
  </div>

</template>

<script setup>
import Navbar from '~~/components/Navbar.vue';


</script>

<style scoped>
</style>