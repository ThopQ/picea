<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  maxWidth: {
    type: String as () => "full" | "xs" | "sm" | "md" | "lg" | "xl",
    default: "full",
  },
  border: {
    type: Boolean,
    default: true,
  },
  horizontal: {
    type: Boolean,
    default: false,
  },
  backgroundColor: {
    type: String as () => "base",
    default: "base",
  },
});

const width = computed(() => {
  if (props.maxWidth != "full") {
    return "max-w-" + props.maxWidth;
  } else {
    return "w-full";
  }
});

const border = computed(() => {
  if (props.border) {
    return "border border-neutral-200/60 shadow-sm";
  }
});

const styles = computed(() => {
  return `${width.value} ${border.value}`;
});
</script>

<template>
  <div
    :class="[styles, { 'md:flex-row': props.horizontal }]"
    class="flex flex-col overflow-hidden rounded-lg"
  >
    <div
      v-if="$slots['media']"
      class="flex flex-none flex-col items-center justify-center md:justify-start"
      :class="{
        'sm:px-7 sm:pt-7':
          $slots['title'] || $slots['body'] || $slots['actions'],
      }"
    >
      <slot name="media" />
    </div>

    <div
      v-if="$slots['title'] || $slots['body'] || $slots['actions']"
      class="p-7"
    >
      <div
        v-if="$slots['title']"
        class="mb-2 text-lg font-bold leading-none tracking-tight"
      >
        <slot name="title" />
      </div>

      <div
        v-if="$slots['body']"
        class="text-neutral-500"
        :class="{ 'mb-5': $slots['actions'] }"
      >
        <slot name="body" />
      </div>

      <div v-if="$slots['actions']" class="flex gap-2">
        <slot name="actions" />
      </div>
    </div>

    <slot />
  </div>
</template>
