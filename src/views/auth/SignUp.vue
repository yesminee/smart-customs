<template>
    <SignUpForm @signUp="signup" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import SignUpForm from "../../components/auth/SignUpForm.vue";
import axios from "axios";
const signup = async ({
    cin, nom, prenom, numeroTel, email, motDePasse
}: {
    cin: string;
    nom: string;
    prenom: string;
    numeroTel: string;
    email: string;
    motDePasse: string;
}) => {
    console.log(cin, nom, prenom, numeroTel, email, motDePasse);
    const res = await axios.post(`${import.meta.env.VITE_AUTH_SERVICE}/signup`, {
        cin, nom, prenom, numeroTel,
        email,
        motDePasse,
    });
    console.log(res);
};
</script>

<style scoped></style>
