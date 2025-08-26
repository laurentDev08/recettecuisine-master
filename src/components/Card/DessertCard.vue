<template>
    <div>
       <div class="card text-center -mt-4 ">                                  
            <RouterLink :to="`/dessert/${dessert.id}`">       
                <img class="shadow" :src="dessert.dessertImg" alt="">               
            </RouterLink> 
                <p class="subtitle truncate pb-3">{{ dessert.dessertTitle }}</p>                
        </div>                        
    </div>
</template>

<script setup>
    const third = defineProps(["dessert"])
</script>

<style scoped>
    .card{
        width: 250px;
    }
    img{
        width: 100%;
        border-radius: 8px;
    }
</style>