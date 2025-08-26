<template>
    <div class="text-center pt-10">
        <h1 class="titre">{{ assiete.entryTitle }}</h1>
        <div class="flex justify-center pt-4 pb-8">
            <div>
                <img class="shadow" :src="assiete.entryImg" :alt="assiete.entryAlt">
            </div>
            <div>
                <ul class="text-start text-xl dark:text-white">
                    <li class="pb-2">Repas par Personne : {{ assiete.entryPersonne }} </li>
                    <li class="pb-2">Temp de Cuisson : {{ assiete.entryCuisson }}</li>
                    <li class="pb-2">Temp de Préparation : {{ assiete.entryPréparation }}</li>
                    <li class="pb-2">Niveau de difficulté : {{ assiete.entryNiveau }}</li>
                    <li class="pb-2">
                        <i class="fa-solid fa-heart" :class="{active : assiete.favs}" @click="like.toogleFav(assiete.id)"></i>
                    </li>
                </ul>
            </div>
        </div>
        <hr class="border">
        <p class="text-lg p-4 dark:text-white">{{ assiete.entryDescription }}</p>
        <div>
            <div>
                <h2 class="titre2 pb-4">Ingrédients</h2>
                <ul class="list flex pb-4 p- dark:text-white">
                    <div>
                         <li class="text-start" v-for="(entryIngredient,index) in assiete.entryIngredients" :key="index">
                            {{assiete.entryIngredients[index]}}
                        </li>
                    </div>
                   <div >
                        <li class="text-end" v-for="(entryIngredient2,index) in assiete.entryIngredients2" :key="index">
                            {{ assiete.entryIngredients2[index] }}
                        </li>
                   </div>
                   
                </ul>
            </div>
            <div>
                <h2 class="titre2 pb-4">Préparation</h2>
                <ul class=" list2 flex dark:text-white">
                    <div >
                         <li class=" step text-justify pb-2" v-for="(entryEtape,index) in assiete.entryEtape" :key="index">
                        {{ assiete.entryEtape[index] }}
                        </li>
                    </div>
                    <div >
                         <li class=" step text-justify pb-2" v-for="(entryEtape2,index) in assiete.entryEtape2" :key="index" >
                            {{ assiete.entryEtape2[index] }}</li>
                    </div>                   
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useRecette } from '../../stores/cuisine';

const assiete = ref({});
const route = useRoute()
const like = useRecette()

onMounted(async()=>{
    const res = await fetch(`http://localhost:3000/recette/${route.params.id}`);
    const data = await res.json();
    assiete.value = data
});

</script>

<style scoped>
    *{
      width: 65%;
      margin: 0 auto;
    }
    li{
        width: 100%;
    }
    .list{
        width: 100%;
    }
    .list2{
        margin-left: -50%;
        width: 200%;  
    }
    .step{
        width: 80%;
    }
    img{
        width: 100%;
    }
   i{
    cursor: pointer;
   }
</style>