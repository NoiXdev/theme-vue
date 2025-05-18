<script setup lang="ts">
import {cm} from "@/utils";


const model = defineModel();

const props = defineProps<{
    title: string;
    helpText?: string;
}>();

</script>

<template>
    <div class="flex items-center justify-between mb-2">
        <span class="flex grow flex-col">
            <span
                class="text-sm/6 font-medium text-gray-900 dark:text-white" id="availability-label"
            >
                {{title}}
            </span>

            <span
                v-if="props.helpText"
                class="text-sm text-gray-500  dark:text-gray-400" id="availability-description"
            >
                {{props.helpText}}
            </span>
        </span>
        <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
        <button type="button"
                @click="() => model = !model"
                :class="cm([
                    model ? 'bg-indigo-600' : 'bg-gray-200',
                    'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent  transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:outline-hidden'
                    ])"
                role="switch" aria-checked="false" aria-labelledby="availability-label" aria-describedby="availability-description">
            <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
            <span aria-hidden="true" :class="cm([
                model ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out'
            ])"></span>
        </button>
    </div>

</template>
