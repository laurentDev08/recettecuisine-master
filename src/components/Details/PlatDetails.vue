<template>
    <div class="text-center pt-10">
        <h1 class="titre">{{ assiete.platTitle }}</h1>
        <div class="flex justify-center pt-4 pb-8">
            <div>
                <img class="shadow" :src="assiete.platImg" :alt="assiete.platAlt">
            </div>
            <div>
                <ul class="text-start text-xl dark:text-white">
                    <li class="pb-2">Repas par Personne : {{ assiete.platPersonne }} </li>
                    <li class="pb-2">Temp de Cuisson : {{ assiete.platCuisson }}</li>
                    <li class="pb-2">Temp de Préparation : {{ assiete.platPréparation }}</li>
                    <li class="pb-2">Niveau de difficulté : {{ assiete.platNiveau }}</li>
                    <li class="pb-2">
                        <i class="fa-solid fa-heart"></i>
                    </li>
                </ul>
            </div>
        </div>
        <hr class="border">
        <p class="text-lg p-4 dark:text-white">{{ assiete.platDescription }}</p>
        <div>
            <div>
                <h2 class="titre2 pb-4">Ingrédients</h2>
                <ul class="list flex pb-4 dark:text-white">
                    <div>
                        <li class="text-start" v-for="(platIngredient,index) in assiete.platIngredients" :key="index">
                            {{ assiete.platIngredients[index] }}
                        </li>
                    </div>
                   <div>
                        <li class="text-end" v-for="(platIngredient,index) in assiete.platIngredients" :key="index">
                            {{ assiete.platIngredients2[index] }}
                        </li>
                   </div>
                    
                </ul>
            </div>
            <div>
                <h2 class="titre2 pb-4">Préparation</h2>
                <ul class=" list2 text-start flex dark:text-white">
                    <div>
                         <li class=" step text-justify pb-2" v-for="(platEtape, index) in assiete.platEtape1" :key="index">
                            {{ assiete.platEtape1[index] }}
                        </li>
                    </div>
                   <div>
                        <li class=" step text-justify pb-2" v-for="(platEtape, i) in assiete.platEtape2" :key="i">
                            {{ assiete.platEtape2[i] }}
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