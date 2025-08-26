<template>
    <div class="text-center pt-10 pb-5">
        <h1 class="titre">{{ assiete.punchTitle }}</h1>
        <div class="flex justify-center pt-4 pb-8">
            <div>
                <img :src="assiete.punchImg" :alt="assiete.punchAlt">
            </div>
            <div>
                <p class="text-lg p-4 text-start dark:text-white">{{ assiete.punchDescription }}</p>
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
</style>