<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  type: {
    type: String as () => "text" | "number" | "email" | "password",
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String as () =>
      | "neutral"
      | "ghost"
      | "info"
      | "error"
      | "success"
      | "warning",
    default: "neutral",
  },
});

const emits = defineEmits(["update:model-value"]);

const updateValue = (e: Event) => {
  emits("update:model-value", (e.target as HTMLInputElement).value);
};

const styles = computed(() => {
  switch (props.color) {
    case "info":
      return "border-blue-300 bg-blue-50 text-blue-500 placeholder:text-blue-500 focus:border-blue-300 focus:ring-blue-400";
    case "error":
      return "border-red-300 bg-red-50 text-red-500 placeholder:text-red-500 focus:border-red-300 focus:ring-red-400";
    case "success":
      return "border-green-300 bg-green-50 text-green-500 placeholder:text-green-500 focus:border-green-300 focus:ring-green-400";
    case "warning":
      return "border-yellow-300 bg-yellow-50 text-yellow-500 placeholder:text-yellow-500 focus:border-yellow-300 focus:ring-yellow-400";
    case "neutral":
      return "border-neutral-300 bg-white text-neutral-500 placeholder:text-neutral-500 focus:border-neutral-300 focus:ring-neutral-400";
  }
});
</script>

<template>
  <input
    :type="props.type"
    class="p-input ring-offset-background flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    :class="[styles]"
    :placeholder="props.placeholder"
    :value="props.modelValue"
    @input="updateValue"
    :disabled="props.disabled"
  />
</template>
