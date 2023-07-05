<script setup lang="ts">
import { computed } from "vue";
import PVLoader from "./PVLoader.vue";

const props = defineProps({
  type: {
    type: String as () => "button" | "submit" | "reset",
    default: "button",
  },
  secondary: {
    type: Boolean,
    default: false,
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
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

const emits = defineEmits(["click"]);

const styles = computed(() => {
  if (props.outlined) {
    switch (props.color) {
      case "info":
        return "text-blue-600 transition-colors duration-100 bg-white border-2 border-blue-600 rounded-md hover:text-white hover:bg-blue-600";
      case "error":
        return "text-red-600 transition-colors duration-100 bg-white border-2 border-red-600 rounded-md hover:text-white hover:bg-red-600";
      case "success":
        return "text-green-600 transition-colors duration-100 bg-white border-2 border-green-600 rounded-md hover:text-white hover:bg-green-600";
      case "warning":
        return "text-yellow-600 transition-colors duration-100 bg-white border-2 border-yellow-500 rounded-md hover:text-white hover:bg-yellow-500";
      case "neutral":
        return "transition-colors duration-100 bg-white border-2 rounded-md text-neutral-900 hover:text-white border-neutral-900 hover:bg-neutral-900";
      default:
        return "transition-colors duration-100 bg-white border-2 rounded-md text-neutral-900 hover:text-white border-neutral-900 hover:bg-neutral-900";
    }
  } else if (props.secondary) {
    switch (props.color) {
      case "info":
        return "text-blue-500 transition-colors duration-100 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-blue-100 bg-blue-50 hover:text-blue-600 hover:bg-blue-100";
      case "error":
        return "text-red-500 transition-colors duration-100 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-red-100 bg-red-50 hover:text-red-600 hover:bg-red-100";
      case "success":
        return "text-green-500 transition-colors duration-100 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-green-100 bg-green-50 hover:text-green-600 hover:bg-green-100";
      case "warning":
        return "text-yellow-600 transition-colors duration-100 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-yellow-100 bg-yellow-50 hover:text-yellow-700 hover:bg-yellow-100";
      case "neutral":
        return "transition-colors duration-100 rounded-md text-neutral-500 bg-neutral-50 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-100 hover:text-neutral-600 hover:bg-neutral-100";
      default:
        return "transition-colors duration-100 rounded-md text-neutral-500 bg-neutral-50 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-100 hover:text-neutral-600 hover:bg-neutral-100";
    }
  } else {
    switch (props.color) {
      case "ghost":
        return "transition-colors duration-200 bg-white border rounded-md text-neutral-500 hover:text-neutral-700 border-neutral-200/70 hover:bg-neutral-100 active:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-200/60 focus:shadow-outline";
      case "info":
        return "text-white transition-colors duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:shadow-outline focus:outline-none";
      case "error":
        return "text-white transition-colors duration-200 bg-red-600 rounded-md hover:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-red-700 focus:shadow-outline focus:outline-none";
      case "success":
        return "text-white transition-colors duration-200 bg-green-600 rounded-md hover:bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:shadow-outline focus:outline-none";
      case "warning":
        return "text-white transition-colors duration-200 bg-yellow-500 rounded-md hover:bg-yellow-600 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600 focus:shadow-outline focus:outline-none";
      case "neutral":
        return "text-white transition-colors duration-200 rounded-md bg-neutral-950 hover:bg-neutral-900 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 focus:shadow-outline focus:outline-none";
    }
  }
});
</script>

<template>
  <button
    :type="props.type"
    class="pv-button inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium tracking-wide"
    :class="[
      styles,
      { 'cursor-not-allowed': props.disabled, 'w-full': props.block },
    ]"
    :disabled="props.disabled"
    @click="emits('click')"
  >
    <PVLoader v-if="props.loading" :color="props.color" />

    <slot />
  </button>
</template>
