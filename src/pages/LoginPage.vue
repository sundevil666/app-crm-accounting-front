<template>
  <form class="full-width">
   <div class="row">
     <div class="q-pa-md bg-white  col-6 offset-3">
       <h5>Домашняя бухгалтерия</h5>
       <ul>
         <li class="q-mb-md">
           <q-input
             v-model="email"
             label="Email"
             hint="Email"
           />
         </li>
         <li class="q-mb-md">
           <q-input
             v-model="password"
             label="Password"
             hint="password"
             type="password"
           />
         </li>
         <li class="q-mb-md">
           <q-btn
             icon="send"
             label="Войти"
             class="bg-blue-6 text-white full-width"
             @click="login"
           />
         </li>
       </ul>

       <div class="text-center">
         Нет аккаунта?
         <router-link :to="{name: 'RegisterPage'}">Зарегистрироваться!</router-link>
       </div>
     </div>
   </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { signIn } from "src/api/auth";
import { setItem } from "src/helpers/persistanceStorage";
import { Notify } from "quasar";
import { messages } from "src/mock";

const router = useRouter()

const email = ref('')
const password = ref('')

const login = () => {
  if(!email.value || !password.value) {
    return
  }
  signIn(email.value, password.value)
    .then(res => {
      setItem('access_token', res.data.access_token)
      router.push({ name: 'HomePage' })
      email.value = password.value = ''
    })
    .catch(() => {
      notifyMessage(messages.dataUserIncorrect)
    })
}

const notifyMessage = (mes) => {
  Notify.create({
    message: mes,
    position: 'right',
  })
}

</script>
