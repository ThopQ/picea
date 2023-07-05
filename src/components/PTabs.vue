<script setup lang="ts">
import { ref, computed } from "vue";
import PTabsButton from "./PTabsButton.vue";

type TabItem = {
  title: string;
};

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  maxWidth: {
    type: String as () => "full" | "xs" | "sm" | "md" | "lg" | "xl",
    default: "full",
  },
  items: {
    type: Array as () => TabItem[],
    default: () => [] as TabItem[],
  },
});

const emits = defineEmits(["update:model-value"]);

const width = computed(() => {
  switch (props.maxWidth) {
    case "xs":
      return "max-w-xs";
    case "sm":
      return "max-w-sm";
    case "md":
      return "max-w-md";
    case "lg":
      return "max-w-lg";
    case "xl":
      return "max-w-xl";
    case "full":
      return "w-full";
  }
});

const activeTabIndex = ref(props.modelValue);

function changeTab(index: number) {
  activeTabIndex.value = index;
  emits("update:model-value", activeTabIndex.value);
}
</script>

<template>
  <div
    class="p-tabs flex items-center justify-start gap-1 rounded-lg bg-neutral-100 p-1"
    :class="[width]"
  >
    <PTabsButton
      v-for="(tab, index) in props.items"
      :active="activeTabIndex === index"
      @click="changeTab(index)"
    >
      {{ tab.title }}
    </PTabsButton>
  </div>
</template>
