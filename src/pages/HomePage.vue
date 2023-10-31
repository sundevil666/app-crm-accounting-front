<template>
  <q-page class="HomePage q-pa-md">
    <div>
      <div class="page-title">
        <h3>Счет</h3>

        <q-btn
          icon="refresh"
          class="bg-blue-6"
          color="white"
          flat
          dense
          rounded
        />
      </div>

      <div class="row q-col-gutter-md">
        <div class="col-12 col-md-5 col-lg-4">
          <div class="card bg-light-blue-6 bill-card q-pa-md text-white">
            <div class="card-content white-text">
              <span class="card-title">Счет в валюте</span>

              <p class="currency-line">
                <span>12.0 </span>
              </p>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-7 col-lg-8">
          <div class="card bg-orange-6 darken-3 bill-card q-pa-md text-white">
            <div class="card-content white-text">
              <div class="card-header">
                <span class="card-title">Курс валют</span>
              </div>
              <table class="q-table q-table--vertical-separator q-table__card text-center">
                <thead>
                <tr>
                  <th>Валюта</th>
                  <th>Курс</th>
                  <th>Дата</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                  <td>val</td>
                  <td>12121</td>
                  <td>12.12.12</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>

</script>
