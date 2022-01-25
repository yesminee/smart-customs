<template>
 <LoginFormVue @login="connection"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LoginFormVue from '../../components/auth/LoginForm.vue';
import axios from "axios"
const connection=({email,motDePasse}:{email:string,motDePasse:string})=>{
  console.log(email,motDePasse)
}
</script>


<style scoped>

</style>
