<template>
    <div class="w-full h-full overflow">
        <div class="flex justify-center items-center min-w-0 mt-10 md:m-10">
            <div class="relative max-w-3xl w-full space-y-8 bg-white shadow p-4 rounded">
                <div class="flex flex-wrap">
                    <div class="w-full">
                        <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row cursor-pointer">
                            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                <a
                                    class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
                                    v-on:click="toggleTabs(1)"
                                    v-bind:class="{
                                        'text-indigo-700 text-sm font-medium bg-white': openTab !== 1,
                                        'text-white text-sm font-medium bg-indigo-700': openTab === 1,
                                    }"
                                >
                                    <i class="fas fa-user text-base mr-1"></i> Informations demandeur
                                </a>
                            </li>

                            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                <a
                                    class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
                                    v-on:click="toggleTabs(2)"
                                    v-bind:class="{
                                        'text-indigo-700 text-sm font-medium bg-white': openTab !== 2,
                                        'text-white text-sm font-medium bg-indigo-700': openTab === 2,
                                    }"
                                >
                                    <i class="fa fa-medkit text-base mr-1"></i> Demande
                                </a>
                            </li>
                        </ul>
                        <div
                            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
                        >
                            <div class="px-4 py-3 flex-auto">
                                <div class="tab-content tab-space">
                                    <div
                                        v-bind:class="{
                                            hidden: openTab !== 1,
                                            block: openTab === 1,
                                        }"
                                    >
                                        <form action="#" method="POST">
                                            <input type="hidden" name="remember" value="true" />
                                            <div class="flex w-full space-x-2">
                                                <div class="w-1/2">
                                                    <MDBInput
                                                        :class="
                                                            erreur.nom
                                                                ? 'border border-red-500 shadow-none'
                                                                : ''
                                                        "
                                                        id="nom"
                                                        label="Nom"
                                                        type="text"
                                                        class="input w-full bg-white"
                                                        v-model="add.nom"
                                                        required
                                                    ></MDBInput>
                                                    <br />
                                                    <span
                                                        v-if="erreur.nom"
                                                        class="text-red-700"
                                                    >Ce champ est obligatoire.</span>
                                                </div>
                                                <br />
                                                <div class="w-1/2">
                                                    <MDBInput
                                                        :class="
                                                            erreur.prenom
                                                                ? 'border border-red-500 shadow-none'
                                                                : ''
                                                        "
                                                        id="prenom"
                                                        label="Prénom"
                                                        type="text"
                                                        class="input w-full bg-white"
                                                        v-model="add.prenom"
                                                        required
                                                    ></MDBInput>
                                                    <br />
                                                    <span
                                                        v-if="erreur.prenom"
                                                        class="text-red-700"
                                                    >Ce champ est obligatoire</span>
                                                </div>
                                            </div>

                                            <div class="flex w-full space-x-2">
                                                <div class="w-1/2">
                                                    <MDBInput
                                                        :class="
                                                            erreur.CIN
                                                                ? 'border border-indigo-500 shadow-none'
                                                                : ''
                                                        "
                                                        id="CIN"
                                                        label="CIN"
                                                        type="text"
                                                        class="input w-full bg-white"
                                                        maxlength="8"
                                                        minlength="8"
                                                        v-model="user.CIN"
                                                        required
                                                    ></MDBInput>

                                                    <span
                                                        v-if="erreur.CIN1"
                                                        class="text-indigo-700"
                                                    >Ce champ est obligatoire</span>
                                                    <br />
                                                    <span
                                                        v-if="erreur.CIN2"
                                                        class="text-indigo-700"
                                                    >
                                                        Ce champ ne doit contenir que des chiffres et de
                                                        taille égale à 8
                                                    </span>
                                                </div>
                                                <br />
                                                <div class="w-1/2">
                                                    <MDBInput
                                                        :class="
                                                            erreur.numeroTel
                                                                ? 'border border-indigo-500 shadow-none'
                                                                : ''
                                                        "
                                                        id="phone"
                                                        label="Numéro de téléphone"
                                                        type="tel"
                                                        class="input w-full bg-white"
                                                        maxlength="8"
                                                        minlength="8"
                                                        v-model="user.numeroTel"
                                                    ></MDBInput>
                                                    <span
                                                        v-if="erreur.numeroTel1"
                                                        class="text-indigo-700"
                                                    >Ce champ est obligatoire</span>
                                                    <br />
                                                    <span
                                                        v-if="erreur.numeroTel2"
                                                        class="text-indigo-700"
                                                    >
                                                        Ce champ ne doit contenir que des chiffres et de
                                                        taille égale à 8
                                                    </span>
                                                </div>
                                            </div>

                                            <div>
                                                <MDBInput
                                                    :class="
                                                        erreur.email
                                                            ? 'border border-red-500 shadow-none'
                                                            : ''
                                                    "
                                                    id="email"
                                                    label="Email"
                                                    type="email"
                                                    class="input w-full bg-white"
                                                    v-model="user.email"
                                                ></MDBInput>
                                                <span class="text-red-700" v-if="erreur.email1">
                                                    Ce champ ne ressemble pas à une adresse e-mail
                                                    valide
                                                </span>
                                            </div>

                                            <div class="flex space-x-2 mt-4">
                                                <div>
                                                    <MDBInput
                                                        :class="
                                                            erreur.nomEntreprise
                                                                ? 'border border-red-500 shadow-none'
                                                                : ''
                                                        "
                                                        id="nomEntreprise"
                                                        label="Nom entreprise"
                                                        type="text"
                                                        class="input w-full bg-white"
                                                        v-model="add.nomEntreprise"
                                                        required
                                                    ></MDBInput>
                                                    <br />
                                                    <span
                                                        v-if="erreur.nomEntreprise"
                                                        class="text-red-700"
                                                    >Ce champ est obligatoire.</span>
                                                </div>
                                                <div>
                                                    <MDBInput
                                                        :class="
                                                            erreur.capitalSocial
                                                                ? 'border border-red-500 shadow-none'
                                                                : ''
                                                        "
                                                        id="capitalSocial"
                                                        label="Capital social"
                                                        type="text"
                                                        class="input w-full bg-white"
                                                        v-model="add.capitalSocial"
                                                        required
                                                    ></MDBInput>
                                                    <br />
                                                    <span
                                                        v-if="erreur.capitalSocial"
                                                        class="text-red-700"
                                                    >Ce champ est obligatoire.</span>
                                                </div>
                                                <br />
                                                <select
                                                    class="input flex-shrink-0 flex-1 h-9 form-select"
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
                                                    <option
                                                        value="Société en nom collectif"
                                                    >Société en nom collectif</option>
                                                    <option
                                                        value="Société en commandite simple"
                                                    >Société en commandite simple</option>
                                                    <option
                                                        value="Société en participation"
                                                    >Société en participation</option>
                                                </select>
                                            </div>
                                            <div>
                                                <MDBInput
                                                    :class="
                                                        erreur.adresseEnt
                                                            ? 'border border-red-500 shadow-none'
                                                            : ''
                                                    "
                                                    id="adresseEnt"
                                                    label="Adresse d'entreprise"
                                                    type="string"
                                                    class="input w-full bg-white"
                                                    v-model="user.adresseEnt"
                                                ></MDBInput>
                                                <span
                                                    class="text-red-700"
                                                    v-if="erreur.adresseEnt"
                                                >Ce champ est obligatoire</span>
                                            </div>
                                            <div class="flex w-full space-x-2 mt-3">
                                                <div class="w-1/2">
                                                    <label
                                                        for="dateDebAct"
                                                        class="text-gray-600"
                                                    >Date de début d'activité</label>
                                                    <input
                                                        type="date"
                                                        id="dateDebAct"
                                                        v-model="user.dateDebAct"
                                                        min="1940-01-01"
                                                        :max="dateMAx"
                                                        class="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        :class="
                                                            erreur.dateDebAct
                                                                ? 'border border-red-500 shadow-none'
                                                                : ''
                                                        "
                                                    />
                                                    <span
                                                        v-if="erreur.dateDebAct"
                                                        class="text-red-700"
                                                    >Ce champ est obligatoire</span>
                                                </div>
                                                <br />
                                                <div class="w-1/2">
                                                    <label
                                                        for="datePub"
                                                        class="text-gray-600"
                                                    >Date de publication</label>
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
                                                    <span
                                                        v-if="erreur.datePub"
                                                        class="text-red-700"
                                                    >Ce champ est obligatoire</span>
                                                </div>
                                            </div>
                                            <div class="flex w-full space-x-2 mt-4">
                                                <div class="w-1/2">
                                                    <MDBInput
                                                        :class="
                                                            erreur.actPrincipale
                                                                ? 'border border-red-500 shadow-none'
                                                                : ''
                                                        "
                                                        id="actPrincipale"
                                                        label="Activité principale"
                                                        type="text"
                                                        class="input w-full bg-white"
                                                        v-model="add.actPrincipale"
                                                        required
                                                    ></MDBInput>
                                                    <br />
                                                    <span
                                                        v-if="erreur.actPrincipale"
                                                        class="text-red-700"
                                                    >Ce champ est obligatoire.</span>
                                                </div>
                                                <br />
                                                <div class="w-1/2">
                                                    <MDBInput
                                                        :class="
                                                            erreur.actSecondaire
                                                                ? 'border border-red-500 shadow-none'
                                                                : ''
                                                        "
                                                        id="actSecondaire"
                                                        label="Activité secondaire"
                                                        type="text"
                                                        class="input w-full bg-white"
                                                        v-model="add.actSecondaire"
                                                        required
                                                    ></MDBInput>
                                                    <br />
                                                    <span
                                                        v-if="erreur.actSecondaire"
                                                        class="text-red-700"
                                                    >Ce champ est obligatoire</span>
                                                </div>
                                            </div>
                                            <div class="flex w-full space-x-2">
                                                <div class="w-1/2">
                                                    <MDBInput
                                                        :class="
                                                            erreur.matriculeFiscal
                                                                ? 'border border-red-500 shadow-none'
                                                                : ''
                                                        "
                                                        id="matriculeFiscal"
                                                        label="Matricule fiscal"
                                                        type="text"
                                                        class="input w-full bg-white"
                                                        v-model="add.matriculeFiscal"
                                                        required
                                                    ></MDBInput>
                                                    <br />
                                                    <span
                                                        v-if="erreur.matriculeFiscal"
                                                        class="text-red-700"
                                                    >Ce champ est obligatoire.</span>
                                                </div>
                                                <br />
                                                <div class="w-1/2">
                                                    <MDBInput
                                                        :class="
                                                            erreur.NumRegistreCommerce
                                                                ? 'border border-red-500 shadow-none'
                                                                : ''
                                                        "
                                                        id="NumRegistreCommerce"
                                                        label="N° du registre du commerce"
                                                        type="text"
                                                        class="input w-full bg-white"
                                                        v-model="add.NumRegistreCommerce"
                                                        required
                                                    ></MDBInput>
                                                    <br />
                                                    <span
                                                        v-if="erreur.NumRegistreCommerce"
                                                        class="text-red-700"
                                                    >Ce champ est obligatoire</span>
                                                </div>
                                            </div>
                                            <div class="flex w-full space-x-2">
                                                <div class="w-1/2">
                                                    <MDBInput
                                                        :class="
                                                            erreur.NomSociteAssurance
                                                                ? 'border border-red-500 shadow-none'
                                                                : ''
                                                        "
                                                        id="NomSociteAssurance"
                                                        label="Nom de socité d'assurance"
                                                        type="text"
                                                        class="input w-full bg-white"
                                                        v-model="add.NomSociteAssurance"
                                                        required
                                                    ></MDBInput>
                                                    <br />
                                                    <span
                                                        v-if="erreur.NomSociteAssurance"
                                                        class="text-red-700"
                                                    >Ce champ est obligatoire.</span>
                                                </div>
                                                <br />
                                                <div class="w-1/2">
                                                    <MDBInput
                                                        :class="
                                                            erreur.numContractAssurance
                                                                ? 'border border-red-500 shadow-none'
                                                                : ''
                                                        "
                                                        id="numContractAssurance"
                                                        label="Numéro de contract d'assurance"
                                                        type="text"
                                                        class="input w-full bg-white"
                                                        v-model="add.numContractAssurance"
                                                        required
                                                    ></MDBInput>
                                                    <br />
                                                    <span
                                                        v-if="erreur.numContractAssurance"
                                                        class="text-red-700"
                                                    >Ce champ est obligatoire</span>
                                                </div>
                                                
                                            </div>
                                <button
                                                    @click="toggleTabs(2)"
                                                    class="group relative float-right btn bg-indigo-700 font-medium text-white w-1/3  justify-center focus:ring-2 focus:ring-offset-2 "
                                                >Continuer</button>
                  
                                        </form>
                                    </div>
                                    <div
                                        v-bind:class="{
                                            hidden: openTab !== 2,
                                            block: openTab === 2,
                                        }"
                                    >
                                        <form class="space-y-4" action="#" method="POST">
                                            <div class="mt-2">
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

                                            <label
                                                class="form-label"
                                                for="documents"
                                            >Télécharger les documents</label>
                                            <input
                                                class="form-control"
                                                type="file"
                                                id="documents"
                                                multiple
                                            />
                                            <div class="flex justify-end">
                                                <button
                                                    @click.prevent="enregistrer()"
                                                    class="group relative btn bg-indigo-700 font-medium text-white w-1/2 mr-2 justify-center focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
                                                >Enregistrer</button>

                                                <button
                                                    @click="AnnulerAjout()"
                                                    class="group relative btn btn-second w-1/2 font-medium text-indigo-700 justify-center focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >Annuler</button>
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
        <div
            class="absolute h-screen w-screen top-0 flex items-center justify-center"
            v-if="NotifSucc"
        >
            <div class="fixed h-full w-full bg-gray-600 opacity-25" @click="closeSuccess()"></div>
            <div class="flex bg-green-200 max-w-sm mb-4">
                <div class="w-16 bg-green-600">
                    <div class="p-4">
                        <svg
                            class="h-8 w-8 text-white fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            @click="closeSuccess()"
                        >
                            <path
                                d="M468.907 214.604c-11.423 0-20.682 9.26-20.682 20.682v20.831c-.031 54.338-21.221 105.412-59.666 143.812-38.417 38.372-89.467 59.5-143.761 59.5h-.12C132.506 459.365 41.3 368.056 41.364 255.883c.031-54.337 21.221-105.411 59.667-143.813 38.417-38.372 89.468-59.5 143.761-59.5h.12c28.672.016 56.49 5.942 82.68 17.611 10.436 4.65 22.659-.041 27.309-10.474 4.648-10.433-.04-22.659-10.474-27.309-31.516-14.043-64.989-21.173-99.492-21.192h-.144c-65.329 0-126.767 25.428-172.993 71.6C25.536 129.014.038 190.473 0 255.861c-.037 65.386 25.389 126.874 71.599 173.136 46.21 46.262 107.668 71.76 173.055 71.798h.144c65.329 0 126.767-25.427 172.993-71.6 46.262-46.209 71.76-107.668 71.798-173.066v-20.842c0-11.423-9.259-20.683-20.682-20.683z"
                            />
                            <path
                                d="M505.942 39.803c-8.077-8.076-21.172-8.076-29.249 0L244.794 271.701l-52.609-52.609c-8.076-8.077-21.172-8.077-29.248 0-8.077 8.077-8.077 21.172 0 29.249l67.234 67.234a20.616 20.616 0 0 0 14.625 6.058 20.618 20.618 0 0 0 14.625-6.058L505.942 69.052c8.077-8.077 8.077-21.172 0-29.249z"
                            />
                        </svg>
                    </div>
                </div>
                <div class="w-auto text-grey-700 items-center p-4">
                    <span class="text-lg font-bold pb-4">Notification</span>
                    <p class="leading-tight">Demande bien enregistrer.</p>
                </div>
            </div>
        </div>
        <div
            class="absolute h-screen w-screen top-0 flex items-center justify-center"
            v-if="NotifFaild"
        >
            <div class="fixed h-full w-full bg-gray-600 opacity-25" @click="closeFaild()"></div>
            <div class="flex bg-indigo-200 max-w-sm mb-4">
                <div class="w-16 bg-indigo-600">
                    <div class="p-4">
                        <svg
                            class="h-8 w-8 text-white fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            @click="closeFaild()"
                        >
                            <path
                                d="M437.019 74.981C388.667 26.629 324.38 0 256 0S123.333 26.63 74.981 74.981 0 187.62 0 256s26.629 132.667 74.981 181.019C123.332 485.371 187.62 512 256 512s132.667-26.629 181.019-74.981C485.371 388.667 512 324.38 512 256s-26.629-132.668-74.981-181.019zM256 470.636C137.65 470.636 41.364 374.35 41.364 256S137.65 41.364 256 41.364 470.636 137.65 470.636 256 374.35 470.636 256 470.636z"
                                fill="#FFF"
                            />
                            <path
                                d="M341.22 170.781c-8.077-8.077-21.172-8.077-29.249 0L170.78 311.971c-8.077 8.077-8.077 21.172 0 29.249 4.038 4.039 9.332 6.058 14.625 6.058s10.587-2.019 14.625-6.058l141.19-141.191c8.076-8.076 8.076-21.171 0-29.248z"
                                fill="#FFF"
                            />
                            <path
                                d="M341.22 311.971l-141.191-141.19c-8.076-8.077-21.172-8.077-29.248 0-8.077 8.076-8.077 21.171 0 29.248l141.19 141.191a20.616 20.616 0 0 0 14.625 6.058 20.618 20.618 0 0 0 14.625-6.058c8.075-8.077 8.075-21.172-.001-29.249z"
                                fill="#FFF"
                            />
                        </svg>
                    </div>
                </div>
                <div class="w-auto text-black opacity-75 items-center p-4">
                    <span class="text-lg font-bold pb-4">Notification</span>
                    <p class="leading-tight">
                        Erreur d'enregistrement.
                        <br />Verifier les champs.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { MDBBtn, MDBInput, MDBIcon } from "mdb-vue-ui-kit";

