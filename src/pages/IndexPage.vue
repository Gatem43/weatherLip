<template>
  <q-page class="flex text-white">
    <q-parallax :height="400" :speed="0.5">
      <template v-slot:media>
        <img src="https://img.badfon.ru/wallpaper/big/4/1e/noch-doroga-dozhd-polosy-6763.jpg">
      </template>

      <div class="flex_element1">
        <img v-if="weather == 800 " src="https://svgsilh.com/svg/159508-ff9800.svg" class="img_weath">
        <img v-if="weather >= 200 && weather <= 232" src="https://svgsilh.com/svg/159507-607d8b.svg" class="img_weath">
        <img v-if="weather >= 300 && weather <= 531" src="https://svgsilh.com/svg/98506-ffffff.svg" class="img_weath">
        <img v-if="weather >= 600 && weather <= 622" src="https://svgsilh.com/svg/558013-ffffff.svg" class="img_weath">
        <img v-if="weather >= 801 && weather <= 804" src="https://svgsilh.com/svg/159946-ffffff.svg" class="img_weath">
        <span class="temp_text"> {{ temp }} °C</span>
        <span class="human_text">Ощущается: {{ tempHuman }} °C</span>
      </div>
    </q-parallax>
    <div class="flex_element2">
      <div class="flex_element3">
        <img src="https://svgsilh.com/svg/2423612-2196f3.svg" class="img_footer">
        <span>Влажность</span>
        <span>{{ humidity }}%</span>
      </div>
      <div class="flex_element3">
        <img src="https://svgsilh.com/svg/159508-ff9800.svg" class="img_footer">
        <span>Рассвет</span>
        <span>{{ formattedTime }}</span>
      </div>
      <div class="flex_element3">
        <img src="https://svgsilh.com/svg/159946-ffffff.svg" class="img_footer">
        <span>Облачность</span>
        <span>{{ clouds }}%</span>
      </div>
      <div class="flex_element3">
        <img src="https://cdn-icons-png.flaticon.com/512/2622/2622352.png" class="img_footer">
        <span>Атм.давление</span>
        <span>{{ sea * 0.75}} мРс</span>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { hooksWeather } from '../hooks/hooksWeather'

export default defineComponent({
  name: 'IndexPage',

  setup (props) {
    const { temp , tempHuman , weather , humidity , formattedTime , clouds , sea} = hooksWeather()
    return {
      temp , tempHuman , weather , humidity , formattedTime , clouds , sea
    }
  },
})
</script>

