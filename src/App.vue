<template>
  <!--<Steps
    :steps="[
      { nom: 'Create Account', statut: 'terminé' },
      { nom: 'Profile Information', statut: 'en cours' },
      { nom: 'Business Information', statut: 'en attente' },
      { nom: 'Theme', statut: 'refusé' },
    ]"
  />-->
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "vuex";
import Modal from "./components/modal/Modal.vue";
import Steps from "./components/steps/Steps.vue";

const store = useStore();

onMounted(() => {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  if (!user || !token) return;
  store.commit("setUser", user);
  store.commit("setToken", token);
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
