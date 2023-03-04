<script setup>
import draggable from 'vuedraggable'

const myArray = ref([
  {
    id: 1,
    name: 'Hello 1'
  }, {
    id: 2,
    name: 'Hello 2'
  }, {
    id: 3,
    name: 'Hello 3'
  }, {
    id: 4,
    name: 'Hello 4'
  },
])
</script>
<template>
  <div>
    <!-- <draggable v-model="myArray" @start="drag = true" @end="drag = false" item-key="id">
          <template #item="{ element }">
            <div>{{ element.name }}</div>
          </template>
        </draggable> -->

    <draggable v-model="myArray" item-key="id">
      <template #item="{ element }">
        <div>{{ element.name }}</div>
      </template>
    </draggable>
  </div>
</template>
<style lang="scss" scoped></style>