<template>
    <p class="text-black dark:text-white">La cuisine guadeloupéenne, c’est du soleil dans l’assiette. De la cuisine antillaise comme on l’aime, même, de celle qui nous fait voyager sous les palmiers à la première bouchée, petits beignets dans une main et ti punch dans l’autre… avec modération, puisque le cocktail guadeloupéen peut être sacrément corsé. Mollo sur le rhum vieux et le sirop de canne à sucre, donc, on se lâche plutôt sur le poulet boucané, le lait de coco et la farine de manioc, les bananes vertes ou les bananes plantain ! Pas besoin de billet d’avion, finalement, la Guadeloupe se visite les pieds sous la table et la fourchette dans le colombo de poulet… ou la cuillère dans le pâté en pot qui comme son nom ne le dit pas, est une soupe, ou le tourment d’amour qui comme son nom ne le dit pas non plus, est une pâtisserie. La gastronomie des îles est pleine de surprises. Bon appétit ou bon lapéti en créole !</p>
    <div class="flex justify-between py-4">
        <div>
             <RouterLink to="/entre">
                <img class="shadow" src="https://img.cuisineaz.com/660x660/2018/03/19/i138139-feroce-d-avocat-en-verrines.webp" alt="">
             </RouterLink>
            <h3 class="title3" >nos entrées</h3>
        </div>
       <div>
            <RouterLink to="/plat">
                <img class="shadow" src="https://img.cuisineaz.com/660x660/2014/02/17/i93959-recette-colombo-poulet-creole.webp" alt="">
            </RouterLink>
            <h3 class="title3" >nos plats</h3>
       </div>
        <div>
            <RouterLink to="/dessert">
                <img class="shadow" src="https://img.cuisineaz.com/660x660/2019/01/05/i145482-blanc-manger-coco.webp" alt="">
            </RouterLink>
            <h3 class="title3" >nos desserts</h3>
        </div>
    </div>
    <hr class="border shadow-sm shadow-gray m-4">
</template>

<script setup>

</script>

<style scoped>
    img{
        width: 350px;
        height: 350px;
    }
</style>