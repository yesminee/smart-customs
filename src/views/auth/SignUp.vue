<template>
  <SignUp @login="signup" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import SignUp from "../../components/auth/SignUpForm.vue";
import axios from "axios";
const signup = ({
  email,
  motDePasse,
}: {
  email: string;
  motDePasse: string;
}) => {
  console.log(email, motDePasse);
};
</script>

<style scoped></style>
