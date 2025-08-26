<template>
    <div class="pt-8">
        <h1 class="titre text-center">Vos Desserts</h1>
        <div class="grid grid-cols-4 middle ">
            <div v-for="recette in dessert.recettes" :key="recette.id">
                <DessertCard :dessert= recette />
            </div> 
        </div>               
    </div>
</template>

<script setup>
    import DessertCard from '../components/Card/DessertCard.vue';
    import { useRecette } from '../stores/cuisine';

    const dessert = useRecette()
    dessert.getAll()
</script>

<style scoped>
 
</style>