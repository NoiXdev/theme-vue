<script setup lang="ts">
defineProps<{
    title?: string;
}>()
</script>

<template>
    <div class="mx-auto w-full sm:px-6 lg:px-8 mb-12">
        <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 dark:text-white h-full">
            <div
                v-if="title"
                class="border-b border-white px-2 py-1 text-xl font-bold"
            >
                {{ title }}
            </div>
            <div class="p-2 h-full">
                <slot/>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
