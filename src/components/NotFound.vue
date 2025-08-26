<template>
    <div class="text-center">
        <div class="py-28">
            <img src="../assets/images/oupss.png" alt="logo sorry">
            <h1 class="notFound">404</h1>
            <p class="text-3xl capitalize dark:text-white">la page n'existe pas</p>
            <RouterLink to="/">
                <button class="text-red-500 text-xl capitalize underline decoration-red-500 p-2">retour vers la page accueil</button>
            </RouterLink>
        </div>
        
    </div>
</template>

<script setup>

</script>

<style scoped>
    * {
    width: 65%;
    margin: 0 auto;
}
img{
    width: 300px;
}
</style>