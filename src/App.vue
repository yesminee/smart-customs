<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "vuex";

const { commit } = useStore();

onMounted(() => {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  if (!user || !token) return;
  commit("setUser", user);
  commit("setToken", token);
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
