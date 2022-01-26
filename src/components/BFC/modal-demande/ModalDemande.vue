<template>
  <div>
    <div class="w-full h-full overflow">
      <div class="flex justify-center items-center">
        <div class="relative max-w-3xl w-full space-y-8 bg-white shadow p-4 rounded">
          <div class="flex flex-wrap">
            <div class="w-full">
              <ul
                class="flex items-stretch py-2 mb-0 list-none flex-wrap-none flex-row cursor-pointer"
              >
                <li class="-mb-px mr-2 last:mr-0 w-1/3 text-center">
                  <a
                    class="text-xs font-bold uppercase px-5 py-3 shadow-sm rounded block leading-normal"
                    v-on:click="toggleTabs(1)"
                    v-bind:class="{
                      'text-indigo-700 text-sm font-medium bg-white':
                        openTab !== 1,
                      'text-white text-sm font-medium bg-indigo-700':
                        openTab === 1,
                    }"
                  >
                    <i class="fas fa-user text-base mr-1"></i> Informations
                    demandeur
                  </a>
                </li>

                <li class="-mb-px mr-2 last:mr-0 w-1/3 text-center">
                  <a
                    class="text-xs font-bold uppercase h-full px-5 py-3 shadow-sm rounded block leading-normal"
                    v-on:click="toggleTabs(2)"
                    v-bind:class="{
                      'text-indigo-700 text-sm font-medium bg-white':
                        openTab !== 2,
                      'text-white text-sm font-medium bg-indigo-700':
                        openTab === 2,
                    }"
                  >
                    <i class="fa fa-medkit text-base mr-1"></i> Demande
                  </a>
                </li>
                <li class="-mb-px mr-2 last:mr-0 w-1/3 text-center">
                  <a
                    class="text-xs font-bold uppercase px-5 py-3 shadow-sm rounded block leading-normal"
                    v-on:click="toggleTabs(3)"
                    v-bind:class="{
                      'text-indigo-700 text-sm font-medium bg-white':
                        openTab !== 3,
                      'text-white text-sm font-medium bg-indigo-700':
                        openTab === 3,
                    }"
                  >
                    <i class="far fa-eye text-base mr-1"></i> Etat de la demande
                  </a>
                </li>
              </ul>
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-sm rounded"
              >
                <div class="px-4 flex-auto">
                  <div class="tab-content tab-space">
                    <div
                      v-bind:class="{
                        hidden: openTab !== 1,
                        block: openTab === 1,
                      }"
                    >
                      <form class="space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" value="true" />
                        <div class="flex w-full space-x-2">
                          <div class="w-1/2">
                            <MDBInput
                              id="nom"
                              label="Nom"
                              type="text"
                              class="input w-full bg-white"
                              v-model="add.nom"
                              required
                            ></MDBInput>
                          </div>
                          <br />
                          <div class="w-1/2">
                            <MDBInput
                              id="prenom"
                              label="Prénom"
                              type="text"
                              class="input w-full bg-white"
                              v-model="add.prenom"
                              required
                            ></MDBInput>
                          </div>
                        </div>

                        <div class="flex w-full space-x-2">
                          <div class="w-1/2">
                            <MDBInput
                              id="CIN"
                              label="CIN"
                              type="text"
                              class="input w-full bg-white"
                              maxlength="8"
                              minlength="8"
                              v-model="user.CIN"
                              required
                            ></MDBInput>
                          </div>
                          <br />
                          <div class="w-1/2">
                            <MDBInput
                              id="phone"
                              label="Numéro de téléphone"
                              type="tel"
                              class="input w-full bg-white"
                              maxlength="8"
                              minlength="8"
                              v-model="user.numeroTel"
                            ></MDBInput>
                          </div>
                        </div>

                        <div>
                          <MDBInput
                            id="email"
                            label="Email"
                            type="email"
                            class="input w-full bg-white"
                            v-model="user.email"
                          ></MDBInput>
                        </div>

                        <div class="flex space-x-2 mt-4">
                          <div>
                            <MDBInput
                              id="nomEntreprise"
                              label="Nom entreprise"
                              type="text"
                              class="input w-full bg-white"
                              v-model="add.nomEntreprise"
                              required
                            ></MDBInput>
                          </div>
                          <div>
                            <MDBInput
                              id="capitalSocial"
                              label="Capital social"
                              type="text"
                              class="input w-full bg-white"
                              v-model="add.capitalSocial"
                              required
                            ></MDBInput>
                          </div>
                          <br />
                          <select
                            class="input flex-shrink-0 w-1/3 h-10"
                            placeholder="Type d'entreprise"
                            v-model="add.typeEntreprise"
                          >
                            <option
                              value="Société à responsabilité limitée"
                              selected
                            >Société à responsabilité limitée</option>
                            <option
                              value="Société unipersonnelle à responsabilité limitée"
                            >Société unipersonnelle à responsabilité limitée</option>
                            <option value="Société anonyme">Société anonyme</option>
                            <option value="Société en nom collectif">Société en nom collectif</option>
                            <option
                              value="Société en commandite simple"
                            >Société en commandite simple</option>
                            <option value="Société en participation">Société en participation</option>
                          </select>
                        </div>
                        <div>
                          <MDBInput
                            id="adresseEnt"
                            label="Adresse d'entreprise"
                            type="string"
                            class="input w-full bg-white"
                            v-model="user.adresseEnt"
                          ></MDBInput>
                        </div>
                        <div class="flex w-full space-x-2">
                          <div class="w-1/2">
                            <label for="dateDebAct" class="text-gray-600">Date de début d'activité</label>
                            <input
                              type="date"
                              id="dateDebAct"
                              v-model="user.dateDebAct"
                              min="1940-01-01"
                              :max="dateMAx"
                              class="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                          </div>
                          <br />
                          <div class="w-1/2">
                            <label for="datePub" class="text-gray-600">Date de publication</label>
                            <div class="relative"></div>
                            <input
                              type="date"
                              id="datePub"
                              v-model="user.datePub"
                              min="1940-01-01"
                              :max="dateMAx"
                              class="bg-gray-50 text-gray-500 border border-gray-300 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                          </div>
                        </div>
                        <div class="flex w-full space-x-2 mt-4">
                          <div class="w-1/2">
                            <MDBInput
                              id="actPrincipale"
                              label="Activité principale"
                              type="text"
                              class="input w-full bg-white"
                              v-model="add.actPrincipale"
                              required
                            ></MDBInput>
                          </div>
                          <br />
                          <div class="w-1/2">
                            <MDBInput
                              id="actSecondaire"
                              label="Activité secondaire"
                              type="text"
                              class="input w-full bg-white"
                              v-model="add.actSecondaire"
                              required
                            ></MDBInput>
                          </div>
                        </div>
                        <div class="flex w-full space-x-2">
                          <div class="w-1/2">
                            <MDBInput
                              id="matriculeFiscal"
                              label="Matricule fiscal"
                              type="text"
                              class="input w-full bg-white"
                              v-model="add.matriculeFiscal"
                              required
                            ></MDBInput>
                          </div>
                          <br />
                          <div class="w-1/2">
                            <MDBInput
                              id="NumRegistreCommerce"
                              label="N° du registre du commerce"
                              type="text"
                              class="input w-full bg-white"
                              v-model="add.NumRegistreCommerce"
                              required
                            ></MDBInput>
                          </div>
                        </div>
                        <div class="flex w-full space-x-2">
                          <div class="w-1/2">
                            <MDBInput
                              id="NomSociteAssurance"
                              label="Nom de socité d'assurance"
                              type="text"
                              class="input w-full bg-white"
                              v-model="add.NomSociteAssurance"
                              required
                            ></MDBInput>
                            <br />
                          </div>
                          <br />
                          <div class="w-1/2">
                            <MDBInput
                              id="numContractAssurance"
                              label="Numéro de contract d'assurance"
                              type="text"
                              class="input w-full bg-white"
                              v-model="add.numContractAssurance"
                              required
                            ></MDBInput>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div
                      v-bind:class="{
                        hidden: openTab !== 2,
                        block: openTab === 2,
                      }"
                    >
                    
                      <form class="space-y-8" action="#" method="POST">
                        <div class="mt-4">
                          <div class="flex w-full space-x-2">
                            <div class="w-1/2">
                              <MDBInput
                                id="adresseMagasin"
                                label="Adresse de magasin"
                                type="text"
                                class="input w-full bg-white"
                                required
                              ></MDBInput>
                            </div>
                            <br />
                            <div class="w-1/2">
                              <MDBInput
                                id="SuperficieMagasin"
                                label="Superficie de magasin"
                                type="text"
                                class="input w-full bg-white"
                                v-model="add.SuperficieMagasin"
                                required
                              ></MDBInput>
                            </div>
                          </div>
                        </div>
                        <div class="mt-4">
                          <div class="flex w-full space-x-2">
                            <div class="w-1/2">
                              <MDBInput
                                id="typeMagasin"
                                label="Type de magasin"
                                type="text"
                                class="input w-full bg-white"
                                v-model="add.typeMagasin"
                                required
                              ></MDBInput>
                            </div>
                            <br />
                            <div class="w-1/2">
                              <MDBInput
                                id="descMagasin"
                                label="Description de magasin"
                                type="text"
                                class="input w-full bg-white"
                                v-model="add.descMagasin"
                                required
                              ></MDBInput>
                            </div>
                          </div>
                        </div>
                        <div class="mt-4">
                          <div class="flex w-full space-x-2">
                            <div class="w-1/2">
                              <MDBInput
                                id="capacite"
                                label="Capacité"
                                type="text"
                                class="input w-full bg-white"
                                v-model="add.capacite"
                                required
                              ></MDBInput>
                            </div>
                            <br />
                            <div class="w-1/2">
                              <MDBInput
                                id="equipement"
                                label="Equipement"
                                type="text"
                                class="input w-full bg-white"
                                v-model="add.equipement"
                              ></MDBInput>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label
                            for="dateLimteProtectionCivil"
                            class="text-gray-600"
                          >Date limite de la protection civile</label>
                          <div class="relative"></div>
                          <input
                            type="date"
                            id="dateLimteProtectionCivil"
                            v-model="user.dateLimteProtectionCivil"
                            min="1940-01-01"
                            :max="dateMAx"
                            class="bg-gray-50 text-gray-500 border border-gray-300 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          />
                        </div>

                        <label class="form-label" for="documents">Documents</label>
                        <div class="flex flex-wrap">
                          <div class="p-1 w-1/3" v-for="image in doc" :key="image">
                            <a target="_blank" :href="image">
                              <img :src="image" alt="Fissure in Sandstone" />
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div
                      v-bind:class="{
                        hidden: openTab !== 3,
                        block: openTab === 3,
                      }"
                      class="flex justify-center pr-32"
                    >
                      <Steps
                        :steps="[
                          { nom: 'Create Account', statut: 'terminé' },
                          { nom: 'Profile Information', statut: 'en cours' },
                          { nom: 'Business Information', statut: 'en attente' },
                          { nom: 'Theme', statut: 'refusé' },
                        ]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MDBInput } from "mdb-vue-ui-kit";
