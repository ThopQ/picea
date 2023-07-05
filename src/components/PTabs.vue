<script setup lang="ts">
import { ref, computed } from "vue";
import PVTabsButton from "./PVTabsButton.vue";

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
  if (props.maxWidth != "full") {
    return "max-w-" + props.maxWidth;
  } else {
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
    class="flex items-center justify-start gap-1 rounded-lg bg-neutral-100 p-1"
    :class="[width]"
  >
    <PVTabsButton
      v-for="(tab, index) in props.items"
      :active="activeTabIndex === index"
      @click="changeTab(index)"
    >
      {{ tab.title }}
    </PVTabsButton>
  </div>
</template>
