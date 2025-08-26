<template>
    <div class="text-center pt-8">
        <h1 class="titre">Votre avis nous interèsse</h1>

        <form class="pb-8" @submit.prevent="Submit">
            <div class="text-start text-xl pb-2">
                <label class="dark:text-white" for="">*Nom</label>
                <input v-model.trim="nom.value.value" class="border h-8 rounded dark:text-white" type="text">
                <small class="text-red-500" v-if="nom.errorMessage"> {{ nom.errorMessage }}</small>
            </div>
            <div class="text-start text-xl pb-2">
                <label class="dark:text-white" for="">*Prenom</label>
                <input v-model.trim="prenom.value.value" class="border h-8 rounded dark:text-white" type="text">
                <small class="text-red-500" v-if="prenom.errorMessage"> {{ prenom.errorMessage }}</small>
            </div>
             <div class="text-start text-xl pb-2">
                <label class="dark:text-white" for="">*Email</label>
                <input v-model.trim="email.value.value" class="border h-8 rounded dark:text-white" type="email">
                <small class="text-red-500" v-if="email.errorMessage"> {{ email.errorMessage }}</small>
            </div> 
            <div class="text-start text-xl pb-4">
                <label class="dark:text-white" for="">*Commentaire</label>
                <textarea v-model.trim="comment.value.value" class="border rounded dark:text-white"></textarea>
                <small class="text-red-500" v-if="comment.errorMessage"> {{ comment.errorMessage }}</small> 
            </div>
            <button @click="isSubmitting" class="bg-green-500 py-1 dark:bg-green-700 text-white rounded">POST</button>
        </form>
    </div>
    <hr class="border shadow-sm shadow-gray m-4">   
        <h2 class="titre2 py-4">Votre commentaire</h2>                
        <div  class="post pb-4" v-for="user in post.users" :key="user.id">        
            <PostCard :addUser = user />
        </div>           
</template>

<script setup>
import {useField,useForm} from "vee-validate"
import {z} from "zod"
import {toFormValidator} from "@vee-validate/zod"
import { useRecette } from "../stores/cuisine"
import PostCard from "../components/Card/PostCard.vue"

const required = { required_error: "champ obligatoire!" }
const schema = toFormValidator(
    z.object({
        nom: z.string(required).max(10,{message:"Nom trop long"}),
        prenom: z.string(required).max(10, { message: "Prenom trop long" }),
        email: z.string(required).email({ message: "email invalide" }),
        comment: z.string(required).max(150, { message: "commentaire trop long" })
    })
    )

const {handleSubmit, isSubmitting} = useForm({validationSchema : schema});
const Submit = handleSubmit(async(form,{resetForm})=>{  
   await fetch("http://localhost:3000/users",{
        method: "POST",
        body: JSON.stringify(form),
        headers: {
            "Content-Type": "Application/json"
        }
   })
   resetForm()
})
const nom = useField("nom");
const prenom = useField("prenom");
const email = useField("email");
const comment= useField("comment");

const post = useRecette()
post.getUsers()

</script>

<style scoped>
    *{
      width: 60%;
      margin: 0 auto;
    }
    input, textarea{
        width: 100%;
    }
    
    .post{
        width: 80%;
    }
    
</style>