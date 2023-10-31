<template>
  <q-page class="NewRecordPage q-pa-md">
    <div class="page-title">
      <h3>Профиль</h3>
    </div>

    <form class="form">
      <div class="q-mb-md">
        <q-input
          v-model="email"
          label="Имя"
          hint="Имя"
        />
      </div>
      <q-btn
        icon="send"
        label="Обновить"
        class="bg-blue-6 text-white full-width"
      />
    </form>
</q-page>
</template>

<script setup>

</script>