import dayjs from "dayjs";
import { ref } from "vue";
import Steps from "../../steps/Steps.vue";
const today = dayjs(new Date()).format("YYYY-MM-DD");
const dateMAx = new Date().getFullYear() - 15 + "-12-31";
const doc = ref(["https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp", "https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp", "https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp", "https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp", "https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"])
const add = ref({
  nom: "nom aifaoui",
  prenom: "mohamed",
  CIN: "02039797",
  numeroTel: "22889141",
  email: "mohammed6@gmail.com",
  nomEntreprise: "FERCAM TUNISIE",
  capitalSocial: "100.000 dt",
  typeEntreprise: "Société à responsabilité limitée",
  adresseEnt: "23, rue mosaddirin zone indistruelle rades, mileha",
  dateDebAct: "2012/09/14",
  datePub: "2012/09/18",
  actPrincipale: "Transport Maritime",
  actSecondaire: "Services Complementaires Au Transport Maritime",
  matriculeFiscal: "1265659Q",
  NumRegistreCommerce: "B24177582012",
  NomSociteAssurance: "GATT",
  numContractAssurance: "201509200052",
  SuperficieMagasin: "1200m²",
  typeMagasin: "type3",
  descMagasin: "unite de stockage et des flux douaniers pour differentes marchandises",
  capacite: "3T , palans manuels 2.2T",
  equipement: "2 Chariots élévateurs, 2 palans manuels ",
  dateLimteProtectionCivil: "30/01/2022",
});
const user = ref({
  nom: "",
  prenom: "",
  CIN: "",
  numeroTel: "",
  email: "",
  nomEntreprise: "",
  capitalSocial: "",
  typeEntreprise: "Société à responsabilité limitée",
  adresseEnt: "",
  dateDebAct: "",
  datePub: "",
  actPrincipale: "",
  actSecondaire: "",
  matriculeFiscal: "",
  NumRegistreCommerce: "",
  NomSociteAssurance: "",
  numContractAssurance: "",
  dateLimteProtectionCivil: "",
});
const openTab = ref(1);
function toggleTabs(tabNumber: any) {
  openTab.value = tabNumber;
}



</script>
