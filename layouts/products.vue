<template>
  <div>
    <Navbar/>
    <!-- output the page content -->
    <div>
      <slot />
    </div>
    <Footer/>
  </div>
</template>

<script setup>
import Navbar from '~~/components/Navbar.vue';
import Footer from '~~/components/Footer.vue';

</script>

<style scoped>
</style>