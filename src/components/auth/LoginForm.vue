<template>
  <div class="container-fluid">
    <div class="row no-gutter">
      <!-- The image half -->
      <div class="col-lg-6 col-md-12 p-0 bg-image"></div>
      <!-- The content half -->
      <div class="col-lg-6 col-md-12 p-0" style="background-color: #c0ccda">
        <div class="login d-flex align-items-center py-5">
          <!-- Demo content-->
          <div class="container">
            <div class="row">
              <div class="col-lg-10 col-xl-7 mx-auto">
                <div class="flex justify-center logo">
                  <img
                    style="max-width: 150px"
                    src="../../assets/image/logo.png"
                    alt="Logo"
                  />
                </div>
                <h3 class="title">Marhabé !</h3>

                <div class="alert alert-danger" role="alert" v-if="erreur">
                  L’e-mail ou le mot de passe entré ne correspond à aucun compte
                </div>
                <p style="font-weight: 300; color: #6084a4">
                  Pas encore inscrit ?
                  <a href="/signup">Inscrivez-vous</a>
                </p>
                <form>
                  <div class="form-group mb-3">
                    <MDBInput
                      label="Email"
                      id="email"
                      class="form-control bg-white"
                      type="email"
                      required
                      v-model="email"
                    ></MDBInput>
                  </div>
                  <div class="form-group mb-3">
                    <MDBInput
                      label="Mot de passe"
                      id="motDePasse"
                      class="form-control bg-white"
                      type="password"
                      required
                      v-model="motDePasse"
                    ></MDBInput>
                  </div>
                  <div class="d-grid gap-2">
                    <MDBBtn
                      style="
                        background: rgb(9, 9, 121);
                        background: linear-gradient(
                          90deg,
                          rgba(9, 9, 121, 1) 0%,
                          rgba(79, 183, 203, 1) 100%
                        );
                        color: white;
                        font-size: 12px;
                      "
                      block
                      @click.prevent="login"
                      >Se connecter</MDBBtn
                    >
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
import { MDBBtn, MDBInput } from "mdb-vue-ui-kit";
import { ref } from "vue";

const erreur = ref(false);
const email = ref("");
const motDePasse = ref("");
const emits = defineEmits(["login"]);
const login = () => {
  console.log("user name:", email.value);
  emits("login", { email: email.value, motDePasse: motDePasse.value });
};
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
