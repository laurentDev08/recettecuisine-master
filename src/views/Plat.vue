<template>
    <div class="pt-8">
        <h1 class="titre text-center">Vos plats</h1>
        <div class="grid grid-cols-4 middle">
            <div v-for="recette in plat.recettes" :key="recette.id">
                 <PlatCard :plat = recette />
            </div>  
        </div>             
    </div>
</template>

<script setup>
    import { useRecette } from '../stores/cuisine';
    import PlatCard from '../components/Card/PlatCard.vue';

    const plat = useRecette()
    plat.getAll()

</script>

<style scoped>

</style>