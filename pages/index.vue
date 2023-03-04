<template>
  <div>
    <h2>Drag and Drop</h2>
    <DragAndDrop/>
  </div>
</template>

<script setup>
import DragAndDrop from '~/components/DragAndDrop.vue'
definePageMeta({
  layout: 'default',
  pageTransition: {
    name: 'slide-left',
    mode: 'out-in'
  },
  middleware(to, from) {
    to.meta.pageTransition.name = +to.params.id > +from.params.id ? 'slide-left' : 'slide-right'
  }
})

useHead({
  title: "Nuxt Gogo | Home",
  meta: [
    { name: "description", content: "Home page!" },
    { name: "author", content: "Ogabek" },
    { name: "linkTelegram", content: "@fullstackmaster" },
  ],
})
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