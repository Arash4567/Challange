<template>
  <div>
    <h2>iNDEX</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem necessitatibus repellendus ipsam
      perferendis vitae. Quibusdam error vitae unde, sint assumenda fugiat perferendis iure beatae, repellendus facere
      placeat dolores id! Eos necessitatibus veritatis fuga saepe sunt. Expedita laudantium eius magnam vero culpa
      nostrum sapiente ut architecto!</p>
  </div>
</template>

<script setup>
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