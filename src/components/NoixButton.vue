<script setup lang="ts">
import {cm} from "@/utils";
import {Icon} from "@iconify/vue";

const props = withDefaults(defineProps<{
    loading?: boolean;
    disabled?: boolean;
    variant?:
        | 'default'
        | 'danger'
        | 'secondary'
}>(), {
    loading: false,
    variant: 'default',
})

const variants = {
    default: 'border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-white dark:focus:bg-white dark:focus:ring-offset-gray-800 dark:active:bg-gray-300 dark:disabled:bg-gray-500',
    danger: 'border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700 dark:focus:ring-offset-gray-800',
    secondary: 'border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800'
};

const spinnerVariant = {
  default: 'text-white dark:text-gray-800',
  danger: 'text-white dark:text-gray-800',
  secondary: 'text-white dark:text-gray-800'
}

</script>

<template>
    <button
        :class="cm(
				'inline-flex items-center rounded-md justify-center',
				variants[variant],
			)"
        :disabled="disabled || loading"
        v-bind="$attrs"
    >
        <template v-if="loading">
          <Icon icon="fa6-solid:spinner" :class="cm('animate-spin h-3 w-3 me-1', spinnerVariant[variant])" />
        </template>
        <slot />
    </button>
</template>

<style scoped>

</style>
