<template>
  <form class="bg-white p-8 rounded w-96">
    <div class="form-group mb-3">
      <div>
        <label for="">Documents validé</label>
        <select
          class="input flex-shrink-0 flex-1 h-9 form-select"
          v-model="valide"
        >
          <option value="Oui" selected>Oui</option>
          <option value="Non">Non</option>
        </select>
      </div>
    </div>
    <div v-if="valide == 'Non'">
      <div class="form-group mb-3">
        <MDBInput
          label="Pourquoi ?"
          id="avis"
          class="form-control bg-white"
          type="string"
          required
          v-model="avis"
        ></MDBInput>
      </div>
    </div>
    <div v-if="valide == 'Oui'">
      <div class="form-group mb-3">
        <label for="">BFC</label>
        <select
          class="input flex-shrink-0 flex-1 h-9 form-select"
          v-model="NomBFC"
        >
          <option value="Tunis" selected>Tunis</option>
          <option value="Sousse">Sousse</option>
          <option value="Sfax">Sfax</option>
        </select>
      </div>
    </div>
    <div class="d-grid gap-2">
      <MDBBtn
        style="color: white; font-size: 12px"
        class="bg-indigo-700"
        block
        @click.prevent="confirmer"
        v-if="valide.length > 0"
        ><span>{{ valide == "Oui" ? "Confirmer" : "Supprimer" }}</span>
      </MDBBtn>
    </div>
  </form>
</template>

<script setup lang="ts">
import { MDBBtn, MDBInput } from "mdb-vue-ui-kit";

import { ref } from "vue";
import { useModal } from "../../../composables/useModal";
const { closeModal } = useModal();
const valide = ref("");
const NomBFC = ref("Tunis");
const avis = ref("");
const confirmer = () => {
  emits("confirmer", {
    index,
    etat: valide.value == "Oui" ? "Accepté" : "Refusé",
  });
  closeModal();
};

const emits = defineEmits(["confirmer"]);
const { index } = defineProps<{ index: number }>();
</script>

<style scoped></style>
