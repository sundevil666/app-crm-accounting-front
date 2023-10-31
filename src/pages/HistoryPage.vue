<template>
  <q-page class="HistoryPage q-pa-md">
    <div>
      <div class="page-title">
        <h3>История записей</h3>
        <div class="text-red-6 text-subtitle2">todo: fix and sort by date</div>
      </div>

      <section>
        <table
          class="q-table q-table--vertical-separator q-table__card text-center"
        >
          <thead class="text-weight-bold mdi-size-l">
            <tr>
              <th>#</th>
              <th>Сумма</th>
              <th>Дата</th>
              <th>Категория</th>
              <th>Тип</th>
              <th>Открыть</th>
            </tr>
          </thead>

          <tbody v-if="lisRecord.length">
            <template v-for="item in lisRecord" :key="item.id">
              <tr>
                <td>{{ item.id }}</td>
                <td>{{ item.summa }}</td>
                <td>{{ item.createdDate}}</td>
                <td>{{ item.category.title}}</td>
                <td>
                  <span v-if="item.operationType === 'outcome'" class="badge bg-red-6 text-white q-pa-sm">Расход</span>
                  <span v-else class="badge bg-green-6 text-white q-pa-sm">Доход</span>
                </td>
                <td>
                  <q-btn
                    icon="open_in_new"
                    class="bg-green-6"
                    color="white"
                    flat
                    dense
                  />
                </td>
              </tr>
            </template>
          </tbody>
          <tr v-else>
            <td colspan="6">Loading...</td>
          </tr>
        </table>
        <div class="q-pa-lg flex flex-center">
          <q-pagination
            v-model="currentPage"
            color="deep-orange"
            :max="maxPage"
            boundary-links
            @click="goToPage"
          />
        </div>
      </section>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { getAll } from "src/api/record";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const currentPage = ref(Number(route.query.currentPage));
const limit = ref(Number(route.query.limit));

const lisRecord = ref([]);
const totalRecord = ref(0);
const maxPage = ref(0);


const getAllRecord = () => {

  getAll(currentPage.value, limit.value)
    .then((res) => {
      lisRecord.value = res.data.results;
      totalRecord.value = res.data.total
      maxPage.value = Math.ceil(totalRecord.value / limit.value)
    })
    .catch((e) => {
      console.log(e);
    });
};
const goToPage = () => {
  router.push({
    name: 'HistoryPage',
    query: {
      currentPage: currentPage.value,
      limit: limit.value
    }
  });
  getAllRecord();
}
getAllRecord();
</script>
