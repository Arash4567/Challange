<template>
  <div>
    <h2 class="p-5">All Products</h2>
    <hr>
    <!-- <Loader v-if="pending" /> -->
    <LazyLoader v-if="pending" />
    <div class="grid grid-cols-4 gap-5 p-5">
      <div v-for="(product, idx) in products" :key="idx">
        <ProductCard :product="product"/>
      </div>
    </div>
    <hr>
  </div>
</template>

<script setup>

// import Loader from '~~/components/Loader.vue';

import ProductCard from '~~/components/ProductCard.vue';

definePageMeta({
  layout: 'products',
  pageTransition: {
    name: 'slide-left',
    mode: 'out-in'
  },
  middleware(to, from) {
    to.meta.pageTransition.name = +to.params.id > +from.params.id ? 'slide-left' : 'slide-right'
  }
})

const { data: products, pending } = await useFetch('https://fakestoreapi.com/products')
</script>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
</style>