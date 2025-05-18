<script setup lang="ts">
import {computed, onMounted, ref, useId, watch} from "vue";
import {cm} from "@/utils";
import {Icon} from "@iconify/vue";

defineProps<{
  label: string;
  errors?: string;
  copyable?: boolean;
}>()

const model = defineModel({ required: true });
const input = ref<HTMLInputElement | null>(null);
const id = useId()
const isFocused = ref(false);

const isVisible = computed(() => {
    console.log(input.value?.type === 'text')
    return input.value?.type === 'text';
})

const toggleHidePassword = () => {
    if(input.value) {
        if(input.value?.type === "password") {
            input.value.type = "text";
        } else {
            input.value.type = "password";
        }
    }
}

onMounted(() => {
    const el = input.value;
    if(el) {
        if (el?.hasAttribute('autofocus')) el.focus();
        el.addEventListener('focus', () => (isFocused.value = true));
        el.addEventListener('blur', () => (isFocused.value = false));
    }
});
defineExpose({ focus: () => input.value?.focus() });
defineOptions({
    inheritAttrs: false
})

watch(isFocused, () => {
    console.log(isFocused);
})
</script>

<template>
  <div class="my-2">
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300" :for="id">
          <span>{{ label }}</span>
      </label>
      <div :class="cm([
          'bg-white dark:bg-gray-900 flex rounded-md overflow-hidden border border-gray-300 dark:border-gray-700',
         isFocused ? ' border-indigo-500 dark:border-indigo-600' : ''
      ])">
          <input
              class="block w-full border-0 bg-transparent  shadow-sm focus:ring-indigo-500   dark:text-gray-300  dark:focus:ring-indigo-600 disabled:dark:bg-gray-600"
              v-model="model"
              ref="input"
              :id="id"
              v-bind="$attrs"
              type="password"
          />
          <button type="button"
                  @click="toggleHidePassword"
                  :class="cm([
                      'flex shrink-0 items-center gap-x-1.5 border  dark:text-white px-3 border-gray-300 text-sm font-semibold dark:border-gray-700 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 hover:bg-gray-50 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600',
                      $attrs.disabled ? 'bg-gray-600' : '',
                      copyable ? '' : ''
                  ])">

            <Icon icon="fa6-solid:eye-slash" v-if="isVisible" class="-ml-0.5 size-4 text-gray-400" aria-hidden="true" />
            <Icon icon="fa6-solid:eye" v-else class="-ml-0.5 size-4 text-gray-400" aria-hidden="true" />
          </button>
          <button type="button"
                  :class="cm([
                      'flex shrink-0 items-center gap-x-1.5 border dark:text-white px-3 border-gray-300 text-sm font-semibold dark:border-gray-700 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 hover:bg-gray-50 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600',
                      $attrs.disabled ? 'bg-gray-600' : ''
                  ])">
            <Icon icon="fa6-solid:copy" class="-ml-0.5 size-4 text-gray-400" aria-hidden="true" />
          </button>
      </div>

      <div v-show="errors">
          <p class="mt-2 text-sm text-red-600 dark:text-red-400">
              {{ errors }}
          </p>
      </div>
  </div>
</template>

<style scoped>

</style>
