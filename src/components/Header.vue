<template>
   <header>
      <div class="flex justify-around items-center bg-gray-50 border-b-2 dark:border-0">
        <div class="flex items-center">
            <img  class="py-2" src="../assets/images/logo cuisine.png" width="150" alt="logo G">
        </div>                 
          <nav class="text-lg dark:text-white">
              <RouterLink to="/" class="mx-2">Accueil</RouterLink>
              <RouterLink to="/entre" class="mx-2 ">Entrée</RouterLink>
              <RouterLink to="/plat" class="mx-2 ">Plat</RouterLink>
              <RouterLink to="/dessert" class="mx-2 ">Déssert</RouterLink>
              <RouterLink to="/boisson" class="mx-2 ">Boisson</RouterLink>
              <RouterLink to="/avis" class="mx-2 ">Avis</RouterLink>
              <button class="mx-4" @click="toggleDark()">
                <i v-if="isDark" class="fa-solid fa-moon"></i>
                <i v-else class="fa-solid fa-sun"></i>
              </button>
            </nav>       
      </div>            
    </header>
      <div class="text-center pt-32">
          <input type="text" v-model="search" class=" text-black w-1/4 h-9 rounded border dark:text-white">       
            <button @click="validSearch" class="bg-blue-400 py-1 px-2 ml-3 rounded text-lg text-white dark:bg-red-800">Rechercher</button>         
      </div>    
</template>

<script setup>
    import { useDark, useToggle } from '@vueuse/core'
    import { ref } from 'vue'
    import router from '../router';
    import { useRecette } from '../stores/cuisine';

    const isDark = useDark()
    const toggleDark = useToggle(isDark)

    const db = useRecette()
    const contains = db.getAll()
    const search = ref("")
    
    function validSearch(){
      if(search.value.length >= 1 ){
      // contains.filter((contain)=>{
      //   contain.toLowerCase().incl
      // })
          router.push("/Research")
          search.value = ""
      }
    }
</script>

<style scoped>

    header{
        position: fixed;
        width: 100%;
    }
   
</style>