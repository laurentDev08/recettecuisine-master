<template>
    <h3 class="capitalize font-extrabold text-xl dark:text-amber-500 pb-2">{{ addUser.nom }}</h3>        
        <div class=" bg-gray-100 dark:border rounded flex items-end" >              
                <p class="p-4 dark:text-white">{{ addUser.comment }}</p>             
            <div class="text-end p-4 ">
                <button class="btn bg-blue-400 dark:bg-blue-500 rounded text-white">Modifier</button>
                <button @click="remove.deleteByiD(addUser.id)" class="btn bg-red-400 dark:bg-red-700 rounded  text-white">Supprimer</button>     
            </div>                  
        </div> 
</template>

<script setup>
import { useRecette } from "../../stores/cuisine"

    const post = defineProps(["addUser"])
    const remove = useRecette()

</script>

<style scoped>
*{
      width: 60%;
      margin: 0 auto;
    }
p{
        width: 100%;
    }
.btn{
        width: 100px;
        margin-right: 15px;
    }
</style>