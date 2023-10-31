<template>
  <q-item
    clickable
    :to="{ name: pathName, query }"
    exact
  >
    <q-item-section
      v-if="icon"
      avatar
      class="q-pa-sm"
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ name }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  },
  pathName: {
    type: String,
    required: true
  },
  query: {
    type: Object,
    default: () => ({})
  }
})
</script>
