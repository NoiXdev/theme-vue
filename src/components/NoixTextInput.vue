<script setup lang="ts">
import {onMounted, ref, useId} from "vue";

defineProps<{
  label: string;
  errors?: string;
}>()

const model = defineModel({ required: true });
const input = ref<HTMLInputElement | null>(null);
const id = useId()
onMounted(() => {
    if (input.value?.hasAttribute('autofocus')) {
        input.value?.focus();
    }
});
defineExpose({ focus: () => input.value?.focus() });
defineOptions({
    inheritAttrs: false
})
</script>

<template>
  <div class="my-2">
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300" :for="id">
          <span>{{ label }} <span v-if="$attrs.required" class="text-red-700">*</span></span>
      </label>
      <input
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 disabled:dark:bg-gray-600"
          v-model="model"
          ref="input"
          :id="id"
          v-bind="$attrs"
      />
      <div v-show="errors">
          <p class="mt-2 text-sm text-red-600 dark:text-red-400">
              {{ errors }}
          </p>
      </div>
  </div>
</template>

<style scoped>

</style>
