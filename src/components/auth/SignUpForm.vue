<template>
    <div class="container-fluid">
        <div class="row no-gutter">
            <!-- The image half -->
            <div class="col-lg-6 col-md-12 p-0 bg-image"></div>
            <!-- The content half -->
            <div class="col-lg-6 col-md-12 p-0" style="background-color: #C0CCDA;">
                <div class="login d-flex align-items-center py-2">
                    <!-- Demo content-->
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-10 col-xl-7 mx-auto">
                                <div class="logo">
                                    <img
                                        style="max-width: 150px;"
                                        src="../../assets/image/logo.png"
                                        alt="Logo"
                                    />
                                </div>
                                <h3 class="title">Marhabé !</h3>
                                <p style="font-weight: 300;color: #6084a4;">
                                    Déjà inscrit ?
                                    <a
                                        href="\login"
                                        class="sc-AxiKw eSbheu"
                                    >Connectez-vous</a>
                                </p>
                                <div
                                    class="alert alert-danger"
                                    role="alert"
                                    v-if="erreur"
                                >L’e-mail ou le mot de passe entré ne correspond à aucun compte</div>
                                <form>
                                    <div class="form-group mb-3">
                                        <MDBInput
                                            label="CIN"
                                            id="cin"
                                            class="form-control bg-white"
                                            type="string"
                                            required
                                            v-model="cin"
                                        ></MDBInput>
                                    </div>
                             

                                    <div class="form-group mb-3">
                                        <MDBInput
                                            label="Nom"
                                            id="nom"
                                            class="form-control bg-white"
                                            type="string"
                                            required
                                            v-model="nom"
                                        ></MDBInput>
                                    </div>
                                    <div class="form-group mb-3">
                                        <MDBInput
                                            label="Prenom"
                                            id="prenom"
                                            class="form-control bg-white"
                                            type="string"
                                            required
                                            v-model="prenom"
                                        ></MDBInput>
                                    </div>
                                    <div class="form-group mb-3">
                                        <MDBInput
                                            label="Numéro de téléphone"
                                            id="NumeroTel"
                                            class="form-control bg-white"
                                            type="string"
                                            required
                                            v-model="numeroTel"
                                        ></MDBInput>
                                    </div>
                                    <div class="form-group mb-3">
                                        <MDBInput
                                            type="email"
                                            id="email"
                                            class="form-control bg-white"
                                            label="Email"
                                            required
                                            v-model="email"
                                        ></MDBInput>
                                    </div>
                     
                                    <div class="form-group mb-3">
                                        <MDBInput
                                            label="Mot de passe"
                                            id="motDePasse"
                                            type="password"
                                            class="form-control bg-white"
                                            required
                                            v-model="motDePasse"
                                        ></MDBInput>
                                    </div>
                                    <div class="form-group mb-3">
                                        <MDBInput
                                            label="Confirmer le mot de passe "
                                            id="ConfMotDePasse"
                                            class="form-control bg-white"
                                            type="password"
                                            required
                                            v-model="ConfMotDePasse"
                                        ></MDBInput>
                                    </div>
                                    <div class="d-grid gap-2">
                                        <MDBBtn
                                            style="background: rgb(9,9,121);
                      background: linear-gradient(90deg, rgba(9,9,121,1) 0%, rgba(79,183,203,1) 100%); color:white; font-size: 12px;"
                                            block
                                            @click.prevent="signUp"
                                        >Créer mon compte</MDBBtn>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <!-- End -->
                </div>
            </div>
            <!-- End -->
        </div>
    </div>
</template>


<script setup lang="ts">
import { MDBBtn, MDBInput, MDBIcon } from "mdb-vue-ui-kit";
import { ref } from 'vue'

const erreur = ref(false);
const email = ref("");
const motDePasse = ref("");
const ConfMotDePasse = ref("");
const nom = ref("");
const prenom = ref("");
const numeroTel = ref("");
const cin = ref("");
const valide = ref(true);
const emits = defineEmits(["signUp"]);

const checkEmail = (email:string) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const checkNum=(num:string)=>{
    var valide = /^[0-9]\d{7}$/;
    return valide.test(num);
}

const checkCin=(num:string)=>{
    var valide = /^[0-9]\d{7}$/;
    return valide.test(num);
}

const checkMP=(mp:string)=>{
    if(mp.length<8)
        return false;
    
    return true;
}
const checkVerifMP=(mp:string,vmp:string)=>{
    if(mp!=vmp)
        return false;
    
    return true;
}
const signUp = () => {
    if (!checkEmail(email.value)) {
        alert('Adresse e-mail invalide');
        valide.value=false;
    }
    if (!checkNum(numeroTel.value)) {
        alert('Numéro de téléphone invalide!');
        valide.value=false;
    }
    if (!checkCin(numeroTel.value)) {
        alert('Numéro de CIN invalide!');
        valide.value=false;
    }
    if (!checkMP(motDePasse.value)) {
        alert('Mot de passe invalide!');
        valide.value=false;
    }
    if (!checkVerifMP(motDePasse.value,ConfMotDePasse.value)) {
        alert('Confirmer le mot de passe invalide!');
        valide.value=false;
    }
    
    if(valide.value){
        emits("signUp", {cin:cin.value,nom:nom.value,prenom:prenom.value,numeroTel:numeroTel.value,email: email.value, motDePasse: motDePasse.value })
    }    
}
</script>


<style scoped>
.login,
.image {
    min-height: 100vh;
}

.bg-image {
    background-image: url("../../assets/image/douane-home.jpg");
    background-size: cover;
    background-position: center center;
}
.title {
    text-align: center;
    font-family: "Raleway", sans-serif;
    color: rgb(61, 81, 112);
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
}
.logo {
    text-align: center;
    margin-bottom: 0.75rem;
}
</style>
