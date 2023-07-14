<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(["update:model-value"]);

const switchOn = ref<boolean>(props.modelValue);
const switchButton = ref<HTMLInputElement | null>(null);

const switchClass = computed(() => {
  return `relative inline-flex h-6 py-0.5  focus:outline-none rounded-full w-10 ${
    switchOn.value ? "bg-blue-600" : "bg-neutral-200"
  }`;
});

const switchSpanClass = computed(() => {
  return `w-5 h-5 duration-200 ease-in-out bg-white rounded-full shadow-md ${
    switchOn.value ? "translate-x-[18px]" : "translate-x-0.5"
  }`;
});

const labelClass = computed(() => {
  return `text-sm select-none ${
    switchOn.value ? "text-blue-600" : "text-gray-400"
  }`;
});

const toggleSwitch = () => {
  switchOn.value = !switchOn.value;
  emits("update:model-value", switchOn.value);
};

const clickSwitchButton = () => {
  if (switchButton.value) {
    switchButton.value.click();
    switchButton.value.focus();
  }
};
</script>

<template>
  <div class="flex items-center justify-start gap-2">
    <input type="checkbox" name="switch" class="hidden" :checked="switchOn" />

    <button
      ref="switchButton"
      type="button"
      @click="toggleSwitch"
      :class="switchClass"
      class="relative inline-flex h-6 w-10 rounded-full py-0.5 focus:outline-none"
    >
      <span
        :class="switchSpanClass"
        class="h-5 w-5 rounded-full bg-white shadow-md duration-200 ease-in-out"
      ></span>
    </button>

    <label
      @click="clickSwitchButton"
      :class="labelClass"
      class="cursor-pointer select-none text-sm"
    >
      {{ props.label }}
    </label>
  </div>
</template>
