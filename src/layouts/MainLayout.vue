<template>
  <q-layout view="lHh Lpr lFf">
    <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="text-white"
          style="font-size: 20px;"
        />

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      style="background-color: #183550;"
      class="text-white"
    >
      <div align="right">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          style="font-size: 20px;"
        />
      </div>
      <q-list>
        <q-item-label
          header
          class="text-white glavText"
        >
          Текущие данные:
        </q-item-label>

        <q-separator dark inset />

        <q-item-label>
          <div class="q-pa-md flex flex-center">
            <div class="flex flex-center city">
              Город: Липецк
            </div>
          </div>
          <div class="flex flex-center">
            <div class="flex flex-center timer">
              {{ formattedTime }}
            </div>
          </div>
          <div class="q-pa-md flex flex-center">
            <div class="flex flex-center wind">
              <p>Скорость ветра:
                {{ windSpeed }} м/с
              </p>
              <p>
                Порывы ветра до:
                {{ windGust }} м/с
              </p>
              <p>
                Видимость:
                {{ visibility }} м
              </p>
            </div>
          </div>
        </q-item-label>
        
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view  />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { hooksLayout } from '../hooks/hooksLayout'

export default defineComponent({
  name: 'MainLayout',


  data() {
    return {
      leftDrawerOpen: false
    }
  },

  setup(props) {
    const { formattedTime , windSpeed , windGust , visibility } = hooksLayout()
    return {
      formattedTime , windSpeed , windGust , visibility
    }
  },

  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen
  }
  }
})
</script>

