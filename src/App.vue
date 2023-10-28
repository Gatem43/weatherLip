<template>
  <router-view style="background-color: #061531;"/>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style>
  @import url("css/index.css");
  
  body {
    font-family: PT-sans;
  }
</style>
