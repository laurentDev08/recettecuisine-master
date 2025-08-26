<template>         
    <div>
        <div class="card text-center ">                                  
            <RouterLink :to="`/plat/${plat.id}`">       
                 <img class="shadow" :src="plat.platImg" alt="">               
            </RouterLink> 
                    <p class="subtitle truncate">{{ plat.platTitle }}</p>                
            </div>      
    </div>
</template>

<script setup>
    const second = defineProps(["plat"])
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