<template>
  <div class="empty-layout bg-grey-6">
    <router-view />
  </div>
</template>

<script setup>
import { Notify } from "quasar";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { messages } from "src/mock";

const route = useRoute()

const message = ref('')

message.value = messages[route.query?.message]

const notifyLogout = () => {
  if (!message.value) {
    return
  }
  Notify.create({
    message: message.value,
    position: 'right',
  })
}
notifyLogout()
</script>
