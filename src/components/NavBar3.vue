<template>
  <MDBNavbar expand="lg" light container style="background-color: #104382">
    <!-- Toggle button -->
    <MDBNavbarToggler
      target="#navbarRightAlignExample"
      @click="collapse5 = !collapse5"
    ></MDBNavbarToggler>

    <div class="logo">
      <img style="max-width: 50px" src="../assets/image/logo.png" alt="Logo" />
    </div>

    <!-- Collapsible wrapper -->
    <MDBCollapse v-model="collapse5" id="navbarRightAlignExample">
      <MDBNavbarNav right class="mb-2 mb-lg-0 space-x-4">
        <MDBNavbarItem light>
          <router-link to="/BFC" class="font-weight-bold" style="color: white"
            >Demandes</router-link
          >
        </MDBNavbarItem>
        <MDBNavbarItem light>
          <router-link to="BFC" class="font-weight-bold" style="color: white"
            >Profil</router-link
          >
        </MDBNavbarItem>
        <MDBNavbarItem light>
          <router-link to="login" class="font-weight-bold" style="color: white"
            >Déconnexion</router-link
          >
        </MDBNavbarItem>
      </MDBNavbarNav>
    </MDBCollapse>
    <!-- Collapsible wrapper -->
  </MDBNavbar>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-vue-ui-kit";
const collapse5 = ref(false);
const dropdown8 = ref(false);
const collapse4 = ref(false);
const dropdown7 = ref(false);
</script>

<style scoped></style>
