<template>
    <div class="text-center pt-10">
        <h1 class="titre">{{ assiete.dessertTitle }}</h1>
        <div class="flex justify-center pt-4 pb-8">
            <div>
                <img class="shadow" :src="assiete.dessertImg" :alt="assiete.dessertAlt">
            </div>
            <div>
                <ul class="text-start text-xl dark:text-white">
                    <li class="pb-2">Repas par Personne : {{ assiete.dessertPersonne }} </li>
                    <li class="pb-2">Temp de Cuisson : {{ assiete.dessertCuisson }}</li>
                    <li class="pb-2">Temp de Préparation : {{ assiete.dessertPréparation }}</li>
                    <li class="pb-2">Niveau de difficulté : {{ assiete.dessertNiveau }}</li>
                    <li class="pb-2">
                        <i class="fa-solid fa-heart"></i>
                    </li>
                </ul>
            </div>
        </div>
        <hr class="border">
        <p class="text-lg p-4 dark:text-white">{{ assiete.dessertDescription }}</p>
        <div>
            <div>
                <h2 class="titre2 pb-4">Ingrédients</h2>
                <ul class="list text-start flex pb-4 dark:text-white">
                    <div>
                         <li class="text-start" v-for="(dessertIngredient,i) in assiete.dessertIngredients" :key="i" >
                            {{ assiete.dessertIngredients[i] }}
                        </li>
                    </div>
                   <div>
                        <li class="text-end" v-for="(dessertIngredient,i) in assiete.dessertIngredients" :key="i">
                            {{ assiete.dessertIngredients2[i] }}
                        </li>
                   </div>
                    
                </ul>
            </div>
            <div>
                <h2 class="titre2 pb-4">Préparation</h2>
                <ul class=" list2 text-start flex dark:text-white">
                    <div>
                        <li class=" step text-justify pb-2" v-for="(dessertEtape,i) in assiete.dessertEtape" :key="i" >
                            {{ assiete.dessertEtape[i] }}
                        </li>
                    </div>
                    <div>
                        <li class=" step text-justify pb-2"  v-for="(dessertEtape,i) in assiete.dessertEtape" :key="i">
                            {{ assiete.dessertEtape2[i] }}
                        </li>
                    </div>
                    
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import router from '../../router';

const assiete = ref({});
const route = useRoute()

onMounted(async () => {
    const res = await fetch(`http://localhost:3000/recette/${route.params.id}`);
    const data = await res.json();
    assiete.value = data 
});

</script>

<style scoped>
* {
    width: 65%;
    margin: 0 auto;
}

li {
    width: 100%;
}

.list {
    width: 100%;
}

img {
    width: 100%;
}
.list2{
        margin-left: -50%;
        width: 200%;  
}
.step{
       width: 80%;
}
</style>