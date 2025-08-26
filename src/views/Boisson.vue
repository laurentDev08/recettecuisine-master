<template>
    <div class="text-center pt-8">
        <h1 class="titre">Vos Boissons</h1>
        <div class="grid grid-cols-4 middle">
            <div v-for="recette in drink.recettes" :key="recette.id">
                <BoissonCard :drink = recette />               
            </div>
        </div>        
    </div>
</template>

<script setup>
    import BoissonCard from '../components/Card/BoissonCard.vue';
    import {useRecette} from '../stores/cuisine'

    const drink = useRecette();
    drink.getAll()
</script>

<style scoped>

</style>