<template>
  <Header/>  
  <RouterView />
  <Footer/>
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
  
</style>
