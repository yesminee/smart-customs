import { Ref, ref, readonly } from "vue";

type UseModalResult = {
  isOpen: Ref<boolean>;
  openModal: () => void;
  closeModal: () => void;
};

const isOpen = ref(false);

export const useModal = (): UseModalResult => {
  const openModal = () => {
    isOpen.value = true;
  };
  const closeModal = () => {
    isOpen.value = false;
  };

  return {
    isOpen: readonly(isOpen),
    openModal,
    closeModal,
  };
};
