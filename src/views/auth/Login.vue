<template>
  <LoginForm @login="login" />
</template>

<script setup lang="ts">
import LoginForm from "../../components/auth/LoginForm.vue";
import axios from "axios";
import { useStore } from "vuex";
import { ref } from "vue";
const wiw = () => {
  console.log(token.value);
};
const { commit, getters } = useStore();
const token = ref(getters.getToken);
const login = async ({
  email,
  motDePasse,
}: {
  email: string;
  motDePasse: string;
}) => {
  const res = await axios.post(`${import.meta.env.VITE_AUTH_SERVICE}/login`, {
    email,
    motDePasse,
  });
  if (res.status == 400) return alert("wrong password");

  if (res.status == 404) return alert("user not found");

  localStorage.setItem("user", JSON.stringify(res.data.user));
  localStorage.setItem("token", res.data.token);

  commit("setUser", res.data.user);
  commit("setToken", res.data.token);
};
</script>

<style scoped></style>
