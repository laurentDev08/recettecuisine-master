<template>
    <div>                   
        <div class="card text-center ">                                  
        <RouterLink :to="`/entre/${entry.id}`">       
             <img class="shadow" :src="entry.entryImg" alt="">               
        </RouterLink> 
                <p class="subtitle truncate">{{ entry.entryTitle }}</p>                
        </div>                      
    </div>             
</template>

<script setup>

const first = defineProps(["entry"])
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