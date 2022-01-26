<template>
  <div class="flex flex-col ml-16 mt-20">
    <div class="flex space-x-4" v-for="step in steps" :key="step.nom">
      <div class="flex justify-center flex-wrap w-12">
        <div
          class="flex justify-center items-center rounded-full h-12 w-12"
          :class="[
            step.statut === 'en cours'
              ? 'border-2 border-indigo-700 bg-white'
              : '',
            step.statut === 'en attente'
              ? 'border-2 border-gray-300 bg-white'
              : '',
            step.statut === 'terminé' ? 'bg-indigo-700' : '',
            step.statut === 'refusé' ? 'bg-red-600' : '',
          ]"
        >
          <div
            v-if="step.statut === 'terminé'"
            class="h-2 w-2 bg-indigo-100 rounded-full"
          ></div>
          <div
            v-if="step.statut === 'en cours'"
            class="h-2 w-2 bg-indigo-700 rounded-full"
          ></div>
          <div
            v-if="step.statut === 'refusé'"
            class="h-2 w-2 bg-red-100 rounded-full"
          ></div>
        </div>
        <div
          v-if="steps[steps.length - 1].nom !== step.nom"
          class="h-12 w-0.5 bg-gray-300"
        ></div>
      </div>
      <div class="flex items-center h-12">{{ step.nom }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
type statut = "en cours" | "en attente" | "terminé" | "refusé";

const { steps } = defineProps<{ steps: { nom: string; statut: statut }[] }>();
</script>
