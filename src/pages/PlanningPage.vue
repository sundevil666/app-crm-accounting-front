<template>
  <q-page class="PlanningPage q-pa-md">
    <div>
      <div class="page-title">
        <h3>Планирование</h3>
        <h4>12 212</h4>
      </div>

      <section
        v-for="(item) in lisCategory"
        :key="item.id"
        class="q-mb-xl"
      >
        <div>
          <p>
            <strong>{{ item.title }}:</strong>
            {{ calculateSumByType(item.records, 'outcome') }} из <strong>{{ item.limit + calculateSumByType(item.records, 'income') }} </strong>
            <span
              v-if="calculateSumByType(item.records, 'income') > 0"
              class="text-subtitle1 text-green-6"
            >
              = {{ item.limit }} + {{ calculateSumByType(item.records, 'income') }} (Income)
            </span>
          </p>
          <q-linear-progress
            size="25px"
            :value="(calculateSumByType(item.records, 'outcome') / (item.limit + calculateSumByType(item.records, 'income')))"
            color="green"
          >
            <div class="absolute-full flex flex-center">
              <q-badge
                color="white"
                text-color="accent"
                :label="(calculateSumByType(item.records, 'outcome') / (item.limit + calculateSumByType(item.records, 'income')) * 100).toFixed(2) + '%'" />
            </div>
          </q-linear-progress>
        </div>
      </section>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import { getAll } from "src/api/category";

const progress = ref(0.4)
const lisCategory = ref([])

const progressLabel = computed(() => (progress.value * 100).toFixed(2) + '%')

const getCategories = () => {
  getAll()
    .then(res => {
      lisCategory.value = res.data
    })
    .catch(e => {
      console.log(e)
    })
}
getCategories();

const calculateSumByType = (transactions, type) => {
  let sum = 0;

  transactions.forEach((transaction) => {
    if (transaction.operationType === type) {
      sum += transaction.summa;
    }
  });

  return sum;
};

</script>
