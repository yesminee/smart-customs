<template>
    <MDBNavbar expand="lg" light  container style="background-color: #104382;">
        <!-- Toggle button -->
        <MDBNavbarToggler target="#navbarRightAlignExample" @click="collapse5 = !collapse5"></MDBNavbarToggler>

        <div class="logo">
            <img style="max-width: 50px;" src="../../assets/image/logo.png" alt="Logo" />
        </div>

        <!-- Collapsible wrapper -->
        <MDBCollapse v-model="collapse5" id="navbarRightAlignExample">
            <MDBNavbarNav right class="mb-2 mb-lg-0">
                <!-- Right links -->
                <MDBNavbarItem class="text-light" to="#" active>Magasin</MDBNavbarItem>
                <MDBNavbarItem  class="text-white" href="#" active>Profil</MDBNavbarItem>
                <MDBNavbarItem class="text-white" href="#" active>Déconnexion</MDBNavbarItem>
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
    MDBDropdownItem
} from 'mdb-vue-ui-kit';
const collapse5 = ref(false);
const dropdown8 = ref(false);
</script>

<style scoped></style>
