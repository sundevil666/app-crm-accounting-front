<template>
  <q-page class="NewRecordPage q-pa-md">
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <div class="q-gutter-y-md">

      <div>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="create" label="Создать" />
          <q-tab name="update" label="Редактировать" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="create">
            <div>
              <div class="page-subtitle">
                <h4>Создать</h4>
              </div>

              <form>
                <ul>
                  <li class="q-mb-md">
                    <q-input v-model="titleCreate" label="Название" hint="Введите название" />
                  </li>
                  <li class="q-mb-md">
                    <q-input v-model="limitCreate" label="Лимит" hint="Введите Лимит" />
                  </li>
                  <li>
                    <q-btn
                      :disable="!isValidCreated"
                      icon="send"
                      label="Создать"
                      class="bg-blue-6 text-white"
                      @click="createCategory"
                    />
                  </li>
                </ul>
              </form>
            </div>
          </q-tab-panel>

          <q-tab-panel name="update">
            <div class="page-subtitle">
              <h4>Редактировать</h4>
            </div>
            <form>
              <ul>
                <li class="q-mb-md">
                  <q-select
                    v-model="selectCategory"
                    :options="lisCategory"
                    :option-label="item => item.title"
                    :option-value="item => item.id"
                    label="Category"
                    hint="Выберите категорию"
                    @update:model-value="changeSelectCategory"
                  />
                </li>
                <li class="q-mb-md">
                  <q-input v-model="titleUpdate" label="Название" hint="Введите название" />
                </li>
                <li class="q-mb-md">
                  <q-input v-model="limitUpdate" label="Лимит" hint="Введите Лимит" />
                </li>
                <li>
                  <q-btn
                    :disable="!isValidUpdated"
                    icon="send"
                    label="Обновить"
                    class="bg-blue-6 text-white"
                    @click="categoryUpdate"
                  />
                </li>
              </ul>
            </form>
          </q-tab-panel>

        </q-tab-panels>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import { create, getAll, update } from "src/api/category";
import messagesNotify from "src/helpers/messagesNotify";

const titleCreate = ref('')
const limitCreate = ref('')

const titleUpdate = ref('')
const limitUpdate = ref('')
const updateCategoryId = ref('')

const lisCategory = ref([])
const selectCategory = ref('')

const tab = ref('create')

const isValidCreated = computed(() => {
  return titleCreate.value && limitCreate.value
})
const isValidUpdated = computed(() => {
  return titleUpdate.value && limitUpdate.value && updateCategoryId.value
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


const createCategory = () => {
  if (!isValidCreated.value) {
    return null
  }
  const data = {
    title: titleCreate.value,
    limit: Number(limitCreate.value),
  }
  create(data)
    .then(res => {
      messagesNotify(`Category ${res.data.title} created`)
      titleCreate.value = limitCreate.value = ''
      getCategories();
    })
    .catch(e => {
      e.response.data.message.forEach(item => {
        messagesNotify(`${item.path[0]}: ${item.message}`)
      })
    })
}

const categoryUpdate = () => {
  if (!isValidUpdated.value) {
    return null
  }
  const id = updateCategoryId.value

  const data = {
    title: titleUpdate.value,
    limit: Number(limitUpdate.value),
  }
  update(id, data)
    .then(res => {
      messagesNotify(`Category ${res.data.title} updated`)
      selectCategory.value = titleUpdate.value = limitUpdate.value = ''
      getCategories();
    })
    .catch(e => {
      e.response.data.message.forEach(item => {
        messagesNotify(`${item.path[0]}: ${item.message}`)
      })
    })
}

const changeSelectCategory = (val) => {
  updateCategoryId.value = val.id
  titleUpdate.value = val.title
  limitUpdate.value = val.limit
}
</script>
