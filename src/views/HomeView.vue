<template>
  <div class="text-center pt-10">
    <h1 class="titre">Cuisine Guadeloupe</h1>
    <Menu />
    <div class="mt-4">
      <h2 class="titre2">plat traditionnel</h2>
      <img class="shadow-lg shadow-slate-700 border-black" src="../assets/images/pf_accras_de_morue_cr_cooklook.jpg" alt="">
      <p class="py-4 text-lg text-justify dark:text-white">Vos papilles vont être ravies pendant vos vacances guadeloupéennes : de l’apéro au dessert et jusqu’au goûter, que vous soyez amateurs de fruits de mer ou de viande, bec sucré ou plutôt salé, prenez note, voici notre sélection des spécialités en Guadeloupe qu’il faudra tester au moins une fois pendant votre séjour !</p>
       <img  class="shadow-lg shadow-slate-700 border-black" src="../assets/images/specialite-guadeloupe-feroce-davocat.jpg" alt="">
        <p class="py-4 text-lg text-justify dark:text-white">Découvrir les plats traditionnels en Guadeloupe lors d’un repas complet, cela commence généralement par une entrée. Etant donné la grande diversité d’ingrédients qu’utilisent les locaux pour concocter leurs plats, la cuisine créole est un véritable mélange de saveurs, à la fois originale et épicée. Vous allez pouvoir vous faire plaisir à table et apprécier la gastronomie en Guadeloupe ! </p>
    </div>
  </div>
</template>

<script setup>
import Menu from '../components/Menu.vue';

</script>

<style scoped>
    *{
      width: 60%;
      margin: 0 auto;
    }
    h1,h2{
      letter-spacing: 5px;
    }
    img,p{
      width: 100%;
      border-radius: 5px;
    }
</style>