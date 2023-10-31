<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          APP CRM
        </q-toolbar-title>

        <q-btn-dropdown
          class="glossy"
          color="orange"
          :label="user.username"
        >
          <div class="no-wrap q-pa-md">
            <div class="column items-center">
              <q-avatar
                v-if="user.avatar"
                class="cursor-pointer"
                size="72px"
                @click="changeAvatarModal"
              >
                <img
                  :src="user.avatar || 'https://cdn.quasar.dev/img/boy-avatar.png'"
                  title="Click to edit"
                />
              </q-avatar>

              <q-avatar
                v-else
                class="cursor-pointer"
                color="primary"
                text-color="white"
                @click="changeAvatarModal"
              >
                {{user.username.charAt(0).toUpperCase() + user.username.charAt(1).toUpperCase()}}
              </q-avatar>
              <q-btn
                class="q-mt-md"
                color="primary"
                label="Logout"
                push
                size="sm"
                v-close-popup
                @click="logout"
              />
            </div>
          </div>
        </q-btn-dropdown>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <EssentialLink
          v-for="item in mainMenu"
          :key="item.id"
          :name="item.name"
          :path-name="item.pathName"
          :query="item.query"
          :icon="item.icon"
        />
      </q-list>
    </q-drawer>

    <q-page-container >
      <router-view />
      <div class="fixed-bottom-right q-mr-md q-mb-md">
        <q-btn
          class="bg-blue-6"
          color="white"
          flat
          dense
          rounded
          icon="add"
          :to="{ name: 'NewRecordPage' }"
        />
      </div>
    </q-page-container>

    <q-dialog
      v-model="isModalChangeAvatarOpen"
    >
      <q-card style="width: 300px">
        <q-card-section>
          <div class="text-h6">Edit Avatar</div>
        </q-card-section>

        <q-card-section class="q-pt-none flex justify-center">
          <q-avatar
            v-if="user.avatar"
            size="72px"
          >
            <img
              :src="user.avatar || 'https://cdn.quasar.dev/img/boy-avatar.png'"
            />
          </q-avatar>

          <q-avatar
            v-else
            color="primary"
            text-color="white"
          >
            {{user.username.charAt(0).toUpperCase() + user.username.charAt(1).toUpperCase()}}
          </q-avatar>
        </q-card-section>

        <q-card-section class="flex-center">
          <q-file
            v-model="avatar"
            color="grey-3"
            outlined
            label-color="orange"
            label="Choose file"
          >
            <template v-slot:append>
              <q-icon name="attachment" color="orange" class="cursor-pointer" />
            </template>
          </q-file>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup @click="setUserAvatar" :disabled="!avatar" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import EssentialLink from 'src/components/EssentialLink.vue'
import { mainMenu } from 'src/mock'
import { setItem } from "src/helpers/persistanceStorage";
import { getMe, setAvatar } from "src/api/user";

const router = useRouter()

const leftDrawerOpen = ref(false)
const user = ref({})
const avatar = ref(null)
const isModalChangeAvatarOpen = ref(false)


const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const logout = () => {
  setItem('access_token', null)
  router.push({ name: 'LoginPage', query: { message: 'logout' } })
}

const getUser = () => {
  getMe()
    .then(res => {
      user.value = res.data
    })
    .catch(e => {
      console.log(e)
    })
}

const changeAvatarModal = () => {
  isModalChangeAvatarOpen.value = true
}
const setUserAvatar = () => {
  const formData = new FormData();
  formData.append('file', avatar.value);

  setAvatar(formData)
    .then(() => {
      isModalChangeAvatarOpen.value = false
      avatar.value = null
      getUser()
    })
}

getUser()
</script>
