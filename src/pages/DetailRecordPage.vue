<template>
  <q-page class="DetailRecordPage.vue q-pa-md">
    <div class="q-mb-md">
      <q-breadcrumbs>
        <template v-slot:separator>
          <q-icon
            size="1.5em"
            name="chevron_right"
            color="primary"
          />
        </template>
        <q-breadcrumbs-el icon="history_toggle_off" label="История" />
        <q-breadcrumbs-el label="Расход" />
      </q-breadcrumbs>
    </div>
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="text-white bg-red-6 q-pa-md">
          <div class="card-content white-text">
            <p>Описание:</p>
            <p>Сумма:</p>
            <p>Категория:</p>

            <small>12.12.12</small>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>

</script>


