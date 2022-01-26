<template>
  <NavBar />
  <AjouterDemande />
</template>

<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import NavBar from "../../components/utilisateur/NavBar.vue";
import AjouterDemande from "../../components/utilisateur/magasin/AjouterDemande.vue";

</script>

<style scoped></style>
