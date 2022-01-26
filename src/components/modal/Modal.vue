<template>
  <div
    class="fixed top-0 left-0 h-full w-full flex justify-center items-center bg-gray-800 bg-opacity-25"
    v-if="isOpen"
  >
    <div class="flex bg-white rounded h-96 w-96 p-2 z-50">
      <slot
        ><div class="p-4">{{ title }} {{ description }}</div>
      </slot>
      <div class="w-full flex items-center justify-end self-end space-x-2">
        <button
          class="w-24 py-2 rounded bg-red-500 text-white"
          @click="secondButton.onClick"
        >
          {{ secondButton.text }}
        </button>

        <button
          class="w-24 py-2 rounded bg-green-500 text-white"
          @click="firstButton.onClick"
        >
          {{ firstButton.text }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useModal } from "../../composables/useModal";

type ModalProps = {
  title?: string;
  description?: string;
  isOpen: boolean;
  firstButton: { text: string; onClick: () => void };
  secondButton: { text: string; onClick: () => void };
};

const { closeModal } = useModal();

const { title, description, firstButton, secondButton, isOpen } =
  defineProps<ModalProps>();
</script>
