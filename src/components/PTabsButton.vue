<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["click"]);

const hover = ref(false);
</script>

<template>
  <button
    type="button"
    class="h-8 w-full cursor-pointer justify-center whitespace-nowrap rounded-md px-3 text-sm font-medium transition-all focus:bg-white focus:shadow focus:outline-black"
    :class="{ 'bg-white shadow': props.active, 'bg-neutral-200': hover }"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    @click="emits('click')"
  >
    <slot />
  </button>
</template>
