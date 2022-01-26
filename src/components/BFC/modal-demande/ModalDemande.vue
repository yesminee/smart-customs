<template>
  <div>
    <div class="w-full h-full overflow">
      <div class="flex justify-center items-center">
        <div
          class="relative max-w-3xl w-full space-y-8 bg-white shadow p-4 rounded"
        >
          <div class="flex flex-wrap">
            <div class="w-full">
              <ul
                class="flex mb-0 list-none flex-wrap-none pt-3 pb-4 flex-row cursor-pointer"
              >
                <li class="-mb-px mr-2 last:mr-0 w-1/2 text-center">
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

                <li class="-mb-px mr-2 last:mr-0 w-1/2 text-center">
                  <a
                    class="text-xs font-bold uppercase px-5 py-3 shadow-sm rounded block leading-normal"
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
                      <form class="space-y-4" action="#" method="POST">
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
                            >
                              Société à responsabilité limitée
                            </option>
                            <option
                              value="Société unipersonnelle à responsabilité limitée"
                            >
                              Société unipersonnelle à responsabilité limitée
                            </option>
                            <option value="Société anonyme">
                              Société anonyme
                            </option>
                            <option value="Société en nom collectif">
                              Société en nom collectif
                            </option>
                            <option value="Société en commandite simple">
                              Société en commandite simple
                            </option>
                            <option value="Société en participation">
                              Société en participation
                            </option>
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
                            <label for="dateDebAct" class="text-gray-600"
                              >Date de début d'activité</label
                            >
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
                            <label for="datePub" class="text-gray-600"
                              >Date de publication</label
                            >
                            <div class="relative"></div>
                            <input
                              type="date"
                              id="datePub"
                              v-model="user.datePub"
                              min="1940-01-01"
                              :max="dateMAx"
                              class="bg-gray-50 text-gray-500 border border-gray-300 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              :class="
                                erreur.datePub
                                  ? 'border border-red-500 shadow-none'
                                  : ''
                              "
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
                      <form class="space-y-4" action="#" method="POST">
                        <div class="mt-4">
                          <div class="flex w-full space-x-2">
                            <div class="w-1/2">
                              <label for="numvol">Numéro volontaire</label>
                              <input
                                :class="
                                  erreur.numeroVolontaire
                                    ? 'border border-indigo-500 shadow-none'
                                    : ''
                                "
                                id="numeroVolontaire"
                                name="numvol"
                                type="text"
                                class="input w-full bg-white"
                                placeholder="Numéro volontaire"
                                v-model="user.numeroVolontaire"
                              />
                            </div>
                            <div class="w-1/2">
                              <label for="adresse">Membre depuis</label>
                              <input
                                class="input w-full border border-indigo-500 shadow-none"
                                type="date"
                                id="MembreDepuis"
                                name="trip-start"
                                v-model="user.MembreDepuis"
                                min="2000-01-01"
                                :max="today"
                              />
                              <span class="text-indigo-700"
                                >Ce champ est obligatoire.</span
                              >
                              <br />
                            </div>
                          </div>
                        </div>
                        <div class="mt-4">
                          <label for="password">Attestation</label>
                          <select
                            id="Attestation"
                            name="niveau"
                            v-model="user.Attestation"
                            class="input w-full cursor-pointer"
                          >
                            <option>Premiers Secours</option>
                            <option>Premiers Secours en Equipe</option>
                            <option>Monitorat</option>
                            <option>Insructorat</option>
                          </select>
                        </div>

                        <div class="mt-4">
                          <label for="paye">Payé</label>
                          <div
                            class="relative inline-block w-10 ml-2 align-middle select-none transition duration-200 ease-in"
                          >
                            <input
                              type="checkbox"
                              v-model="user.paye"
                              name="paye"
                              id="paye"
                              class="toggle-checkbox outline-none absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                            />
                            <label
                              for="toggle"
                              class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                            ></label>
                          </div>
                        </div>
                      </form>
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

import { ref } from "vue";

const add = ref({
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
});
const erreur = ref({
  nom: false,
  nom1: false,
  nom2: false,
  prenom: false,
  prenom1: false,
  prenom2: false,
  CIN: false,
  CIN1: false,
  CIN2: false,
  email: false,
  email1: false,
  numeroTel: false,
  numeroTel1: false,
  numeroTel2: false,
  nomEntreprise: false,
  capitalSocial: false,
  dateDebAct: false,
  dateDebAct1: false,
  datePub: false,
  datePub1: false,
  actPrincipale: false,
  actSecondaire: false,
  matriculeFiscal: false,
  NumRegistreCommerce: false,
  NomSociteAssurance: false,
  numContractAssurance: false,
});
const openTab = ref(1);
function toggleTabs(tabNumber: any) {
  openTab.value = tabNumber;
}
</script>
