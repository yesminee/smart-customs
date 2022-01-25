<template>
  <SignUpForm @signUp="signup" />
</template>

<script setup lang="ts">
import SignUpForm from "../../components/auth/SignUpForm.vue";
import axios from "axios";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const signup = async ({
  cin,
  nom,
  prenom,
  numeroTel,
  email,
  motDePasse,
}: {
  cin: string;
  nom: string;
  prenom: string;
  numeroTel: string;
  email: string;
  motDePasse: string;
}) => {
  const res = await axios.post(`${import.meta.env.VITE_AUTH_SERVICE}/signup`, {
    cin,
    nom,
    prenom,
    numeroTel,
    email,
    motDePasse,
  });

  if (res.status == 400) return alert("email already exists");

  if (res.status == 500) return alert("syke you thought");

  localStorage.setItem("user", JSON.stringify(res.data.user));
  localStorage.setItem("token", res.data.token);

  store.commit("setUser", res.data.user);
  store.commit("setToken", res.data.token);
  router.push("/magasin");
};
</script>

<style scoped></style>
