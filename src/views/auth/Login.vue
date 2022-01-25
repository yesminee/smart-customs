<template>
  <LoginForm @login="login" />
</template>

<script setup lang="ts">
import LoginForm from "../../components/auth/LoginForm.vue";
import axios from "axios";
import { ref } from "vue";
const login = async ({
  email,
  motDePasse,
}: {
  email: string;
  motDePasse: string;
}) => {
  console.log(email, motDePasse);
  const res = await axios.post(`${import.meta.env.VITE_AUTH_SERVICE}/login`, {
    email,
    motDePasse,
  });
  console.log(res);
};
</script>

<style scoped></style>
