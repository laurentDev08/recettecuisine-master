<template>
  <div class="pt-8">
    <h1 class="titre text-center">Vos Entrées</h1>
    <div class="grid grid-cols-4 middle pt-6">
        <div v-for="recette in entry.recettes" :key="recette.id">     
          <EntreCard :entry = recette />       
      </div>   
    </div>    
  </div>
</template>

<script setup>

import {useRecette} from "../stores/cuisine"
import EntreCard from "../components/Card/EntreCard.vue"

const entry = useRecette()
entry.getAll()

</script>

<style scoped>

</style>
