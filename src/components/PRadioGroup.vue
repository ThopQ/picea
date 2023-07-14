<script setup lang="ts">
type RadioGroupOption = {
  title: string;
  description?: string;
  value: Number | string;
};

const props = defineProps({
  modelValue: {
    type: [String, Number],
  },
  name: {
    type: String,
    default: "p-radio-group",
  },
  title: {
    type: String,
    default: "",
  },
  options: {
    type: Array as () => RadioGroupOption[],
    default: () => [] as RadioGroupOption[],
  },
  horizontal: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["update:model-value", "change"]);

function selectOption(option: RadioGroupOption) {
  emits("update:model-value", option.value);
  emits("change", option);
}
</script>

<template>
  <fieldset
    class="p-radio-group flex gap-3"
    :class="[props.horizontal ? 'flex-row' : 'flex-col']"
  >
    <legend
      v-if="props.title"
      class="mb-2 text-lg font-bold leading-none tracking-tight"
    >
      {{ props.title }}
    </legend>

    <label
      v-for="(option, index) in props.options"
      class="flex flex-1 items-start space-x-3 rounded-md border border-neutral-200/70 bg-white p-5 shadow-sm hover:bg-gray-50"
      @click="selectOption(option)"
    >
      <input
        type="radio"
        :name="props.name"
        :id="`p-radio-group[${index}]`"
        :value="option.value"
        :checked="modelValue === option.value"
        class="translate-y-px text-gray-900 focus:ring-gray-700"
      />
      <span class="relative flex flex-col space-y-1.5 text-left leading-none">
        <span class="font-semibold">{{ option.title }}</span>
        <span v-if="option.description" class="text-sm opacity-50">
          {{ option.description }}
        </span>
      </span>
    </label>
  </fieldset>
</template>