import axios from "axios";
import dayjs from "dayjs";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const NotifSucc = ref(false);
const NotifFaild = ref(false);
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
    SuperficieMagasin: "",
    typeMagasin: "",
    descMagasin: "",
    capacite: "",
    equipement: "",
    dateLimteProtectionCivil: ""
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
    dateLimteProtectionCivil: ""
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
    adresseEnt: false
});
const openTab = ref(1);
function toggleTabs(tabNumber: any) {
    openTab.value = tabNumber;
}
const blood = ref("O+");
const today = dayjs(new Date()).format("YYYY-MM-DD");
const dateMAx = new Date().getFullYear() - 15 + "-12-31";

async function enregistrer() {
    let err = false;
    if (user.value.nom == "") {
        erreur.value.nom = true;
        erreur.value.nom1 = true;
        err = true;
    } else {
        erreur.value.nom = false;
        erreur.value.nom1 = false;
    }

    if (!/^[a-z]+$/i.test(user.value.nom)) {
        erreur.value.nom = true;
        erreur.value.nom2 = true;
        err = true;
    } else {
        erreur.value.nom = false;
        erreur.value.nom2 = false;
    }

    if (user.value.prenom == "") {
        erreur.value.prenom = true;
        erreur.value.prenom1 = true;
        err = true;
    } else {
        erreur.value.prenom = false;
        erreur.value.prenom1 = false;
    }
    if (!/^[a-z]+$/i.test(user.value.prenom)) {
        erreur.value.prenom = true;
        erreur.value.prenom2 = true;
        err = true;
    } else {
        erreur.value.prenom = false;
        erreur.value.prenom2 = false;
    }

    if (user.value.CIN == "") {
        erreur.value.CIN = true;
        erreur.value.CIN1 = true;
        err = true;
    } else {
        erreur.value.CIN = false;
        erreur.value.CIN1 = false;
    }
    if (user.value.CIN.length != 8 || isNaN(parseInt(user.value.CIN))) {
        erreur.value.CIN = true;
        erreur.value.CIN2 = true;
        err = true;
    } else {
        erreur.value.CIN = false;
        erreur.value.CIN2 = false;
    }



    if (user.value.nomEntreprise = "") {
        erreur.value.nomEntreprise = true;
        erreur.value.nomEntreprise = true;
        err = true;
    } else {
        erreur.value.nomEntreprise = false;
        erreur.value.nomEntreprise = false;
    }
    if (user.value.capitalSocial = "") {
        erreur.value.capitalSocial = true;
        erreur.value.capitalSocial = true;
        err = true;
    } else {
        erreur.value.capitalSocial = false;
        erreur.value.capitalSocial = false;
    }
    if (user.value.actPrincipale = "") {
        erreur.value.actPrincipale = true;
        erreur.value.actPrincipale = true;
        err = true;
    } else {
        erreur.value.actPrincipale = false;
        erreur.value.actPrincipale = false;
    }
    if (user.value.actSecondaire = "") {
        erreur.value.actSecondaire = true;
        erreur.value.actSecondaire = true;
        err = true;
    } else {
        erreur.value.actSecondaire = false;
        erreur.value.actSecondaire = false;
    }
    if (user.value.matriculeFiscal = "") {
        erreur.value.matriculeFiscal = true;
        erreur.value.matriculeFiscal = true;
        err = true;
    } else {
        erreur.value.matriculeFiscal = false;
        erreur.value.matriculeFiscal = false;
    }
    if (user.value.NumRegistreCommerce = "") {
        erreur.value.NumRegistreCommerce = true;
        erreur.value.NumRegistreCommerce = true;
        err = true;
    } else {
        erreur.value.NumRegistreCommerce = false;
        erreur.value.NumRegistreCommerce = false;
    }
    if (user.value.NomSociteAssurance = "") {
        erreur.value.NomSociteAssurance = true;
        erreur.value.NomSociteAssurance = true;
        err = true;
    } else {
        erreur.value.NomSociteAssurance = false;
        erreur.value.NomSociteAssurance = false;
    }
    if (user.value.numContractAssurance = "") {
        erreur.value.numContractAssurance = true;
        erreur.value.numContractAssurance = true;
        err = true;
    } else {
        erreur.value.numContractAssurance = false;
        erreur.value.numContractAssurance = false;
    }

    if (user.value.dateDebAct == "") {
        erreur.value.dateDebAct = true;
        erreur.value.dateDebAct1 = true;
        err = true;
    } else {
        erreur.value.dateDebAct = false;
        erreur.value.dateDebAct1 = false;
    }
    if (user.value.datePub == "") {
        erreur.value.datePub = true;
        erreur.value.datePub1 = true;
        err = true;
    } else {
        erreur.value.datePub = false;
        erreur.value.datePub1 = false;
    }
    if (user.value.numeroTel == "") {
        erreur.value.numeroTel = true;
        erreur.value.numeroTel1 = true;
        err = true;
    } else {
        erreur.value.numeroTel = false;
        erreur.value.numeroTel1 = false;
    }
    if (user.value.numeroTel.length != 8 || isNaN(parseInt(user.value.numeroTel))) {
        erreur.value.numeroTel = true;
        erreur.value.numeroTel2 = true;
        err = true;
    } else {
        erreur.value.numeroTel = false;
        erreur.value.numeroTel2 = false;
    }
    if (user.value.adresseEnt = "") {
        erreur.value.adresseEnt = true;
        erreur.value.adresseEnt = true;
        err = true;
    } else {
        erreur.value.adresseEnt = false;
        erreur.value.adresseEnt = false;
    }

    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(user.value.email)) {
        erreur.value.email = true;
        erreur.value.email1 = true;
        err = true;
    } else {
        erreur.value.email = false;
        erreur.value.email1 = false;
    }


    if (err) NotifFaild.value = true;

    if (!err) {
        try {
            const res = await axios.post("/api/v1/demande/add", add.value);
        } catch (err) {
            console.log(err);
        }
        NotifSucc.value = true;
    }
}


function closeFaild() {
    NotifFaild.value = !NotifFaild;
}
function closeSuccess() {
    NotifSucc.value = !NotifSucc;
}
function AnnulerAjout() {
    router.push("/magasin");
}

</script>

<style scoped>
label {
    margin-left: 0.5rem;
}
</style>
