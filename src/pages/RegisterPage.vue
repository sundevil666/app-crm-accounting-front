<template>
  <form class="full-width">
    <div class="row">
      <div class="q-pa-md bg-white col-6 offset-3">
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
            />
          </li>
          <li class="q-mb-md">
            <q-input
              v-model="username"
              label="Имя"
              hint="Имя"
            />
          </li>
          <li class="q-mb-md">
            <q-checkbox
              v-model="agree"
              color="blue"
              label="С правилами согласен"
            />
          </li>
          <li class="q-mb-md">
            <q-btn
              icon="send"
              label="Зарегистрироваться"
              class="bg-blue-6 text-white full-width"
              :disabled="!isValid"
              @click="register"
            />
          </li>
        </ul>

        <div class="text-center">
          Уже есть аккаунт?
          <router-link :to="{name: 'LoginPage'}">Войти!</router-link>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { signUp } from "src/api/auth";
import { setItem } from "src/helpers/persistanceStorage";

const router = useRouter()

const email = ref('')
const password = ref('')
const username = ref('')
const agree = ref(false)

const isValid = computed(() => {
  return email.value && password.value && agree.value && username.value
})

const register = () => {
  if(!isValid.value) {
    return false
  }
  const data = {
    email: email.value,
    password: password.value,
    username: username.value
  }
  console.log(data);
  signUp(data)
    .then(res => {
      setItem('access_token', res.data.access_token)
      email.value = password.value = username.value = ''
      router.push({ name: 'HomePage' })
    })
    .catch(e => {
      console.log(e);
    })

}

</script>
