<template>                                   
            <div>
              <h2 class="titre2">{{ drink.rhumCategory }}</h2> 
                 <RouterLink :to="`/boisson/rhum/${drink.id}`">                 
                    <img :src="drink.rhumImg" :alt="drink.rhumAlt">
                </RouterLink>
                <p class="subtitle pb-1">{{ drink.rhumTitle }}</p> 
              <h2 class="titre2">{{ drink.punchCategory }}</h2> 
                <RouterLink :to="`/boisson/punch/${drink.id}`">
                    <img  :src="drink.punchImg" :alt="drink.punchAlt">
                </RouterLink>
                <p class="subtitle pb-1 ">{{ drink.punchTitle }}</p>  
              <h2 class="titre2">{{ drink.jusCategory }}</h2> 
                <RouterLink :to="`/boisson/jus/${drink.id}`">
                    <img  :src="drink.jusImg" :alt="drink.jusAlt">
                </RouterLink>
                <p class="subtitle">{{ drink.jusTitle }}</p>          
            </div>                                  
</template>

<script setup>
  const boisson = defineProps(["drink"])
</script>

<style scoped>
    *{
      width: 100%;
      margin: 0 auto;
    }   
  
</style>