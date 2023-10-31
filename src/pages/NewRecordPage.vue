<template>
  <q-page class="NewRecordPage q-pa-md">
    <div>
      <div class="page-title">
        <h3>Новая запись</h3>
      </div>

      <form
        class="full-width block"
        v-if="lisCategory.length"
      >
        <ul>
          <li class="q-mb-md">
            <q-select
              v-model="selectCategory"
              :options="lisCategory"
              :option-label="item => item.title"
              :option-value="item => item.id"
              label="Category"
              hint="Выберите категорию"
            />
          </li>
          <li class="q-mb-md">
            <q-radio
              v-model="incomeToOutcome"
              color="blue"
              val="income"
              label="Доход"
            />
            <q-radio
              v-model="incomeToOutcome"
              color="blue"
              val="outcome"
              label="Расход"
            />
          </li>
          <li class="q-mb-md">
            <q-input v-model="summa" label="Сумма" hint="Сумма" />
          </li>
          <li class="q-mb-md">
            <q-input v-model="description" label="Описание" hint="Описание" />
          </li>
        </ul>

        <q-btn
          :disable="!isValidCreatedRecord"
          icon="send"
          label="Создать"
          class="bg-blue-6 text-white"
          @click="createNewRecord"
        />
      </form>
      <div v-else>
        <div>Category not found</div>
        <div><router-link :to="{ name: 'CategoriesPage'}">Add new category</router-link></div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import { create } from "src/api/record";
import { getAll } from "src/api/category";
import messagesNotify from "src/helpers/messagesNotify";

const lisCategory = ref([])
const selectCategory = ref('')

const incomeToOutcome = ref('')
const summa = ref(null)
const description = ref(null)

const selectedCategoryById = computed(() => {
  return selectCategory.value.id || false;
})
const isValidCreatedRecord = computed(() => {
  return summa.value && description.value && selectedCategoryById.value && incomeToOutcome.value;
})

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

const createNewRecord = () => {
  if (!isValidCreatedRecord.value) {
    return null
  }
  const data = {
    category: Number(selectedCategoryById.value),
    operationType: incomeToOutcome.value,
    summa: Number(summa.value),
    description: description.value
  }
  create(data)
    .then(res => {
      messagesNotify(`Record ${res.data.description} created`)
      selectCategory.value = summa.value = description.value = incomeToOutcome.value = null
    })
    .catch(e => {
      messagesNotify(`Record ${e.message} created`)
      console.log(e)
    })
}
</script>
