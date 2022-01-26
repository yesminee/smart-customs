<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "vuex";
import Modal from "./components/modal/Modal.vue";

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
