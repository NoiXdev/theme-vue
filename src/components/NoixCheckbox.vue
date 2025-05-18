<script setup lang="ts">
import {computed, useId} from 'vue';

const model = defineModel();
const id = useId();
</script>

<template>
    <div>
        <input
            :id="id"
            type="checkbox"
            v-model="model"
            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800"
        />
        <label
            class="ms-2 text-sm text-gray-600 dark:text-gray-400"
            :for="id"
        >
            <slot />
        </label>
    </div>

</template>
